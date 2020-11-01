// 描画用クラスを設定
let dm = new DrawManager();
dm.setGameField( document.getElementById( "GAME_FIELD" ) );
// ミノ操作用クラスを設定
let mc = new MinoController();
mc.setDrawManager( dm )

document.onkeydown = function( e ) {
    switch ( e.keyCode ) {
        case 37:
            mc.moveLeft();
            break;
        case 38:
            mc.spinRight();
            break;
        case 39:
            mc.moveRight();
            break;
        case 40:
            mc.moveDown();
            break;

        // テスト用コード
        case 65:
            activeMino  = new MinoJ();
            mc.setActiveMino( activeMino );
            mc.setStartPos( 3, 0, activeMino );
            break;
    }
}
