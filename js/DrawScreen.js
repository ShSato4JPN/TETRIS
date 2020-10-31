/*
class DrawScreen {
    constructor( table ) {
        this.init( table );
     }
    // メンバを定義
    init( table ) {
        // 描画するテーブルタグ
        this._table = table
        this._initColor = "lightgrey"; // 背景色の初期値
    }
    drawMino( posX, posY) {

        for ( var y = 0; y < mino.getMinoHeight(); y++ ) {
            for ( var x = 0; x < mino.getMinoWidth(); x++ ) {
                if ( minoData[y][x] == 1 ){
                    this._table.rows[ posY + y ].cells[ posX + x ].style.backgroundColor = minoColor;
                } else{
                    this._table.rows[ posY + y ].cells[ posX + x ].style.backgroundColor = this._initColor;
                }
            }
        }
    }
}
*/
