import { Box, Card, Link, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { BiNetworkChart } from "react-icons/bi";
import { RiHomeLine } from "react-icons/ri";
import { FaDatabase } from "react-icons/fa";
import { BsEyeglasses } from "react-icons/bs";
import { GoSettings } from "react-icons/go";
import { MdOutlineVisibility } from "react-icons/md";

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
    } else if (link === "/dataset" && name !== "" && type !== "") {
      navigate(link);
    } else if (file === null) {
    } else {
      if (name !== "" && type !== "") {
        navigate(link);
      }
    }
  };

  return (
    <Card sx={{ padding: "1em", width: "13em", minWidth: "12em" }}>
      <Box
        sx={{
          textAlign: "center",
          color: "#000000",
          padding: ".2em .5em",
          width: "100%",
          margin: "0",
          display: "flex",
          alignItems: "center",
          gap: "1em",
        }}
      >
        <BiNetworkChart size="25px" />
        <Typography
          sx={{
            fontWeight: "bolder",
            fontFamily: "Open Sans",
            fontSize: "1.25rem",
          }}
        >
          VisAutoML
        </Typography>
      </Box>
      <Box sx={{ margin: "3em 0 0 0" }}>
        <Typography
          sx={{
            fontFamily: "Open Sans",
            fontSize: "1rem",
            fontWeight: "500",
            color: "#c0c5cc",
          }}
        >
          MENU
        </Typography>
        <Link
          underline="none"
          sx={{
            margin: "1em 0",
            padding: ".5em 1em",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            gap: "1em",
            color: active === "home" ? "#ffffff" : "#000000",
            backgroundColor: active === "home" ? "#1a97f5" : "#FFFFFF",
            borderRadius: "5px",
          }}
          onClick={() => onClick("/")}
        >
          <RiHomeLine />
          <Typography
            sx={{
              textAlign: "left",
              fontWeight: "bold",
              fontFamily: "Open Sans",
            }}
          >
            Home
          </Typography>
        </Link>
        <Typography
          sx={{
            fontFamily: "Open Sans",
            fontSize: "1rem",
            fontWeight: "500",
            color: "#c0c5cc",
          }}
        >
          DATA
        </Typography>
        <Link
          underline="none"
          sx={{
            margin: "1em 0",
            backgroundColor: active === "dataset" ? "#1a97f5" : "#FFFFFF",
            margin: "1em 0",
            padding: ".5em 1em",
            borderRadius: "5px",
            cursor: name === "" || type === "" ? "default" : "pointer",
            display: "flex",
            alignItems: "center",
            gap: "1em",
            color:
              name === "" || type === ""
                ? "#d1d1d1"
                : active === "dataset"
                ? "#ffffff"
                : "#000000",
          }}
          onClick={() => onClick("/dataset")}
        >
          <FaDatabase />
          <Typography
            sx={{
              textAlign: "left",
              fontWeight: "bold",
              fontFamily: "Open Sans",
            }}
          >
            Dataset
          </Typography>
        </Link>
        <Link
          underline="none"
          sx={{
            margin: "1em 0",
            backgroundColor: active === "review" ? "#1a97f5" : "#FFFFFF",
            margin: "1em 0",
            padding: ".5em 1em",
            borderRadius: "5px",
            cursor: file === null ? "default" : "pointer",
            display: "flex",
            alignItems: "center",
            gap: "1em",
            color: file
              ? active === "review"
                ? "#ffffff"
                : "#000000"
              : "#d1d1d1",
          }}
          onClick={() => onClick("/review")}
        >
          <BsEyeglasses />
          <Typography
            sx={{
              textAlign: "left",
              fontWeight: "bold",
              fontFamily: "Open Sans",
            }}
          >
            Review
          </Typography>
        </Link>
        <Typography
          sx={{
            fontFamily: "Open Sans",
            fontSize: "1rem",
            fontWeight: "500",
            color: "#c0c5cc",
          }}
        >
          MODEL
        </Typography>
        <Link
          underline="none"
          sx={{
            margin: "1em 0",
            backgroundColor: active === "select" ? "#1a97f5" : "#FFFFFF",
            margin: "1em 0",
            padding: ".5em 1em",
            borderRadius: "5px",
            cursor: name === "" || type === "" ? "default" : "pointer",
            display: "flex",
            alignItems: "center",
            gap: "1em",
            color:
              file === null
                ? "#d1d1d1"
                : active === "select"
                ? "#ffffff"
                : "#000000",
          }}
          onClick={() => onClick("/select")}
        >
          <GoSettings />
          <Typography
            sx={{
              textAlign: "left",
              fontWeight: "bold",
              fontFamily: "Open Sans",
            }}
          >
            Select
          </Typography>
        </Link>
        <Link
          underline="none"
          sx={{
            margin: "1em 0",
            backgroundColor: active === "model" ? "#1a97f5" : "#FFFFFF",
            margin: "1em 0",
            padding: ".5em 1em",
            borderRadius: "5px",
            cursor: name === "" || type === "" ? "default" : "pointer",
            display: "flex",
            alignItems: "center",
            gap: "1em",
            color:
              file === null
                ? "#d1d1d1"
                : active === "model"
                ? "#ffffff"
                : "#000000",
          }}
          onClick={() => onClick("/model")}
        >
          <MdOutlineVisibility />
          <Typography
            sx={{
              textAlign: "left",
              fontWeight: "bold",
              fontFamily: "Open Sans",
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
