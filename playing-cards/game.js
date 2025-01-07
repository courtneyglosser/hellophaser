
var config = {
    type: Phaser.CANVAS,
    width: 600,
    height: 600,
    physics: {
        default: 'arcade',
        arcade: {
            debug: false
        }
    },
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};


var game = new Phaser.Game(config); //create the game object

var Cards = {};

function preload() {
    this.load.image ('table', 'assets/playing_table.png');
    this.load.spritesheet('cards', 'assets/8BitDeckAssets.png', { frameWidth: 35, frameHeight: 47 });
}

function create() {
    let background = this.add.image(0, 0, 'table');
    background.x = background.displayWidth / 2;
    background.y = background.displayHeight / 2;
    xLimit = background.displayWidth;
    yLimit = background.displayHeight;

    Cards = {
        "RB": 0,

        "H2": 1,
        "H3": 2,
        "H4": 3,
        "H5": 4,
        "H6": 5,
        "H7": 6,
        "H8": 7,
        "H9": 8,
        "H10": 9,
        "HJ": 10,
        "HQ": 11,
        "HK": 12,
        "HA": 13,

        "XX": 14,

        "BB": 15,

        "C2": 16,
        "C3": 17,
        "C4": 18,
        "C5": 19,
        "C6": 20,
        "C7": 21,
        "C8": 22,
        "C9": 23,
        "C10": 24,
        "CJ": 25,
        "CQ": 26,
        "CK": 27,
        "CA": 28,

        "YY": 29,

        "J1": 30,

        "D2": 31,
        "D3": 32,
        "D4": 33,
        "D5": 34,
        "D6": 35,
        "D7": 36,
        "D8": 37,
        "D9": 38,
        "D10": 39,
        "DJ": 40,
        "DQ": 41,
        "DK": 42,
        "DA": 43,

        "Blank": 44,

        "J2": 45,

        "S2": 46,
        "S3": 47,
        "S4": 48,
        "S5": 49,
        "S6": 50,
        "S7": 51,
        "S8": 52,
        "S9": 53,
        "S10": 54,
        "SJ": 55,
        "SQ": 56,
        "SK": 57,
        "SA": 58
    };

    this.add.sprite(100, 100, 'cards', Cards.RB);


    this.add.sprite(100, 150, 'cards', Cards.H2);
    this.add.sprite(100, 200, 'cards', Cards.H3);
    this.add.sprite(100, 250, 'cards', Cards.H4);
    this.add.sprite(100, 300, 'cards', Cards.H5);
    this.add.sprite(100, 350, 'cards', Cards.H6);
    this.add.sprite(100, 400, 'cards', Cards.H7);
    this.add.sprite(100, 450, 'cards', Cards.H8);
    this.add.sprite(100, 500, 'cards', Cards.H9);
    this.add.sprite(100, 550, 'cards', Cards.H10);
    this.add.sprite(150, 100, 'cards', Cards.HJ);
    this.add.sprite(150, 150, 'cards', Cards.HQ);
    this.add.sprite(150, 200, 'cards', Cards.HK);
    this.add.sprite(150, 250, 'cards', Cards.HA);


    this.add.sprite(150, 300, 'cards', Cards.XX);

    this.add.sprite(150, 350, 'cards', Cards.BB);


    this.add.sprite(150, 400, 'cards', Cards.C2);
    this.add.sprite(150, 450, 'cards', Cards.C3);
    this.add.sprite(150, 500, 'cards', Cards.C4);
    this.add.sprite(150, 550, 'cards', Cards.C5);
    this.add.sprite(200, 100, 'cards', Cards.C6);
    this.add.sprite(200, 150, 'cards', Cards.C7);
    this.add.sprite(200, 200, 'cards', Cards.C8);
    this.add.sprite(200, 250, 'cards', Cards.C9);
    this.add.sprite(200, 300, 'cards', Cards.C10);
    this.add.sprite(200, 350, 'cards', Cards.CJ);
    this.add.sprite(200, 400, 'cards', Cards.CQ);
    this.add.sprite(200, 450, 'cards', Cards.CK);
    this.add.sprite(200, 500, 'cards', Cards.CA);


    this.add.sprite(200, 550, 'cards', Cards.YY);

    this.add.sprite(250, 100, 'cards', Cards.J1);


    this.add.sprite(250, 150, 'cards', Cards.D2);
    this.add.sprite(250, 200, 'cards', Cards.D3);
    this.add.sprite(250, 250, 'cards', Cards.D4);
    this.add.sprite(250, 300, 'cards', Cards.D5);
    this.add.sprite(250, 350, 'cards', Cards.D6);
    this.add.sprite(250, 400, 'cards', Cards.D7);
    this.add.sprite(250, 450, 'cards', Cards.D8);
    this.add.sprite(250, 500, 'cards', Cards.D9);
    this.add.sprite(250, 550, 'cards', Cards.D10);
    this.add.sprite(300, 100, 'cards', Cards.DJ);
    this.add.sprite(300, 150, 'cards', Cards.DQ);
    this.add.sprite(300, 200, 'cards', Cards.DK);
    this.add.sprite(300, 250, 'cards', Cards.DA);


    this.add.sprite(300, 300, 'cards', Cards.Blank);

    this.add.sprite(300, 350, 'cards', Cards.J2);

    
    this.add.sprite(300, 400, 'cards', Cards.S2);
    this.add.sprite(300, 450, 'cards', Cards.S3);
    this.add.sprite(300, 500, 'cards', Cards.S4);
    this.add.sprite(300, 550, 'cards', Cards.S5);
    this.add.sprite(350, 100, 'cards', Cards.S6);
    this.add.sprite(350, 150, 'cards', Cards.S7);
    this.add.sprite(350, 200, 'cards', Cards.S8);
    this.add.sprite(350, 250, 'cards', Cards.S9);
    this.add.sprite(350, 300, 'cards', Cards.S10);
    this.add.sprite(350, 350, 'cards', Cards.SJ);
    this.add.sprite(350, 400, 'cards', Cards.SQ);
    this.add.sprite(350, 450, 'cards', Cards.SK);
    this.add.sprite(350, 500, 'cards', Cards.SA);

    this.add.sprite(350, 550, 'cards', Cards.Blank);
}

function update() {
    let x = Phaser.Math.RND.between(0, 600);
    let y = Phaser.Math.RND.between(0, 600);

    this.add.sprite(x, y, 'cards', Cards.SA);
}


