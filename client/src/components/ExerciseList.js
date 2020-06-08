import React, { Component } from 'react';
import {
    Container, ListGroup, ListGroupItem, Button, ListGroupItemHeading, ListGroupItemText
}
from 'reactstrap';
import { CSSTransition, TransitionGroup }
from 'react-transition-group';
import {connect} from 'react-redux'
import {getExercises, deleteExercise} from '../actions/exerciseActions'
import PropTypes from 'prop-types';

class ExerciseList extends Component {

    // Load state from getItems
    componentDidMount(){
        this.props.getExercises();
    }

    onDeleteClick = id =>{
        this.props.deleteExercise(id);
    }

    render() {
        // Destructuring
        const exercises = this.props.exercise.exercises; 
        return ( 
            <Container>
                <ListGroup>
                    <TransitionGroup className="shopping-list">
                        {exercises.map(({_id, name, sets, reps, weight}) =>(
                            <CSSTransition key={_id} timeout={500} classNames="fade">
                                <ListGroupItem>
                                    <div className="input-group">
                                    <span className="input-group-btn">
                                        <Button
                                        className="remove-btn"
                                        color="danger"
                                        size="sm"
                                        onClick={this.onDeleteClick.bind(this,_id)}
                                        >
                                            &times;</Button>
                                    </span>
                                    <ListGroupItemHeading >{name}</ListGroupItemHeading>
                                    </div>
                                    
                                    <ListGroupItemText>
                                        <span style={{fontWeight: 'bold'}}>Sets: </span>
                                        <span style={{marginRight: '1rem'}}>{sets}</span>
                                        <span style={{fontWeight: 'bold'}}>Reps: </span>
                                        <span style={{marginRight: '1rem'}}>{reps}</span>
                                        <span style={{fontWeight: 'bold'}}>Weight: </span>
                                        <span style={{marginRight: '1rem'}}>{weight} kg</span>
                                    </ListGroupItemText>
                                    </ListGroupItem>
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
 
export default connect(mapStateToProps, {getExercises, deleteExercise}) (ExerciseList);