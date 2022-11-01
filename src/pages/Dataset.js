import { Box } from "@mui/material";
import Navbar from "../components/common/Navbar";
import Body from "../components/dataset/Body";

const Dataset = () => {
  return (
    <Box sx={{ display: "flex", minHeight: "100vh" }}>
      <Navbar />
      <Body />
    </Box>
  );
};

export default Dataset;
