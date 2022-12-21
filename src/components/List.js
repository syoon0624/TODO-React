import React, { useState } from 'react';

const List = React.memo(
  ({ id, title, completed, todoData, setTodoData, provided, snapshot }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [editedTitle, setEditedTitle] = useState(title);

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
    if (isEditing) {
      return (
        <div className="flex items-center justify-between w-full px-4">
          <form>
            <input
              className="w-full px-3 py-2 mr-4 text-gray-500"
              value={editedTitle}
              autoFocus
            />
            <div className="items-center">
              <button
                className="float-right px-4 py-2"
                onClick={() => setIsEditing(false)}
              >
                X
              </button>
              <button type="submit" className="float-right px-4 py-2">
                save
              </button>
            </div>
          </form>
        </div>
      );
    } else {
      return (
        <div
          key={id}
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
              defaultChecked={completed}
              onChange={() => handleCompleteChange(id)}
            />{' '}
            <span className={completed ? 'line-through' : undefined}>
              {title}
            </span>
          </div>
          <div className="items-center">
            <button
              className="float-right px-4 py-2"
              onClick={() => handleClick(id)}
            >
              X
            </button>
            <button
              className="float-right px-4 py-2"
              onClick={() => setIsEditing(true)}
            >
              edit
            </button>
          </div>
        </div>
      );
    }
  }
);

export default List;
