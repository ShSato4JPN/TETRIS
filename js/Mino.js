/** Class Mino
  *   ミノに関する情報を管理するクラス
 **/
class Mino {
    constructor( color ) {
        // メンバ定義
        this._init( color );
        // ミノ情報を作成
        this._OVR_createMinoData();
        // ミノの端（左、右、下）のデータを取得する
        this._setMinoMaxPos();
    }

    // メンバを定義
    _init( color ) {
        this._minoState = 0;          // 0 ~ 3 毎に45度回転する
        this._minoColor = color;      // ミノの色
        this._minoData  = undefined;  // ミノの構造(2次元配列)
        this._minoMaxLeft = 0;        // ミノの最左端
        this._minoMaxRight = 0;       // ミノの最右端
        this._minoMaxTom = 0;      // ミノの最上
        this._minoMaxBottom = 0;      // ミノの最下
    }

    // サブクラスでOrverrideする
    _OVR_createMinoData() {}

    // ミノの左、右、下の最端値を取得する
    _setMinoMaxPos() {
        let minoData = this._minoData[this._minoState];
        let maxL = this.getMinoWidth();
        let maxR = 0;
        let maxT = this.getMinoHeight();
        let maxB = 0;
        for ( var y = 0; y < this.getMinoHeight(); y++ ) {
            for ( var x = 0; x < this.getMinoWidth(); x++ ) {
                if ( minoData[y][x] == 1 ) {
                    if ( x < maxL ) { maxL = x; }
                    if ( maxR < x ) { maxR = x; }
                    if ( y < maxT ) { maxT = y; }
                    maxB = y;
                }
            }
        }
        this._minoMaxLeft = maxL + 1;        // 左の最大位置
        this._minoMaxRight = maxR + 1;     // 右の最大位置
         this._minoMaxTop = maxT + 1;       // 上の最大位置
        this._minoMaxBottom = maxB + 1; // 下の最大位置
    }

    // ミノのステータスを設定
    set minoState( state ) {
        this._minoState = state;
        // ミノの端の値を更新する
        this._setMinoMaxPos();
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

    // ミノの幅を取得
    getMinoWidth() {
        return this._minoData[0][0].length;
    }

    // ミノの高さを取得
    getMinoHeight() {
        return this._minoData[0].length;
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
    _OVR_createMinoData() {
        this._minoData = [
            [
                [1, 0, 0],
                [1, 1, 1],
                [0, 0, 0]
             ],
            [
                [0, 1, 1],
                [0, 1, 0],
                [0, 1, 0]
             ],
            [
                [0, 0, 0],
                [1, 1, 1],
                [0, 0, 1]
             ],
            [
                [0, 1, 0],
                [0, 1, 0],
                [1, 1, 0]
            ]
        ];
    }
}
/** Class MinoJ
  *   I型のミノ
 **/
class MinoI extends Mino {
    constructor() {
        super( "skyblue" );
    }
    // Override
    _OVR_createMinoData() {
        this._minoData = [
            [
                [0, 0, 1, 0],
                [0, 0, 1, 0],
                [0, 0, 1, 0],
                [0, 0, 1, 0]
             ],
            [
                [0, 0, 0, 0],
                [0, 0, 0, 0],
                [1, 1, 1, 1],
                [0, 0, 0, 0],
             ],
            [
                [0, 1, 0, 0],
                [0, 1, 0, 0],
                [0, 1, 0, 0],
                [0, 1, 0, 0],
             ],
            [
                [0, 0, 0, 0],
                [1, 1, 1, 1],
                [0, 0, 0, 0],
                [0, 0, 0, 0],
            ]
        ];
    }
}
