import React from 'react';
import Form from '../components/Form';
// import '../styles/Register.css'; // Import your CSS file for styling

function Register() {
  return (
    <div className="register-page">
      <header className="register-header">
        {/* <h1>MemoMate</h1> */}
      </header>
      <main className="register-form-container">
        <Form route="/api/user/register/" method="register" />
      </main>
      <footer className="register-footer">
        {/* <p>&copy; 2024 MemoMate. All rights reserved.</p> */}
      </footer>
    </div>
  );
}

export default Register;
