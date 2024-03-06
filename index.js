const inquirer = require("inquirer");
const Triangle = require("./lib/shapes");
const fs = require("fs");

const initialQuestion = {
    type:'list',
    message:'What would you like to do?',
    choices:['Add Shape', 'Exit'],
    name:'initialChoice'
}


const shapeQuestion = [{
    type:'list',
    message:'What shape would you like to add?',
    choices:['Circle', 'Square', 'Triangle'],
    name:'shapeChoice'
},
{
    type:'input',
    message:'What color would you like the shape to be?',
    name:'shapeColor'
},
{
    type:'input',
    message:'What text would you like the shape to be?',
    name:'shapeText'
},
{
    type:'input',
    message:'What color would you like the text to be?',
    name:'shapeTextColor'
}]


inquirer.prompt(initialQuestion).then((a) => {
    //console.log(a);
if(a.initialChoice === 'Add Shape') {

addShape();

}else{return}
})


function addShape(){
inquirer.prompt(shapeQuestion).then((a) => {
    
    console.log(a);
const newShape = new Triangle(a.shapeColor);

newShape.setColor(a.shapeColor);
const shapeElement = newShape.render();

const svgData = 
`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

${shapeElement}

<text x="150" y="150" font-size="60" text-anchor="middle" fill="${a.shapeTextColor}">${a.shapeText}</text>

</svg>`;

fs.writeFileSync('logo.svg', svgData);

})



}