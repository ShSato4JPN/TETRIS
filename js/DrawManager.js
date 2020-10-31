/** Class Mino
  *   描画開始位置を管理するクラス
 **/
 class DrawManager {
     constructor() {
         this._init();
     }

     _init() {
         // 背景初期色
         this._initColor = "lightgrey";
         // ゲームステージの幅
         this._STAGE_WIDTH = undefined;
         // ゲームステージの幅
         this._STAGE_HEIGHT = undefined;
         // 描画開始位置X
         this._drawPosX = undefined;
         // 描画開始位置Y
         this._drawPosY = undefined;
     }

    // フィールドを設定する
    setGameField( table ) {
        this._table = table;
        this._STAGE_HEIGHT = table.rows.length;
        this._STAGE_WIDTH = table.rows[1].cells.length;
    }

     // ミノの描画開始位置Xを設定
     set drawPosX( posX ) {
         this._drawPosX = posX;
     }
     // ミノの描画開始位置Xを取得
     get drawPosX() {
         return this._drawPosX;
     }

     // ミノの描画開始位置Yを設定
     set drawPosY( posY ) {
         this._drawPosY = posY;
     }
     // ミノの描画開始位置Yを取得
     get drawPosY() {
         return this._drawPosY;
     }

     // 右に移動する
     addPosX() {
        this._drawPosX++;
     }

     // 左に移動する
     subPosX() {
        this._drawPosX--;
     }

     // 下に移動する
     addPosY() {
        this._drawPosY++;
     }

     // ミノを描画する
     drawMino( mino ) {
         let minoData = mino.getMino();
         let minoColor = mino.getMinoColor();

         for ( let y = 0; y < mino.getMinoHeight(); y++ ) {
             for ( let x = 0; x < mino.getMinoWidth(); x++ ) {
                 if ( minoData[y][x] == 1 ){
                     this._table.rows[ this._drawPosY + y ].cells[ this._drawPosX + x ].style.backgroundColor = minoColor;
                 }
             }
         }
     }

     // ミノが移動可能かチェックする
     chkCanMove( mvPosX, mvPosY, mino ) {
         let minoData = mino.getMino();
         let minoColor = mino.getMinoColor();

         for ( let y = 0; y < mino.getMinoHeight(); y++ ) {
             for ( let x = 0; x < mino.getMinoWidth(); x++ ) {
                 if ( minoData[y][x] == 1 ){
                     // 移動後のミノが画面外の時はエラー
                    if ( this._STAGE_HEIGHT <= ( mvPosY + y ) || ( mvPosY + y ) < 0 ||
                           this._STAGE_WIDTH  <= ( mvPosX + x ) || ( mvPosX + x ) < 0 ) {
                             return false;
                    }
                 }
             }
         }
         // ミノの背景色を初期化する
         this.clearMino( mino );
         return true;
     }

    // ミノを削除
    clearMino( mino ) {
        let minoData = mino.getMino();

        for ( let y = 0; y < mino.getMinoHeight(); y++ ) {
            for ( let x = 0; x < mino.getMinoWidth(); x++ ) {
                if ( minoData[y][x] == 1 ){
                    // ミノの背景色を初期化する
                    this._table.rows[ this._drawPosY + y ].cells[ this._drawPosX + x ].style.backgroundColor = this._initColor;
                }
            }
        }
    }

 }
