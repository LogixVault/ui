import React, { lazy } from 'react';


const Login = lazy(() => import('./views/pages/login/Login'));
const AllOrders = lazy(() => import('./views/orders/AllOrders'));
const AddNewOrder = lazy(() => import('./views/orders/AddNewOrder'));
const Abandoned = lazy(() => import('./views/orders/Abandoned'));
const OrderDetails = lazy(() => import('./views/orders/OrderDetails'));

const Allproducts = lazy(() => import('./views/products/Allproducts'));
const Category = lazy(() => import('./views/products/Category'));
const AddNew = lazy(() => import('./views/products/AddNew'));
const Stocks = lazy(() => import('./views/stocks/Stocks'));
const Inventory = lazy(() => import('./views/stocks/Inventory'));
const Staff = lazy(() => import('./views/Staff/Staff'));
const AddNewStaff = lazy(() => import('./views/Staff/AddNewStaff'));

const Procurements = lazy(() => import('./views/Procurements/Procurements'));
const Sales = lazy(() => import('./views/Analytics/Sales'));
const Traffic = lazy(() => import('./views/Analytics/Traffic'));
const Product = lazy(() => import('./views/Analytics/Product'));

const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'))


const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', element: Dashboard },

  { path: '/orders', name: 'Orders', element: AllOrders, exact: true },
  { path: '/orders/add/new', name: 'Add Order', element: AddNewOrder, exact: true },
  { path: '/orders/abondened', name: 'Abondened', element: Abandoned },
  { path: '/orders/details/:id', name: 'Abondened', element: OrderDetails },

  { path: '/products', name: 'Products', element: Allproducts },
  { path: '/products/categories', name: 'Categories', element: Category },
  { path: '/products/add/new', name: 'AddNew', element: AddNew },
  { path: '/stocks', name: 'Stocks', element: Stocks },
  { path: '/stocks/inventory', name: 'Inventory', element: Inventory },
  { path: '/staff', name: 'Staff', element: Staff },
  { path: '/staff/add/new', name: 'Staff', element: AddNewStaff },

  { path: '/procurements', name: 'Procurements', element: Procurements },
  { path: '/analytics', name: 'Analytics', element: Sales },
  { path: '/analytics/traffic', name: 'Traffic', element: Traffic },
  { path: '/analytics/products', name: 'Products', element: Product },

  { path: '/login', name: 'Login', element: Login },

 







  
]

export default routes
