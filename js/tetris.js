/** Tetrisの中核プログラム
  *   ゲーム情報等を管理する
 **/
let targetMino;
let drawScreen = new DrawScreen( document.getElementById(  "GAME_FIELD" ) );
let drawManager = new DrawManager( 10, 22, drawScreen );
let minoContoroller = new MinoController( drawManager );


 function sampleClass() {
     targetMino  = new TestMino();
     minoContoroller.setActiveMino( targetMino );
     minoContoroller.setStartPos( 0, 0 );
     minoContoroller.testCode_drawActiveMino();
 }

function smapleRightSpin() {
    minoContoroller.spinRight();
}

function smapleLeftSpin() {
    minoContoroller.spinLeft();
}

function moveLeft() {

}

function moveRight() {
    minoContoroller.moveRight();
}
