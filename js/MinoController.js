/** Class Mino
  *   ミノを操作するクラス
 **/
class MinoController {
    constructor() {
        this._init()
    }

    // メンバを定義
    _init( mino ) {
        this._mino = undefined;
    }

    // 設定されているミノを初期化する
    clearMino() {
        this._mino = undefined;
    }

    // 操作するミノを設定する
    setActiveMino( mino ) {
        this._mino = mino;
    }

    spinRight() {
        // ミノの右方向へ45度回転
        if ( this._mino.minoState == 3 ) {
            this._mino.minoState = 0;
        } else {
            this._mino.minoState++;
        }

         drawScreen.drawMino( 0, 0,  this._mino );
    }

    spinLeft() {
        // ミノの左方向へ45度回転
        if ( this._mino.minoState == 0 ) {
            this._mino.minoState = 3;
        } else {
            this._mino.minoState--;
        }

        drawScreen.drawMino( 0, 0, this._mino );
    }
}
