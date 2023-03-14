// const btnClickHandler = function(e) {
//     alert("Show this text");
// }
// // const domPracticeDiv = document.getElementById('dom-manipulation-practice');

// const domPracticeDiv = document.querySelector('#dom-manipulation-practice');

// let counter = 0;
// const counterSpan = document.createElement('span')
// counterSpan.id = 'counter-span'
// counterSpan.innerText = counter;

// const clickBtn = document.createElement('button');

// clickBtn.innerText = "for reals click me"
// clickBtn.id = 'dom-click-btn'
// clickBtn.onclick = (e) => {
//     counter += 1;
//     console.log(counter);
//     counterSpan.innerText = counter;
// }

// domPracticeDiv.appendChild(clickBtn);
// domPracticeDiv.appendChild(counterSpan);


const BtnClickHandler = function(e) {
    
    // 1. Create the element //can be div, button, span
    var text = document.createElement("span");

    if(e === 'eric') text.innerHTML = "Hello, my name is Eric. I deeply enjoy Thai food, trying all things new to me, video games, and reading books. Before I came to revature I worked in IT and Networking.";
    if(e === 'john') text.innerHTML = "I am a Full Stack Software Developer from Birmingham, Alabama. I graduated in May 2022 from Auburn University with a Bachelor's Degree in Computer Science, where I have gained experience with object-oriented programming languages such as Java and C++. ";
    if(e === 'artur') text.innerHTML = "Hello, my name is Artur. This my first Html, CSS and JS experience. I am happy to learn front end, but sorry I liked back end more ))";
    // 2. Append the element
    var body = document.getElementById("AboutUs");

    body.value = text.innerHTML;
    // body.style.height ="200pt" ;
    // body.style.width = "600pt";
    // body.style.textAlign = "left"

    // var aboutUs = document.getElementById("AboutUs")
    // aboutUs.appendChild(text);

    eclicked = false;
}


// text.addEventListener ("click", function() {
//     text.innerHTML = ""
//     eclicked = true;
//   });




