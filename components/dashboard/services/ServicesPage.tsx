"use client"

import DataTable from "@/components/DataTable";
import { SERVICE_STATUS_APPROVED_ID, SERVICE_STATUS_PENDING_ID } from "@/constants/index";
import { formatDate } from "@/utils/date";
import { Avatar, Chip, IconButton } from "@mui/material";
import dayjs from "dayjs";
import { Eye, Pencil, Trash } from "lucide-react";
import { useRouter } from "next/navigation";
import { FC, useState } from "react";

interface ServicesPageProps {
  initialData: any[];
}

const ServicesPage: FC<ServicesPageProps> = ({ initialData = [] }) => {
  const router = useRouter();
  const [services, setServices] = useState<any[]>(initialData);
  console.log(services)

  const handleEdit = (id: string) => {
    router.push(`/dashboard/services/${id}/edit`)
  }

  const handleDelete = (id: string) => {
    const newServices = services.filter(s => s.id !== id);
    setServices(newServices);
  }

  const handlePreview = (id: string) => {
    router.push(`/services/${id}/preview`)
  }

  const columns = [
    {
      key: 'name',
      header: 'Service',
      renderCell: ({ service }: any) => {
        return (
          <div className="flex items-center gap-2">
            <div>
              <Avatar sx={{ width: '3rem', height: '3rem' }} alt={service.title || ''} src={service.heroImage} />
            </div>
            <div>
              <p>{service.title}</p>
              <small>{service.shortDescription}</small>
            </div>
          </div>
        )
      }
    },
    { key: 'category', header: 'Service Type', renderCell: ({ service }: any) => service.serviceType.name },
    {
      key: 'status',
      header: 'Status',
      renderCell: ({ service }: any) => {
        const status = service.serviceStatus
        return (
          <Chip
            label={status.name}
            variant="filled"
            color={status.id === SERVICE_STATUS_PENDING_ID ? 'warning' : status.id === SERVICE_STATUS_APPROVED_ID ? 'success' : 'error'}
          />
        )
      }
    },
    { key: 'updatedAt', header: 'Last Update', renderCell: ({ service: baseService, ...service }: any) => dayjs(baseService.updatedAt).isAfter(dayjs(service.updatedAt)) ? formatDate(baseService.updatedAt) : formatDate(service.updatedAt) },
    {
      key: 'actions',
      header: 'Actions',
      renderCell: ({ service }: any, rowIndex: number) => {
        return (
          <div className="flex gap-2">
            <IconButton
              data-row-index={rowIndex}
              onClick={() => handlePreview(service.id)}>
              <Eye />
            </IconButton>
            <IconButton
              data-row-index={rowIndex}
              onClick={() => handleEdit(service.id)}>
              <Pencil />
            </IconButton>
            <IconButton data-row-index={rowIndex} onClick={() => handleDelete(service.id)}>
              <Trash />
            </IconButton>
          </div>
        )
      }
    }
  ];

  return (
    <div className="flex-1 overflow-y-auto p-6 lg:p-10">
      <div className="max-w-7xl mx-auto flex flex-col gap-8 h-full">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <h1 className="font-serif text-2xl text-brown-dark font-medium">My Services</h1>
            <p className="text-warm-grey mt-2 font-sans text-sm">Manage your exclusive service listings and their status.</p>
          </div>
          <button className="bg-[#2F2003] hover:bg-[#4a340a] text-white px-4 py-2.5 rounded-sm text-sm font-medium flex items-center gap-2 transition-colors shadow-sm self-start md:self-auto" onClick={() => router.push('/dashboard/services/create')}>
            <i className="w-4 h-4" data-lucide="plus"></i>
            Add New Service
          </button>
        </div>
        <div className="bg-white rounded-sm shadow-sm border border-subtle-border dark:border-stone-800 flex flex-col">
          <div className="p-6 border-b border-subtle-border dark:border-stone-800">
            <h2 className="font-serif text-xl text-brown-dark font-medium">Your Listings</h2>
          </div>
          <DataTable data={services} columns={columns} />
          {/* <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="text-xs font-sans text-warm-grey uppercase tracking-widest bg-stone-50/50 dark:bg-stone-900/50 border-b border-subtle-border dark:border-stone-800">
                  <th className="px-6 py-4 font-semibold pl-8">Service</th>
                  <th className="px-6 py-4 font-semibold">Status</th>
                  <th className="px-6 py-4 font-semibold">Last Updated</th>
                  <th className="px-6 py-4 font-semibold text-right pr-8">Actions</th>
                </tr>
              </thead>
              <tbody className="text-sm divide-y divide-subtle-border dark:divide-stone-800">
                <tr className="group hover:bg-stone-50 dark:hover:bg-stone-800/50 transition-colors">
                  <td className="px-6 py-4 pl-8">
                    <div className="flex items-center gap-4">
                      <img alt="Yacht Service" className="w-10 h-10 rounded-full object-cover ring-1 ring-subtle-border" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDare2hCWcFt5rqNBdhfGW8FkIUVGbKw4jQ2Gv19b1Rs33gSwyyv9wi26rp-FgHgvcSPeg25cJCWk9omk1qLEqVHyZAxkqEsIqNg8gpnMYudYTV-0CtxZX61j8dTIoZdpXNhbFHXHxRShvHS5_nf3W-pb3uCflssjq_V_PO4-ewZy9HgNi63fOR3rpIn5U2otrDp0RtvIDfrAGV_tZoyXZmoyS5V70GlnxAI6ydPZcSbL2mExhSI4UWSI6Hrq710mbErlXEBTXyZIE" />
                      <div>
                        <p className="font-serif text-brown-dark dark:text-stone-200 font-medium text-base group-hover:text-primary transition-colors">Majestic 50m Yacht Charter</p>
                        <p className="text-warm-grey text-xs mt-0.5">Marine &amp; Transport</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-50 text-green-800 border border-green-100/50 dark:bg-green-900/20 dark:text-green-400 dark:border-green-900/30">
                      Approved
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2 text-warm-grey text-xs">
                      <span>Oct 24, 2023</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-right pr-8">
                    <div className="flex justify-end gap-2">
                      <button className="p-2 text-primary hover:bg-primary/10 rounded-full transition-colors" title="Edit Listing">
                        <i className="w-4 h-4" data-lucide="pencil"></i>
                      </button>
                      <button className="p-2 text-warm-grey hover:bg-stone-100 dark:hover:bg-stone-800 rounded-full transition-colors" title="More Options">
                        <i className="w-4 h-4" data-lucide="more-horizontal"></i>
                      </button>
                    </div>
                  </td>
                </tr>
                <tr className="group hover:bg-stone-50 dark:hover:bg-stone-800/50 transition-colors">
                  <td className="px-6 py-4 pl-8">
                    <div className="flex items-center gap-4">
                      <img alt="Villa Service" className="w-10 h-10 rounded-full object-cover ring-1 ring-subtle-border" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDf1tg-Nx456p9kKYCP0uIVSEMtcYqRnjWo4bwaRkixL5t9_sLVq6WEDv-liVtoz4SBnjXJv6TjThZ1sNV38eOFqMKCaTeFsD2EnfMfebC92BmMmQABjUU1KI69I4rSoxCSUJXQaGZQCFhdBFo2tCCFz_mgNaK9Y-WXLJnMedcx6RLy4Gmlq1obpvKfnjIcI9y-H0YmEZvXX4bV6nhkJBOQQKtaC3q2rY_IJFcmkpUP6CJQc3im5X9hhITJlfg1jM3rDfkJe67nvmY" />
                      <div>
                        <p className="font-serif text-brown-dark dark:text-stone-200 font-medium text-base group-hover:text-primary transition-colors">Villa Las Brisas</p>
                        <p className="text-warm-grey text-xs mt-0.5">Real Estate</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-amber-50 text-amber-800 border border-amber-100/50 dark:bg-amber-900/20 dark:text-amber-400 dark:border-amber-900/30">
                      Pending
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2 text-warm-grey text-xs">
                      <span>Yesterday</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-right pr-8">
                    <div className="flex justify-end gap-2">
                      <button className="p-2 text-primary hover:bg-primary/10 rounded-full transition-colors" title="Edit Listing">
                        <i className="w-4 h-4" data-lucide="pencil"></i>
                      </button>
                      <button className="p-2 text-warm-grey hover:bg-stone-100 dark:hover:bg-stone-800 rounded-full transition-colors" title="More Options">
                        <i className="w-4 h-4" data-lucide="more-horizontal"></i>
                      </button>
                    </div>
                  </td>
                </tr>
                <tr className="group hover:bg-stone-50 dark:hover:bg-stone-800/50 transition-colors">
                  <td className="px-6 py-4 pl-8">
                    <div className="flex items-center gap-4">
                      <img alt="Dining Service" className="w-10 h-10 rounded-full object-cover ring-1 ring-subtle-border" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBhMZz7IVUoa8otN6aOvTEah4IjI2qWx7obTR8oHzBMirJR3IQLulJlVkmEoYPLfjAhZSnyjJU5FA8Azz25i0fIc9cUUYqq1y0ZNp_SCiD_DAlcp2DHrd2_FEpSrndEHboguBEZu0mLWg-8pPa1Wp2jowpo8x9DaMlzmKAjJvg7N_RqTO9hORGD-R8tFbqjRJJZb4jFFE57-uTR0SFyNtzNUBiT36rs04HbPXmuSJIBScu6RFIRgbpg64-Aag1O2mLz-YSrz36Nc00" />
                      <div>
                        <p className="font-serif text-brown-dark dark:text-stone-200 font-medium text-base group-hover:text-primary transition-colors">Private Chef Experience</p>
                        <p className="text-warm-grey text-xs mt-0.5">Gastronomy</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-50 text-green-800 border border-green-100/50 dark:bg-green-900/20 dark:text-green-400 dark:border-green-900/30">
                      Approved
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2 text-warm-grey text-xs">
                      <span>Oct 20, 2023</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-right pr-8">
                    <div className="flex justify-end gap-2">
                      <button className="p-2 text-primary hover:bg-primary/10 rounded-full transition-colors" title="Edit Listing">
                        <i className="w-4 h-4" data-lucide="pencil"></i>
                      </button>
                      <button className="p-2 text-warm-grey hover:bg-stone-100 dark:hover:bg-stone-800 rounded-full transition-colors" title="More Options">
                        <i className="w-4 h-4" data-lucide="more-horizontal"></i>
                      </button>
                    </div>
                  </td>
                </tr>
                <tr className="group hover:bg-stone-50 dark:hover:bg-stone-800/50 transition-colors">
                  <td className="px-6 py-4 pl-8">
                    <div className="flex items-center gap-4">
                      <img alt="Car Service" className="w-10 h-10 rounded-full object-cover ring-1 ring-subtle-border" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCwvRWB4KIZfUYS3fEfoHaz0nS5eiBbIJ3Nton72hUQIHxlWmRyjtCCpbRia6H8KDe4gVn_rpNnQPTPNWIucMTNdMZPlVnN3_e94EuylY63mCFXKJh6H-hfUwu6DRQRGVZh08n4K4Mgv--gNMK0-K4shHzsDUPIU5bzgnCrldWXWBy1cYe4b95ety36kGmr-VwbZcMrhkaLOfG1pHlMk9lLHCKSK0iHYHr5xQbIEUQLLmf9XSnh9QO8CapfWZK1zONnErLwGy1CKVI" />
                      <div>
                        <p className="font-serif text-brown-dark dark:text-stone-200 font-medium text-base group-hover:text-primary transition-colors">Supercar City Tour</p>
                        <p className="text-warm-grey text-xs mt-0.5">Transport</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-50 text-red-800 border border-red-100/50 dark:bg-red-900/20 dark:text-red-400 dark:border-red-900/30">
                      Rejected
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2 text-warm-grey text-xs">
                      <span>Oct 15, 2023</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-right pr-8">
                    <div className="flex justify-end gap-2">
                      <button className="p-2 text-primary hover:bg-primary/10 rounded-full transition-colors" title="Edit Listing">
                        <i className="w-4 h-4" data-lucide="pencil"></i>
                      </button>
                      <button className="p-2 text-warm-grey hover:bg-stone-100 dark:hover:bg-stone-800 rounded-full transition-colors" title="More Options">
                        <i className="w-4 h-4" data-lucide="more-horizontal"></i>
                      </button>
                    </div>
                  </td>
                </tr>
                <tr className="group hover:bg-stone-50 dark:hover:bg-stone-800/50 transition-colors">
                  <td className="px-6 py-4 pl-8">
                    <div className="flex items-center gap-4">
                      <img alt="Helicopter Service" className="w-10 h-10 rounded-full object-cover ring-1 ring-subtle-border" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCAamtQdcVX5y0INmLV8KlF7rFPGCfp666eo90SzBUK_JkVh4hmtdlLRPOpnrEDiL9JOWHLxlUU-TJ8zAp50bplpR1AzcvWSELyYsVVxMyX8Oc6nn5LqXQeJRl4RKuP7-tIVr9FX-ARLjYm8VgYSLG_au4e5S6JLnvl2D36ooUodm5BGkDE7_C0-MJETpUyUpFuoaMrX29--JOqSQFToFGR-5IKHoD8zqdTu9ifLcKSG1fJW5R4-xfmHfD_eqJLHjgP6i_8_nVleg0" />
                      <div>
                        <p className="font-serif text-brown-dark dark:text-stone-200 font-medium text-base group-hover:text-primary transition-colors">VIP Heli-Transfer</p>
                        <p className="text-warm-grey text-xs mt-0.5">Aviation</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-50 text-green-800 border border-green-100/50 dark:bg-green-900/20 dark:text-green-400 dark:border-green-900/30">
                      Approved
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2 text-warm-grey text-xs">
                      <span>Oct 10, 2023</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-right pr-8">
                    <div className="flex justify-end gap-2">
                      <button className="p-2 text-primary hover:bg-primary/10 rounded-full transition-colors" title="Edit Listing">
                        <i className="w-4 h-4" data-lucide="pencil"></i>
                      </button>
                      <button className="p-2 text-warm-grey hover:bg-stone-100 dark:hover:bg-stone-800 rounded-full transition-colors" title="More Options">
                        <i className="w-4 h-4" data-lucide="more-horizontal"></i>
                      </button>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div> */}
          <div className="border-t border-subtle-border dark:border-stone-800 bg-stone-50 dark:bg-stone-900 p-4 flex items-center justify-between rounded-b-sm">
            <span className="text-xs text-stone-500">Showing 1-5 of 12 Services</span>
            <div className="flex gap-1">
              <button className="p-2 rounded-sm hover:bg-stone-200 dark:hover:bg-stone-800 text-stone-500 disabled:opacity-50" disabled>
                <i className="w-4 h-4" data-lucide="chevron-left"></i>
              </button>
              <button className="px-3 py-1 rounded-sm bg-primary text-white text-xs font-medium shadow-sm">1</button>
              <button className="px-3 py-1 rounded-sm hover:bg-stone-200 dark:hover:bg-stone-800 text-stone-600 dark:text-stone-400 text-xs font-medium transition-colors">2</button>
              <button className="px-3 py-1 rounded-sm hover:bg-stone-200 dark:hover:bg-stone-800 text-stone-600 dark:text-stone-400 text-xs font-medium transition-colors">3</button>
              <button className="p-2 rounded-sm hover:bg-stone-200 dark:hover:bg-stone-800 text-stone-500">
                <i className="w-4 h-4" data-lucide="chevron-right"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ServicesPage