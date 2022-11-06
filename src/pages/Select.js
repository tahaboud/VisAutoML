import { Box } from "@mui/material";
import Navbar from "../components/common/Navbar";
import Body from "../components/select/Body";

const Select = () => {
  return (
    <Box sx={{ display: "flex", minHeight: "100vh" }}>
      <Navbar />
      <Body />
    </Box>
  );
};

export default Select;
