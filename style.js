
const words = ['react', 'angular', 'javascript', 'bootstrap', 'tailwind']

// Respective lint of Hints
const hints = ['Javascript framework', 'Javascript framework', 'Scripting Language', 'Styling Library', 'Styling Library']

// Intialise display word
let displayWord = ''

// Function to shuffle words
function shuffle(str) {
    strArr = Array.from(str) // gives value
    //    console.log(strArr); // ['react' , 'angular' , 'javascript' , 'bootstrap' , 'tailwind']
    for (let i = 0; i < strArr.length - 1; ++i) {
        // console.log(strArr[i])
        let j = Math.floor(Math.random() * strArr.length);
        // console.log(strArr[j])
        // Swap letters 
        let temp = strArr[i]; // react
        strArr[i] = strArr[j]; // react -- angular
        strArr[j] = temp; // angular -- react
        // console.log(temp)
    }
    return strArr.join(' ');
      
}
// shuffle(words)

// Function to check input and display result 
function check() {
    let input = document.getElementById('input');
    let output = document.getElementById('output');
    
    if (
        input.value.toLocaleLowerCase() === 
        displayWord.toLocaleLowerCase()
        ) {
        output.innerText ="Correct "
       
            }
    else {
        output.innerText ="Incorrect " ;
        input.value= " " 
    }
  

    
}

// To refresh and show new word
function refresh() {
   
    index = Math.floor(Math.random() * 5);
    displayWord = words[index];
    console.log(displayWord);
    displayHint = hints[index];
 
    
    scrambledWord = document.getElementById('scrambled-word');
    scrambledWord.innerText =
        shuffle(displayWord).toUpperCase();
    let hint = document.getElementById('hint');
    hint.innerText = displayHint;
    document.getElementById('output').innerText = " "
  
    
}

// Function call when page load for first time
refresh();
