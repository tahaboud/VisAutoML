import { Box, Divider } from "@mui/material";
import Navbar from "../components/common/Navbar";
import Body from "../components/home/Body";

const Home = () => {
  return (
    <Box sx={{ display: "flex", minHeight: "100vh" }}>
      <Navbar />
      <Divider orientation="vertical" flexItem sx={{ margin: "1em" }} />
      <Body />
    </Box>
  );
};

export default Home;
