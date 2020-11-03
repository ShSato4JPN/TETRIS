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
         // テーブル
         this._table = undefined;
         // ゲームステージの幅
         this._STAGE_WIDTH = undefined;
         // ゲームステージの幅
         this._STAGE_HEIGHT = undefined;
         // ステージデータ
         this._STAGE_DATA = [];
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
        // ステージデータを初期化する
        for ( let  i=0; i < this._STAGE_HEIGHT; i++ ) {
            this._STAGE_DATA[i] = []
            for ( let j=0; j < this._STAGE_WIDTH; j++ ) {
                this._STAGE_DATA[i][j] = 0;
             }
         }
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

     // ０で初期化された配列を作成する
     createEmptyArray() {
         let retAry = [];
         for ( let i=0; i < this._STAGE_WIDTH; i++ ) {
             retAry[ i ] = 0;
          }
          return retAry;
     }

     // ０で初期化された配列を作成する
     insertTableRecord() {
         // テーブルに行を追加
         let row = this._table.insertRow(0);
         // insertしたレコードにセルを追加する。
         for ( let i=0; i < this._STAGE_WIDTH; i++ ) {
            row.insertCell( -1 );
          }
     }

     // ゲームデータを更新する
     updGameData( mino ) {
          let minoData = mino.getMino();

         for ( let y = 0; y < mino.getMinoHeight(); y++ ) {
             for ( let x = 0; x < mino.getMinoWidth(); x++ ) {
                 if ( minoData[y][x] == 1 ){
                    this._STAGE_DATA[ this._drawPosY + y ][ this._drawPosX + x ] = 1;
                 }
             }
         }
     }

     // 位置列揃っている行を削除する
     delRows( mino ) {
         // 削除フラグ
         let delFlg;

         for ( let y = 0; y < mino.getMinoHeight(); y++ ) {
             delFlg = true;
             for ( let x = 0; x < this._STAGE_WIDTH; x++ ) {
                 // 画面領域外
                if ( this._STAGE_HEIGHT <= ( this._drawPosY + y ) ) {
                    return;
                }
                // 配列値が０の時
                if ( delFlg && this._STAGE_DATA[ this._drawPosY + y ][ x ] == 0 ) {
                    delFlg = false;
                    continue;
                }
             }
             // エラーがない行のみ削除
             if ( delFlg ) {
                 // STAGE_DATEから対象の行を削除
                 this._STAGE_DATA.splice( this._drawPosY + y, 1 );
                 // 配列の先頭に空行をINSERT
                 this._STAGE_DATA.splice( 0, 0, this.createEmptyArray() );
                 // テーブルから行を削除
                 this._table.deleteRow( this._drawPosY + y );
                 // tableの先頭にレコードを追加する
                 this.insertTableRecord();
             }
         }
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

     // 移動前のミノを削除
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

     // ミノが移動可能かチェックする
     chkCanMove( mvPosX, mvPosY, mino ) {
         let minoData = mino.getMino();

         for ( let y = 0; y < mino.getMinoHeight(); y++ ) {
             for ( let x = 0; x < mino.getMinoWidth(); x++ ) {
                 if ( minoData[y][x] == 1 ){
                     // 移動後のミノが画面外の時はエラー
                    if ( this._STAGE_HEIGHT <= ( mvPosY + y ) || ( mvPosY + y ) < 0  ||
                           this._STAGE_WIDTH  <= ( mvPosX + x ) || ( mvPosX + x ) < 0 ||
                           this._STAGE_DATA[ mvPosY + y ][ mvPosX + x ] == 1 ) {
                             return false;
                    }
                 }
             }
         }
         // ミノの背景色を初期化する
         this.clearMino( mino );
         return true;
     }

 }
