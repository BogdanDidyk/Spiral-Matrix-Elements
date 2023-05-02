function printMatrix(matrix) {
    matrix.forEach(row => console.log(row.join(" ")));
}

function getSpiralMatrixElements(matrix) {
    const rows = matrix.length;
    const cols = matrix[0].length;
    const arr = [];
    const steps = Math.ceil(Math.min(rows, cols) / 2);
    let s, right, down, left, up, count = 0;

    for (s = 0; s < steps; s++) {
        for (right = s; right < cols - 1 - s; right++) arr[count++] = matrix[s][right];
        for (down = s; down < rows - 1 - s; down++) arr[count++] = matrix[down][right];
        for (left = right; left > s; left--) arr[count++] = matrix[down][left];
        for (up = down; up > s; up--) arr[count++] = matrix[up][left];
    }

    return arr;
}