import React, { Component } from 'react'

export class AddTodo extends Component {

    state = {
        title: ''
    }

    updateTitle = (e) => this.setState({ [e.target.name]: e.target.value});
   
    //Submit Todo
    onSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state.title);
        this.setState({title: ''}); //to clear the form after submit
    }
    
    render() {
        return (
            <form onSubmit={this.onSubmit} style={{display:'flex'}}>
                <input 
                type="text" 
                name="title" 
                placeholder= "Add Todo..." 
                style={{flex: '10', padding: '5px'}}
                value = {this.state.title}
                onChange = {this.updateTitle}
                />

                <input 
                type="submit" 
                value="Submit"
                className="btn"
                style={{flex:'1'}}
                />
            </form>
        )
    }
}

export default AddTodo
