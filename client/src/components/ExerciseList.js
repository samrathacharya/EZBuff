import React, { Component } from 'react';
import {
    Container, ListGroup, ListGroupItem, Button
}
from 'reactstrap';
import { CSSTransition, TransitionGroup }
from 'react-transition-group';
import { v4 as uuid} from 'uuid'

class ExerciseList extends Component {
state = {  
    exercises:[
        {id: uuid(), name: "Curls", set: 4, reps: 12, weight: 10},
        {id: uuid(), name: "Squats", set: 4, reps: 12, weight: 10},
        {id: uuid(), name: "Pull Ups", set: 4, reps: 12, weight: 10},
        {id: uuid(), name: "Push Ups", set: 4, reps: 12, weight: 10}
    ]

}

    removeExercise = id => {
        this.setState({
            exercises: this.state.exercises.filter(exercise => exercise.id !== id)
        });
    }

    render() {
        // Destructuring
        const {exercises} = this.state; 
        return ( 
            <Container>
                <ListGroup>
                    <TransitionGroup className="shopping-list">
                        {exercises.map(({id, name, set, reps, weight}) =>(
                            <CSSTransition key={id} timeout={500} classNames="fade">
                                <ListGroupItem>
                                    <Button
                                    className="remove-btn"
                                    color="danger"
                                    size="sm"
                                    // onClick={(id) => this.removeExercise(id)}
                                    >
                                        &times;</Button>
                                    {name}</ListGroupItem>
                            </CSSTransition>

                        ))}
                    </TransitionGroup>
                </ListGroup>
            </Container>
         );
    }
}
 
export default ExerciseList;