import {GET_EXERCISES, ADD_EXERCISE, DELETE_EXERCISE, EXERCISES_LOADING} from '../actions/types'
import axios from 'axios';

export const getExercises = () => dispatch => {
    dispatch(setExercisesLoading());
    axios.get('/api/exercises')
    .then(res => (
        dispatch({
            type: GET_EXERCISES,
            payload: res.data
        })
    ))
}

export const addExercise = (exercise) =>dispatch => {
    axios.post('/api/exercises', exercise)
    .then(res =>(
        dispatch({
            type: ADD_EXERCISE,
            payload: exercise
        })
    ))
}

export const deleteExercise = (id) =>dispatch => {
    axios.delete(`/api/exercises/${id}`)
    .then(res =>
        dispatch({
            type: DELETE_EXERCISE,
            payload: id
        })    
    );
}

export const setExercisesLoading = () =>{
    return{
        type: EXERCISES_LOADING
    }
}