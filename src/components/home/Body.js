import { Box, Button, Card, Divider, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import NewModelDialog from "./NewModelDialog";
import VideoDialog from "./VideoDialog";
import DeleteDialog from "./DeleteDialog";
import newDocument from "../../static/images/newDocument.png";
import playButton from "../../static/images/play-button.png";
import { useState } from "react";
import TableComponent from "./Table";

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
    <Box
      sx={{
        flex: 1,
        margin: "2em 0 0 0",
        backgroundColor: "#ffffff",
        margin: "2em",
        padding: "1em",
        borderRadius: "20px",
      }}
    >
      <Box sx={{ display: "flex", margin: "1em", width: "100%", gap: "2em" }}>
        <Box>
          <Typography
            sx={{
              color: "#000000",
              fontWeight: "bold",
              margin: "0 0 1em 0",
              fontFamily: "Open Sans",
            }}
          >
            Create New Prediction Model
          </Typography>
          <Box>
            <Card
              elevation="4"
              sx={{
                width: "15em",
                height: "10em",
                backgroundColor: "#ffffff",
                color: "#000000",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                "&:hover": {
                  backgroundColor: "#03c9d7",
                  fill: "#ffffff",
                },
              }}
              onClick={() => setNewModelOpen(true)}
            >
              <img src={newDocument} style={{ height: "7em" }} />
            </Card>
            <Button
              startIcon={<AddIcon />}
              fullWidth
              sx={{
                color: "#ffffff",
                backgroundColor: "#03c9d7",
                fontWeight: "bold",
                fontFamily: "Open Sans",
                borderRadius: "0",
                "&:hover": {
                  backgroundColor: "#03b3c0",
                  color: "#ffffff",
                },
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
            sx={{
              color: "#000000",
              fontWeight: "bold",
              margin: "0 0 1em 0",
              fontFamily: "Open Sans",
            }}
          >
            How it works
          </Typography>
          <Box sx={{ display: "flex" }}>
            <Box sx={{ margin: "0 1em 0 0" }}>
              <Card
                elevation="4"
                sx={{
                  width: "15em",
                  height: "10em",
                  backgroundColor: "#ffffff",
                  color: "white",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                  "&:hover": {
                    backgroundColor: "#e6e6e6",
                  },
                }}
              >
                <img src={playButton} style={{ height: "6em" }} />
              </Card>
              <Button
                fullWidth
                onClick={() =>
                  onOpenTutorial("Tutorial 1", "https://youtu.be/oUFJJNQGwhk")
                }
                sx={{
                  color: "#ffffff",
                  backgroundColor: "#03c9d7",
                  fontWeight: "bold",
                  fontFamily: "Open Sans",
                  borderRadius: "0",
                  "&:hover": {
                    backgroundColor: "#03b3c0",
                    color: "#ffffff",
                  },
                }}
              >
                Tutorial 1
              </Button>
            </Box>
            <Box>
              <Card
                elevation="4"
                sx={{
                  width: "15em",
                  height: "10em",
                  backgroundColor: "#ffffff",
                  color: "white",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                  "&:hover": {
                    backgroundColor: "#e6e6e6",
                  },
                }}
              >
                <img src={playButton} style={{ height: "6em" }} />
              </Card>
              <Button
                fullWidth
                onClick={() =>
                  onOpenTutorial("Tutorial 2", "https://youtu.be/oUFJJNQGwhk")
                }
                sx={{
                  color: "#ffffff",
                  backgroundColor: "#03c9d7",
                  fontWeight: "bold",
                  fontFamily: "Open Sans",
                  borderRadius: "0",
                  "&:hover": {
                    backgroundColor: "#03b3c0",
                    color: "#ffffff",
                  },
                }}
              >
                Tutorial 1
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box sx={{ margin: "2em 0 0 1em" }}>
        <Typography
          sx={{
            color: "#000000",
            fontWeight: "bold",
            margin: "0 0 2em 0",
            fontFamily: "Open Sans",
          }}
        >
          Models
        </Typography>
        <TableComponent setOpen={setDeleteDialogOpen} />
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
