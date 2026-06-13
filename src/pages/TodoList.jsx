import React, { useState } from 'react';

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  const handleAddTodo = (e) => {
    e.preventDefault();
    // 할 일 추가 로직 구현 예정
    console.log("Add Todo Attempt:", newTodo);
  };

  return (
    <div className="todo-container">
      <h2>할 일 목록</h2>
      <form onSubmit={handleAddTodo}>
        <input 
          type="text" 
          placeholder="새로운 할 일 입력" 
          value={newTodo} 
          onChange={(e) => setNewTodo(e.target.value)} 
          required 
        />
        <button type="submit">추가</button>
      </form>
      
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo.text}
            <button>삭제</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
