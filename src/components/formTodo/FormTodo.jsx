import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const FormTodo = ({ tasks, setTasks }) => {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const cleaned = inputValue.trim();
    if (cleaned === '') return;

    const newTask = {
      id: uuidv4(),
      taskText: cleaned,
      completed: false
    };

    setTasks([...tasks, newTask]);
    setInputValue('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        placeholder='Nueva tarea...'
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button type='submit'>➕</button>
    </form>
  );
};

export default FormTodo;



