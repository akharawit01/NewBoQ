import React, { useState, useEffect } from "react";
import { Empty } from "antd";

import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

import { withStyles } from "@material-ui/core/styles";
import RootRef from "@material-ui/core/RootRef";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";

import confirm from "../../../utils/confirmDialog";

const AddNewCategory = props => {
  const { items, classes } = props;
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    setCategories(items);
  }, [items]);

  // a little function to help us with reordering the result
  const reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    return result;
  };
  const onDragEnd = result => {
    if (!result.destination) {
      return;
    }

    const items = reorder(
      categories,
      result.source.index,
      result.destination.index
    );

    setCategories(items);
  };

  const handleDeleteRow = () => {
    confirm("Are you sure").then(
      result => {
        // `proceed` callback
        console.log("proceed called");
        console.log(result);
      },
      result => {
        // `cancel` callback
        console.log("cancel called");
        console.log(result);
      }
    );
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Table className={classes.root}>
        <TableHead className={classes.head}>
          <TableRow>
            <TableCell>::</TableCell>
            <TableCell>Category Name</TableCell>
            <TableCell align="right">Actions</TableCell>
          </TableRow>
        </TableHead>

        {!categories || !categories.length ? (
          <TableBody>
            <TableRow>
              <TableCell colSpan={3}>
                <Empty />
              </TableCell>
            </TableRow>
          </TableBody>
        ) : (
          <Droppable droppableId="droppable">
            {(provided, snapshot) => (
              <RootRef rootRef={provided.innerRef}>
                <TableBody {...provided.droppableProps}>
                  {categories.map((row, index) => (
                    <Draggable
                      key={`${row.content}-${index}`}
                      draggableId={`${row.content}-${index}`}
                      index={index}
                    >
                      {(provided, snapshot) => (
                        <TableRow
                          key={index}
                          className={classes.row}
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                        >
                          <TableCell
                            {...provided.dragHandleProps}
                            style={{ width: "10%" }}
                          >
                            ::
                          </TableCell>
                          <TableCell
                            component="th"
                            scope="row"
                            style={{ width: "70%" }}
                          >
                            {row.content}
                          </TableCell>
                          <TableCell align="right" style={{ width: "20%" }}>
                            <IconButton
                              aria-label="Delete"
                              onClick={() => handleDeleteRow()}
                            >
                              <DeleteIcon />
                            </IconButton>
                          </TableCell>
                        </TableRow>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </TableBody>
              </RootRef>
            )}
          </Droppable>
        )}
      </Table>
    </DragDropContext>
  );
};

const styles = theme => ({
  root: {
    marginBottom: "50px"
  },
  head: {
    backgroundColor: theme.palette.common.black,
    "&>tr>th": {
      color: theme.palette.common.white
    }
  },
  row: {
    cursor: "pointer",
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.background.default
    },
    "&:hover": {
      backgroundColor: theme.palette.grey[300]
    },
    "&>th, &>td": {
      padding: "2px 40px 2px 16px"
    }
  }
});

export default withStyles(styles)(AddNewCategory);
