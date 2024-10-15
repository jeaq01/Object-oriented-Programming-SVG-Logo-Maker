import Shape from './shape.js'
import fs from 'fs';
import path from 'path';

class Square extends Shape{
    constructor(color, text, textColor){
        super(color, text, textColor);
    }

    render(){
        const filePath = path.join(this.directoryPath, 'Square.svg');
        const svgContent = `
            <?xml version="1.0" encoding="utf-8"?>
                <svg viewBox="0 0 100 100" version="1.1" xmlns="http://www.w3.org/2000/svg">
                    <polygon points="25, 25 75, 25 75, 75 25, 74" fill="${this.color}" stroke-width="2" />
                    <text x="50%" y="52%" text-anchor="middle" font-size="7px" fill="${this.textColor}">${this.text}</text>
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

export default Square;