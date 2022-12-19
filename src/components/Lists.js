import React from 'react';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';

export default function Lists({ todoData, setTodoData }) {
  const handleClick = (id) => {
    let newTodoData = todoData.filter((data) => data.id !== id);
    setTodoData(newTodoData);
  };

  const handleCompleteChange = (id) => {
    const newTodoData = todoData.map((data) => {
      if (data.id === id) {
        data.completed = !data.completed;
      }
      return data;
    });
    setTodoData(newTodoData);
  };

  const handleEnd = (result) => {
    if (!result.destination) return;
    const newTodoData = [...todoData];

    const [reorederedItem] = newTodoData.splice(result.source.index, 1);

    newTodoData.splice(result.destination.index, 0, reorederedItem);
    setTodoData(newTodoData);
  };

  return (
    <div>
      <DragDropContext onDragEnd={handleEnd}>
        <Droppable droppableId="to-dos">
          {(provided) => (
            <div {...provided.droppableProps} ref={provided.innerRef}>
              {todoData.map((data, index) => (
                <Draggable
                  key={data.id}
                  draggableId={data.id.toString()}
                  index={index}
                >
                  {(provided, snapshot) => (
                    <div>
                      <div
                        {...provided.draggableProps}
                        ref={provided.innerRef}
                        {...provided.dragHandleProps}
                        className={`${
                          snapshot.isDragging ? 'bg-gray-400' : 'bg-gray-100'
                        } flex items-center justify-between w-full px-4 py-1 my-2 text-gray-600 bg-gray-100 border rounded`}
                      >
                        <div className="items-center">
                          <input
                            type="checkbox"
                            defaultChecked={data.completed}
                            onChange={() => handleCompleteChange(data.id)}
                          />{' '}
                          <span
                            className={
                              data.completed ? 'line-through' : undefined
                            }
                          >
                            {data.title}
                          </span>
                        </div>
                        <div className="items-center">
                          <button onClick={() => handleClick(data.id)}>
                            X
                          </button>
                        </div>
                      </div>
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
}
