function sampleClass() {
    let testMino  = new MinoJ();
    testMino.minoState = 1;

    let testDraw = new DrawScreen( document.getElementById(  "GAME_FIELD" ) );
    testDraw.drawMino( 0, 0, testMino );

    console.log("hello");
}
