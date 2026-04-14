import { useState } from "react"

import { Alert, Button, Chip, Dialog, DialogContent, DialogTitle, FormLabel, IconButton } from "@mui/material"

import { useMutation, useQueryClient } from "@tanstack/react-query"
import { Check, CheckCircle, Copy, X } from "lucide-react"

import { contactInquiry } from "@/api/inquiries/inquiries.client"

import LightTooltip from "../LightTooltip"

interface ModalInquiryPreviewProps {
  open: boolean
  inquiry: any
  onClose: () => void
}
const ModalInquiryPreview = ({ open, inquiry, onClose }: ModalInquiryPreviewProps) => {
  const queryClient = useQueryClient()

  const [inquiryContactSuccess, setInquiryContactSuccess] = useState(false)
  const [copiedToClipboard, setCopiedToClipboard] = useState(false)

  const { mutate, isPending } = useMutation({
    mutationFn: () => contactInquiry(inquiry.id),
    onSuccess: () => {
      setInquiryContactSuccess(true)
      queryClient.invalidateQueries({ queryKey: ["inquiries"] })
      queryClient.invalidateQueries({ queryKey: ["inquiries-stats"] })
    },
    onError: () => {}
  })

  const handleClose = () => {
    onClose()
    setInquiryContactSuccess(false)
  }

  const handleCopyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text)
      setCopiedToClipboard(true)

      setTimeout(() => setCopiedToClipboard(false), 1500)
    } catch (err) {
      console.error("Error copying:", err)
    }
  }

  return (
    <Dialog
      open={open}
      closeAfterTransition={false}
      keepMounted={false}
      fullWidth
      maxWidth="xs"
      aria-describedby="alert-dialog-slide-description">
      <DialogTitle>
        <span></span>
        <IconButton onClick={onClose}>
          <X />
        </IconButton>
      </DialogTitle>
      {inquiry && (
        <DialogContent sx={{ padding: "0rem 2rem 2rem !important", position: "relative" }}>
          <div className="text-left space-y-3">
            <div className="text-center">
              <h2 className="text-2xl font-serif font-semibold text-center mb-1">Inquire about your Service</h2>
              <p className="text-lg text-text-body mb-6 font-light">"{inquiry.service.title}"</p>
              <small>
                Status:{" "}
                <Chip
                  label={inquiry.status}
                  color={inquiry.status === "NEW" ? "warning" : inquiry.status === "CONTACTED" ? "success" : "neutral"}
                />
              </small>
            </div>
            <div className="flex flex-col gap-1">
              <FormLabel required>Full Name</FormLabel>
              <b>{inquiry.fullName}</b>
            </div>
            <div className="flex flex-col gap-1">
              <FormLabel required>Email</FormLabel>
              <div className="flex items-center gap-2">
                <b>{inquiry.email}</b>
                <LightTooltip title={copiedToClipboard ? "Copied!" : "Copy to clipboard"}>
                  <Copy
                    size={20}
                    className="cursor-pointer text-deep-brown hover:text-deep-brown/60"
                    onClick={() => handleCopyToClipboard(inquiry.email)}
                  />
                </LightTooltip>
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <FormLabel>Phone</FormLabel>
              <b>{inquiry.phone || "Not provided"}</b>
              {inquiry.phone && (
                <LightTooltip title={copiedToClipboard ? "Copied!" : "Copy to clipboard"}>
                  <Copy
                    size={20}
                    className="cursor-pointer text-deep-brown hover:text-deep-brown/60"
                    onClick={() => handleCopyToClipboard(inquiry.phone)}
                  />
                </LightTooltip>
              )}
            </div>
            <div className="flex flex-col gap-1">
              <FormLabel className="!mb-0" required>
                Message
              </FormLabel>
              <b>{inquiry.message}</b>
            </div>
          </div>
          <div className="flex flex-col gap-4 w-full mt-8">
            {inquiry.status === "NEW" && !inquiryContactSuccess && (
              <Button
                fullWidth
                variant="contained"
                color="deepBrown"
                startIcon={<CheckCircle />}
                loading={isPending}
                onClick={() => mutate()}>
                Mark as contacted
              </Button>
            )}
            {(inquiry.status === "CONTACTED" || (inquiry.status === "NEW" && inquiryContactSuccess)) && (
              <Alert severity="success" className="items-center" icon={<Check size={28} />}>
                <h2 className="text-lg font-semibold text-center">Client contacted!</h2>
              </Alert>
            )}
            <Button
              type="button"
              variant="contained"
              color="light"
              fullWidth
              disabled={isPending}
              onClick={handleClose}>
              Close
            </Button>
          </div>
        </DialogContent>
      )}
    </Dialog>
  )
}

export default ModalInquiryPreview
