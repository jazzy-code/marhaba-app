import { useState } from "react"

import { Button, Dialog, DialogContent, DialogTitle, FormLabel, IconButton, TextField } from "@mui/material"

import { useMutation } from "@tanstack/react-query"
import { useFormik } from "formik"
import { Check, X } from "lucide-react"

import { createInquiry } from "@/api/inquiries/inquiries.client"
import useFormikHelpers from "@/hooks/useFormikHelpers"

interface ModalInquiryProps {
  open: boolean
  service: any
  onClose: () => void
}
const ModalInquiry = ({ open, service, onClose }: ModalInquiryProps) => {
  const [inquirySuccess, setInquirySuccess] = useState(false)

  const { mutate, isPending } = useMutation({
    mutationFn: (data: any) => createInquiry(data),
    onSuccess: () => {
      setInquirySuccess(true)
    },
    onError: () => {}
  })
  const formik = useFormik({
    initialValues: {
      fullName: "",
      email: "",
      phone: "",
      message: "",
      serviceId: service.id
    },
    enableReinitialize: true,
    onSubmit: (data: any) => mutate(data)
  })

  const { values, handleChange, handleBlur, handleSubmit, resetForm } = formik

  const { handleErrorField, handleErrorFieldMessage } = useFormikHelpers(formik)

  const handleClose = () => {
    resetForm()
    onClose()
    setInquirySuccess(false)
  }

  return (
    <Dialog
      open={open}
      closeAfterTransition={false}
      fullWidth
      maxWidth="xs"
      aria-describedby="alert-dialog-slide-description">
      <DialogTitle>
        <span></span>
        <IconButton onClick={onClose}>
          <X />
        </IconButton>
      </DialogTitle>
      <DialogContent sx={{ padding: "0rem 2rem 2rem !important", position: "relative" }}>
        <form onSubmit={handleSubmit}>
          {inquirySuccess ? (
            <div className="flex-col items-center">
              <div className="mb-8 flex justify-center">
                <div className="w-20 h-20 rounded-full bg-primary-gold/10 flex items-center justify-center text-primary-gold">
                  <Check className="w-12 h-12" />
                </div>
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl text-text-heading mb-4 text-center">
                Inquiry Sent succesfully!
              </h2>
              <p className="text-base text-text-body mb-6 font-light text-center">
                Thank you for submitting, we'll get back to you as soon as possible.
              </p>
            </div>
          ) : (
            <div className="text-left space-y-3">
              <div className="text-center">
                <h2 className="text-3xl font-serif text-center mb-1">Inquire about this Service</h2>
                <p className="text-lg text-text-body mb-6 font-light">"{service.title}"</p>
              </div>
              <div>
                <FormLabel required>Full Name</FormLabel>
                <TextField
                  placeholder="John Doe"
                  fullWidth
                  name="fullName"
                  value={values.fullName}
                  error={handleErrorField("fullName")}
                  helperText={handleErrorFieldMessage("fullName")}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </div>
              <div>
                <FormLabel required>Email</FormLabel>
                <TextField
                  placeholder="9aFbO@example.com"
                  fullWidth
                  name="email"
                  value={values.email}
                  error={handleErrorField("email")}
                  helperText={handleErrorFieldMessage("email")}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </div>
              <div>
                <FormLabel>Phone</FormLabel>
                <TextField
                  placeholder="123456789"
                  fullWidth
                  name="phone"
                  value={values.phone}
                  error={handleErrorField("phone")}
                  helperText={handleErrorFieldMessage("phone")}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </div>
              <div>
                <div className="flex justify-between items-center mb-1">
                  <FormLabel className="!mb-0" required>
                    Message
                  </FormLabel>
                  <span className="text-[10px] bg-primary-gold/10 text-primary-gold px-2 py-0.5 rounded-full font-medium">
                    {values.message?.length || 0}/150
                  </span>
                </div>
                <TextField
                  placeholder="I am interested in this service"
                  fullWidth
                  multiline
                  rows={4}
                  name="message"
                  value={values.message}
                  slotProps={{ htmlInput: { maxLength: 100 } }}
                  error={handleErrorField("message")}
                  helperText={handleErrorFieldMessage("message")}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </div>
            </div>
          )}
          <div className="flex flex-col gap-4 w-full mt-5">
            {!inquirySuccess && (
              <Button
                type="submit"
                variant="contained"
                color="deepBrown"
                fullWidth
                loading={isPending}
                onClick={mutate}>
                Send Inquiry
              </Button>
            )}
            <Button
              type="button"
              variant="contained"
              color="light"
              fullWidth
              disabled={isPending}
              onClick={handleClose}>
              {inquirySuccess ? "Close" : "Cancel"}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  )
}

export default ModalInquiry
