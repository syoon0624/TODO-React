import './App.css';
import React, { useState } from 'react';

export default function App() {
  const [todoData, setTodoData] = useState([
    {
      id: '1',
      title: '공부하기',
      completed: true,
    },
    {
      id: '2',
      title: '청소하기',
      completed: false,
    },
  ]);
  const [value, setValue] = useState('');

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

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTodoData = {
      id: Date.now(),
      title: value,
      completed: false,
    };
    setTodoData([...todoData, newTodoData]);
    setValue('');
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
    <div className="container">
      <div className="todoBlock">
        <div className="title">
          <h1>할 일 목록</h1>
        </div>
        {todoData.map((data) => (
          <div key={data.id} style={listStyle(data.completed)}>
            <input
              type="checkbox"
              defaultChecked={data.completed}
              onChange={() => handleCompleteChange(data.id)}
            />
            {data.title}
            <button style={btnStyle} onClick={() => handleClick(data.id)}>
              X
            </button>
          </div>
        ))}
        <form style={{ display: 'flex' }} onSubmit={(e) => handleSubmit(e)}>
          <input
            type="text"
            style={{ flex: '10', padding: '5px' }}
            placeholder="해야 할 일을 입력해 주세요."
            value={value}
            onChange={(e) => handleChange(e)}
          />
          <input
            type="submit"
            value="입력"
            className="btn"
            style={{ flex: '1' }}
          />
        </form>
      </div>
    </div>
  );
}
