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

const matrix1 =
[
    [ 1, 7, 1, 6 ],
    [ 9, 5, 8, 3 ],
    [ 4, 5, 7, 3 ]
];
printMatrix(matrix1);
let spiralElements = getSpiralMatrixElements(matrix1);
console.log(spiralElements);
console.log("");

const matrix2 =
[
    [ 14, 15, 16, 17, 18, 21 ],
    [ 19, 10, 20, 11, 54, 36 ],
    [ 64, 55, 44, 23, 80, 39 ],
    [ 91, 92, 93, 94, 95, 42 ]
];
printMatrix(matrix2);
spiralElements = getSpiralMatrixElements(matrix2);
console.log(spiralElements);