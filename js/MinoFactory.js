class MinoFactory {
    constructor() {
        this._init();
    }
    // メンバを定義
    _init() {
    }

    createMino() {
        let retVal = undefined;
        // 0 ~ 6 をランダムで取得
        let val = Math.floor( Math.random() * 7 );
        switch ( val ) {
            case 0:
                retVal = new MinoI();
                break;
            case 1:
                retVal = new MinoO();
                break;
            case 2:
                retVal = new MinoT();
                break;
            case 3:
                retVal = new MinoJ();
                break;
            case 4:
                retVal = new MinoL();
                break;
            case 5:
                retVal = new MinoS();
                break;
            case 6:
                retVal = new MinoZ();
                break;
            default:
                break;
        }
        return retVal;
    }
}
