/** Class Mino
  *   描画開始位置を管理するクラス
 **/
 class DrawPositionManager {
     constructor() {
         this._init();
     }

     _init() {
         this._mino = undefined;
         this._drawPosX = undefined; // 描画開始位置X
         this._drawPosY = undefined; // 描画開始位置Y
         this._drawStartPosX = undefined; //ミノ」描画開始位置X
         this._drawStartPosY = undefined; // ミノ」描画開始位置Y
     }
     
    // 描画位置を初期化する
     clearPosition() {
         this._drawPosX = undefined;
         this._drawPosY = undefined;
         this._drawStartPosX = undefined;
         this._drawStartPosY = undefined;
     }

    //  ミノの開始位置を設定
     getStartPosition( mino ) {
         this._drawPosX = undefined;
         this._drawPosY = undefined;
         this._drawStartPosX = undefined;
         this._drawStartPosY = undefined;
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

 }
