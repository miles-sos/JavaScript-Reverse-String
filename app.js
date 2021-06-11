/*
Write a JavaScript Program that will collect a string and print out same string in its reverse order.

For example: input: "cool" output: "looc"
*/
let newString = [];
let inputReceived = prompt('Enter the string');
if(inputReceived){
    let splitArray = inputReceived.trim().split("");
    
    for(let i=splitArray.length; i>=0; i--){
        let reversedstring = splitArray[i];
        newString.push(reversedstring);
    }
    console.log(`
        The string received: ${inputReceived}
        The reversed string: ${newString.join('')}`);
}else{console.log('A value is required');}


