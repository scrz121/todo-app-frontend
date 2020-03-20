import React, { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../../App.css';
import Footer from '../../components/Footer';
import TodoListContainer from '../TodoListContainer';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <ToastContainer />
        <TodoListContainer />
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
