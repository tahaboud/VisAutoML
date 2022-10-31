import { Box, Link, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";

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
    <Box sx={{ padding: "1em", width: "120px" }}>
      <Box
        sx={{
          textAlign: "center",
          backgroundColor: "blue",
          color: "white",
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
          sx={{ margin: "1em 0", cursor: "pointer" }}
          onClick={() => onClick("/")}
        >
          <Typography
            sx={{
              textAlign: "left",
              fontWeight: "bold",
              color: active === "home" ? "blue" : "black",
              margin: "1em 0",
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
          }}
          onClick={() => onClick("/dataset")}
        >
          <Typography
            sx={{
              textAlign: "left",
              fontWeight: "bold",
              color:
                name === "" || type === ""
                  ? "#d1d1d1"
                  : active === "dataset"
                  ? "blue"
                  : "black",
              margin: "1em 0",
            }}
          >
            Dataset
          </Typography>
        </Link>
        <Link
          underline="none"
          sx={{
            margin: "1em 0",
            cursor: name === "" || type === "" ? "default" : "pointer",
          }}
          onClick={() => onClick("/review")}
        >
          <Typography
            sx={{
              textAlign: "left",
              fontWeight: "bold",
              color: file
                ? active === "review"
                  ? "blue"
                  : "black"
                : "#d1d1d1",
              margin: "1em 0",
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
          }}
          onClick={() => onClick("/select")}
        >
          <Typography
            sx={{
              textAlign: "left",
              fontWeight: "bold",
              color:
                name === "" || type === ""
                  ? "#d1d1d1"
                  : active === "select"
                  ? "blue"
                  : "black",
              margin: "1em 0",
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
          }}
          onClick={() => onClick("/model")}
        >
          <Typography
            sx={{
              textAlign: "left",
              fontWeight: "bold",
              color:
                name === "" || type === ""
                  ? "#d1d1d1"
                  : active === "model"
                  ? "blue"
                  : "black",
              margin: "1em 0",
            }}
          >
            Model
          </Typography>
        </Link>
      </Box>
    </Box>
  );
};

export default Navbar;
