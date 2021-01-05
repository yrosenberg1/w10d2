import React from 'react'; 
 
export default class Clock extends React.Component{
    constructor(props) {
        super(props)
        this.state = {date: new Date()}
        this.tick = this.tick.bind(this)
        
    }

    tick(){

        this.setState( {date: new Date()})
    }

    componentDidMount(){
       this.interval = setInterval( this.tick , 1000);
    }

    componentWillUnmount(){
        clearInterval( this.interval)
    }
    render(){
        const minutes = this.state.date.getMinutes()
        const hours = this.state.date.getHours()
        const seconds = this.state.date.getSeconds()
        let time = this.state.date.toLocaleTimeString("en-US")
        let date = this.state.date.toLocaleDateString("en-US")
        
        return(
        <div className='clock'>
            <h1>Clock </h1>
            <div className='time-date'>
            <span> <h2 >Time: </h2>  <h2>{time}</h2>  </span> 
            <br />
            <h2> Date: {date} </h2>   
            </div>
            
        </div>)
    }
}






