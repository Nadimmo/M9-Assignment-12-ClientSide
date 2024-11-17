import React from 'react'
import {
    createBrowserRouter,
  } from "react-router-dom";

import Root from '../Root/Root';
import Home from '../components/Home/Home';
import SurveryPage from '../pages/SurveryPage/SurveryPage';
import Dashboard from './Dashboard';
import Create from '../pages/Dashboard/Create/Create';
import UpdateSurvery from '../pages/Dashboard/UpdateSurvery/UpdateSurvery';

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
            element:<SurveryPage></SurveryPage>
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