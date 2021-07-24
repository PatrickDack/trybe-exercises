let piece ='';
let lowerPiece = piece.toLowerCase();

if (lowerPiece == 'king') {
    console.log('One square in any direction.');
} else if (lowerPiece == 'queen'){
    console.log('Diagonally, horizontally or vertically.');
} else if (lowerPiece == 'rook') {
    console.log('Horizontally or vertically.');
} else if (lowerPiece == 'bishop') {
    console.log('Diagonally.');
} else if (lowerPiece == 'knight') {
    console.log('In an L shape.');
} else if (lowerPiece == 'pawn') {
    console.log('Vertically forward one square.');
} else {
    console.log('Error, ivalid piece.');
}