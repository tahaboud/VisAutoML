import {
  Box,
  Button,
  Card,
  IconButton,
  MenuItem,
  TextField,
  Typography,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useDispatch, useSelector } from "react-redux";
import TableComponent from "./Table";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import Alert from "@mui/material/Alert";
import CheckIcon from "@mui/icons-material/Check";
import { saveDescription } from "../../actions/modelAction";
import { useState } from "react";
import Chart from "./Chart";
import { useNavigate } from "react-router-dom";

const Body = ({ backDialogOpen, setBackDialogOpen }) => {
  const { isLoading, response, histogram } = useSelector(
    (state) => state.model
  );
  const [descrip, setDescrip] = useState({});
  const [column, setColumn] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleBack = () => {
    setBackDialogOpen(true);
  };
  const onClick = () => {
    dispatch(saveDescription(descrip));
    navigate("/select");
  };
  const onChange = (e) => {
    setColumn(e.target.value);
  };
  return isLoading ? (
    <Backdrop
      sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
      open={isLoading}
    >
      <CircularProgress color="inherit" />
    </Backdrop>
  ) : (
    <Card
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "1em",
        flex: "1",
        margin: "2em",
        padding: "2em",
        borderRadius: "20px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          gap: "1em",
        }}
      >
        <Box sx={{ width: "13em" }}>
          <Box sx={{ display: "flex" }}>
            <IconButton onClick={handleBack}>
              <ArrowBackIcon />
            </IconButton>
            <Typography
              sx={{
                fontSize: "1.5rem",
                fontWeight: "bolder",
                fontFamily: "Open Sans",
              }}
            >
              Review
            </Typography>
          </Box>
          {response && response.fileFitForUse ? (
            <Alert severity="success" sx={{ margin: "1em 0" }}>
              File is fit for predictions.
            </Alert>
          ) : (
            <Alert severity="error" sx={{ margin: "1em 0" }}>
              File is not fit for predictions.
            </Alert>
          )}
          {response && response.rows ? (
            <Alert
              icon={<CheckIcon fontSize="inherit" />}
              sx={{ margin: "1em 0" }}
              severity="success"
            >
              Total Rows: {response.rows}
            </Alert>
          ) : (
            ""
          )}
          {response && response.columnsLength ? (
            <Alert
              icon={<CheckIcon fontSize="inherit" />}
              sx={{ margin: "1em 0" }}
              severity="success"
            >
              Total Columns: {response.columnsLength}
            </Alert>
          ) : (
            ""
          )}
          {response ? (
            <Alert
              icon={<CheckIcon fontSize="inherit" />}
              sx={{ margin: "1em 0" }}
              severity="success"
            >
              Unfit Rows: {response.unfitRows}
            </Alert>
          ) : (
            ""
          )}
          {response ? (
            <Alert
              icon={<CheckIcon fontSize="inherit" />}
              sx={{ margin: "1em 0" }}
              severity="success"
            >
              Unfit Columns: {response.unfitColumns}
            </Alert>
          ) : (
            ""
          )}
        </Box>
        <Box>
          <Typography
            sx={{
              fontSize: "1.5rem",
              fontWeight: "bolder",
              fontFamily: "Open Sans",
              margin: "0 0 1em 0",
            }}
          >
            Columns
          </Typography>
          <TableComponent descrip={descrip} setDescrip={setDescrip} />
        </Box>
      </Box>
      <Box>
        <Box sx={{ display: "flex", gap: "1em" }}>
          <Typography
            sx={{
              fontSize: "1.5rem",
              fontWeight: "bolder",
              fontFamily: "Open Sans",
            }}
          >
            Distribution
          </Typography>
          <TextField
            select
            label="Column"
            value={column}
            onChange={onChange}
            size="small"
            sx={{ minWidth: "10em" }}
            disabled={histogram && Object.keys(histogram).length === 0}
          >
            {histogram &&
              Object.keys(histogram).map((key, index) => (
                <MenuItem key={index} value={key}>
                  {key}
                </MenuItem>
              ))}
          </TextField>
        </Box>

        {histogram && Object.keys(histogram).length > 0 ? (
          column === "" ? (
            <Box
              sx={{
                margin: "1em",
                fontSize: "1.5rem",
                fontFamily: "Open Sans",
                textAlign: "center",
              }}
            >
              Please choose a column from the dropdown
            </Box>
          ) : (
            <Chart data={histogram[column]} label={column} />
          )
        ) : (
          <Box
            sx={{
              margin: "1em",
              fontSize: "1.5rem",
              fontFamily: "Open Sans",
              textAlign: "center",
            }}
          >
            There is no columns of type "Integer" to display
          </Box>
        )}
      </Box>

      <Box sx={{ display: "flex", justifyContent: "end", margin: "1em 0 0 0" }}>
        <Button
          variant="contained"
          disabled={response && !response.fileFitForUse}
          onClick={onClick}
        >
          Next
        </Button>
      </Box>
    </Card>
  );
};

export default Body;
