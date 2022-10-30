import { Box, Button, Divider, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import AddchartOutlinedIcon from "@mui/icons-material/AddchartOutlined";
import PlayCircleFilledOutlinedIcon from "@mui/icons-material/PlayCircleFilledOutlined";

import Column from "./Column";
import { useState } from "react";
import NewModelDialog from "./NewModelDialog";
import VideoDialog from "./VideoDialog";
import DeleteDialog from "./DeleteDialog";

const Body = () => {
  const [newModelOpen, setNewModelOpen] = useState(false);
  const [videoDialogOpen, setVideoDialogOpen] = useState(false);
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [modelName, setModelName] = useState("");
  const [modelType, setModelType] = useState("");
  const [videoTitle, setVideoTitle] = useState("");
  const [videoUrl, setVideoUrl] = useState("");

  const onOpenTutorial = (title, url) => {
    setVideoTitle(title);
    setVideoUrl(url);
    setVideoDialogOpen(true);
  };

  return (
    <Box sx={{ flex: 1 }}>
      <Box sx={{ display: "flex", margin: "1em", width: "100%" }}>
        <Box>
          <Typography
            sx={{ color: "#5c5c5c", fontWeight: "bold", margin: "0 0 1em 0" }}
          >
            Create New Prediction Model
          </Typography>
          <Box>
            <Box
              sx={{
                width: "15em",
                height: "10em",
                backgroundColor: "#1a71ff",
                color: "white",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "10px",
              }}
            >
              <AddchartOutlinedIcon sx={{ height: "5em", width: "3em" }} />
            </Box>
            <Button
              startIcon={<AddIcon />}
              fullWidth
              sx={{
                color: "#5c5c5c",
                backgroundColor: "#ffffff",
                fontWeight: "bold",
              }}
              onClick={() => setNewModelOpen(true)}
            >
              New Model
            </Button>
          </Box>
        </Box>
        <Divider orientation="vertical" flexItem sx={{ margin: "0 1em" }} />
        <Box>
          <Typography
            sx={{ color: "#5c5c5c", fontWeight: "bold", margin: "0 0 1em 0" }}
          >
            How it works
          </Typography>
          <Box sx={{ display: "flex" }}>
            <Box sx={{ margin: "0 1em 0 0" }}>
              <Box
                sx={{
                  width: "15em",
                  height: "10em",
                  backgroundColor: "#00000",
                  color: "white",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: "10px",
                  border: "4px solid #000000",
                }}
              >
                <PlayCircleFilledOutlinedIcon
                  sx={{
                    height: "5em",
                    width: "3em",
                    color: "#000000",
                  }}
                />
              </Box>
              <Button
                fullWidth
                onClick={() =>
                  onOpenTutorial("Tutorial 1", "https://youtu.be/oUFJJNQGwhk")
                }
                sx={{
                  color: "#5c5c5c",
                  backgroundColor: "#ffffff",
                  fontWeight: "bold",
                }}
              >
                Tutorial 1
              </Button>
            </Box>
            <Box>
              <Box
                sx={{
                  width: "15em",
                  height: "10em",
                  backgroundColor: "#00000",
                  color: "white",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: "10px",
                  border: "4px solid #000000",
                }}
              >
                <PlayCircleFilledOutlinedIcon
                  sx={{
                    height: "5em",
                    width: "3em",
                    color: "#000000",
                  }}
                />
              </Box>
              <Button
                fullWidth
                onClick={() =>
                  onOpenTutorial("Tutorial 2", "https://youtu.be/oUFJJNQGwhk")
                }
                sx={{
                  color: "#5c5c5c",
                  backgroundColor: "#ffffff",
                  fontWeight: "bold",
                }}
              >
                Tutorial 1
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box sx={{ margin: "1em" }}>
        <Typography
          sx={{ color: "#5c5c5c", fontWeight: "bold", margin: "0 0 2em 0" }}
        >
          Models
        </Typography>
        <Box sx={{ maxHeight: "40vh", overflowY: "scroll" }}>
          <Column setOpen={setDeleteDialogOpen} />
          <Column setOpen={setDeleteDialogOpen} />
          <Column setOpen={setDeleteDialogOpen} />
          <Column setOpen={setDeleteDialogOpen} />
          <Column setOpen={setDeleteDialogOpen} />
          <Column setOpen={setDeleteDialogOpen} />
        </Box>
      </Box>
      <NewModelDialog
        open={newModelOpen}
        setOpen={setNewModelOpen}
        name={modelName}
        setName={setModelName}
        type={modelType}
        setType={setModelType}
      />
      <VideoDialog
        open={videoDialogOpen}
        setOpen={setVideoDialogOpen}
        title={videoTitle}
        url={videoUrl}
      />
      <DeleteDialog open={deleteDialogOpen} setOpen={setDeleteDialogOpen} />
    </Box>
  );
};

export default Body;
