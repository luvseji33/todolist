import React, { useState } from 'react';

const StudentRegister = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = (e) => {
    e.preventDefault();
    // 회원가입 로직 구현 예정
    console.log("Student Register Attempt:", email);
  };

  return (
    <div className="register-container">
      <h2>학생 회원가입</h2>
      <form onSubmit={handleRegister}>
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
        <button type="submit">회원가입</button>
      </form>
    </div>
  );
};

export default StudentRegister;
