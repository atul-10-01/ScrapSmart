import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App.jsx';
import './index.css';
import DumpingPage from './DumpingPage.jsx';
import DumpForm from './DumpForm.jsx';
import Signin from './SignIn.jsx';
import NewAccount from './NewAccount.jsx';
import Blog1 from './blog1.jsx';
import Blog2 from './blog2.jsx';
import Blog3 from './blog3.jsx';
import Blog4 from './blog4.jsx';
import Blog5 from './blog5.jsx';
import Blog6 from './blog6.jsx';
import Dashboard from './Dashboard.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/dumping-page" element={<DumpingPage />} />
        <Route path="/form" element={<DumpForm />} />
        <Route path="/signin" element={<Signin />} />
        <Route path='/new-account' element={<NewAccount />} />
        <Route path="/blog1" element={<Blog1 />} />
        <Route path="/blog2" element={<Blog2 />} />
        <Route path="/blog3" element={<Blog3 />} />
        <Route path="/blog4" element={<Blog4 />} />
        <Route path="/blog5" element={<Blog5 />} />
        <Route path="/blog6" element={<Blog6 />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
