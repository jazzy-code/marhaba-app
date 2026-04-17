"use client"

import { useState, type FC } from "react"

import { useAuth } from "@clerk/nextjs"
import { Alert, Avatar, Button, Chip, IconButton } from "@mui/material"
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { MessageCircleMore } from "lucide-react"

import { setAuthToken } from "@/api/apiClient"
import { archiveInquiry, getInquiriesArchived } from "@/api/inquiries/inquiries.client"
import DataTable from "@/components/DataTable"
import SearchBar from "@/components/fields/SearchBar"
import LightTooltip from "@/components/LightTooltip"
import ModalDelete from "@/components/modals/ModalDelete"
import ModalInquiryPreview from "@/components/modals/ModalInquiryPreview"
import { useDataTable } from "@/hooks/useDataTable"
import type { ListPageProps } from "@/types/services"
import { formatDateTime } from "@/utils/date"

const InquiriesArchivedPage: FC<ListPageProps> = ({ initialData }) => {
  const { getToken } = useAuth()
  const queryClient = useQueryClient()

  const [modalDeleteOpen, setModalDeleteOpen] = useState(false)
  const [openModalInquiryPreview, setOpenModalInquiryPreview] = useState(false)
  const [selectedInquiry, setSelectedInquiry] = useState<any>()
  const [searchBarValue, setSearchBarValue] = useState("")

  const [inquiriesParams, setinquiriesParams] = useState({
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
  } = useDataTable(setinquiriesParams, setSearchBarValue, searchBarValue)

  const {
    data: { data: inquiries, total }
  } = useQuery({
    queryKey: ["inquiries-archived", inquiriesParams],
    queryFn: async () => {
      const token = await getToken()
      setAuthToken(token)
      return getInquiriesArchived({ ...inquiriesParams })
    },
    initialData: initialData,
    refetchOnMount: false
  })

  const { mutate, isPending: isArchiving } = useMutation({
    mutationFn: async (data: any) => {
      const token = await getToken()
      setAuthToken(token)
      return archiveInquiry(data)
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["inquiries-archived"] })
      queryClient.invalidateQueries({ queryKey: ["inquiries-stats"] })
      setModalDeleteOpen(false)
      setSelectedInquiry(null)
    },
    onError: (error: any) => {
      console.error(error)
    }
  })

  const handlePreview = (inquiry: any) => {
    setSelectedInquiry(inquiry)
    setOpenModalInquiryPreview(true)
  }

  const columns = [
    {
      key: "fullName",
      header: "Client",
      ordering: true,
      renderCell: (inquiry: any) => {
        return (
          <div className="flex items-center gap-2">
            <div>
              <Avatar sx={{ width: "3rem", height: "3rem" }}>{inquiry.fullName.split(" ")[0][0]}</Avatar>
            </div>
            <div>
              <p>{inquiry.fullName}</p>
              <small>{inquiry.email}</small>
            </div>
          </div>
        )
      }
    },
    {
      key: "serviceId",
      header: "Service / Message",
      renderCell: (service: any) => {
        return (
          <div className="flex flex-col">
            <p className="font-semibold font-serif">{service.service.title}</p>
            <small>{service.message}</small>
          </div>
        )
      }
    },
    {
      key: "createdAt",
      header: "Date",
      ordering: true,
      renderCell: (inquiry: any) => formatDateTime(inquiry.updatedAt)
    },
    {
      key: "status",
      header: "Status",
      ordering: true,
      renderCell: (inquiry: any) => (
        <Chip label={inquiry.status} color={inquiry.status === "NEW" ? "warning" : "success"} />
      )
    },
    {
      key: "actions",
      header: "Actions",
      renderCell: (inquiry: any, rowIndex: number) => {
        return (
          <div className="flex gap-2">
            <LightTooltip title="Contact Client">
              <IconButton data-row-index={rowIndex} onClick={() => handlePreview(inquiry)}>
                <MessageCircleMore />
              </IconButton>
            </LightTooltip>
            {/* <LightTooltip title="Archive Inquiry">
              <IconButton data-row-index={rowIndex} onClick={() => handleArchive(inquiry)}>
                <Archive />
              </IconButton>
            </LightTooltip> */}
          </div>
        )
      }
    }
  ]

  return (
    <>
      <div className="flex-1 overflow-y-auto p-6 lg:p-10">
        <div className="max-w-7xl mx-auto flex flex-col gap-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <h1 className="font-serif text-2xl text-brown-dark font-medium">My Inquiries</h1>
              <p className="text-warm-grey mt-2 font-sans text-sm">Review and manage inquiries for your inquiries.</p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div className="flex">
              <div className="w-[20rem] me-4">
                <SearchBar
                  placeholder="Search by Service or Client"
                  value={searchBarValue}
                  onChange={handleChangeSearchBar}
                  onClear={handleClearSearchBar}
                  onKeyDown={(e) => e.key === "Enter" && handleSearch()}
                />
              </div>
              <Button size="small" variant="outlined" color="deepBrown" onClick={handleSearch}>
                Search
              </Button>
            </div>
          </div>
          <div className="shadow-sm border border-subtle-border dark:border-stone-800 flex flex-col">
            <DataTable
              isPaginated
              columns={columns}
              data={inquiries}
              page={inquiriesParams.page - 1}
              rowsPerPage={inquiriesParams.size}
              total={total}
              onPageChange={handlePageChange}
              onRowsPerPageChange={handleRowsPerPageChange}
              sortHeaderHandler={handleSortTable}
            />
          </div>
        </div>
      </div>
      <ModalInquiryPreview
        open={openModalInquiryPreview}
        inquiry={selectedInquiry}
        onClose={() => setOpenModalInquiryPreview(false)}
      />
      <ModalDelete
        action="Archive"
        message={
          <Alert severity="info">
            This inquire will be moved to "Archive" menu and you'll still be able to view it.
          </Alert>
        }
        open={modalDeleteOpen}
        loading={isArchiving}
        element={
          selectedInquiry && (
            <div className="flex items-center gap-2 justify-center my-3">
              <div className="flex items-center gap-2">
                <div>
                  <Avatar sx={{ width: "3rem", height: "3rem" }}>{selectedInquiry.fullName.split(" ")[0][0]}</Avatar>
                </div>
                <div>
                  <p>{selectedInquiry.fullName}</p>
                  <small>{selectedInquiry.service.title}</small>
                </div>
              </div>
            </div>
          )
        }
        onCancel={() => setModalDeleteOpen(false)}
        onConfirm={() => mutate(selectedInquiry.id)}
      />
    </>
  )
}

export default InquiriesArchivedPage
