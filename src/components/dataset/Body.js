import {
  Box,
  Button,
  Card,
  MenuItem,
  TextField,
  Typography,
} from "@mui/material";
import { DropzoneArea } from "react-mui-dropzone";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addDataSet } from "../../actions/modelAction";

const Body = () => {
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
        margin: "2em 1em 0 1em",
        height: "80vh",
        padding: "2em",
        borderRadius: "20px",
      }}
    >
      <Typography
        sx={{ fontSize: "2rem", fontWeight: "bold", fontFamily: "Open Sans" }}
      >
        Import
      </Typography>

      <Box sx={{ margin: "1em 0", width: "100%" }}>
        <DropzoneArea
          filesLimit={1}
          onChange={onSelect}
          onDelete={onDelete}
          acceptedFiles={["text/csv"]}
        />
      </Box>
      <Box>
        <TextField
          select
          label={"Choose an example dataset"}
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
