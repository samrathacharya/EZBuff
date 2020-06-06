import {v4 as uuid} from 'uuid';
import {GET_EXERCISES, ADD_EXERCISE, DELETE_EXERCISE, EXERCISES_LOADING} from '../actions/types'

const initialState = {
    exercises:[
        {id: uuid(), name: "Curls", set: 4, reps: 12, weight: 10},
        {id: uuid(), name: "Squats", set: 4, reps: 12, weight: 10},
        {id: uuid(), name: "Pull Ups", set: 4, reps: 12, weight: 10},
        {id: uuid(), name: "Push Ups", set: 4, reps: 12, weight: 10}
    ]
}

export default function (state = initialState, action){
    switch(action.type){
        case GET_EXERCISES:
            return{
                ...state
            };
        default:
            return state;
    }
}