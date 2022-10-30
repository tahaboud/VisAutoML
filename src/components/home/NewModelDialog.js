import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import MenuItem from "@mui/material/MenuItem";
import ListItemText from "@mui/material/ListItemText";
import { Tooltip, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { modelValidator } from "../validation/newModelValidation";
import { useState } from "react";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { useDispatch } from "react-redux";
import { addNewModel } from "../../actions/modelAction";

const NewModelDialog = ({ open, setOpen, name, type, setName, setType }) => {
  const dispatch = useDispatch();
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();
  const handleChange = (e) => {
    setName(e.target.value);
  };
  const handleSelectChange = (e) => {
    setType(e.target.value);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSave = () => {
    const { isValid, validationErrors } = modelValidator({
      name: name,
      type: type,
    });
    if (isValid) {
      dispatch(addNewModel(name, type));
      setOpen(false);
      navigate("/dataset");
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle sx={{ display: "flex" }}>
        <Typography sx={{ flex: 1 }}>New Model</Typography>
        <IconButton onClick={handleClose}>
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          id="name"
          label="Project Name"
          value={name}
          onChange={handleChange}
          type="text"
          fullWidth
          variant="standard"
          error={errors && errors.name ? true : false}
          helperText={errors && errors.name}
        />
        <TextField
          autoFocus
          margin="dense"
          id="type"
          label="Model Type"
          select
          value={type}
          onChange={handleSelectChange}
          fullWidth
          variant="standard"
          error={errors && errors.type ? true : false}
          helperText={errors && errors.type}
        >
          <MenuItem value={"Regression"}>
            <Tooltip title={"Definition of Regression"}>
              <ListItemText primary={"Regression"} />
            </Tooltip>
          </MenuItem>

          <MenuItem value={"classification"}>
            <Tooltip title={"Definition of Classification"}>
              <ListItemText primary={"Classification"} />
            </Tooltip>
          </MenuItem>
        </TextField>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleSave} variant="contained">
          Create
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default NewModelDialog;
