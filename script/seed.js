const { User, FlashWord, db } = require('../server/db/models')

const users = [{
  email: '12345@gmail.com',
  password: 'testpassword1',
  salt: 'not_sure?',
  googleId: '12345',
  firstName: 'Jacquelyn',
  lastName: 'Wax'
}, {
  email: '23456@gmail.com',
  password: 'testpassword2',
  salt: 'not_sure?',
  googleId: '23455',
  firstName: 'Hannah',
  lastName: 'Weber'
}];

const flashWords = [{
  word: "Able"
}, {
  word: "Accomplished"
}, {
  word: "Authentic"
}, {
  word: "Bold"
}, {
  word: "Brilliant"
}, {
  word: "Calm"
}, {
  word: "Clear"
}, {
  word: "Comfortable"
}, {
  word: "Confident"
}, {
  word: "Courageous"
}, {
  word: "Creative"
}, {
  word: "Decisive"
}, {
  word: "Dynamic"
}, {
  word: "Eager"
}, {
  word: "Empowered"
}, {
  word: "Energized"
}, {
  word: "Exhilarated"
}, {
  word: "Extraordinary"
}, {
  word: "Focused"
}, {
  word: "Hopeful"
}, {
  word: "Invigorated"
}, {
  word: "Marvelous"
}, {
  word: "Open"
}, {
  word: "Optimistic"
}, {
  word: "Positive"
}, {
  word: "Powerful"
}, {
  word: "Proud"
}, {
  word: "Ready"
}, {
  word: "Receptive"
}, {
  word: "Refreshed"
}, {
  word: "Relaxed"
}, {
  word: "Resilient"
}, {
  word: "Spectacular"
}, {
  word: "Strong"
}, {
  word: "Terrific"
}, {
  word: "Unlimited"
}, {
  word: "Valuable"
}, {
  word: "Worthy"
}];

const seed = () =>
  Promise.all(users.map(user =>
    User.create(user))
  )
  .then(() =>
    Promise.all(flashWords.map(flashWord =>
      FlashWord.create(flashWord))
  ))


const main = () => {
  console.log('Syncing db...')
  db.sync({ force: true })
    .then(() => {
      console.log('Seeding databse...')
      return seed();
    })
    .catch(err => {
      console.log('Error while seeding')
      console.log(err.stack)
    })
    .then(() => {
      db.close()
      return null
    })
}

main()
