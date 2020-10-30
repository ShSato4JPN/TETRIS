/** Class Mino
  *   ミノを操作するクラス
 **/
class MinoController {
    constructor( dm ) {
        this._init( dm );
    }

    // メンバを定義
    _init( dm ) {
        this._drawManager = dm;
        this._mino = undefined;
    }

    // 操作するミノを設定する
    setActiveMino( mino ) {
        this._mino = mino;
    }

    // 初期位置を設定
    setStartPos( posX, posY ) {
        this._dpm.drawPosX = posX;
        this._dpm.drawPosY = posY;
    }

    moveRight() {
        this._dpm.addPosX( this._mino.getMinoMaxRight );
        this.testCode_drawActiveMino();
    }

    moveLeft() {
    }

    moveDown() {
        // 描画開始位置をプラスする

    }

    spinRight() {
        // ミノの右方向へ45度回転
        if ( this._mino.minoState == 3 ) {
            this._mino.minoState = 0;
        } else {
            this._mino.minoState++;
        }

         this._dawManager.drawMino( 0, 0,  this._mino );
    }

    spinLeft() {
        // ミノの左方向へ45度回転
        if ( this._mino.minoState == 0 ) {
            this._mino.minoState = 3;
        } else {
            this._mino.minoState--;
        }

        this._dawManager.drawMino( 0, 0, this._mino );
    }

    // テスト用コード
    testCode_drawActiveMino() {
         this._dawManager.drawMino( this._dpm.drawPosX, this._dpm.drawPosY,  this._mino );
    }
}
