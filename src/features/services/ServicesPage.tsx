"use client"

import { FC, useState } from "react"

import { useAuth } from "@clerk/nextjs"
import { Avatar, Button, IconButton } from "@mui/material"
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { Eye, Pencil, Plus, Trash } from "lucide-react"
import { useRouter } from "next/navigation"

import { setAuthToken } from "@/api/apiClient"
import { deleteService, getServices } from "@/api/services/services.client"
import DataTable from "@/components/DataTable"
import SearchBar from "@/components/fields/SearchBar"
import ModalDelete from "@/components/modals/ModalDelete"
import StatusBadge from "@/components/StatusBadge"
import { useDataTable } from "@/hooks/useDataTable"
import type { ListPageProps } from "@/types/services"
import { formatDate } from "@/utils/date"

const ServicesPage: FC<ListPageProps> = ({ initialData }) => {
  const { getToken } = useAuth()
  const queryClient = useQueryClient()
  const router = useRouter()

  const [modalDeleteOpen, setModalDeleteOpen] = useState(false)
  const [selectedService, setSelectedService] = useState<any>()
  const [searchBarValue, setSearchBarValue] = useState("")

  const [servicesParams, setservicesParams] = useState({
    page: 1,
    size: 10,
    search: "",
    sort: "createdAt",
    order: "desc"
  })
  const {
    handleChangeSearchBar,
    handleClearSearchBar,
    handleSearch,
    handlePageChange,
    handleRowsPerPageChange,
    handleSortTable
  } = useDataTable(setservicesParams, setSearchBarValue, searchBarValue)

  const {
    data: { data: services, total }
  } = useQuery({
    queryKey: ["services", servicesParams],
    queryFn: async () => {
      const token = await getToken()
      setAuthToken(token)
      return getServices({ ...servicesParams })
    },
    initialData: initialData,
    refetchOnMount: false
  })

  const { mutate, isPending: isDeleting } = useMutation({
    mutationFn: async (data: any) => {
      const token = await getToken()
      setAuthToken(token)
      return deleteService(data)
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["services"] })
      queryClient.invalidateQueries({ queryKey: ["services-stats"] })
      setModalDeleteOpen(false)
      setSelectedService(null)
    },
    onError: (error: any) => {
      console.error(error)
    }
  })

  const handleEdit = (id: string) => {
    router.push(`/dashboard/services/${id}/edit`)
  }

  const handleDelete = (service: any) => {
    setSelectedService(service)
    setModalDeleteOpen(true)
  }

  const handlePreview = (id: string) => {
    router.push(`/dashboard/services/${id}/preview`)
  }

  const columns = [
    {
      key: "title",
      header: "Service",
      ordering: true,
      renderCell: (service: any) => {
        return (
          <div className="flex items-center gap-2">
            <div>
              <Avatar sx={{ width: "3rem", height: "3rem" }} alt={service.title || ""} src={service.heroImageUrl} />
            </div>
            <div>
              <p>{service.title}</p>
              <small>{service.subtitle}</small>
            </div>
          </div>
        )
      }
    },
    { key: "serviceTypeId", header: "Service Type", renderCell: (service: any) => service.serviceType.name },
    {
      key: "serviceStatusId",
      header: "Status",
      renderCell: (service: any) => <StatusBadge status={service.serviceStatus.name} />
    },
    {
      key: "updatedAt",
      header: "Last Update",
      ordering: true,
      renderCell: (service: any) => formatDate(service.updatedAt)
    },
    {
      key: "actions",
      header: "Actions",
      renderCell: (service: any, rowIndex: number) => {
        return (
          <div className="flex gap-2">
            <IconButton data-row-index={rowIndex} onClick={() => handlePreview(service.id)}>
              <Eye />
            </IconButton>
            <IconButton data-row-index={rowIndex} onClick={() => handleEdit(service.id)}>
              <Pencil />
            </IconButton>
            <IconButton data-row-index={rowIndex} onClick={() => handleDelete(service)}>
              <Trash />
            </IconButton>
          </div>
        )
      }
    }
  ]

  return (
    <>
      <div className="flex-1 overflow-y-auto p-6 lg:p-10">
        <div className="max-w-7xl mx-auto flex flex-col gap-8">
          <div>
            <h1 className="font-serif text-2xl text-brown-dark font-medium">My Services</h1>
            <p className="text-warm-grey mt-2 font-sans text-sm">
              Manage your exclusive service listings and their status.
            </p>
          </div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div className="flex">
              <SearchBar
                value={searchBarValue}
                onChange={handleChangeSearchBar}
                onClear={handleClearSearchBar}
                onKeyDown={(e) => e.key === "Enter" && handleSearch()}
              />
              <Button size="small" variant="outlined" color="deepBrown" onClick={handleSearch}>
                Search
              </Button>
            </div>
            <Button
              variant="contained"
              size="small"
              color="deepBrown"
              startIcon={<Plus />}
              onClick={() => router.push("/dashboard/services/create")}>
              Add New Service
            </Button>
          </div>
          <div className="shadow-sm">
            <DataTable
              isPaginated
              data={services}
              columns={columns}
              total={total}
              page={servicesParams.page - 1}
              rowsPerPage={servicesParams.size}
              onPageChange={handlePageChange}
              onRowsPerPageChange={handleRowsPerPageChange}
              sortHeaderHandler={handleSortTable}
            />
          </div>
        </div>
      </div>
      <ModalDelete
        open={modalDeleteOpen}
        loading={isDeleting}
        element={
          selectedService && (
            <div className="flex items-center gap-2 justify-center my-3">
              <div>
                <Avatar
                  sx={{ width: "3rem", height: "3rem" }}
                  alt={selectedService.title || ""}
                  src={selectedService.heroImageUrl}
                />
              </div>
              <div>
                <p>{selectedService.title}</p>
                <small>{selectedService.shortDescription}</small>
              </div>
            </div>
          )
        }
        onCancel={() => setModalDeleteOpen(false)}
        onConfirm={() => mutate(selectedService.id)}
      />
    </>
  )
}

export default ServicesPage
