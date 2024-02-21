import {Component} from 'react'
import "./index.css"

class Stopwatch extends Component{
    state = {
        isTimerRunning:false,
    timeElapsedInSeconds:0,
}
componentWillUnmount(){
    clearInterval(this.timeInterval)
}

onResetTimer = () =>{
    clearInterval(this.timeInterval)
    this.setState({isTimerRunning:false, timeElapsedInSeconds:0})
}

onStopTimer = () =>{
    clearInterval(this.timeInterval)
    this.setState({isTimerRunning:false})
}
    
updateTimer = () =>{
    this.setState(prevState =>({
        timeElapsedInSeconds:prevState.timeElapsedInSeconds + 1,
    }))
}
onStartTimer = () =>{
    this.timeInterval = setInterval(this.updateTimer, 1000)
    this.setState({isTimerRunning:true})
}
renderSeconds = () =>{
    const {timeElapsedInSeconds} = this.state
    const seconds = Math.floor(timeElapsedInSeconds % 60)
    if (seconds < 10){
        return `0${seconds}`
    }
    return seconds
}

renderMinutes = () =>{
    const {timeElapsedInSeconds}=this.state
    const minutes = Math.floor(timeElapsedInSeconds / 60)
    if (minutes<10){
        return `0${minutes}`
    }
    return minutes
}

    render(){
        const {isTimerRunning} = this.state
        const time = `${this.renderMinutes()}:${this.renderSeconds()}`

        return(
            <div className='main-container'>
        <div className='time-container'>
            <h1>STOP WATCH</h1>
            <div className='watch-container'>
                <p className='paragraph'>Timer</p>
                <h2 className='heading2'>{time}</h2>
            </div>
            <div className='buttons-container'>
                <div className='button'>
            <button className='start' onClick={this.onStartTimer}>Start</button>
            </div>
            <div className='button' onClick={this.onStopTimer}>
            <button className='stop'>Stop</button>
            </div>
            <div className='button' onClick={this.onResetTimer}>
            <button className='reset'>Reset</button>
            </div>
            </div>
            </div>
        </div>
    )}
}
export default Stopwatch