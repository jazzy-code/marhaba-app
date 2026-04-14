import type { ReactNode } from "react"

import { Alert, Button, Dialog, DialogActions, DialogContent, IconButton } from "@mui/material"
import { X } from "lucide-react"

interface ModalDeleteProps {
  action?: string
  message?: ReactNode
  open: boolean
  loading: boolean
  element: ReactNode
  onCancel: () => void
  onConfirm: () => void
}

const ModalDelete = ({ action = "delete", message, open, loading, element, onCancel, onConfirm }: ModalDeleteProps) => {
  const actionLabel = action.charAt(0).toUpperCase() + action.slice(1)
  return (
    <Dialog
      open={open}
      closeAfterTransition={false}
      fullWidth
      maxWidth="xs"
      aria-describedby="alert-dialog-slide-description">
      <DialogContent sx={{ padding: "1rem 1rem 0 !important", position: "relative" }}>
        <IconButton sx={{ position: "absolute", top: 10, right: 10 }} onClick={onCancel}>
          <X />
        </IconButton>
        <div className="mt-8 text-center">
          <h2 className="text-xl font-bold font-serif mb-6">{actionLabel} this element?</h2>
          {element}
          <p className="my-6">Are you sure you want to {action} this item? </p>
          {message ? (
            message
          ) : (
            <Alert severity="warning">
              This action cannot be undone and everything related to this element will be deleted.
            </Alert>
          )}
        </div>
      </DialogContent>
      <DialogActions>
        <Button
          variant="contained"
          color="light"
          sx={{ width: "12rem !important" }}
          loading={loading}
          onClick={onCancel}>
          Cancel
        </Button>
        <Button
          variant="contained"
          color="error"
          sx={{ width: "12rem !important" }}
          loading={loading}
          onClick={onConfirm}>
          {actionLabel}
        </Button>
      </DialogActions>
    </Dialog>
  )
}

export default ModalDelete
