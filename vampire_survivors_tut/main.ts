
// Main game file

// Modules:
import Phaser from 'phaser';

import { PreloadAssets } from './scenes/preloadAssets';
import { PlayGame } from './scenes/playGame';
import { GameOptions } from './gameOptions';

// Initialize the Scale Manager
const scaleObject : Phaser.Types.Core.ScaleConfig = {
    mode        : Phaser.Scale.FIT,
    autoCenter  : Phaser.Scale.CENTER_BOTH,
    parent      : 'thegame',
    width       : GameOptions.gameSize.width,
    height      : GameOptions.gameSize.height
}

const configObject : Phaser.Types.Core.GameConfig = {
    type            : Phaser.WEBGL,
    backgroundColor : GameOptions.gameBackgroundColor,
    scale           : scaleObject,
    scene           : [
        PreloadAssets,
        PlayGame
    ],
    physics : {
        default : 'arcade'
    }
}

// Instantiate the game:
console.log("Starting Game!");
new Phaser.Game(configObject);

