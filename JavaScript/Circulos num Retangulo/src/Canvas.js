function square(canvas) 
{   
    // canvas.width = 500;
    // canvas.height = 100;

    let ctx = canvas.getContext("2d");

    const w = canvas.width;
    const h = canvas.height;
    const n = ncircles;

    const ratio = w / h;
    const cols = Math.sqrt(n * ratio);
    const rows = Math.ceil(n / cols);

    // Melhor opção ocupando toda altura
        let _rows = Math.ceil(rows);
        let _cols = Math.ceil(n / _rows);

        if (_rows * ratio < _cols) {
            const rowsRatio = _cols / (_rows * ratio);
            _rows = Math.ceil(_rows * rowsRatio);
            _cols = Math.ceil(n / _rows);
        }

        var fullHeightSide = h / _rows;

    // Melhor opção ocupando toda largura
        let _cols2 = Math.ceil(cols);
        let _rows2 = Math.ceil(n / _cols2);

        if (_rows2 * ratio > _cols2) {
            const colsRatio = (_rows2 * ratio) / _cols2;
            _cols2 = Math.ceil(_cols2 * colsRatio);
            _rows2 = Math.ceil(n / _cols2);
        }

        var fullWidthSide = w / _cols2;

    // Finalmente 
    let squareSide = Math.max(fullHeightSide, fullWidthSide);

    // My solution is identical to the code below...
    let perRow = Math.floor(canvas.width / squareSide)
    let circleRadius = squareSide / 4;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "black";
    ctx.strokeStyle = "gray";
    for (let i = 0; i < ncircles; i++) {
        let row = Math.floor(i / perRow);
        let col = i % perRow;
        let x = circleRadius * 2 + circleRadius * 4 * col;
        let y = circleRadius * 2 + circleRadius * 4 * row;
        ctx.beginPath();
        ctx.arc(x, y, circleRadius, 0, Math.PI * 2)
        ctx.fill()
        ctx.beginPath();
        ctx.moveTo(x - squareSide / 2, y - squareSide / 2);
        ctx.lineTo(x - squareSide / 2, y + squareSide / 2);
        ctx.lineTo(x + squareSide / 2, y + squareSide / 2);
        ctx.lineTo(x + squareSide / 2, y - squareSide / 2);
        ctx.closePath();
        ctx.stroke()
    }

    return squareSide;
}