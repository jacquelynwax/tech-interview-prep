import axios from 'axios'
import history from '../history'

const SET_USER = 'SET_USER'
const REMOVE_USER = 'REMOVE_USER'

const defaultUser = {}

const setUser = user => ({type: SET_USER, user})
const removeUser = () => ({type: REMOVE_USER})

export const me = () => dispatch =>
  axios.get('/auth/me')
    .then(res => dispatch(setUser(res.data || defaultUser)))
    .catch(err => console.log(err))

export const auth = (email, password, method) => dispatch =>
  axios.post(`/auth/${method}`, { email, password })
    .then(res => {
      dispatch(setUser(res.data))
      history.push('/')
    }, authError => {
      dispatch(setUser({error: authError}))
    })
    .catch(dispatchOrHistoryErr => console.error(dispatchOrHistoryErr))

export const logout = () => dispatch =>
  axios.post('/auth/logout')
    .then(() => {
      dispatch(removeUser())
      history.push('/login')
    })
    .catch(err => console.log(err))

export default function (state = defaultUser, action) {
  switch (action.type) {
    case SET_USER:
      return action.user
    case REMOVE_USER:
      return defaultUser
    default:
      return state
  }
}
