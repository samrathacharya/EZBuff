import {GET_EXERCISES, ADD_EXERCISE, DELETE_EXERCISE, EXERCISES_LOADING} from '../actions/types'

export const getExercises = () => {
    return {
        type: GET_EXERCISES
    }
}

export const addExercise = (exercise) => {
    return {
        type: ADD_EXERCISE,
        payload: exercise
    }
}

export const deleteExercise = (id) => {
    return {
        type: DELETE_EXERCISE,
        payload: id
    }
}

export const setExercisesLoading = () =>{
    return{
        type: EXERCISES_LOADING
    }
}