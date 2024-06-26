import { useState, useEffect, useRef } from "react";
import { BrowserRouter, Route, Routes, Link, Navigate } from "react-router-dom";
import SignIn from "./components/SignIn";
import Layout from "./components/layout/Layout";
import Dashboard from "./components/layout/Dashboard";
import Users from "./components/layout/Users";
import Settings from "./components/layout/Settings";
import Notifications from "./components/layout/Notifications";
import User from "./components/layout/User";
import Navbar from "./components/layout/Navbar";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignIn />}>
            <Route path="/login" element={<Navigate to="login" />} />
          </Route>
          <Route path="/admin" element={<Layout />}>
            <Route index element={<Navigate to="dashboard" />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="users" element={<Users />} />
            <Route path="users/:id" element={<User />} />
            <Route path="notification" element={<Notifications />} />
            <Route path="settings" element={<Settings />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
