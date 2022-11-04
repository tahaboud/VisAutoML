import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogTitle from "@mui/material/DialogTitle";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deleteModel } from "../../actions/modelAction";

const BackDialog = ({ open, setOpen }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleClose = () => {
    setOpen(false);
  };
  const handleConfirm = () => {
    dispatch(deleteModel());
    setTimeout(() => {
      setOpen(false);
      navigate("/dataset");
    }, 500);
  };
  return (
    <Dialog open={open} onClose={handleClose} maxWidth="xs" fullWidth>
      <DialogTitle sx={{ fontFamily: "Open Sans" }}>
        {"There are unsaved changes, do you wish to discard them?"}
      </DialogTitle>
      <DialogActions>
        <Button onClick={handleClose} sx={{ fontFamily: "Open Sans" }}>
          Cancel
        </Button>
        <Button
          variant="contained"
          onClick={handleConfirm}
          color="error"
          sx={{ fontFamily: "Open Sans" }}
        >
          Ok
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default BackDialog;
