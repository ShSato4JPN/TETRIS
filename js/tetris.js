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
mc.setStartMino( 3, 0, activeMino );

// 自動移動処理を起動
setInterval( function() {
    if ( mc.moveDown() ) {
        judge();
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
                judge();
            }
            break;
    }
}

// 共通ファクション
let judge = function() {
    activeMino = mf.createMino();
    // スタートミノが設定できな場合はゲームオバー
    if ( !mc.setStartMino( 3, 0, activeMino ) ) {
        alert("GAME OVER");
    }
}
