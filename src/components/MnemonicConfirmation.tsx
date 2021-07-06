import { useState } from "react";

import { DropResult } from "react-beautiful-dnd";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

import Box from "@material-ui/core/Box";
import Chip from "@material-ui/core/Chip";
import Divider from "@material-ui/core/Divider";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";

import useMnemonics from "../hooks/useMnemonics";
import { useEffect } from "react";

const GRID = 10;

type ICardContent = { id: string; content: string };

/* Randomize array in-place using Durstenfeld shuffle algorithm */
function shuffleArray(array: ICardContent[]) {
  for (var i = array.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
}

function MnemonicGeneration() {
  const mnemonics = useMnemonics();
  const [valid, setValid] = useState(false);
  const [items, setItems] = useState(
    shuffleArray(mnemonics.map((m, i) => ({ id: `item-${i}`, content: m })))
  );

  const getListStyle = (isDraggingOver: boolean) => ({
    background: isDraggingOver ? "lightblue" : "lightgrey",
    display: "flex",
    padding: GRID,
    overflow: "auto",
    border: valid ? "solid #0f0 2px" : "solid #f00 2px",
  });

  const getItemStyle = (isDragging: boolean, draggableStyle: any) => ({
    // some basic styles to make the items look a bit nicer
    userSelect: "none",
    padding: GRID * 2,
    margin: `0 ${GRID}px 0 0`,
    borderRadius: "6px",

    // change background colour if dragging
    background: isDragging ? "lightgreen" : "grey",

    // styles we need to apply on draggables
    ...draggableStyle,
  });

  // a little function to help us with reordering the result
  const reorder = (list: ICardContent[], start: number, end: number) => {
    const result = Array.from(list);
    const [removed] = result.splice(start, 1);
    result.splice(end, 0, removed);

    return result;
  };

  useEffect(() => {
    setValid(items.map((item) => item.content).join() === mnemonics.join());
  }, [items, mnemonics]);

  function onDragEnd(result: DropResult) {
    // dropped outside the list
    if (!result.destination) return;
    setItems(reorder(items, result.source.index, result.destination.index));
  }

  // Normally you would want to split things out into separate components.
  // But in this example everything is just done in one place for simplicity
  return (
    <Container maxWidth="lg">
      <Box style={{ width: "100%", textAlign: "center" }}>
        <Typography variant="subtitle1">
          Drag the words and place them in the correct order:
        </Typography>
      </Box>
      <Divider style={{ margin: 10 }} />
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="droppable" direction="horizontal">
          {(provided, snapshot) => (
            <div
              ref={provided.innerRef}
              style={getListStyle(snapshot.isDraggingOver)}
              {...provided.droppableProps}
            >
              {items.map((item, index) => (
                <Draggable key={item.id} draggableId={item.id} index={index}>
                  {(provided, snapshot) => (
                    <Chip
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      style={getItemStyle(
                        snapshot.isDragging,
                        provided.draggableProps.style
                      )}
                      clickable
                      label={item.content}
                    />
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </Container>
  );
}

export default MnemonicGeneration;
