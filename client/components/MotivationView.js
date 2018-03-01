import React, { Component } from 'react'
import { Demographics, Hero, FlashWords, PowerPose } from '../components'

class MotivationView extends Component {
  constructor(props) {
    super(props)
    this.state = {
      frame: 1
    }
  }

  toggle = () => {
    this.state.frame <= 4 ? this.setState({ frame: this.state.frame + 1 }) : clearInterval(this.intervalId)
  }

  componentWillUnmount() {
    clearInterval(this.intervalId)
  }

  render () {
    return (
      <div className="flex-container">
        <Hero />
      </div>
    )
  }

  renderSwitch = () => {
    switch (this.state.frame) {
      case 1:
        return (<Demographics />)
      case 2:
        return (<Hero />)
      case 3:
        return (<FlashWords />)
      case 4:
        return (<PowerPose />)
      case 5:
        return (<p>Now go get 'em!'</p>)
    }
  }
}

export default MotivationView


// render () {
//   return (
//     <div className="flex-container">
//       {this.renderSwitch()}
//     </div>
//   )
// }

// componentDidMount() {
//   this.intervalId = setInterval(this.toggle.bind(this), 2000)
// }
