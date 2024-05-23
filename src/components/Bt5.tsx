import React, { useState, useCallback, ChangeEvent, FC } from 'react';
interface Todo {
  id: number;
  text: string;
}

const Bt5: FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [newTodo, setNewTodo] = useState<string>('');

  const handleAddTodo = useCallback(() => {
    if (newTodo.trim() !== '') {
      setTodos(prevTodos => [...prevTodos, { id: Date.now(), text: newTodo }]);
      setNewTodo('');
    }
  }, [newTodo]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNewTodo(e.target.value);
  };

  return (
    <div>
        Bài tập 5
      <h2>Danh sách công việc cần làm</h2>
      <input 
        type="text" 
        value={newTodo} 
        onChange={handleChange} 
        placeholder="Thêm công việc mới"
      />
      <button onClick={handleAddTodo}>Thêm</button>
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>{todo.text}</li>
        ))}
      </ul>
    </div>
  );
}

export default Bt5;
