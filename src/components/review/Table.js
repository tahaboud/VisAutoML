import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useEffect, useState } from "react";
import TableFooter from "@mui/material/TableFooter";
import TablePagination from "@mui/material/TablePagination";
import { useSelector } from "react-redux";
import { TextField } from "@mui/material";

const TableComponent = ({ descrip, setDescrip }) => {
  const { response, description } = useSelector((state) => state.model);
  const [page, setPage] = useState(0);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  useEffect(() => {
    if (description && description.description) {
      setDescrip(description.description);
    }
  }, [description]);

  const onChange = (e, name) => {
    let new_descr = descrip;
    new_descr[name] = e.target.value;
    setDescrip(new_descr);
  };

  return (
    <TableContainer component={Paper} sx={{ backgroundColor: "#ffffff" }}>
      <Table>
        <TableHead>
          <TableRow>
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
              Empty
            </TableCell>
            <TableCell
              align="left"
              sx={{
                fontFamily: "Open Sans",
                fontSize: "1rem",
                fontWeight: "bold",
              }}
            >
              Fit For Use
            </TableCell>
            <TableCell
              align="left"
              sx={{
                fontFamily: "Open Sans",
                fontSize: "1rem",
                fontWeight: "bold",
              }}
            >
              Data Type
            </TableCell>
            <TableCell
              align="left"
              sx={{
                fontFamily: "Open Sans",
                fontSize: "1rem",
                fontWeight: "bold",
                width: "50%",
              }}
            >
              Column Description
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {response &&
            response.result.slice(page * 5, page * 5 + 5).map((row, index) => (
              <TableRow
                key={index}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
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
                  {row.empty}%
                </TableCell>
                <TableCell
                  align="left"
                  sx={{
                    fontFamily: "Open Sans",
                    fontSize: "1rem",
                  }}
                >
                  {row.fit_for_use ? "Yes" : "No"}
                </TableCell>
                <TableCell
                  align="left"
                  sx={{
                    fontFamily: "Open Sans",
                    fontSize: "1rem",
                  }}
                >
                  {row.type}
                </TableCell>
                <TableCell
                  align="left"
                  sx={{
                    fontFamily: "Open Sans",
                    fontSize: "1rem",
                  }}
                >
                  <TextField
                    multiline
                    fullWidth
                    maxRows={2}
                    placeholder={"Max: 50 characters"}
                    size="small"
                    inputProps={{ maxLength: 50 }}
                    value={descrip[row.name]}
                    onChange={(e) => onChange(e, row.name)}
                  />
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TablePagination
              count={response && response.result ? response.result.length : 0}
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
