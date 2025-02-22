import React from 'react';

// Icon Imports
import {
  MdHome,
  MdOutlineShoppingCart,
  MdBarChart,
  MdPerson,
  MdLock,
} from 'react-icons/md';

const routes = [
  {
    name: 'Main Dashboard',
    layout: '/admin',
    path: 'default',
    icon: <MdHome className="h-6 w-6" />, 
  },
  {
    name: 'Bidding Section',
    layout: '/admin',
    path: 'bidding',
    icon: <MdOutlineShoppingCart className="h-6 w-6" />,
    secondary: true,
  },
  {
    name: 'My Clients',
    layout: '/admin',
    path: 'data-tables',
    icon: <MdBarChart className="h-6 w-6" />,
  },
  {
    name: 'Profile',
    layout: '/admin',
    path: 'profile',
    icon: <MdPerson className="h-6 w-6" />,
  },
  {
    name: 'Sign In',
    layout: '/auth',
    path: 'sign-in',
    icon: <MdLock className="h-6 w-6" />,
  },
];

const clientRoutes = [
  {
    name: 'query',
    layout: '/client',
    path: 'default',
    icon: <MdHome className="h-6 w-6" />, 
  },
  {
    name: 'reports',
    layout: '/admin',
    path: 'bidding',
    icon: <MdOutlineShoppingCart className="h-6 w-6" />,
    secondary: true,
  },
  {
    name: 'Profile',
    layout: '/admin',
    path: 'profile',
    icon: <MdPerson className="h-6 w-6" />,
  },
  {
    name: 'Sign In',
    layout: '/auth',
    path: 'sign-in',
    icon: <MdLock className="h-6 w-6" />,
  },
];
export default routes;
