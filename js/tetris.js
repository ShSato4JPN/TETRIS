// 描画用クラスを設定
let dm = new DrawManager();
dm.setGameField( document.getElementById( "GAME_FIELD" ) );
// ミノ操作用クラスを設定
let mc = new MinoController();
mc.setDrawManager( dm )
// ミノをランダムで作成する
let mf = new MinoFactory();

// 初期処理
activeMino = mf.createMino();
mc.setActiveMino( activeMino );
mc.setStartPos( 3, 0 );

// 自動移動処理を起動
setInterval( function() {
    if ( mc.moveDown() ) {
        activeMino = mf.createMino();
        mc.setActiveMino( activeMino );
        mc.setStartPos( 3, 0 );
    }
}, 800 );

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
            if ( mc.moveDown() ) {
                activeMino = mf.createMino();
                mc.setActiveMino( activeMino );
                mc.setStartPos( 3, 0 );
            }
            break;
    }
}
