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
import AllSurveyor from '../pages/Dashboard/AllSurveyor/AllSurveyor';
import DetailsSurveyos from '../pages/Dashboard/AllSurveyor/DetailsSurveyos';
import Reports from '../pages/Dashboard/Reports/Reports';
import Participate from '../pages/Dashboard/Participate/Participate';
import ViewParticipation from '../pages/Dashboard/Participate/ViewParticipation';
import ManageUser from '../pages/Dashboard/ManageUser/ManageUser';
import About from '../pages/About/About';

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
          path:'/about',
          element: <About></About>
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
    path:'dashboard',
    element: <Dashboard></Dashboard>,
    children: [
      // surveyor dashboard
      {
        path:'surveyor/create',
        element:<Create></Create>
      },
      {
        path:'surveyor/surveys',
        element: <AllSurveyor></AllSurveyor>
      },
      {
        path:'surveyor/surveys/:id',
        element: <DetailsSurveyos></DetailsSurveyos>,
        loader: ({params})=>fetch(`http://localhost:5000/surverys/${params.id}`)
      },
      {
        path:'surveyor/update',
        element: <UpdateSurvery></UpdateSurvery>,
      },
      // user dashboard
      {
        path:"user/my-reports",
        element: <Reports></Reports>,

      },
      {
        path:'user/surveys',
        element: <Participate></Participate>
      },
      {
        path:'user/surveys/:id',
        element: <ViewParticipation></ViewParticipation>,
        loader: ({params})=>fetch(`http://localhost:5000/surverys/${params.id}`)

      },
      // admin dashboard 
      {
        path:'admin/users',
        element:<ManageUser></ManageUser>
      }
    ]
  }
]);

export default router