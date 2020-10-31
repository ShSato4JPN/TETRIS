/** Class Mino
  *   ミノを操作するクラス
 **/
class MinoController {
    constructor( dm ) {
        this._init( dm );
    }

    // メンバを定義
    _init( dm ) {
        this._dm = dm;
        this._mino = undefined;
    }

    // 操作するミノを設定する
    setActiveMino( mino ) {
        this._mino = mino;
    }

    // 初期位置を設定
    setStartPos( posX, posY ) {
        this._dm.drawPosX = posX;
        this._dm.drawPosY = posY;
        this._dm.drawMino( this._mino );
    }

    // ミノを右に移動する
    moveRight() {
        if ( this._dm.chkCanMove( this._dm.drawPosX + 1, this._dm.drawPosY, this._mino ) ) {
            this._dm.addPosX();
            this._dm.drawMino( this._mino );
        }
    }

    // ミノを左に移動する
    moveLeft() {
        if ( this._dm.chkCanMove( this._dm.drawPosX - 1, this._dm.drawPosY, this._mino ) ) {
            this._dm.subPosX();
            this._dm.drawMino( this._mino );
        }
    }

    // ミノを下に移動する
    moveDown() {
    }

    spinRight() {
        // ミノの右回転させる
        if ( this._mino.minoState == 3 ) {
            this._mino.minoState = 0;
        } else {
            this._mino.minoState++;
        }

        if ( this._dm.chkCanMove( this._dm.drawPosX , this._dm.drawPosY, this._mino ) ) {
            this._dm.drawMino( this._mino );
        }
    }

    spinLeft() {
        // ミノの左回転させる
        if ( this._mino.minoState == 0 ) {
            this._mino.minoState = 3;
        } else {
            this._mino.minoState--;
        }
    }
}
