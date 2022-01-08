import React, { Component } from 'react';
import Habits from './components/habits';
import './app.css'
import Navbar from './components/navbar';
class App extends Component {
  state = {
    habits:[
        { id: 1, name: 'Reading', count: 0},
        { id: 2, name: 'coding', count: 0},
        { id: 3, name: 'Riding' ,count: 0}, 

    ],
    total:{
      count: 0
    }
  }
  
  handleIncrement = (habit) => {
    const habits = [...this.state.habits]; //새로운 배열 생성 why? 직접적으로 오브젝트를 수정하는 것은 좋지 않은 방법
    const index  = this.state.habits.indexOf(habit);
    habits[index].count++;
    this.setState({habits}); // key 와 value가 같다면 생략 가능
    const total  = this.state.total;
    this.state.habits.map(habit=>{
     total.count+= habit.count;
   });
 }

 handleDecrement  = (habit) => {
     const habits = [...this.state.habits];
     const index  = this.state.habits.indexOf(habit);
     habits[index].count && habits[index].count--;
     this.setState({habits});
     
 }

 handleDelete = (habit) => {
     const habits = this.state.habits.filter(item => item.id !== habit.id); //fiter를 사용해 배열을 생성하는 방법
     // const habits = [...this.state.habits];  
     // const index  = this.state.habits.indexOf(habit); 
     // habits.splice(index,1); // splice를 사용해 특정 인덱스를 삭제하는 방법
     this.setState({habits});
 }

 handleAdd = (name) => {
   const habits = [...this.state.habits, {id:Date.now(), name, count:0 }];
   this.setState({habits});
 }

 handleReset = () => {
    const habits = this.state.habits.map(habit => {
      habit.count = 0;
      return habit
    })
    this.setState({habits})
 }
 
  render() {
    return (
      <>
        <Navbar totalCount={this.state.habits.filter(item => item.count > 0).length}/>
        <Habits
         habits={this.state.habits}        
         onIncrement={this.handleIncrement}
         onDecrement={this.handleDecrement}
         onDelete={this.handleDelete}
         onAdd={this.handleAdd}
         onReset={this.handleReset}>
         </Habits>
      </>
    )
  }
}

export default App;