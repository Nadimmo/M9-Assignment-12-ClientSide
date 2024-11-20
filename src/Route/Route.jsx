import React from 'react'
import {
    createBrowserRouter,
  } from "react-router-dom";

import Root from '../Root/Root';
import Home from '../components/Home/Home';
import SurveryPage from '../pages/SurveryPage/SurveryPage';
import Dashboard from './Dashboard';
import Create from '../pages/Dashboard/CreateSurvey/CreateSurvey';
import UpdateSurvery from '../pages/Dashboard/UpdateSurvery/UpdateSurvery';
import SurveryDetails from '../pages/SurveryDetails/SurveryDetails';
import Register from '../components/Register/Register';
import Login from '../components/Login/Login';
import PrivateRoute from '../PrivateRoute/PrivateRoute';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
        {
            path:'/',
            element: <Home></Home>
        },
        {
            path:'/surverys',
            element:<PrivateRoute><SurveryPage></SurveryPage></PrivateRoute> 
        },
        {
          path:'/surverys/:id',
          element: <SurveryDetails></SurveryDetails>,
          loader: ({params})=>fetch(`http://localhost:5000/surverys/${params.id}`)

        },
        {
          path:'/register',
          element:<Register></Register>
        },
        {
          path:'/login',
          element: <Login></Login>
        }
    ]
   
  },
  {
    path:'/dashboard',
    element: <Dashboard></Dashboard>,
    children: [
      {
        path:'surveyor/create',
        element:<Create></Create>
      },
      {
        path:'surveyor/update',
        element: <UpdateSurvery></UpdateSurvery>
      }
    ]
  }
]);

export default router