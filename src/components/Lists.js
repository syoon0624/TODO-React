import React from 'react';

export default function Lists({ todoData, setTodoData }) {
  const btnStyle = {
    color: '#fff',
    border: 'none',
    padding: '5px 9px',
    borderRadius: '50%',
    cursor: 'pointer',
    float: 'right',
  };

  const listStyle = (completed) => {
    return {
      padding: '10px',
      borderBottom: '1px #ccc dotted',
      textDecoration: completed ? 'line-through' : 'none',
    };
  };

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

  return (
    <div>
      {todoData.map((data) => (
        <div key={data.id}>
          <div className="flex items-center justify-between w-full px-4 py-1 my-2 text-gray-600 bg-gray-100 border rounded">
            <div className="items-center">
              <input
                type="checkbox"
                defaultChecked={data.completed}
                onChange={() => handleCompleteChange(data.id)}
              />{' '}
              <span className={data.completed && 'line-through'}>
                {data.title}
              </span>
            </div>
            <div className="items-center">
              <button style={btnStyle} onClick={() => handleClick(data.id)}>
                X
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
