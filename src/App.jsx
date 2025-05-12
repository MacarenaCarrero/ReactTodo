import { useState } from 'react';
import FormTodo from './components/formTodo/FormTodo'; // El nombre del componente es este

const App = () => {
  const [tasks, setTasks] = useState([]); // estaba mal escrito como "task"

  const completedCheck = (id) => {
    const update = tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    setTasks(update);
  };

  const deleteTask = (id) => {
    const filtered = tasks.filter(task => task.id !== id);
    setTasks(filtered);
  };

  return (
    <div className='container'>
      <h1>TODO LIST</h1>
      <FormTodo tasks={tasks} setTasks={setTasks} />
      <ul>
        {tasks.map(task => (
          <li key={task.id}>
            <input
              type='checkbox'
              checked={task.completed}
              onChange={() => completedCheck(task.id)}
            />
            <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
              {task.taskText}
            </span>
            <button onClick={() => deleteTask(task.id)}>❌</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;