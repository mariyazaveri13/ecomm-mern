import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/styles/index.css';
import './assets/styles/bootstrap.custom.css';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
import { PayPalScriptProvider } from '@paypal/react-paypal-js';
import App from './App';
import reportWebVitals from './reportWebVitals';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import { Provider } from 'react-redux';
import store from './store';
import CartScreen from './screens/CartScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import ShippingScreen from './screens/ShippingScreen';
import PrivateRoute from './components/PrivateRoute';
import PaymentScreen from './screens/PaymentScreen';
import PlaceOrderScreen from './screens/PlaceOrderScreen';
import OrderScreen from './screens/OrderScreen';
import ProfileScreen from './screens/ProfileScreen';
import AdminRoute from './components/AdminRoute';
import OrderListScreen from './screens/admin/OrderListScreen';
import ProductListScreen from './screens/admin/ProductListScreen';
import ProductEditScreen from './screens/admin/ProductEditScreen';
import UserListScreen from './screens/admin/UserListScreen';
import UserEditScreen from './screens/admin/UserEditScreen';
import { HelmetProvider } from 'react-helmet-async';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path='/'
      element={<App />}>
      <Route
        index={true}
        path='/'
        element={<HomeScreen />}></Route>
      <Route
        path='/search/:keyword'
        element={<HomeScreen />}></Route>
      <Route
        path='/search/:keyword/page/:pageNumber'
        element={<HomeScreen />}></Route>
      <Route
        path='/page/:pageNumber'
        element={<HomeScreen />}></Route>
      <Route
        path='/products/:id'
        element={<ProductScreen />}></Route>
      <Route
        path='/cart'
        element={<CartScreen />}></Route>
      <Route
        path='/login'
        element={<LoginScreen />}></Route>
      <Route
        path='/register'
        element={<RegisterScreen />}></Route>
      //private routes
      <Route
        path=''
        element={<PrivateRoute></PrivateRoute>}>
        <Route
          path='/shipping'
          element={<ShippingScreen />}></Route>
        <Route
          path='/payment'
          element={<PaymentScreen />}></Route>
        <Route
          path='/placeorder'
          element={<PlaceOrderScreen />}></Route>
        <Route
          path='/profile'
          element={<ProfileScreen />}></Route>
        <Route
          path='/order/:id'
          element={<OrderScreen />}></Route>
      </Route>
      //Admin routes
      <Route
        path=''
        element={<AdminRoute></AdminRoute>}>
        <Route
          path='/admin/orderlist'
          element={<OrderListScreen />}></Route>
        <Route
          path='/admin/productlist'
          element={<ProductListScreen />}></Route>
        <Route
          path='/admin/productlist/:pageNumber'
          element={<ProductListScreen />}></Route>
        <Route
          path='/admin/product/:id/edit'
          element={<ProductEditScreen />}></Route>
        <Route
          path='/admin/userlist'
          element={<UserListScreen />}></Route>
        <Route
          path='/admin/user/:id/edit'
          element={<UserEditScreen />}></Route>
      </Route>
    </Route>
  )
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HelmetProvider>
      <Provider store={store}>
        <PayPalScriptProvider deferLoading={true}>
          <RouterProvider router={router}></RouterProvider>
        </PayPalScriptProvider>
      </Provider>
    </HelmetProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
