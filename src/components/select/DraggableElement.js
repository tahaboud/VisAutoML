import { Droppable } from "react-beautiful-dnd";
import ListItem from "./ListItem";
import { Box, Icon, Tooltip, Typography } from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";

const DraggableElement = ({ prefix, elements, id, tooltip }) => {
  return (
    <Box
      sx={{
        padding: "10px",
        borderRadius: "6px",
        backgroundColor: "#f7f8fa",
        border:
          id === "Prediction Column" && elements.length === 0
            ? "1px solid red"
            : "none",
      }}
    >
      <Box
        sx={{
          marginBottom: "20px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography
          sx={{ fontSize: "1.1rem", fontWeight: 550, fontFamily: "Open Sans" }}
        >
          {prefix}
        </Typography>
        <Tooltip placement="right" title={tooltip}>
          <Icon>
            <InfoIcon fontSize="small" sx={{ color: "grey" }} />
          </Icon>
        </Tooltip>
      </Box>
      <Droppable droppableId={`${id}`}>
        {(provided) => (
          <div {...provided.droppableProps} ref={provided.innerRef}>
            {elements.map((item, index) => (
              <ListItem key={item.id} item={item} index={index} />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </Box>
  );
};

export default DraggableElement;
