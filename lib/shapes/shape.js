import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

class Shape {
    color;
    text;
    textColor;
    directoryPath = path.join(__dirname, '../', '../', '/assets', '/svg');

    constructor(color, text, textColor){
        this.color = color;
        this.text = text;
        this.textColor = textColor;
    }

    setColor(color){
        this.color = color;
    }

    setText(text){
        this.text = text;
    }

    setTextColor(color){
        this.textColor = color;
    }
}

export default Shape;