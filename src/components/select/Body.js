import {
  Card,
  Divider,
  IconButton,
  MenuItem,
  Switch,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Box } from "@mui/system";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Lists from "./Lists";
import InfoIcon from "@mui/icons-material/Info";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  root: {
    width: "125px",
    height: "62px",
    padding: "0px",
  },
  switchBase: {
    color: "#818181",
    padding: "1px",
    "&$checked": {
      "& + $track": {
        backgroundColor: "#23bf58",
      },
    },
  },
  thumb: {
    color: "white",
    width: "56px",
    height: "56px",
    margin: "2px",
  },
  track: {
    borderRadius: "30px",
    backgroundColor: "#818181",
    opacity: "1 !important",
    "&:after, &:before": {
      color: "white",
      fontSize: "14px",
      fontWeight: "bold",
      position: "absolute",
      top: "19px",
    },
    "&:after": {
      content: "'Auto'",
      left: "19px",
    },
    "&:before": {
      content: "'Manual'",
      right: "6px",
    },
  },
  checked: {
    color: "#23bf58 !important",
    transform: "translateX(62px) !important",
  },
});

const Body = ({ open, setOpen }) => {
  const classes = useStyles();
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
      <Box sx={{ flex: 0.6 }}>
        <Box sx={{ height: "10em" }}>
          <Box sx={{ display: "flex", gap: "1em" }}>
            <IconButton onClick={() => setOpen(true)}>
              <ArrowBackIcon />
            </IconButton>
            <Typography
              sx={{
                fontSize: "1.5rem",
                fontWeight: "bolder",
                fontFamily: "Open Sans",
              }}
            >
              ML Algorithm
            </Typography>
          </Box>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              margin: "1em 0 0 0 ",
            }}
          >
            <Switch
              classes={{
                root: classes.root,
                switchBase: classes.switchBase,
                thumb: classes.thumb,
                track: classes.track,
                checked: classes.checked,
              }}
              checked={isAuto}
              onChange={handleChecked}
            />
          </Box>
          <Divider sx={{ margin: "1em 0" }} />
        </Box>
        <TextField
          select
          fullWidth
          label="Select an algorithm"
          value={algoValue}
          onChange={handleAlgoChange}
          disabled={isAuto}
        >
          <Tooltip title="some text" placement="right">
            <MenuItem value="algo1">Algo 1</MenuItem>
          </Tooltip>
          <Tooltip title="some text" placement="right">
            <MenuItem value="algo1">Algo 2</MenuItem>
          </Tooltip>
          <Tooltip title="some text" placement="right">
            <MenuItem value="algo1">Algo 3</MenuItem>
          </Tooltip>
        </TextField>
        <Divider sx={{ margin: "1em 0" }} />
      </Box>
      <Divider orientation="vertical" flexItem />
      <Box sx={{ flex: 1.3 }}>
        <Box sx={{ height: "5em" }}>
          <Typography
            sx={{
              fontSize: "1.5rem",
              fontWeight: "bolder",
              fontFamily: "Open Sans",
            }}
          >
            Inputs
          </Typography>
          <Typography
            sx={{
              fontSize: "1rem",
              fontWeight: "bold",
              fontFamily: "Open Sans",
            }}
          >
            Drag and drop the columns to the respective boards
          </Typography>
        </Box>
        <Lists
          columns={columns}
          elements={elements}
          setElements={setElements}
        />
      </Box>
      <Box sx={{ flex: 1 }}>
        <Box sx={{ height: "5em" }}>
          <Typography
            sx={{
              fontSize: "1.5rem",
              fontWeight: "bolder",
              fontFamily: "Open Sans",
            }}
          >
            Regression
          </Typography>
          <Typography
            sx={{
              fontSize: "1rem",
              fontWeight: "bold",
              fontFamily: "Open Sans",
            }}
          >
            Add the unit of the prediction column
          </Typography>
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
          <InfoIcon sx={{ color: "grey" }} />
        </Box>
        <Typography
          sx={{
            fontSize: "1.5rem",
            fontWeight: "bolder",
            fontFamily: "Open Sans",
          }}
        >
          Classification
        </Typography>
        <Typography
          sx={{
            fontSize: "1rem",
            fontWeight: "bold",
            fontFamily: "Open Sans",
          }}
        >
          Add the label for values 0 and 1 of the prediction column
        </Typography>
        <Box
          sx={{
            display: "flex",
            margin: "0",
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
          <InfoIcon sx={{ color: "grey" }} />
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
          <InfoIcon sx={{ color: "grey" }} />
        </Box>
      </Box>
    </Card>
  );
};

export default Body;
