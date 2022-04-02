import React from 'react'
import { useLocation } from 'react-router-dom';
import Dashboard from '../Dashboard';

function Home() {
    const { state } = useLocation();

    return (
        <div>
        <Dashboard></Dashboard>
            <h1>Hello! You are inside classroom named "{state.classroomProp.classroomName}"</h1>
        </div>
    )
}

export default Home