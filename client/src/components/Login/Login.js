import React from 'react';
import './Login.css';

function Login() {
	return (
		<div className="login">
			<div className="login__header">Enter Name</div>
			<div className="login__input">
				<form>
					<input placeholder="Enter your name" />
					<button value="Sign In" />
				</form>
			</div>
		</div>
	);
}

export default Login;
