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

function moveLeft() {
    mc.moveLeft();
}

function moveRight() {
    mc.moveRight();
}
