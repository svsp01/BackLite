"use client"; // Ensure this is included for client-side rendering
import React, { useState } from 'react';
import Card from './components/Card';
import LoginForm from './components/LoginForm';
import SignUpForm from './components/SignUpForm';

const LoginPage: React.FC = () => {
    const [isLogin, setIsLogin] = useState(true);

    const toggleForm = () => {
        setIsLogin((prev) => !prev);
    };

    return (
        <div className="flex items-center justify-center h-screen bg-gradient-to-r from-blue-500 to-purple-500">
            <Card isLogin={isLogin} toggleForm={toggleForm}>
                {isLogin ? (
                    <LoginForm toggleForm={toggleForm} />
                ) : (
                    <SignUpForm toggleForm={toggleForm} />
                )}
            </Card>
        </div>
    );
};

export default LoginPage;
