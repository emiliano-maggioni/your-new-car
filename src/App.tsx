import React from 'react'
import './Normalize.css';
import "./App.scss";
import { BrowserRouter } from 'react-router-dom';
import Routing from "./routes/Routing";
import Header from "./components/header/Header";
import { Provider } from "react-redux";
import store from 'store';

const App = () => {
  return (
    <Provider store={store} >
      <BrowserRouter>
        <Header />
        <main>
          <Routing />
        </main>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
