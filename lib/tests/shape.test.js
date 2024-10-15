import Triangle from '../shapes/triangle.js';

test('Creating and rendering a triangle', function(){
    const shape = new Triangle();
    shape.setColor("blue");
    shape.setText("Hello There");
    shape.setTextColor("white");
    expect(shape.render()).toEqual(`<?xml version="1.0" encoding="utf-8"?>
                    <svg viewBox="0 0 100 100" version="1.1" xmlns="http://www.w3.org/2000/svg">
                        <polygon points="50, 25 75, 75 25, 75" fill="blue" stroke-width="2" />
                            <text x="50%" y="52%" text-anchor="middle" font-size="5px" fill="white">Hello There</text>
                    </svg>`
    );
});