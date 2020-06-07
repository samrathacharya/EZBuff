import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import AppNavbar from './components/AppNavbar'
import ExerciseList from './components/ExerciseList';
import {Provider} from 'react-redux';
import store from './store';
import ExerciseModal from './components/exerciseModal'
import {Container} from 'reactstrap'

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <AppNavbar></AppNavbar>
      <Container>
        <ExerciseModal></ExerciseModal>
      <ExerciseList></ExerciseList>
      </Container>
    </div>
    </Provider>
  );
}

export default App;
