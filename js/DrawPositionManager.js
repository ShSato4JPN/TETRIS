/** Class Mino
  *   描画開始位置を管理するクラス
 **/
 class DrawPositionManager {
     constructor( width, height ) {
         this._init( width, height );
     }

     _init( width, height ) {
         this._STAGE_WIDTH = width;    // ゲームステージの幅
         this._STAGE_HEIGHT = height;  //ゲームステージの高さ

         this._drawPosX = undefined; // 描画開始位置X
         this._drawPosY = undefined; // 描画開始位置Y
         this._drawStartPosX = undefined; //ミノ」描画開始位置X
         this._drawStartPosY = undefined; // ミノ」描画開始位置Y
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

     // 表示開始位置Xを右に1移動する
     addPosX() {
         if ( this._drawPosX + 1 < this._STAGE_WIDTH ) {
             this._drawPosX++;
         }
     }

     // 表示開始位置Xを左に1移動する
     subPosX() {
         if (  0 < this._drawPosX - 1 ) {
             this._drawPosX--;
         }
     }

 }
