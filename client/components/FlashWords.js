import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { getFlashWords } from '../store'


class FlashWords extends Component {
  constructor(props) {
    super(props)
    this.state = {
      /* the property idx is used to filter the currently rendered flashWord */
      idx: 0
    }
  }

  /* when the component mounts, load a random set of flashWords and toggle through the array in 3s intervals */
  componentDidMount() {
    this.props.loadFlashWords(seconds)
    this.intervalId = setInterval(this.toggleFlashWords.bind(this), 3000)
  }

  /* clear the interval when the component unmounts */
  componentWillUnmount() {
    clearInterval(this.intervalId)
  }

  /* function called in 3s intervals once component mounts; this powers filter controlling the currently rendered flashWord */
  toggleFlashWords = () => {
    this.setState({ idx: this.state.idx + 1 })
  }

  render() {
    const { flashWords } = this.props
    let currentFlashWord = flashWords[this.state.idx]

    return (
      <div>
        <p>This is where the flash words will come!</p>
        <p>{!!currentFlashWord && currentFlashWord.word}</p>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    flashWords: state.flashWords
  }
}

const mapDispatchToProps = dispatch => {
  return {
    loadFlashWords(seconds) {
      /* This is hardcoded to 60, but I'll need to enable a user to pass this info in. */
      dispatch(getFlashWords(60))
    }
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(FlashWords))
