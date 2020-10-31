/** Tetrisの中核プログラム
  *   ゲーム情報等を管理する
 **/
let targetMino;
let dm = new DrawManager();
dm.setGameField( document.getElementById( "GAME_FIELD" ) );
let mc = new MinoController( dm );


 function sampleClass() {
     activeMino  = new MinoJ();
     mc.setActiveMino( activeMino );
     mc.setStartPos( 5, 0, activeMino );
 }

function smapleRightSpin() {
    mc.spinRight();
}

function smapleLeftSpin() {
    mc.spinLeft();
}

document.onkeydown = function( e ) {
    switch ( e.keyCode ) {
        case 37:
            mc.moveLeft();
            break;
        case 38:
        case 39:
            mc.moveRight();
            break;
        case 40:
            mc.moveDown();
            break;
    }
}
