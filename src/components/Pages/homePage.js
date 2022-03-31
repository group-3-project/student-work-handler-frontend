import React from 'react'
import { useLocation } from 'react-router-dom';

function Home() {
    const { state } = useLocation();

    return (
        <div>
            <h1>Hello! You are inside classroom named "{state.classroomProp.classroomName}"</h1>
        </div>
    )
}

export default Home