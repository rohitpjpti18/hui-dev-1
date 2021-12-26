import * as React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import StudentHome from './pages/dashboard/student/Home';

const Main = () =>{
    return (
        <React.Component>
            <Router>
                <Routes>
                    <Route path="/dashboard/student/home">
                        <StudentHome />
                    </Route>
                </Routes>
            </Router>
        </React.Component>
    )
}

export default Main;