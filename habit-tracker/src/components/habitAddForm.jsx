import React, { Component } from 'react'

export default class HabitAddForm extends Component {
    
    formRef = React.createRef();
    inputRef = React.createRef();
    
    onSubmit = (event) =>{
        event.preventDefault();
        const name = this.inputRef.current.value;
        name && this.props.onAdd(name);
        this.formRef.current.reset();
    }
    render() {
        return (
           <form ref={this.formRef} className='add-form' onSubmit={this.onSubmit}>
               <input ref={this.inputRef} type="text" className='add-input' placeholder='enter your habit' />
               <button className='add-button'>add</button>
           </form>
        )
    }
}
