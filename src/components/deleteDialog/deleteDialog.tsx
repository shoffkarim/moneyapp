import React from 'react'
import { Button, Dialog, DialogActions, DialogTitle } from '@mui/material'
import Slide from '@mui/material/Slide'
import { TransitionProps } from '@mui/material/transitions'

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    // vendor lib
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />
})

type DeleteDialogProps = {
  open: boolean
  handleClose: () => void
  handleCloseYes: () => void
}
export const DeleteDialog: React.FC<DeleteDialogProps> = ({ open, handleClose, handleCloseYes }) => {
  return (
    <Dialog
      open={open}
      TransitionComponent={Transition}
      keepMounted
      onClose={handleClose}
      aria-describedby="alert-dialog-slide-description"
    >
      <DialogTitle>{"Are you sure you want to delete the transaction?"}</DialogTitle>
      <DialogActions>
        <Button onClick={handleClose}>No</Button>
        <Button onClick={handleCloseYes}>Yes</Button>
      </DialogActions>
    </Dialog>
  )
}
