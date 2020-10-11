/** Class Mino
  *   ミノに関する情報を管理するクラス
 **/
class Mino {
    constructor( color ) {
        // メンバ定義
        this.init( color );
        // ミノ情報を作成
        this.createMinoData();
    }
    // メンバを定義
    init( color ) {
        this._minoState = 0;                 // 0 ~ 3 毎に45度回転する
        this._minoColor = color;          // ミノの色
        this._minoData  = undefined;  // ミノの構造(2次元配列)
    }
    // サブクラスでOrverrideする
    createMinoData() {}
    // ミノのステータスを設定
    set minoState( state ) {
        this._minoState = state;
    }
    // ミノのステータスを取得
    get minoState() {
        return this._minoState;
    }
    // ミノの色を取得
    getMinoColor() {
        return this._minoColor;
    }
    // ミノの現在の構成を取得
    getMino() {
        return this._minoData[this._minoState];
    }
}

/** Class MinoJ
  *   J型のミノ
 **/
class MinoJ extends Mino {
    constructor() {
        super( "#3399FF" );
    }
    // Override
    createMinoData() {
        let subArray0 = [
            [1, 0, 0],
            [1, 1, 1],
            [0, 0, 0]
        ];
        let subArray1 = [
            [0, 1, 1],
            [0, 1, 0],
            [0, 1, 0]
        ];
        let subArray2 = [
            [0, 0, 0],
            [1, 1, 1],
            [0, 0, 1]
        ];
        let subArray3 = [
            [0, 1, 0],
            [0, 1, 0],
            [1, 1, 0]
        ];

        this._minoData = [
            [ subArray0 ],
            [ subArray1 ],
            [ subArray2 ],
            [ subArray3 ],
        ];
    }
}
