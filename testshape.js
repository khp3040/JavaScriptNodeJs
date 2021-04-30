const Rectangle = require('./rectangle')
const Triangle = require('./triangle')
class Main{
    static display(shape){
        console.log('Area of '+shape +' '+shape.calculateArea());
    }
}

const rectangle = new Rectangle(23.4,34.5);
const triangle = new Triangle(23.4,34.5);
Main.display(rectangle)
Main.display(triangle)

// Nodejs = v8 + libuv (Asynchronous Evented IO Library)+ C++/JS
// NPM (NodePackageManager)

// fs,http,events,os,util
// package.json
// npm install --save 




