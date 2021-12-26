import * as React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import StudentHome from './pages/dashboard/student/Home';

const Main = () =>{
    return (
        <div>
            <Router>
                <Routes>
                    <Route path="/dashboard/student/home" element={<StudentHome />} />
                </Routes>
            </Router>
        </div>
    )
}

export default Main;