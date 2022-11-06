import { Box } from "@mui/material";
import { useState } from "react";
import Navbar from "../components/common/Navbar";
import BackDialog from "../components/select/BackDialog";
import Body from "../components/select/Body";

const Select = () => {
  const [backDialogOpen, setBackDialogOpen] = useState(false);
  return (
    <Box sx={{ display: "flex", minHeight: "100vh" }}>
      <Navbar />
      <Body open={backDialogOpen} setOpen={setBackDialogOpen} />
      <BackDialog open={backDialogOpen} setOpen={setBackDialogOpen} />
    </Box>
  );
};

export default Select;
