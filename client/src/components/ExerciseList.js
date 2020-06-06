import React, { Component } from 'react';
import {
    Container, ListGroup, ListGroupItem, Button
}
from 'reactstrap';
import { CSSTransition, TransitionGroup }
from 'react-transition-group';
import {connect} from 'react-redux'
import {getExercises} from '../actions/exerciseActions'
import PropTypes from 'prop-types';

class ExerciseList extends Component {

    // Load state from getItems
    componentDidMount(){
        this.props.getExercises();
    }

    removeExercise = id => {
        this.setState({
            exercises: this.state.exercises.filter(exercise => exercise.id !== id)
        });
    }

    render() {
        // Destructuring
        const {exercises} = this.props.exercise; 
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

ExerciseList.propTypes = {
    getExercises: PropTypes.func.isRequired,
    exercise: PropTypes.object.isRequired
}

// Maps initial state to props through the action of getItems
const mapStateToProps = (state) => ({
    exercise: state.exercise
});
 
export default connect(mapStateToProps, {getExercises}) (ExerciseList);