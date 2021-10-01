// Script file for Breaking Bad Quotes


// variable declaration 
var h2 = document.getElementById("h2");
// Displaying the data once the dom is loaded
document.addEventListener('DOMContentLoaded',main_function);


// main function to execute setInterval
function main_function(){

    // function is called first to display the detail while DOM is loaded 
    display();  

    // setInterval is used for display the quotes in 5 seconds interval 
    setInterval(()=>{display()},5000);
}

// Display function

async function display()
{
    let res = await fetch("https://breaking-bad-quotes.herokuapp.com/v1/quotes");
    let data = await res.json();
    let quote = data[0].quote;
    let author = data[0].author;
    h2.innerHTML=quote;

    // printing the quotes in console also
    console.log(quote,author);
}