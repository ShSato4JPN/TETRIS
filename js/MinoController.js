/** Class Mino
  *   ミノを操作するクラス
 **/
class MinoController {
    constructor() {
        this._init();
    }

    // メンバを定義
    _init() {
        this._dm = undefined;
        this._mino = undefined;
    }

    // DrawManagerを設定
    setDrawManager( dm ) {
        this._dm = dm;
    }

    // 操作するミノを設定する
    setActiveMino( mino ) {
        this._mino = mino;
        if ( this._dm.chkCanMove( this._dm.drawPosX, this._dm.drawPosY, mino ) ) {
            return true;
        }
        return false;
    }

    // 初期位置を設定
    setStartMino( posX, posY, mino) {
        this._dm.drawPosX = posX;
        this._dm.drawPosY = posY;
        this._mino = mino;

        if ( !this._dm.chkCanMove( posX, posY, mino ) ) {
            return false;
        }

        this._dm.drawMino( this._mino );
        return true;
    }

    // 一定時間毎に呼び出されるファンク所
    intervalCalled() {
        this._dm.addPosY();
        this._dm.drawMino( this._mino );
    }

    // ミノを右に移動する
    moveRight() {
        if ( this._dm.chkCanMove( this._dm.drawPosX + 1, this._dm.drawPosY, this._mino ) ) {
            // ミノの背景色を初期化する
            this._dm.clearMino( this._mino );
            // 描画位置を左に移動する
            this._dm.addPosX();
            // ミノを描画する
            this._dm.drawMino( this._mino );
        }
    }

    // ミノを左に移動する
    moveLeft() {
        if ( this._dm.chkCanMove( this._dm.drawPosX - 1, this._dm.drawPosY, this._mino ) ) {
            // ミノの背景色を初期化する
            this._dm.clearMino( this._mino );
            // 描画位置を左に移動する
            this._dm.subPosX();
            // ミノを描画する
            this._dm.drawMino( this._mino );
        }
    }

    // ミノを下に移動する
    moveDown() {
        // 次のミノを生成するかの判定
        let nextMino = undefined;
        if ( this._dm.chkCanMove( this._dm.drawPosX, this._dm.drawPosY + 1, this._mino ) ) {
            // ミノの背景色を初期化する
            this._dm.clearMino( this._mino );
            // 描画位置を右に移動する
            this._dm.addPosY();
            // ミノを描画する
            this._dm.drawMino( this._mino );
            nextMino = false;
        } else {
            // ミノを下に移動できなかった時は、DrawManagerのStageDataを更新する。
            this._dm.updGameData( this._mino );
            this._dm.delRows( this._mino );
            nextMino = true;
        }

        return nextMino;
    }

    spinRight() {
        //  回転前
        let befSpinState = this._mino.minoState;
        //  回転後
        let aftSpinState = undefined;

        // ミノの右回転させる
        if ( befSpinState == 3 ) {
            aftSpinState = 0;
        } else {
            aftSpinState = befSpinState + 1;
        }

        this._mino.minoState = aftSpinState;
        if ( this._dm.chkCanMove( this._dm.drawPosX, this._dm.drawPosY, this._mino ) ) {
            // ミノの背景色を初期化する
            this._mino.minoState = befSpinState;
            this._dm.clearMino( this._mino );
            // ミノを描画する
            this._mino.minoState = aftSpinState;
            this._dm.drawMino( this._mino );
        } else {
            this._mino.minoState = befSpinState;
        }
    }

    spinLeft() {
        //  回転前
        let befSpinState = this._mino.minoState;
        //  回転後
        let aftSpinState = undefined;

        // ミノの左回転させる
        if ( befSpinState == 0 ) {
            aftSpinState = 3;
        } else {
            // エラーの場合、回転前に戻す
            aftSpinState = befSpinState - 1;
        }

        this._mino.minoState = aftSpinState;
        if ( this._dm.chkCanMove( this._dm.drawPosX, this._dm.drawPosY, this._mino ) ) {
            // ミノの背景色を初期化する
            this._mino.minoState = befSpinState;
            this._dm.clearMino( this._mino );
            // ミノを描画する
            this._mino.minoState = aftSpinState;
            this._dm.drawMino( this._mino );
        } else {
            // エラーの場合、回転前に戻す
            this._mino.minoState = befSpinState;
        }
    }
}
