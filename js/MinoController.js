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
            // ミノの背景色を初期化する
            this._dm.clearMino( this._mino );
            // 描画位置を右に移動する
            this._dm.subPosX();
            // ミノを描画する
            this._dm.drawMino( this._mino );
        }
    }

    // ミノを下に移動する
    moveDown() {
        if ( this._dm.chkCanMove( this._dm.drawPosX, this._dm.drawPosY + 1, this._mino ) ) {
            // ミノの背景色を初期化する
            this._dm.clearMino( this._mino );
            // 描画位置を右に移動する
            this._dm.addPosY();
            // ミノを描画する
            this._dm.drawMino( this._mino );
        }
    }

    spinRight() {
        //  回転前
        let befSpinState = this._mino.minoState;
        //  回転後
        let aftSpinsState = undefined;

        // ミノの右回転させる
        if ( befSpinState == 3 ) {
            aftSpinsState = 0;
        } else {
            aftSpinsState = befSpinState + 1;
        }

        this._mino.minoState = aftSpinsState;
        if ( this._dm.chkCanMove( this._dm.drawPosX, this._dm.drawPosY, this._mino ) ) {
            // ミノの背景色を初期化する
            this._mino.minoState = befSpinState;
            this._dm.clearMino( this._mino );
            // ミノを描画する
            this._mino.minoState = aftSpinsState;
            this._dm.drawMino( this._mino );
        }
    }

    spinLeft() {
        //  回転前
        let befSpinState = this._mino.minoState;
        //  回転後
        let aftSpinsState = undefined;

        // ミノの左回転させる
        if ( befSpinState == 0 ) {
            aftSpinsState = 3;
        } else {
            aftSpinsState = befSpinState - 1;
        }

        this._mino.minoState = aftSpinsState;
        if ( this._dm.chkCanMove( this._dm.drawPosX, this._dm.drawPosY, this._mino ) ) {
            // ミノの背景色を初期化する
            this._mino.minoState = befSpinState;
            this._dm.clearMino( this._mino );
            // ミノを描画する
            this._mino.minoState = aftSpinsState;
            this._dm.drawMino( this._mino );
        }
    }
}
