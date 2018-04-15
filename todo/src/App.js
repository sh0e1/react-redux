import React, { Component } from 'react';
import TodoInput from './TodoInput';
import TodoList from './TodoList';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [
        {
          title: 'デフォルトTODO',
          id: 0
        },
      ],
      uniqueId: 1,
    };
  }

  resetTodo = () => {
    this.setState({
      tasks: []
    });
  }

  addTodo = (title) => {
    const {
      tasks,
      uniqueId,
    } = this.state;

    const task = {
      title,
      id: uniqueId
    };

    const newTasks = [...tasks, task];
    this.setState({
      tasks: newTasks,
      uniqueId: uniqueId + 1,
    });
  }

  render() {
    return (
      <div className="App">
        <h1>TODO App</h1>
        <button onClick={this.resetTodo}>リセット</button>
        <TodoInput addTodo={this.addTodo} />
        <TodoList tasks={this.state.tasks} />
      </div>
    );
  }
}

export default App;
