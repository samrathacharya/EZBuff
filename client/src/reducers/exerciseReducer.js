import {v4 as uuid} from 'uuid';
import {GET_EXERCISES, ADD_EXERCISE, DELETE_EXERCISE, EXERCISES_LOADING} from '../actions/types'

const initialState = {
    exercises:[
        {id: uuid(), name: "Curls", sets: 4, reps: 12, weight: 10},
        {id: uuid(), name: "Squats", sets: 4, reps: 12, weight: 10},
        {id: uuid(), name: "Pull Ups", sets: 4, reps: 12, weight: 10},
        {id: uuid(), name: "Push Ups", sets: 4, reps: 12, weight: 10}
    ],
    loading: false
}

export default function (state = initialState, action){
    switch(action.type){
        case GET_EXERCISES:
            return{
                ...state,
                loading: false
            };
        case ADD_EXERCISE:
            return{
                ...state,
                exercises: [...state.exercises, action.payload]
            }
        case DELETE_EXERCISE:
            return{
                ...state,
                exercises: state.exercises.filter(exercise => exercise.id !== action.payload)
            }
        case EXERCISES_LOADING:
            return{
                ...state,
                loading: true
            }
        default:
            return state;
    }
}