class Global {
}
Global.ScrWidth = 800;
Global.ScrHeight = 600;
Global.wallHeight = 300;
Global.resList = [
    {
        name: "BRICK1",
        path: "res/wall.jpg"
    },
    {
        name:"BRICK2",
        path: "res/bricks2.jpg"
    }
];
Global.tileTypes = [
    //0
    {
        blocking: false,
        texName: "NONE",
        texW: 0
    },
    //1
    {
        blocking: true,
        texName: "BRICK1",
        texW: 256
    }
    //2
    ,{
        blocking: true,
        texName: "BRICK2",
        texW: 1024
    }
];
Global.map01 = {
    data: [
        1, 1, 1, 1, 2, 1, 1, 1, 1, 1,
        1, 0, 0, 0, 0, 0, 0, 0, 0, 1,
        2, 0, 1, 1, 1, 0, 0, 1, 0, 1,
        1, 0, 0, 0, 1, 0, 1, 1, 0, 1,
        1, 0, 1, 1, 1, 0, 0, 1, 0, 1,
        1, 0, 0, 0, 0, 0, 0, 0, 0, 1,
        1, 1, 1, 1, 1, 1, 1, 1, 1, 1
    ],
    width: 10,
    height: 7
};
th= 0.1508 //9 degrees 1/10 of a turn
Global.lrot = new Mat2D(Math.cos(th), -Math.sin(th), Math.sin(th), Math.cos(th));
Global.rrot = new Mat2D(Math.cos(-th), -Math.sin(-th), Math.sin(-th), Math.cos(-th));

Global.l90rot = new Mat2D(0, -1, 1, 0);
Global.r90rot = new Mat2D(0, 1, -1, 0);

Global.debugScale = 100;

class DebugInfo
{
    constructor(id)
    {
        this.element = document.createElement("div");
        this.element.id = id;
    }
    init()
    {
        document.body.appendChild(this.element);
    }
    log(varName,val)
    {
        let el = document.getElementById(varName);
        if(el == null)
        {
            el = document.createElement("div");
            el.id = varName;
            this.element.appendChild(el);
        }
        el.innerText = varName + " = " + val;
    } 
}
let debug = new DebugInfo("debug");
let dlastdraw=performance.now();