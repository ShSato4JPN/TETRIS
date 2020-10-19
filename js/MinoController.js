/** Class Mino
  *   ミノを操作するクラス
 **/
class MinoController {
    constructor( dpm ) {
        this._init( dpm )
    }

    // メンバを定義
    _init( dpm ) {
        this._mino = undefined;
        this._dpm = dpm;
    }

    // 初期位置を設定
    setStartDrawPos( posX, posY ) {
        this._dpm.drawPosX = posX;
        this._dpm.drawPosY = posY;
    }

    // 操作するミノを設定する
    setActiveMino( mino ) {
        this._mino = mino;
    }

    moveRight() {
        this._dpm.addPosX();
        this.testCode_drawActiveMino();
    }

    moveLeft() {

    }

    moveDown() {

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

    // テスト用コード
    testCode_drawActiveMino() {
         drawScreen.drawMino( this._dpm.drawPosX, this._dpm.drawPosY,  this._mino );
    }
}
