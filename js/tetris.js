/** Tetrisの中核プログラム
  *   ゲーム情報等を管理する
 **/
let targetMino;
let drawScreen = new DrawScreen( document.getElementById(  "GAME_FIELD" ) );

 function sampleClass() {
     targetMino  = new MinoJ();
     targetMino.minoState = 0;
     drawScreen.drawMino( 0, 0, targetMino );
 }


function smapleRightSpin() {
     // 背景色クリア
     //drawScreen.clearMino( 0, 0, targetMino );
    // ミノの45度回転
    if ( targetMino.minoState == 3 ) {
        targetMino.minoState = 0;
    } else {
        targetMino.minoState++;
    }
     // ミノ描画
     drawScreen.drawMino_v2( 0, 0, targetMino );
}
