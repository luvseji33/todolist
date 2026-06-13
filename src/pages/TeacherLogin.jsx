import React, { useState } from 'react';

const TeacherLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // 로그인 로직 구현 예정
    console.log("Teacher Login Attempt:", email);
  };

  return (
    <div className="login-container">
      <h2>교사 로그인</h2>
      <form onSubmit={handleLogin}>
        <input 
          type="email" 
          placeholder="이메일" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          required 
        />
        <input 
          type="password" 
          placeholder="비밀번호" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
          required 
        />
        <button type="submit">로그인</button>
      </form>
    </div>
  );
};

export default TeacherLogin;
