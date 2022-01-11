import React from "react";
class Clock extends React.Component {

    constructor(props) {
      super(props);
      this.state = {date: new Date()};
    }
  
    componentDidMount() {  // 컴포넌트가 생길 때 실행
      this.timerID = setInterval(  // 주기적으로 실행 하는 함수 
        () => this.tick(),
        1000
      );
    }
  
    componentWillUnmount() { // 컴포넌트가 닫힐 때 실행
      clearInterval(this.timerID); // 주기적으로 실행 하는 함수를 종료시키는 함수
    }
  
    tick() {
      this.setState({
        date: new Date()
      });
    }
  
    render() {
      return (
        <div>
          <h1>Hello, world!</h1>
          <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
        </div>
      );
    }
  }

  export default Clock;