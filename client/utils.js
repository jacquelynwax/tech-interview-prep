/* This utility function takes the entire array of flashwords and a user-indicated number of seconds and returns a random array of words, based on the Fisher-Yates shuffle. */

export const generateRandomFlashWords = (seconds, flashWords) => {
  let flashWordsToDisplay = []

  // generate number of desired words based on the number of seconds the user has indicated and an assumed flash time of 3s per word
  let numWords = Math.ceil(seconds / 3)

  // generate number by which to increment through the array of flashWords
  let numIncrement = Math.ceil(flashWords.length / numWords)

  // generate random first number
  let firstRandomNum = Math.ceil(Math.random() * flashWords.length)

  // loop through the array starting with firstRandomNum, increment by numIncrement, and create new array to shuffle via the Fisher-Yate shuffle
  for (var i = firstRandomNum; flashWordsToDisplay.length < numWords; i = i + numIncrement < flashWords.length ? i + numIncrement : (i + numIncrement) - flashWords.length) {
    flashWordsToDisplay.push(flashWords[i])
  }

  let j, currentWord

  // While we're working up to the number of words we need based on the number of seconds the user has indicated
  while (numWords > 0) {

    // Pick a random index position from the array
    j = Math.floor(Math.random() * numWords--)

    // And swap the word at that position with the current word
    currentWord = flashWordsToDisplay[numWords]
    flashWordsToDisplay[numWords] = flashWordsToDisplay[j]
    flashWordsToDisplay[j] = currentWord
  }

  return flashWordsToDisplay
}
