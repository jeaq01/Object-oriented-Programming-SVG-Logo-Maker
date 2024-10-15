import { select } from '@inquirer/prompts';
import { input } from '@inquirer/prompts';
import Triangle from './lib/shapes/triangle.js';
import Circle from './lib/shapes/circle.js';
import Square from './lib/shapes/square.js';

async function getUserInput() {
  try {
    const shapeSelect = await select({
        message: 'Select a shape',
        choices: [
            {
              name: 'Circle',
              value: 'circle',
            },
            {
              name: 'Triangle',
              value: 'triangle',
            },
            {
                name: 'Square',
                value: 'square',
            },         
        ],
      });
    const shapeColor = await input({ message: 'Enter a color for your logo' });
    const text = await input({ message: 'Enter a text for your logo' });
    const textColor = await input({ message: "Enter a color for your logo's text" });
    
    var shape;
    switch(shapeSelect){
        case 'circle':
            shape = new Circle();
            break;
        case 'triangle':
            shape = new Triangle();
            break;
        case 'square':
            shape = new Square();
            break;
    }
    shape.setColor(shapeColor);
    shape.setText(text);
    shape.setTextColor(textColor);
    shape.render();
  } catch (error) {
    console.error('Error occurred:', error);
  }
}

getUserInput();
