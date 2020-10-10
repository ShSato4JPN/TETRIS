/** Class Mino
  *   ミノに関する情報を管理するクラス
 **/
class Mino {

    constructor() {
        // メンバ定義
        init();
        // ミノ情報を作成
        createMinoData();
    }

    init() {
        // 0 ~ 3 毎に45度回転する
        this.minoState = 0;
        this.minoData  =
    }

    // サブクラスでOrverrideする
    createMinoData() {}

    get minoState() {
        return this.minoState;
    }

    set minoState( state ) {
        this.minoState = state;
    }

    getMino() {

    }

}
