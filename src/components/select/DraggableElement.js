import { Droppable } from "react-beautiful-dnd";
import ListItem from "./ListItem";
import { Box, Icon, Tooltip } from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";

const DraggableElement = ({ prefix, elements, id, tooltip }) => {
  return (
    <Box
      sx={{
        padding: "10px",
        borderRadius: "6px",
        backgroundColor: "#c0c5cc",
        border:
          id === "Prediction Column" && elements.length === 0
            ? "1px solid red"
            : "none",
      }}
    >
      <Box
        sx={{
          fontSize: "1.5rem",
          fontWeight: 500,
          fontFamily: "Open Sans",
          marginBottom: "20px",
        }}
      >
        {prefix}
        <Tooltip placement="right" title={tooltip}>
          <Icon>
            <InfoIcon />
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
