import React, { Component } from 'react'
import Habit from './habit'
class Habits extends Component {
    state = {
        habits:[
            { id: 1, name: 'Reading', count: 0},
            { id: 2, name: 'coding', count: 0},
            { id: 3, name: 'Riding' ,count: 0}, 
        ],
    }
    render() {
        return (
            <ul >
                {
                    this.state.habits.map(habit=>((
                        <Habit key={id} habit={habit}/>
                     )))
                }
            </ul>
        )
    }
}

export default Habits;