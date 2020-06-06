import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import AppNavbar from './components/AppNavbar'
import ExerciseList from './components/ExerciseList';
import {Provider} from 'react-redux';
import store from './store'

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <AppNavbar></AppNavbar>
      <ExerciseList></ExerciseList>
    </div>
    </Provider>
  );
}

export default App;
