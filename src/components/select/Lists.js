import { useEffect, useState } from "react";
import { DragDropContext } from "react-beautiful-dnd";
import DraggableElement from "./DraggableElement";
import { Box } from "@mui/material";

const Lists = ({ columns, elements, setElements }) => {
  const removeFromList = (list, index) => {
    const result = Array.from(list);
    const [removed] = result.splice(index, 1);
    return [removed, result];
  };

  const addToList = (list, index, element) => {
    const result = Array.from(list);
    result.splice(index, 0, element);
    return result;
  };

  useEffect(() => {
    let initialColumns = [];
    columns.map((column, index) =>
      initialColumns.push({
        id: index.toString(),
        prefix: "Columns to use",
        content: column,
      })
    );
    setElements({ ...elements, "Columns to use": initialColumns });
  }, [columns]);

  const onDragEnd = (result) => {
    if (!result.destination) {
      return;
    }
    if (
      (elements["Prediction Column"].length === 1 &&
        result.destination.droppableId === "Prediction Column") ||
      (elements["ID Column"].length === 1 &&
        result.destination.droppableId === "ID Column")
    ) {
      return;
    }
    const listCopy = { ...elements };

    const sourceList = listCopy[result.source.droppableId];
    const [removedElement, newSourceList] = removeFromList(
      sourceList,
      result.source.index
    );
    listCopy[result.source.droppableId] = newSourceList;
    const destinationList = listCopy[result.destination.droppableId];
    listCopy[result.destination.droppableId] = addToList(
      destinationList,
      result.destination.index,
      removedElement
    );

    setElements(listCopy);
  };

  return (
    <Box sx={{ margin: "1em 0 0 0" }}>
      <DragDropContext onDragEnd={onDragEnd}>
        <Box sx={{ display: "flex", gap: "3em" }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "3em",
              width: "50%",
            }}
          >
            <DraggableElement
              elements={elements["Prediction Column"]}
              key={"Prediction Column"}
              prefix={"Prediction Column*"}
              tooltip="Column must be dependent value/ effect variable. For example: Test Score, Survival, Flight Price, etc."
              id={"Prediction Column"}
            />
            <DraggableElement
              elements={elements["ID Column"]}
              key={"ID Column"}
              id={"ID Column"}
              prefix={"ID Column"}
              tooltip="Column must be unique. For example: Date, ID, Name, etc."
            />
            <DraggableElement
              elements={elements["Columns not to use"]}
              key={"Columns not to use"}
              id={"Columns not to use"}
              prefix={"Column not to use"}
              tooltip="Column to not include in the prediction"
            />
          </Box>
          <Box sx={{ width: "50%" }}>
            <DraggableElement
              elements={elements["Columns to use"]}
              key={"Columns to use"}
              id={"Columns to use"}
              prefix={"Columns to use"}
              tooltip="Column to include in the prediction"
            />
          </Box>
        </Box>
      </DragDropContext>
    </Box>
  );
};

export default Lists;
