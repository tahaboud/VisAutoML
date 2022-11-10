import {
  Button,
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
import { submitModel } from "../../actions/modelAction";
import { useDispatch } from "react-redux";

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

const classificationAlgos = [
  {
    name: "Logistic Regression",
    value: "LogisticRegression",
    tooltip:
      "Logistic regression is easier to implement, interpret, and very efficient to train. If the number of rows is lesser than the number of columns, Logistic Regression should not be used, otherwise, it may lead to overfitting.",
  },
  {
    name: "Random Forest Classifier",
    value: "RandomForestClassifier",
    tooltip:
      "A random forest produces good predictions that can be understood easily. It can handle large datasets efficiently. The random forest algorithm provides a higher level of accuracy in predicting outcomes over the decision tree algorithm.",
  },
  {
    name: "Gradient Boosting Classifier",
    value: "GradientBoostingClassifier",
    tooltip:
      "Gradient boosting trees can be more accurate, faster training speed, and higher efficiency than random forests.",
  },
  {
    name: "Decision Tree Classifier",
    value: "DecisionTreeClassifier",
    tooltip:
      "Decision trees require less effort for data preparation and are simple hence they require less effort for interpreting the algorithm.",
  },
  {
    name: "LGBM Classifier",
    value: "LGBMClassifier",
    tooltip:
      "LGBMClassifier has faster training speed, higher efficiency, lower memory usage, better accuracy than other boosting algorithms.",
  },
  {
    name: "XGB Classifier",
    value: "XGBClassifier",
    tooltip:
      "XGBClassifier is highly flexible, faster than Gradient boosting and effective with large data sets.",
  },
];

const regressionAlgos = [
  {
    name: "Random Forest Regressor",
    value: "RandomForestRegressor",
    tooltip:
      "A random forest produces good predictions that can be understood easily. It can handle large datasets efficiently. The random forest algorithm provides a higher level of accuracy in predicting outcomes over the decision tree algorithm.",
  },
  {
    name: "Gradient Boosting Regressor",
    value: "GradientBoostingRegressor",
    tooltip:
      "Gradient boosting trees can be more accurate, faster training speed, and higher efficiency than random forests.",
  },
  {
    name: "Bagging Regressor",
    value: "BaggingRegressor",
    tooltip:
      "Bagging Regressors significantly raises the stability of models in improving accuracy and reducing variance, which eliminates the challenge of overfitting.",
  },
  {
    name: "Extra Trees Regressor",
    value: "ExtraTreesRegressor",
    tooltip:
      "The main advantage of Extra Trees is the reduction in bias and faster training speed.",
  },
];

const Body = ({ open, setOpen }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { response, model } = useSelector((state) => state.model);
  const [columns, setColumns] = useState([]);
  const [isAuto, setIsAuto] = useState(true);
  const [algoValue, setAlgoValue] = useState("");
  const [elements, setElements] = useState({
    "Prediction Column": [],
    "ID Column": [],
    "Columns not to use": [],
    "Columns to use": [],
  });
  const [unit, setUnit] = useState("");
  const [label0, setLabel0] = useState("");
  const [label1, setLabel1] = useState("");
  const [disabled, setDisabled] = useState(true);
  useEffect(() => {
    if (elements["Prediction Column"].length === 1 && isAuto) {
      setDisabled(false);
    } else if (elements["Prediction Column"].length === 1 && !isAuto) {
      if (algoValue !== "") {
        setDisabled(false);
      } else {
        setDisabled(true);
      }
    } else if (
      elements["Prediction Column"].length === 0 ||
      (!isAuto && algoValue === "")
    ) {
      setDisabled(true);
    }
  }, [algoValue, elements, isAuto]);
  useEffect(() => {
    if (response && response.columns) {
      setColumns(response.columns);
    }
  }, [response]);
  const handleChecked = (e) => {
    setAlgoValue("");
    setIsAuto(e.target.checked);
  };
  const handleAlgoChange = (e) => {
    setAlgoValue(e.target.value);
  };
  const onClick = (e) => {
    dispatch(
      submitModel({
        elements,
        auto: isAuto,
        algo: algoValue,
        unit,
        label0,
        label1,
      })
    );
  };
  return (
    <Card
      sx={{
        margin: "2em",
        padding: "2em",
        borderRadius: "20px",
        display: "flex",
        flexDirection: "column",
        flex: 1,
      }}
    >
      <Box sx={{ display: "flex", gap: "2.5em" }}>
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
            {model && model.model_type === "RG"
              ? regressionAlgos.map((algo) => (
                  <MenuItem key={algo.value} value={algo.value}>
                    <Tooltip title={algo.tooltip} placement="right">
                      <Typography>{algo.name}</Typography>
                    </Tooltip>
                  </MenuItem>
                ))
              : classificationAlgos.map((algo) => (
                  <MenuItem key={algo.value} value={algo.value}>
                    <Tooltip title={algo.tooltip} placement="right">
                      <Typography>{algo.name}</Typography>
                    </Tooltip>
                  </MenuItem>
                ))}
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
              value={unit}
              onChange={(e) => setUnit(e.target.value)}
            />
            <Tooltip
              title={
                "Unit used by prediction column. For Example: $, Years, cm, %"
              }
            >
              <InfoIcon sx={{ color: "grey" }} />
            </Tooltip>
          </Box>
          <Box sx={{ height: "7em" }}>
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
              value={label0}
              onChange={(e) => setLabel0(e.target.value)}
              variant="outlined"
              label="Label 0 for Prediction Column"
              disabled={model && model.model_type === "RG"}
            />
            <Tooltip
              title={
                "The value 0 represents in the prediction column. For example: Absent, Healthy, Did Not Resign, etc."
              }
            >
              <InfoIcon sx={{ color: "grey" }} />
            </Tooltip>
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
              value={label1}
              onChange={(e) => setLabel1(e.target.value)}
              variant="outlined"
              label="Label 1 for Prediction Column"
              disabled={model && model.model_type === "RG"}
            />
            <Tooltip title="The value 1 represents in the prediction column. For example: Present, Sick, Resigned, etc.">
              <InfoIcon sx={{ color: "grey" }} />
            </Tooltip>
          </Box>
        </Box>
      </Box>
      <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
        <Button variant="contained" disabled={disabled} onClick={onClick}>
          Next
        </Button>
      </Box>
    </Card>
  );
};

export default Body;
