import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogTitle from "@mui/material/DialogTitle";

const DeleteDialog = ({ open, setOpen }) => {
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Dialog open={open} onClose={handleClose} maxWidth="xs" fullWidth>
      <DialogTitle sx={{ fontFamily: "Open Sans" }}>
        {"Delete this model?"}
      </DialogTitle>
      <DialogActions>
        <Button onClick={handleClose} sx={{ fontFamily: "Open Sans" }}>
          Cancel
        </Button>
        <Button
          variant="contained"
          onClick={handleClose}
          color="error"
          sx={{ fontFamily: "Open Sans" }}
        >
          Delete
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default DeleteDialog;
