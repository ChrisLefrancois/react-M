import React, { useState } from 'react';

const AdminLogin = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Add your authentication logic here
    // For simplicity, let's use hardcoded credentials
    if (username === 'admin' && password === 'password') {
      onLogin(); // Call the onLogin function passed as a prop
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-4xl font-bold mb-6">Admin Login</h1>
      <div className="bg-white rounded-lg shadow-md p-6">
        <label className="block mb-2" htmlFor="username">
          Username:
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="border border-gray-400 p-2 w-full"
          />
        </label>
        <label className="block mb-2" htmlFor="password">
          Password:
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border border-gray-400 p-2 w-full"
          />
        </label>
        <button onClick={handleLogin} className="bg-blue-500 text-white py-2 px-4 rounded">
          Login
        </button>
      </div>
    </div>
  );
};

export default AdminLogin;
