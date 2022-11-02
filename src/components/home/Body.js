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
              fontWeight: "bolder",
              margin: "0 0 1em 0",
              fontFamily: "Open Sans",
              fontSize: "1.5rem",
            }}
          >
            Home
          </Typography>
          <Box>
            <Card
              elevation={4}
              sx={{
                width: "15em",
                height: "13em",
                backgroundColor: "#ffffff",
                color: "#000000",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                borderBottomLeftRadius: "0",
                borderBottomRightRadius: "0",
              }}
              onClick={() => setNewModelOpen(true)}
            >
              <Box
                sx={{
                  flex: 1,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <img src={newDocument} style={{ height: "7em" }} />
              </Box>
              <Button
                startIcon={<AddIcon />}
                fullWidth
                sx={{
                  color: "#ffffff",
                  backgroundColor: "#1a97f5",
                  fontWeight: "bold",
                  fontFamily: "Open Sans",
                  borderRadius: "0",
                  "&:hover": {
                    backgroundColor: "#1a97f5",
                    color: "#ffffff",
                  },
                }}
                onClick={() => setNewModelOpen(true)}
              >
                New Model
              </Button>
            </Card>
          </Box>
        </Box>
        <Divider orientation="vertical" flexItem sx={{ margin: "0 1em" }} />
        <Box>
          <Typography
            sx={{
              color: "#000000",
              fontWeight: "bolder",
              fontSize: "1.5rem",
              margin: "0 0 1em 0",
              fontFamily: "Open Sans",
            }}
          >
            How it works
          </Typography>
          <Box sx={{ display: "flex" }}>
            <Box sx={{ margin: "0 1em 0 0" }}>
              <Card
                elevation={4}
                sx={{
                  width: "15em",
                  height: "13em",
                  backgroundColor: "#ffffff",
                  color: "white",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                }}
              >
                <Box sx={{ flex: 1, display: "flex", alignItems: "center" }}>
                  <img src={playButton} style={{ height: "6em" }} />
                </Box>
                <Button
                  fullWidth
                  onClick={() =>
                    onOpenTutorial("Tutorial 1", "https://youtu.be/oUFJJNQGwhk")
                  }
                  sx={{
                    color: "#ffffff",
                    backgroundColor: "#1a97f5",
                    fontWeight: "bold",
                    fontFamily: "Open Sans",
                    borderRadius: "0",
                    "&:hover": {
                      backgroundColor: "#1a97f5",
                      color: "#ffffff",
                    },
                  }}
                >
                  Regression
                </Button>
              </Card>
            </Box>
            <Box>
              <Card
                elevation={4}
                sx={{
                  width: "15em",
                  height: "13em",
                  backgroundColor: "#ffffff",
                  color: "white",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                }}
              >
                <Box sx={{ flex: 1, display: "flex", alignItems: "center" }}>
                  <img src={playButton} style={{ height: "6em" }} />
                </Box>
                <Button
                  fullWidth
                  onClick={() =>
                    onOpenTutorial("Tutorial 1", "https://youtu.be/oUFJJNQGwhk")
                  }
                  sx={{
                    color: "#ffffff",
                    backgroundColor: "#1a97f5",
                    fontWeight: "bold",
                    fontFamily: "Open Sans",
                    borderRadius: "0",
                    "&:hover": {
                      backgroundColor: "#1a97f5",
                      color: "#ffffff",
                    },
                  }}
                >
                  Classification
                </Button>
              </Card>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box sx={{ margin: "3em 0 0 1em" }}>
        <Typography
          sx={{
            color: "#000000",
            fontWeight: "bolder",
            fontSize: "1.5rem",
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
