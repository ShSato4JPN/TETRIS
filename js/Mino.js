/** Class Mino
  *   ミノに関する情報を管理するクラス
 **/
class Mino {
    constructor( color ) {
        // メンバ定義
        //init( color );
        // ミノ情報を作成
        //createMinoData();
    }
    // メンバを定義
    init( color ) {
        // 0 ~ 3 毎に45度回転する
        this.minoState = 0;
        this.minoColor = color; // ミノの色
        this.minoData  = undefined; // ミノの構造(2次元配列)
    }
    // サブクラスでOrverrideする
    createMinoData() {}
    // ミノのステータスを取得
    get minoState() {
        return this.minoState;
    }
    // ミノのステータスを設定
    set minoState( state ) {
        this.minoState = state;
    }
    // ミノの色を取得
    getMinoColor() {
        return this.minoData[this.minoState][0];
    }
    // ミノの現在の構成を取得
    getMino() {
        return this.minoData[this.minoState][1];
    }
}

/** Class MinoJ
  *   J型のミノ
 **/
class MinoJ extends Mino {
    constructor() {
        super( "#3399FF" );
        supre.init("#3399FF");
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

        this.this.minoData = [
            [this.color, subArray0],
            [this.color, subArray1],
            [this.color, subArray2],
            [this.color, subArray3],
        ];
    }
}
