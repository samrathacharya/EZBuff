import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import AppNavbar from './components/AppNavbar'
import ExerciseList from './components/ExerciseList';

function App() {
  return (
    <div className="App">
      <AppNavbar></AppNavbar>
      <ExerciseList></ExerciseList>
    </div>
  );
}

export default App;
