import React, { Component } from 'react';
import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    Form,
    FormGroup,
    Label,
    Input
} from 'reactstrap';
import {connect} from 'react-redux';
import {addExercise} from '../actions/exerciseActions';

class exerciseModal extends Component {
    state = {  
        modal: false,
        name: '',
        sets: 0,
        reps: 0,
        weight: 0
    }

    toggle = () =>{
        this.setState({
            modal: !this.state.modal
        })
    }

    onChange=(event) =>{
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    onSubmit = (event) =>{
        event.preventDefault();
        //Make new item
        const newExercise = {
            name: this.state.name,
            sets: this.state.sets,
            reps: this.state.reps,
            weight: this.state.weight
        }
        // Add item using reducer
        this.props.addExercise(newExercise);
        // Close modal
        this.toggle()
    }
    render() { 
        return ( <div>
            <Button
            color = "dark"
            className="modal-button"
            onClick = {this.toggle}>
                Add Exercise    
            </Button>
            <Modal
            isOpen={this.state.modal}
            toggle={this.toggle}>
                <ModalHeader
                toggle = {this.toggle}>
                    Add an Exercise
                </ModalHeader>
                <ModalBody>
                    <Form
                    onSubmit = {this.onSubmit}>
                        <FormGroup>
                            <Label for="exercise">Name</Label>
                            <Input type="text" name="name" id="name" placeholder="Enter name of exercise" onChange={this.onChange}></Input>
                            <Label for="exercise">Reps</Label>
                            <Input type="text" name="reps" id="reps" placeholder="Add number of reps" onChange={this.onChange}></Input>
                            <Label for="exercise">Sets</Label>
                            <Input type="text" name="sets" id="sets" placeholder="Add number of sets" onChange={this.onChange}></Input>
                            <Label for="exercise">Weight</Label>
                            <Input type="text" name="weight" id="weight" placeholder="Add the weight" onChange={this.onChange}></Input>
                            <Button color="dark" style={{marginTop: '2rem'}} block>Add Exercise</Button>
                        </FormGroup>
                    </Form>
                </ModalBody>

            </Modal>
        </div> );
    }
}
 
const mapStateToProps = (state) =>({
    exercise: state.exercise
})


export default connect(mapStateToProps, {addExercise})(exerciseModal);