import { Box } from "@mui/material";
import { useState } from "react";
import Navbar from "../components/common/Navbar";
import BackDialog from "../components/dataset/BackDialog";
import Body from "../components/dataset/Body";

const Dataset = () => {
  const [backDialogOpen, setBackDialogOpen] = useState(false);
  return (
    <Box sx={{ display: "flex", minHeight: "100vh" }}>
      <Navbar />
      <Body
        backDialogOpen={backDialogOpen}
        setBackDialogOpen={setBackDialogOpen}
      />
      <BackDialog open={backDialogOpen} setOpen={setBackDialogOpen} />
    </Box>
  );
};

export default Dataset;
