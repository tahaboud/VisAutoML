import {
  Card,
  Divider,
  MenuItem,
  Switch,
  TextField,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Lists from "./Lists";
import InfoIcon from "@mui/icons-material/Info";

const Body = () => {
  const { response, model } = useSelector((state) => state.model);
  const [columns, setColumns] = useState([]);
  const [isAuto, setIsAuto] = useState(true);
  const [algoValue, setAlgoValue] = useState("algo1");
  const [elements, setElements] = useState({
    "Prediction Column": [],
    "ID Column": [],
    "Columns not to use": [],
    "Columns to use": [],
  });
  useEffect(() => {
    if (response && response.columns) {
      setColumns(response.columns);
    }
  }, [response]);
  const handleChecked = (e) => {
    setIsAuto(e.target.checked);
  };
  const handleAlgoChange = (e) => {
    setAlgoValue(e.target.value);
  };
  return (
    <Card
      sx={{
        margin: "2em",
        padding: "2em",
        borderRadius: "20px",
        display: "flex",
        flex: 1,
        gap: "2.5em",
      }}
    >
      <Box>
        <Typography
          sx={{
            fontSize: "1.5rem",
            fontWeight: "bolder",
            fontFamily: "Open Sans",
          }}
        >
          ML Learning Algorithm
        </Typography>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: "1em 0 0 0 ",
          }}
        >
          <Typography
            sx={{
              fontSize: "1rem",
              fontWeight: "bold",
              fontFamily: "Open Sans",
            }}
          >
            Manual
          </Typography>
          <Switch checked={isAuto} onChange={handleChecked} />
          <Typography
            sx={{
              fontSize: "1rem",
              fontWeight: "bold",
              fontFamily: "Open Sans",
            }}
          >
            Automatic
          </Typography>
        </Box>
        <Divider sx={{ margin: "1em 0" }} />
        <TextField
          select
          fullWidth
          value={algoValue}
          onChange={handleAlgoChange}
          disabled={isAuto}
        >
          <MenuItem value="algo1">Algo 1</MenuItem>
          <MenuItem value="algo2">Algo 2</MenuItem>
          <MenuItem value="algo3">Algo 3</MenuItem>
        </TextField>
        <Divider sx={{ margin: "1em 0" }} />
        <Box
          sx={{
            display: "flex",
            margin: "1em 0",
            gap: "5px",
            alignItems: "center",
          }}
        >
          <TextField
            fullWidth
            variant="outlined"
            label="Label 0 for Prediction Column"
            disabled={model && model.model_type === "RG"}
          />
          <InfoIcon />
        </Box>
        <Box
          sx={{
            display: "flex",
            margin: "1em 0",
            gap: "5px",
            alignItems: "center",
          }}
        >
          <TextField
            fullWidth
            variant="outlined"
            label="Label 1 for Prediction Column"
            disabled={model && model.model_type === "RG"}
          />
          <InfoIcon />
        </Box>
        <Box
          sx={{
            display: "flex",
            margin: "1em 0",
            gap: "5px",
            alignItems: "center",
          }}
        >
          <TextField
            fullWidth
            variant="outlined"
            label="Unit for Prediction Column"
            disabled={model && model.model_type === "CL"}
          />
          <InfoIcon />
        </Box>
      </Box>
      <Box>
        <Typography
          sx={{
            fontSize: "1.5rem",
            fontWeight: "bolder",
            fontFamily: "Open Sans",
          }}
        >
          Inputs
        </Typography>
        <Lists
          columns={columns}
          elements={elements}
          setElements={setElements}
        />
      </Box>
    </Card>
  );
};

export default Body;
