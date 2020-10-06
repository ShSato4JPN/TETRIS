function test() {
    var table = document.getElementById(  "GAME_FIELD" );
    // 行数
    for ( var i = 0; i < table.rows.length; i++ ){
        // 列数
        var cells = table.rows[ i ].cells;
        for ( var j = 0; j < cells.length; j++ ) {
            if ( i%2 == 0 ) {
                console.log("hello");
                cells[ j ].style.backgroundColor = "skyblue";
            }

        }
    }
}
