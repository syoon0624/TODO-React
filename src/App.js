import './App.css';
import React, { Component } from 'react';

export default class App extends Component {
  state = {
    todoData: [
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
    ],
    value: '',
  };

  btnStyle = {
    color: '#fff',
    border: 'none',
    padding: '5px 9px',
    borderRadius: '50%',
    cursor: 'pointer',
    float: 'right',
  };

  listStyle = (completed) => {
    return {
      padding: '10px',
      borderBottom: '1px #ccc dotted',
      textDecoration: completed ? 'line-through' : 'none',
    };
  };

  handleClick = (id) => {
    let newTodoData = this.state.todoData.filter((data) => data.id !== id);
    this.setState({ todoData: newTodoData });
  };

  handleChange = (e) => {
    this.setState({ value: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const newTodoData = {
      id: Date.now(),
      title: this.state.value,
      completed: false,
    };
    this.setState({
      todoData: [...this.state.todoData, newTodoData],
      value: '',
    });
  };

  handleCompleteChange = (id) => {
    const newTodoData = this.state.todoData.map((data) => {
      if (data.id === id) {
        data.completed = !data.completed;
      }
      return data;
    });
    this.setState({ todoData: newTodoData });
  };

  render() {
    return (
      <div className="container">
        <div className="todoBlock">
          <div className="title">
            <h1>할 일 목록</h1>
          </div>
          {this.state.todoData.map((data) => (
            <div key={data.id} style={this.listStyle(data.completed)}>
              <input
                type="checkbox"
                defaultChecked={data.completed}
                onChange={() => this.handleCompleteChange(data.id)}
              />
              {data.title}
              <button
                style={this.btnStyle}
                onClick={() => this.handleClick(data.id)}
              >
                X
              </button>
            </div>
          ))}
          <form
            style={{ display: 'flex' }}
            onSubmit={(e) => this.handleSubmit(e)}
          >
            <input
              type="text"
              style={{ flex: '10', padding: '5px' }}
              placeholder="해야 할 일을 입력해 주세요."
              value={this.state.value}
              onChange={(e) => this.handleChange(e)}
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
}
