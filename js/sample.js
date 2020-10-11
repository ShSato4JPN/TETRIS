function sampleClass() {
    let testMino  = new MinoJ();
    testMino.minoState = 1;

    var test = testMino.getMino();
    var test2 = test[0];
    console.log(test2[1][1]);

    let testDraw = new DrawScreen( document.getElementById(  "GAME_FIELD" ) );
    testDraw.drawMino( 0, 0, testMino );

    console.log("hello");
}
