// // Regular Function
// function regularFunction() { 
//     console.log("This is a regular function. Calling Parent", this);
// }
  
// // Arrow Function
// const arrowFunction = () => {
//     console.log("This is an arrow function. Enclosed Class", this);
// }
  
// const obj = {
//     name: 'Nanodegree',
//     regularFn: regularFunction,
//     arrowFn: arrowFunction,
//     sayHelloRegular: function() {
//         console.log(`Regular function says hello to ${this.name}`);
//     },
//     sayHelloArrow: () => {
//         console.log(`Arrow function says hello to ${this}`);
//     }
// };

// class NanoClass {
//     message = "Hello"
//     obj = {
//         name: "Nanodegree",
//         regularFn: regularFunction,
//         arrowFn: arrowFunction,
//         sayHelloRegular: function() {
//           console.log(`${this.message} from ${this.name} (Regular Function)`);
//         },
//         sayHelloArrow: () => {
//           console.log(`${this.message} from ${this.obj.name} (Arrow Function)`);
//         }
//     };
// }

  
// // regularFunction(); // Called from window context
// // arrowFunction();   // Called from window context
// // console.log('-----------------------')

// // obj.regularFn();    // Called from Obj
// // obj.arrowFn();      // Called from  Obj
  
// // obj.sayHelloRegular(); // Called from function defined inside obj
// // obj.sayHelloArrow();   // Called from function defined inside obj
  
// let nano = new NanoClass()
// nano.obj.sayHelloRegular()
// nano.obj.sayHelloArrow()





// EVENTS
// - Types
    // - system
    function onLoad(event) { // event object
        console.log('Body loaded', event)
    }
    // - user event
    function handleClick(event) {
        console.log('Body clicked', event);
    }
// - Handlers
// - Propagation
// Capturing - Parent >> child
// Bubbling - Child >> Parent 

function headerClick() {
    console.log('Header clicked');
}


function h1Click() {
    console.log('h1 clicked');
}

// - Object


// - Listeners
document.addEventListener('click', handleClick, { capture: true})
document.addEventListener('load', onLoad, { capture: true})



// Select DOM elements
// - getElementById
// - getElementByClassName
// - querySelector
// - querySelectorAll


// Manipulating DOM elements
// - Changing text and content
// - Changing attributes
// - Add or remove class names
// - Create and append elements
// - Removing elements 


