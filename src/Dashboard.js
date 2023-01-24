
import './App.css';
import React from 'react';

import { Link } from 'react-router-dom';
import Listusers from './Listusers';

import Createuser from './Createuser';

import Createstudent from './Createstudent';
import Liststudents from './Liststudents';


function Dashboard() {
    return (
      <>   
        <h1>TO IMPLEMENT CRUD WITH STUDENT & TEACHER MANAGEMENT</h1>

        <h3> <Link to="/Createuser" element={<Createuser />}>CREATE TEACHER</Link> | &nbsp;
             <Link to="/Listusers" element={<Listusers />}>VIEW TEACHER</Link> | &nbsp;
             <Link to="/Createstudent" element={<Createstudent />}>CREATE STUDENT</Link> | &nbsp;
             <Link to="/Liststudents" element={<Liststudents />}>VIEW STUDENT</Link>
        </h3>
        </> 
    );
} 

export default Dashboard;