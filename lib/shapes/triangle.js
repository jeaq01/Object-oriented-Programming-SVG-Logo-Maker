import Shape from './shape.js'
import path from 'path';
import fs from 'fs';

class Triangle extends Shape{
    constructor(color, text, textColor){
        super(color, text, textColor);
    }

    render(){
        const filePath = path.join(this.directoryPath, 'Triangle.svg');
        const svgContent = `
            <?xml version="1.0" encoding="utf-8"?>
                <svg viewBox="0 0 100 100" version="1.1" xmlns="http://www.w3.org/2000/svg">
                    <polygon points="50, 25 75, 75 25, 75" fill="${this.color}" stroke-width="2" />
                    <text x="50%" y="52%" text-anchor="middle" font-size="5px" fill="${this.textColor}">${this.text}</text>
                </svg>
            `;
        fs.writeFile(filePath, svgContent, (err) => {
            if (err) {
                console.error('Error writing to file:', err);
            } else {
                console.log('SVG file has been created.');
            }
        });
        return svgContent;
    }
}

export default Triangle;