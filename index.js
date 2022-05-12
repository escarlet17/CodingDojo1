var world = [
    [1, 1, 1, 1, 1],
    [1, 0, 2, 2, 1],
    [1, 2, 1, 2, 1],
    [1, 2, 2, 2, 1],
    [1, 2, 2, 2, 1],
    [1, 2, 1, 2, 1],
    [1, 2, 2, 2, 1],
    [1, 2, 2, 2, 1],
    [1, 2, 1, 2, 1],
    [1, 2, 2, 2, 1],
    [1, 1, 1, 1, 1],
];

var worldDict = {
    0: "blank",
    1: "wall",
    2: "sushi"
};

function drawWorld() {
    var output = "";

    for (var row = 0; row < world.length; row++) {
        output += "<div class = 'row'></div>";
        for (var x = 0; x < world[row].length; x++) {
            output += "<div class = '" + worldDict[world[row][x]] + "'></div>";
        }
        output += "</div>";
    }
    document.getElementById("world").innerHTML = output;
}


drawWorld();

var NinjaMan = {
    x: 1,
    y: 1
};

function drawNinjaman() {
    document.getElementById('NinjaMan').style.top = NinjaMan.y * 40 + 'px';
    document.getElementById('NinjaMan').style.left = NinjaMan.x * 40 + 'px';
}

drawNinjaman();

document.onkeydown = function (e) {

    console.log(e)

    if (e.keycode == 37) {
        NinjaMan.x--;
    }
    if (e.keycode == 39) {
        NinjaMan.x++;
    }
    if (e.keycode == 40) {
        NinjaMan.y--;
    }
    if (e.keycode == 38) {
        NinjaMan.y--;
    }
    DrawNinjaMan();
}