import axios from 'axios'
import { generateRandomFlashWords } from '../utils'

const SET_FLASHWORDS = 'SET_FLASHWORDS'
const REMOVE_FLASHWORDS = 'REMOVE_FLASHWORDS'

const defaultFlashWords = []

const setFlashWords = (flashWords) => ({type: SET_FLASHWORDS, flashWords})
const removeFlashWords = () => ({type: REMOVE_FLASHWORDS})

/* eventually I need to create a utils function that generates a random set of flashWords based on the time */
export const getFlashWords = (seconds) => dispatch =>
  axios.get('api/flashwords')
    .then(res => generateRandomFlashWords(seconds, res.data))
    .then(flashWords => dispatch(setFlashWords(flashWords)))
    .catch(err => console.log(err))

export default function (state = defaultFlashWords, action) {
  switch (action.type) {
    case SET_FLASHWORDS:
      return action.flashWords
    case REMOVE_FLASHWORDS:
      return defaultFlashWords
    default:
      return state
  }
}
