function test() {
    var table = document.getElementById(  "GAME_FIELD" );
    for ( var i = 0; i < table.rows.length; i++ ){
        var cells = table.rows[ i ].cells;
        for ( var j = 0; j < cells.length; j++ ) {
            if ( i%2 == 0 ) {
                console.log("hello");
                cells[ j ].style.backgroundColor = "skyblue";
            }

        }
    }
}

function sampleArray() {
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

    let mainArray = [
        [1, "red", subArray0],
        [1, "red", subArray1],
        [1, "red", subArray2],
        [1, "red", subArray3],
    ];

    console.log("helloworld");
}
