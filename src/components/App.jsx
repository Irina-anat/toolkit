import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Layout } from "./Layout/Layout";
import { LoginPage } from 'pages/LoginPage';


export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="login" element={<LoginPage />} />
      </Route>
    </Routes>
  );
};
