import React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import ResponsiveAppBar from "../Navbar";

const JsonToTable = () => {
  const [jsonData, setJsonData] = React.useState(null);
  const [data, setData] = React.useState(null);

  const handleJosnData = (e) => {
    setJsonData(e.target.value);
  };

  const handleSubmit = () => {
    setData(JSON.parse(jsonData));
  };

  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    "&:last-child td, &:last-child th": {
      border: 0,
    },
  }));

  return (
    <>
      <ResponsiveAppBar handleSubmit={handleSubmit} />
      <div style={{ paddingTop: "80px" }}>
        <textarea
          rows="35"
          cols="120"
          placeholder="Enter JSON data"
          onChange={handleJosnData}
        />
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead>
              <TableRow>
                {data &&
                  Object.keys(data[0]).map((r) => {
                    return <StyledTableCell>{r}</StyledTableCell>;
                  })}
              </TableRow>
            </TableHead>
            <TableBody>
              {data &&
                data.map((r) => {
                  return (
                    <StyledTableRow>
                      {Object.values(r).map((res) => {
                        return <StyledTableCell>{res}</StyledTableCell>;
                      })}
                    </StyledTableRow>
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </>
  );
};

export default JsonToTable;
