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
import Contact from '../pages/Contact/Contact';
import PricePage from '../pages/PricePage/PricePage';
import Payment from '../pages/PricePage/Payment';
import PaymentHistory from '../pages/Dashboard/PaymentHistory/PaymentHistory';
import StatusPage from '../pages/Dashboard/StatusPage/StatusPage';

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
          path:'/contact',
          element: <Contact></Contact>
        },
        {
          path:'/price',
          element:<PrivateRoute> <PricePage></PricePage></PrivateRoute>
        },
        {
            path:'/surverys',
            element:<PrivateRoute><SurveryPage></SurveryPage></PrivateRoute> 
        },
        {
          path:'/surverys/:id',
          element: <PrivateRoute><SurveryDetails></SurveryDetails></PrivateRoute>,
          loader: ({params})=>fetch(`https://assignment-12-server-side-eight.vercel.app/surverys/${params.id}`)

        },
        {
          path:'/register',
          element:<Register></Register>
        },
        {
          path:'/login',
          element: <Login></Login>
        },
        {
          path:'/payment',
          element: <PrivateRoute><Payment></Payment></PrivateRoute> 
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
        loader: ({params})=>fetch(`https://assignment-12-server-side-eight.vercel.app/surverys/${params.id}`)
      },
      {
        path:'surveyor/update/:id',
        element: <UpdateSurvery></UpdateSurvery>,
        loader: ({params})=>fetch(`https://assignment-12-server-side-eight.vercel.app/surverys/${params.id}`)
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
        loader: ({params})=>fetch(`https://assignment-12-server-side-eight.vercel.app/surverys/${params.id}`)

      },
      // admin dashboard 
      {
        path:'admin/users',
        element:<ManageUser></ManageUser>
      },
      {
        path: 'admin/payments',
        element: <PaymentHistory></PaymentHistory>
      },
      {
        path:'admin/surveys',
        element: <StatusPage></StatusPage>
      }
    ]
  }
]);

export default router