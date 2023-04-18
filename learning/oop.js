// //implementation of abstraction in oop js:

// function Circle(radius) {
//     // let color = 'red';
//     this.radius = radius;
//     let defaultLocation = { x: 0, y: 0 } //this makes it private
//     let computeOptimumLocation = function (factor) {
//         //...
//     }
//     //now the default location isnt accessible from the outside.
//     //if we want to access from the outside we can define a method like that:
//     this.getDefaultLocation = function () {
//         return defaultLocation;
//     }
//     this.draw = function () {
//         computeOptimumLocation(0.1)
//         // defaultLocation
//         console.log('draw')
//         //if i want to use the properties of the circle object we need to use 'this' key word
//         this.radius
//     }
//     //another way (nicer) to access the default location and only read that:

//     Object.defineProperty(this, 'defaultLocation', {
//         get: function () {//this is a computed function to get value and only read that. if we want to change we use the word 'set' and function with value to change
//             return defaultLocation;
//         },
//         set: function (value) {
//             if (!value.x || !value.y) {
//                 throw new Error('Invalid location');
//             }
//             defaultLocation = value
//         }
//     })
//     //now we can call circle.defaultLocation 
// }
// const circle = new Circle(10)
// circle.draw();


// function Stopwatch() {
//     let duration, endTime, running, startTime = 0
//     this.start = function () {
//         if (running) {
//             throw new Error('stopwatch has already started')
//         }
//         running = true
//         startTime = new Date();
//     }
//     this.stop = function () {
//         if (!running) {
//             throw new Error('stopwatch is not started')
//         }
//         running = false;
//         endTime = new Date()
//         const seconds = (endTime.getTime() - startTime.getTime()) / 1000;
//         duration += seconds
//     }
//     this.reset = function () {
//         startTime = null
//         endTime = null
//         running = false
//         duration = 0
//     }
//     Object.defineProperty(this, 'duration', {
//         get: function () {
//             return duration
//         }
//     })

// }



