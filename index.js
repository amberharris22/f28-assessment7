// 1 Sum Zero
const addToZero = (arr) => {
    let answer = false
    for(let i=0; i<arr.length; i++){
        for(let j=1; j<arr.length; j++){
        if(arr[i]+arr[j] === 0){
            answer = true
        }
    }
}console.log(answer)
}

addToZero([])
// -> False
addToZero([1])
// -> False
addToZero([1, 2, 3])
// -> False
addToZero([1, 2, 3, -2])
// -> True

//the runtime is O(n^2) because has a nested for loop
//linear space 0(n)

// 2 Unique Characters
const hasUniqueChars = (str) => {
    for(let i=0; i<str.length; i++){
        for(let j=i+1; j<str.length; j++){
           if(str[i] === str[j]){
              return false;
             }
            }
        }return true
    }
    
console.log(hasUniqueChars("Monday"))
// -> True
    
console.log(hasUniqueChars("Moonday"))
// -> False

//the runtime is O(n^2) because has a nested for loop
//linear space 0(n)

// 3 Pangram Sentence

const isPangram = (sentence) =>{
    let alphabet = 'abcdefghijklmnopqrstuvwxyz'
        sentence = sentence.toLowerCase().replaceAll(' ', '')        
    // console.log(sentence)
    for(let i=0; i<sentence.length; i++){
        if(alphabet.indexOf(sentence[i]) === -1){
            return false
        }
    }
    return true
}


console.log(isPangram("The quick brown fox jumps over the lazy dog"))
// -> True

console.log(isPangram("I like cats, but not mice"))
// -> False

//this is an 0(n) because it will grow with the length of the sentence
//linear space 0(n)

// 4 Longest Word

const findLongestWord = (words) => {
    let longWord = 0
    for(let i=0; i<words.length; i++){
        if(words[i].length > longWord){
         longWord = words[i].length
        }
    }console.log(longWord)
}
findLongestWord(["hi", "hello"]);
// -> 5

//this is an 0(n) because it will change time based on how long the array is
//linear space 0(n)