import React from 'react';
import './App.css';
import Content from "../content";
import Header from "../header";
import Footer from "../footer";
import Sidebar from "../sidebar";

const App = () => {
  return (
    <div className="App">
        <Header/>
        <Sidebar/>
        <Content/>
        <Footer/>
    </div>
  );
};

export default App;
