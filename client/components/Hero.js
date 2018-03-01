import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { getHeros } from '../store'


class Hero extends Component {
  constructor(props) {
    super(props)
    this.state = {
      /* the property idx is used to filter the currently rendered hero */
      idx: 0
    }
  }

  /* when the component mounts, load a random set of heros and toggle through the array in 60s intervals */
  componentDidMount() {
    this.props.loadHeros(120)
    this.intervalId = setInterval(this.toggleHeros.bind(this), 60000)
  }

  /* clear the interval when the component unmounts */
  componentWillUnmount() {
    clearInterval(this.intervalId)
  }

  /* function called in 3s intervals once component mounts; this powers filter controlling the currently rendered flashWord */
  toggleHeros = () => {
    this.setState({ idx: this.state.idx + 1 })
  }

  render() {
    console.log('!!!!!', this.props)
    const { heros } = this.props
    let currentHero = heros[this.state.idx]

    return (
      <div className="flex-container horizontal-container">
        <div className="flex-container vertical-container">
          {!!currentHero && currentHero.name}
          {!!currentHero && currentHero.description}
        </div>
        <div className="flex-container image-container">
          {!!currentHero && <img src={currentHero.image}></img>}
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    heros: state.heros
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    loadHeros(seconds) {
      /* This is hardcoded to 120, but I'll need to enable a user to pass this info in. */
      dispatch(getHeros(seconds))
    }
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Hero))
