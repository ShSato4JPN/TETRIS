// 描画用クラスを設定
let dm = new DrawManager();
dm.setGameField( document.getElementById( "GAME_FIELD" ) );
// ミノ操作用クラスを設定
let mc = new MinoController();
mc.setDrawManager( dm )
// ミノをランダムで作成する
let mf = new MinoFactory();

// ミノを格納する配列
let minoStack = [];
for ( let i = 0; i < 3; i++ ) {
    minoStack[ i ] = mf.createMino();
    dm.drawSubField( "SUB" + i, minoStack[ i ]);
}

// 初期処理
activeMino = mf.createMino();
mc.setStartMino( 3, 0, activeMino );

// 自動移動処理を起動
let interval = setInterval( function() {
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
                // ゲームを継続するか判定する
                judge();
            }
            break;
        case 88:
            mc.spinRight();
            break;
        case 90:
            mc.spinLeft();
            break;
    }
}

// 共通ファクション
let judge = function() {
    // スタートミノが設定できな場合はゲームオバー
    if ( !mc.setStartMino( 3, 0, minoStack[ 0 ] ) ) {
        clearInterval( interval );
        alert("GAME OVER");
        return;
    }
    // サブフィールドをクリア
    dm.clearSubField();
    // サブフィールドにミノ情報再設定
    dm.drawSubField( "SUB0", minoStack[ 1 ]);
    dm.drawSubField( "SUB1", minoStack[ 2 ]);
    minoStack[ 0 ] = minoStack[ 1 ];
    minoStack[ 1 ] = minoStack[ 2 ];
    minoStack[ 2 ] = mf.createMino();
    dm.drawSubField( "SUB2", minoStack[ 2 ]);
}
