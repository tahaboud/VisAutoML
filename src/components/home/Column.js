import { Box, IconButton, Typography } from "@mui/material";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import DeleteIcon from "@mui/icons-material/Delete";
import { useNavigate } from "react-router-dom";

const Column = ({ setOpen }) => {
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        backgroundColor: "#FFFFFF",
        borderRadius: "10px",
        width: "100%",
        margin: ".5em 0",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <IconButton onClick={() => navigate("/model")}>
          <OpenInNewIcon />
        </IconButton>
        <Box sx={{}}>
          <Typography sx={{ color: "#d7d7d7", fontWeight: "bold" }}>
            Name
          </Typography>
          <Typography sx={{ fontWeight: "bold" }}>Rawang Property</Typography>
        </Box>
        <Box>
          <Typography sx={{ color: "#d7d7d7", fontWeight: "bold" }}>
            Model Type
          </Typography>
          <Typography sx={{ fontWeight: "bold" }}>Regression</Typography>
        </Box>
        <Box>
          <Typography sx={{ color: "#d7d7d7", fontWeight: "bold" }}>
            Model Name
          </Typography>
          <Typography sx={{ fontWeight: "bold" }}>Model 1</Typography>
        </Box>
        <Box>
          <Typography sx={{ color: "#d7d7d7", fontWeight: "bold" }}>
            Overall Score
          </Typography>
          <Typography sx={{ fontWeight: "bold" }}>10</Typography>
        </Box>
        <Box>
          <IconButton color="error" onClick={() => setOpen(true)}>
            <DeleteIcon />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
};

export default Column;
