const pigIt = (str) => {
 const words = str.split(' ');
 console.log(words)

 const processWord = (word) => {
    // Check if the word is a letter (not punctuation)
    if (/^[A-Za-z]+$/.test(word)) {
      // Move the first letter to the end and add "ay"
      return word.slice(1) + word[0] + 'ay';
    } else {
      // If it's not a letter, return it as 
      console.log(words)
      return word;
    }
  };

  const pigLatinWords = words.map(processWord);

  // Join the words back together with spaces
  return pigLatinWords.join(' ');
}

pigIt('Pig latin is cool')
console.log(pigIt('Pig latin is cool')); // Output: "igPay atinlay siay oolcay"
console.log(pigIt('Hello world !'));     // Output: "elloHay orldway !"





