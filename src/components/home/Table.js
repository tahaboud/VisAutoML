import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { IconButton } from "@mui/material";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import DeleteIcon from "@mui/icons-material/Delete";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import TableFooter from "@mui/material/TableFooter";
import TablePagination from "@mui/material/TablePagination";

const TableComponent = ({ setOpen }) => {
  const navigate = useNavigate();
  const [page, setPage] = useState(0);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const rows = [
    {
      name: "Rawang Property",
      model_type: "Regression",
      algorithm_type: "Algorithm 1",
      score: "10",
    },
    {
      name: "Rawang Property",
      model_type: "Regression",
      algorithm_type: "Algorithm 1",
      score: "10",
    },
    {
      name: "Rawang Property",
      model_type: "Regression",
      algorithm_type: "Algorithm 1",
      score: "10",
    },
    {
      name: "Rawang Property",
      model_type: "Regression",
      algorithm_type: "Algorithm 1",
      score: "10",
    },
    {
      name: "Rawang Property",
      model_type: "Regression",
      algorithm_type: "Algorithm 1",
      score: "10",
    },
  ];
  return (
    <TableContainer
      component={Paper}
      sx={{ backgroundColor: "#ffffff", width: "50em" }}
    >
      <Table>
        <TableHead>
          <TableRow>
            <TableCell
              size="small"
              align="left"
              sx={{
                fontFamily: "Open Sans",
                fontSize: "1rem",
                fontWeight: "bold",
              }}
            >
              Action
            </TableCell>
            <TableCell
              align="left"
              sx={{
                fontFamily: "Open Sans",
                fontSize: "1rem",
                fontWeight: "bold",
              }}
            >
              Name
            </TableCell>
            <TableCell
              align="left"
              sx={{
                fontFamily: "Open Sans",
                fontSize: "1rem",
                fontWeight: "bold",
              }}
            >
              Model Type
            </TableCell>
            <TableCell
              align="left"
              sx={{
                fontFamily: "Open Sans",
                fontSize: "1rem",
                fontWeight: "bold",
              }}
            >
              Algorithm Type
            </TableCell>
            <TableCell
              align="left"
              sx={{
                fontFamily: "Open Sans",
                fontSize: "1rem",
                fontWeight: "bold",
              }}
            >
              Overall Score
            </TableCell>
            <TableCell
              align="left"
              sx={{
                fontFamily: "Open Sans",
                fontSize: "1rem",
                fontWeight: "bold",
              }}
            >
              Delete
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.slice(page * 5, page * 5 + 5).map((row, index) => (
            <TableRow
              key={index}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                <IconButton onClick={() => navigate("/model")}>
                  <OpenInNewIcon />
                </IconButton>
              </TableCell>
              <TableCell
                align="left"
                sx={{
                  fontFamily: "Open Sans",
                  fontSize: "1rem",
                }}
              >
                {row.name}
              </TableCell>
              <TableCell
                align="left"
                sx={{
                  fontFamily: "Open Sans",
                  fontSize: "1rem",
                }}
              >
                {row.model_type}
              </TableCell>
              <TableCell
                align="left"
                sx={{
                  fontFamily: "Open Sans",
                  fontSize: "1rem",
                }}
              >
                {row.algorithm_type}
              </TableCell>
              <TableCell
                align="left"
                sx={{
                  fontFamily: "Open Sans",
                  fontSize: "1rem",
                }}
              >
                {row.score}
              </TableCell>
              <TableCell align="left">
                <IconButton color="error" onClick={() => setOpen(true)}>
                  <DeleteIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TablePagination
              count={rows.length}
              rowsPerPage={5}
              page={page}
              rowsPerPageOptions={[]}
              onPageChange={handleChangePage}
            />
          </TableRow>
        </TableFooter>
      </Table>
    </TableContainer>
  );
};

export default TableComponent;
