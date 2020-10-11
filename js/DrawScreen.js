class DrawScreen {
    constructor( table ) {
        this.init( table );
    }
    // メンバを定義
    init( table ) {
        // 描画するテーブルタグ
        this._table = table;
    }

    /*
    * 引数のミノを画面に描画する
    *    posX : 描画開始位置X
    *    posY : 描画開始位置X
    *    Mino : 描画するミノ
    */
    drawMino( posX, posY, mino ) {
        // 現在のミノの構成を取得
        var minoData = mino.getMino();
        var minoColor = mino.getMinoColor();

        console.log( mino.getMinoWidth() );
        console.log( mino.getMinoHeight() );

        for ( var y = 0; y < mino.getMinoHeight(); y++ ) {
            for ( var x = 0; x < mino.getMinoWidth(); x++ ) {
                console.log(minoData[y][x]);
                if ( minoData[y][x] == 1 ){
                    this._table.rows[ posY + y ].cells[ posX + x ].style.backgroundColor = minoColor;
                }

            }
        }
    }
}
