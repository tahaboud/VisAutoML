import { Box, Card, Link, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import {
  ModelTraining,
  QueryStats,
  Storage,
  Webhook,
} from "@mui/icons-material";

const Navbar = () => {
  const { name, type, file } = useSelector((state) => state.model);
  const [active, setActive] = useState("home");
  const navigate = useNavigate();
  const location = useLocation();
  useEffect(() => {
    switch (location.pathname) {
      case "":
        setActive("home");
        break;
      case "/dataset":
        setActive("dataset");
        break;
      case "/select":
        setActive("select");
        break;
      case "/review":
        setActive("review");
        break;
      case "/model":
        setActive("model");
        break;

      default:
        break;
    }
  }, []);
  const onClick = (link) => {
    if (link === "/") {
      navigate(link);
    } else if (link === "/review" && file === null) {
    } else {
      if (name !== "" && type !== "") {
        navigate(link);
      }
    }
  };

  return (
    <Card sx={{ padding: "1em", width: "120px" }}>
      <Box
        sx={{
          textAlign: "center",
          color: "#707580",
          padding: ".2em .5em",
          width: "100%",
          margin: "0 ",
        }}
      >
        <Typography sx={{ fontWeight: "bold" }}>VisAutoML</Typography>
      </Box>
      <Box sx={{ margin: "3em 0 0 1em" }}>
        <Link
          underline="none"
          sx={{
            margin: "1em 0",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            gap: "1em",
            color: active === "home" ? "blue" : "black",
          }}
          onClick={() => onClick("/")}
        >
          <HomeIcon />
          <Typography
            sx={{
              textAlign: "left",
              fontWeight: "bold",
            }}
          >
            Home
          </Typography>
        </Link>
        <Link
          underline="none"
          sx={{
            margin: "1em 0",
            cursor: name === "" || type === "" ? "default" : "pointer",
            display: "flex",
            alignItems: "center",
            gap: "1em",
            color:
              name === "" || type === ""
                ? "#d1d1d1"
                : active === "dataset"
                ? "blue"
                : "black",
          }}
          onClick={() => onClick("/dataset")}
        >
          <Storage />
          <Typography
            sx={{
              textAlign: "left",
              fontWeight: "bold",
            }}
          >
            Dataset
          </Typography>
        </Link>
        <Link
          underline="none"
          sx={{
            margin: "1em 0",
            cursor: file === null ? "default" : "pointer",
            display: "flex",
            alignItems: "center",
            gap: "1em",
            color: file ? (active === "review" ? "blue" : "black") : "#d1d1d1",
          }}
          onClick={() => onClick("/review")}
        >
          <QueryStats />
          <Typography
            sx={{
              textAlign: "left",
              fontWeight: "bold",
            }}
          >
            Review
          </Typography>
        </Link>
        <Link
          underline="none"
          sx={{
            margin: "1em 0",
            cursor: name === "" || type === "" ? "default" : "pointer",
            display: "flex",
            alignItems: "center",
            gap: "1em",
            color:
              name === "" || type === ""
                ? "#d1d1d1"
                : active === "select"
                ? "blue"
                : "black",
          }}
          onClick={() => onClick("/select")}
        >
          <Webhook />
          <Typography
            sx={{
              textAlign: "left",
              fontWeight: "bold",
            }}
          >
            Select
          </Typography>
        </Link>
        <Link
          underline="none"
          sx={{
            margin: "1em 0",
            cursor: name === "" || type === "" ? "default" : "pointer",
            display: "flex",
            alignItems: "center",
            gap: "1em",
            color:
              name === "" || type === ""
                ? "#d1d1d1"
                : active === "model"
                ? "blue"
                : "black",
          }}
          onClick={() => onClick("/model")}
        >
          <ModelTraining />
          <Typography
            sx={{
              textAlign: "left",
              fontWeight: "bold",
            }}
          >
            Model
          </Typography>
        </Link>
      </Box>
    </Card>
  );
};

export default Navbar;
