/*
In this exercise, a string is passed to a method and a new string 
has to be returned with the first character of each word in the string.

For example:
"This Is A Test" ==> "TIAT"
Strings will only contain letters and spaces, 
with exactly 1 space between words, 
and no leading/trailing spaces.
*/


// Solution

function makeString(s){
  return (s.match(/\b\w/g)).join('');
}

// or

function makeString(s){
  let arr_words = s.split(" ");
  let result = "";
  for (let i=0; i<arr_words.length; i++) {
    let first_letter = arr_words[i].charAt(0);
    result += first_letter;
  }
  return result;
}