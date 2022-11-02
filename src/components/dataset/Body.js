import {
  Box,
  Button,
  Card,
  Divider,
  IconButton,
  MenuItem,
  TextField,
  Typography,
} from "@mui/material";
import { DropzoneArea } from "react-mui-dropzone";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addDataSet } from "../../actions/modelAction";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const Body = ({ backDialogOpen, setBackDialogOpen }) => {
  const [file, setFile] = useState(null);
  const [fileName, setFileName] = useState("");
  const [disabled, setDisabled] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onChange = (e) => {
    setFile(e.target.value);
    setFileName(e.target.value);
  };
  const onSelect = (files) => {
    if (files && files[0]) {
      setFile(files[0]);
      setFileName("");
      setDisabled(true);
    }
  };
  const onDelete = (files) => {
    setFile(null);
    setFileName("");
    setDisabled(false);
  };
  const onClick = () => {
    dispatch(addDataSet(file));
    navigate("/review");
  };
  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
        flex: "1",
        margin: "2em",
        height: "80vh",
        padding: "2em",
        borderRadius: "20px",
      }}
    >
      <Box sx={{ display: "flex" }}>
        <IconButton onClick={() => setBackDialogOpen(true)}>
          <ArrowBackIcon />
        </IconButton>
        <Typography
          sx={{
            fontSize: "1.5rem",
            fontWeight: "bolder",
            fontFamily: "Open Sans",
          }}
        >
          Import
        </Typography>
      </Box>
      <Typography
        sx={{
          fontSize: "1.2rem",
          fontWeight: "bold",
          fontFamily: "Open Sans",
        }}
      >
        Import a CSV File
      </Typography>

      <Box sx={{ margin: "0 0 1em 0", width: "100%" }}>
        <DropzoneArea
          filesLimit={1}
          onChange={onSelect}
          onDelete={onDelete}
          showPreviews={true}
          showPreviewsInDropzone={false}
          useChipsForPreview
          previewText="Uploaded file"
          acceptedFiles={["text/csv"]}
        />
      </Box>
      <Typography
        sx={{
          fontSize: "1.2rem",
          fontWeight: "bold",
          fontFamily: "Open Sans",
        }}
      >
        Or select from a list of sample datasets
      </Typography>
      <Box sx={{ marginTop: "0 1em" }}>
        <TextField
          select
          label={"Select a sample dataset"}
          value={fileName}
          onChange={onChange}
          sx={{ minWidth: "25em", margin: "0 0 1em 0" }}
          disabled={disabled}
        >
          <MenuItem value={"File 1"}>File 1</MenuItem>
          <MenuItem value={"File 2"}>File 2</MenuItem>
          <MenuItem value={"File 3"}>File 3</MenuItem>
        </TextField>
      </Box>
      <Box sx={{ display: "flex", justifyContent: "end" }}>
        <Button
          variant="contained"
          disabled={!disabled && fileName === ""}
          onClick={onClick}
        >
          Review data
        </Button>
      </Box>
    </Card>
  );
};

export default Body;
