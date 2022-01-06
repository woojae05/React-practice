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

    handleIncrement = (habit) =>{
       const habits = [...this.state.habits]; // 배열 복사, 새로운 배열 생성 why? 직접적으로 배열을 수정하는 것은 좋지 않은 방법
       const index  = this.state.habits.indexOf(habit);
       habits[index].count++;
       this.setState({habits}) // key 와 value가 같다면 생략 가능
    }

    handleDecrement  = (habit) =>{
        const habits = [...this.state.habits];
        const index  = this.state.habits.indexOf(habit);
        habits[index].count && habits[index].count--;
        this.setState({habits})
    }

    handleDelete = (habit) =>{
        console.log("hi")
        const habits = this.state.habits.filter(item => item.id !== habit.id) //fiter를 사용해 배열을 생성하는 방법
        // const habits = [...this.state.habits];  
        // const index  = this.state.habits.indexOf(habit); 
        // habits.splice(index,1); // splice를 사용해 특정 인덱스를 삭제하는 방법
        this.setState({habits}) 
    }

    render() {
        return (
            <ul >
                {
                    this.state.habits.map(habit=>((
                        <Habit
                         key={habit.id}
                         habit={habit}
                         onIncrement={this.handleIncrement}
                         onDecrement={this.handleDecrement}
                         onDelete={this.handleDelete}/>
                     )))
                }
            </ul>
        )
    }
}

export default Habits;