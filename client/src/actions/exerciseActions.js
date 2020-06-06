import {GET_EXERCISES, ADD_EXERCISE, DELETE_EXERCISE, EXERCISES_LOADING} from '../actions/types'

export const getExercises = () => {
    return {
        type: GET_EXERCISES
    }
}