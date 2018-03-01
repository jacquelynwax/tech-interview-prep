import axios from 'axios'
import { generateRandomHeros } from '../utils'

const SET_HEROS = 'SET_HEROS'
const REMOVE_HEROS = 'REMOVE_HEROS'

const defaultHeros = []

const setHeros = (heros) => ({type: SET_HEROS, heros})
const removeHeros = () => ({type: REMOVE_HEROS})

export const getHeros = (seconds) => dispatch =>
  axios.get('api/heros')
    .then(res => generateRandomHeros(seconds, res.data))
    .then(heros => dispatch(setHeros(heros)))
    .catch(err => console.log(err))

export default function (state = defaultHeros, action) {
  switch (action.type) {
    case SET_HEROS:
      return action.heros
    case REMOVE_HEROS:
      return defaultHeros
    default:
      return state
  }
}
