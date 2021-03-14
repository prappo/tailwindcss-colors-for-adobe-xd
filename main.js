const assets = require("assets");
const { Color } = require("scenegraph");
const { TailwindColors } = require("./colors");

function tailwindCssColors(){
    const tailwindColors = TailwindColors();
    for(var colorName in tailwindColors){
        assets.colors.add([
            new Color(tailwindColors[colorName])
        ]);
    
    }
    
}

module.exports = {
    commands: {
        tailwindCssColors: tailwindCssColors
    }
};
