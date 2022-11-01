import { Box } from "@mui/material";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { reset } from "../actions/modelAction";
import Navbar from "../components/common/Navbar";
import Body from "../components/home/Body";

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(reset());
  }, []);
  return (
    <Box sx={{ display: "flex", minHeight: "100vh" }}>
      <Navbar />
      <Body />
    </Box>
  );
};

export default Home;
