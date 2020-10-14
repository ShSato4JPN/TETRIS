/** Tetrisの中核プログラム
  *   ゲーム情報等を管理する
 **/
let targetMino;
let drawScreen = new DrawScreen( document.getElementById(  "GAME_FIELD" ) );
let minoContoroller = new MinoController();

 function sampleClass() {
     targetMino  = new MinoJ();
     minoContoroller.setActiveMino( targetMino );
 }

function smapleRightSpin() {
    minoContoroller.spinRight();
}

function smapleLeftSpin() {
    minoContoroller.spinLeft();
}
