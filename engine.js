let board = {
    a: [null, '', '', '', '', '', '', '', ''],
    b: [null, '', '', '', '', '', '', '', ''],
    c: [null, '', '', '', '', '', '', '', ''],
    d: [null, '', '', '', '', '', '', '', ''],
    e: [null, '', '', '', '', '', '', '', ''],
    f: [null, '', '', '', '', '', '', '', ''],
    g: [null, '', '', '', '', '', '', '', ''],
    h: [null, '', '', '', '', '', '', '', '']
}

const pieceValue = {
    pawn: 0.8,
    knight: 3,
    bishop: 3.1,
    rook: 6,
    queen: 10.6,
    king: 1000
}

const piecesName = {
    BP: '&#9823',
    WP: '&#9817;',

    BR: '&#9820;',
    WR: '&#9814;',

    BN: '&#9822;',
    WN: '&#9816;',

    BB: '&#9821;',
    WB: '&#9815;',

    BQ: '&#9819;',
    WQ: '&#9813;',
    
    BK: '&#9818;',
    WK: '&#9812;'

}
const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']

let WpawnBoard = {
    a: [null, 0, 0, 0.2, 0.1, 0.2, 0.25, 3, 0],
    b: [null, 0, 0, 0.1, 0.15, 0.2, 0.4, 3, 0],
    c: [null, 0, 0, 0.1, 0.2, 0.4, 0.45, 4, 0],
    d: [null, 0, 0, 0.2, 0.4, 0.5, 0.6, 4, 0],
    e: [null, 0, 0, 0.2, 0.4, 0.5, 0.6, 4, 0],
    f: [null, 0, 0, 0.1, 0.2, 0.4, 0.45, 4, 0],
    g: [null, 0, 0, 0.1, 0.15, 0.2, 0.4, 3, 0],
    h: [null, 0, 0, 0.2, 0.1, 0.2, 0.25, 3, 0],
}
let BpawnBoard = {
    a: [null, 0, 3, 0.25, 0.2, 0.1, 0.2, 0, 0],
    b: [null, 0, 3, 0.4, 0.2, 0.15, 0.1, 0, 0],
    c: [null, 0, 4, 0.45, 0.4, 0.2, 0.1, 0, 0],
    d: [null, 0, 4, 0.6, 0.5, 0.4, 0.2, 0, 0],
    e: [null, 0, 4, 0.6, 0.5, 0.4, 0.2, 0, 0],
    f: [null, 0, 4, 0.45, 0.4, 0.2, 0.1, 0, 0],
    g: [null, 0, 3, 0.4, 0.2, 0.15, 0.1, 0, 0],
    h: [null, 0, 3, 0.25, 0.2, 0.1, 0.2, 0, 0],
}

let WrookBoard = {
    a: [null,0,0,0,0,0,0, 1, 0.3],
    b: [null,0,0,0,0,0,0, 1, 0.3],
    c: [null,0.25,0,0,0,0,0, 1, 0.3],
    d: [null,0.25,0,0,0,0,0, 1, 0.3],
    e: [null,0.25,0,0,0,0,0, 1, 0.3],
    f: [null,0.25,0,0,0,0,0, 1, 0.3],
    g: [null,0,0,0,0,0,0, 1, 0.3],
    h: [null,0,0,0,0,0,0, 1, 0.3] 
}
let BrookBoard = {
    a: [null, 0.3, 1,0,0,0,0,0,0],
    b: [null, 0.3, 1,0,0,0,0,0,0],
    c: [null, 0.3, 1,0,0,0,0,0,0.25],
    d: [null, 0.3, 1,0,0,0,0,0,0.25],
    e: [null, 0.3, 1,0,0,0,0,0,0.25],
    f: [null, 0.3, 1,0,0,0,0,0,0.25],
    g: [null, 0.3, 1,0,0,0,0,0,0],
    h: [null, 0.3, 1,0,0,0,0,0,0] 
}

let WbishopBoard = {
    a: [null, 0, 0.1, 0.2, 0.2, 0.2, 0, 0, 0],
    b: [null, 0, 0.3, 0.2, 0.2, 0.2, 0.3, 0, 0],
    c: [null, 0, 0.2, 0.2, 0.3, 0.2, 0.2, 0, 0],
    d: [null, 0, 0.2, 0.2, 0.3, 0.2, 0, 0, 0],
    e: [null, 0, 0.2, 0.2, 0.3, 0.2, 0, 0, 0],
    f: [null, 0, 0.2, 0.2, 0.3, 0.2, 0.2, 0, 0],
    g: [null, 0, 0.3, 0.2, 0.2, 0.2, 0.3, 0, 0],
    h: [null, 0, 0.1, 0.2, 0.2, 0.2, 0, 0, 0] 
}
let BbishopBoard = {
    a: [null, 0, 0, 0, 0.2, 0.2, 0.2, 0.1, 0],
    b: [null, 0, 0, 0.3, 0.2, 0.2, 0.2, 0.3, 0],
    c: [null, 0, 0, 0.2, 0.2, 0.3, 0.2, 0.2, 0],
    d: [null, 0, 0, 0, 0.2, 0.3, 0.2, 0.2, 0],
    e: [null, 0, 0, 0, 0.2, 0.3, 0.2, 0.2, 0],
    f: [null, 0, 0, 0.2, 0.2, 0.3, 0.2, 0.2, 0],
    g: [null, 0, 0, 0.3, 0.2, 0.2, 0.2, 0.3, 0],
    h: [null, 0, 0, 0, 0.2, 0.2, 0.2, 0.1, 0]
}

let WknightBoard = {
    a: [null, 0, 0, 0, 0, 0, 0, 0, 0],
    b: [null, 0, 0, 0.2, 0.3, 0.4, 0.5, 0, 0],
    c: [null, 0, 0, 0.2, 0.3, 0.5, 0.6, 0, 0],
    d: [null, 0, 0, 0.2, 0.4, 0.6, 0.7, 0, 0],
    e: [null, 0, 0, 0.2, 0.4, 0.6, 0.7, 0, 0],
    f: [null, 0, 0, 0.2, 0.3, 0.5, 0.6, 0, 0],
    g: [null, 0, 0, 0.2, 0.3, 0.4, 0.5, 0, 0],
    h: [null, 0, 0, 0, 0, 0, 0, 0, 0] 
}
let BknightBoard = {
    a: [null, 0, 0, 0, 0, 0, 0, 0, 0],
    b: [null, 0, 0, 0.5, 0.4, 0.3, 0.2, 0, 0],
    c: [null, 0, 0, 0.6, 0.5, 0.3, 0.2, 0, 0],
    d: [null, 0, 0, 0.7, 0.6, 0.4, 0.2, 0, 0],
    e: [null, 0, 0, 0.7, 0.6, 0.4, 0.2, 0, 0],
    f: [null, 0, 0, 0.6, 0.5, 0.3, 0.2, 0, 0],
    g: [null, 0, 0, 0.5, 0.4, 0.3, 0.2, 0, 0],
    h: [null, 0, 0, 0, 0, 0, 0, 0, 0] 
}

let WkingBoard = {
    a: [null, 0.3, 0.2, 0, 0, 0, 0, 0, 0],
    b: [null, 0.3, 0.2, 0, 0, 0, 0, 0, 0],
    c: [null, 0.2, 0, 0, 0, 0, 0, 0, 0],
    d: [null, 0, 0, 0, 0, 0, 0, 0, 0],
    e: [null, 0, 0, 0, 0, 0, 0, 0, 0],
    f: [null, 0.15, 0, 0, 0, 0, 0, 0, 0],
    g: [null, 0.3, 0.2, 0, 0, 0, 0, 0, 0],
    h: [null, 0.3, 0.2, 0, 0, 0, 0, 0, 0]
}

let BkingBoard = {
    a: [null, 0, 0, 0, 0, 0, 0, 0.2, 0.3],
    b: [null, 0, 0, 0, 0, 0, 0, 0.2, 0.3],
    c: [null, 0, 0, 0, 0, 0, 0, 0, 0.2],
    d: [null, 0, 0, 0, 0, 0, 0, 0, 0],
    e: [null, 0, 0, 0, 0, 0, 0, 0, 0],
    f: [null, 0, 0, 0, 0, 0, 0, 0, 0.15],
    g: [null, 0, 0, 0, 0, 0, 0, 0.2, 0.3],
    h: [null, 0, 0, 0, 0, 0, 0, 0.2, 0.3]
}


let whoToPlay = 'white'
let wKingMoved = false
let bKingMoved = false




// O rei ser rocável tem que dar ponto na avaliaçao
// Otimizar tudo mas sla


// PointBoards que mudam ao longo do jogo
// Aberturas e fim de jogo 'manuais'
// Pawn structure - Passed pawns - Doubled Pawn

// En passant

// empate por repetição empates no geral 
// King endgame


// Só poder rocar se nao tiver mexido a torre e quando não estiver em chueque e todas a outreas regras do roque




function deepCopy(obj) {
    return JSON.parse(JSON.stringify(obj));
}
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        // Swap array[i] and array[j]
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function eval(boardProv) {
    let evalWhite = 0
    let evalBlack = 0


    for (let d = 1; d <= 8; d++) {
        for (let c = 0; c <= 7; c++) {

            let piece = boardProv[letters[c]][d] 

            if (piece.charAt(0) == "W") {
                if (piece == "WP") evalWhite += WpawnBoard[letters[c]][d] + pieceValue.pawn
                if (piece == "WN") evalWhite += WknightBoard[letters[c]][d] + pieceValue.knight   
                if (piece == "WR") evalWhite += WrookBoard[letters[c]][d] + pieceValue.rook
                if (piece == "WB") evalWhite += WbishopBoard[letters[c]][d] + pieceValue.bishop
                if (piece == "WQ") evalWhite += pieceValue.queen
                if (piece == "WK") evalWhite += WkingBoard[letters[c]][d] + pieceValue.king
                
            }

            if (piece.charAt(0) == "B") {
                if (piece == "BP") evalBlack += BpawnBoard[letters[c]][d] + pieceValue.pawn
                if (piece == "BN") evalBlack += BknightBoard[letters[c]][d] + pieceValue.knight
                if (piece == "BR") evalBlack += BrookBoard[letters[c]][d] + pieceValue.rook
                if (piece == "BB") evalBlack += BbishopBoard[letters[c]][d] + pieceValue.bishop
                if (piece == "BQ") evalBlack += pieceValue.queen
                if (piece == "BK") evalBlack += BkingBoard[letters[c]][d] + pieceValue.king
            }

            
        }
    }
    
    return Math.round((evalWhite - evalBlack) * 100) / 100
 
    
}

function resetBoard() {
    board.a[1] = 'WR'; board.b[1] = 'WN';  board.c[1] = 'WB';  board.d[1] = 'WQ'; board.e[1] = 'WK'; board.f[1] = 'WB'; board.g[1] = 'WN'; board.h[1] = 'WR'
    board.a[2] = 'WP'; board.b[2] = 'WP'; board.c[2] = 'WP'; board.d[2] = 'WP'; board.e[2] = 'WP'; board.f[2] = 'WP'; board.g[2] = 'WP'; board.h[2] = 'WP'
    
    board.a[8] = 'BR'; board.b[8] = 'BN'; board.c[8] = 'BB'; board.d[8] = 'BQ'; board.e[8] = 'BK'; board.f[8] = 'BB'; board.g[8] = 'BN'; board.h[8] = 'BR'
    board.a[7] = 'BP'; board.b[7] = 'BP'; board.c[7] = 'BP'; board.d[7] = 'BP'; board.e[7] = 'BP'; board.f[7] = 'BP'; board.g[7] = 'BP'; board.h[7] = 'BP'; board.a[7] = 'BP'; board.b[7] = 'BP'; board.c[7] = 'BP'; board.d[7] = 'BP'; board.e[7] = 'BP'; board.f[7] = 'BP'; board.g[7] = 'BP'; board.h[7] = 'BP'


}  

function endGameBoards() {
    WkingBoard = {
        a: [null, 0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.5, 0.5],
        b: [null, 0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.5, 0.5],
        c: [null, 0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.5, 0.5],
        d: [null, 0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.5, 0.5],
        e: [null, 0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.5, 0.5],
        f: [null, 0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.5, 0.5],
        g: [null, 0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.5, 0.5],
        h: [null, 0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.5, 0.5]
    }
    BkingBoard = {
        a: [null, 0.5, 0.5, 0.5, 0.4, 0.3, 0.2, 0.1, 0],
        b: [null, 0.5, 0.5, 0.5, 0.4, 0.3, 0.2, 0.1, 0],
        c: [null, 0.5, 0.5, 0.5, 0.4, 0.3, 0.2, 0.1, 0],
        d: [null, 0.5, 0.5, 0.5, 0.4, 0.3, 0.2, 0.1, 0],
        e: [null, 0.5, 0.5, 0.5, 0.4, 0.3, 0.2, 0.1, 0],
        f: [null, 0.5, 0.5, 0.5, 0.4, 0.3, 0.2, 0.1, 0],
        g: [null, 0.5, 0.5, 0.5, 0.4, 0.3, 0.2, 0.1, 0],
        h: [null, 0.5, 0.5, 0.5, 0.4, 0.3, 0.2, 0.1, 0]
    }
}

// board.a[1] = 'WR'; board.b[1] = 'WN'; board.c[1] = 'WB'; board.d[1] = 'WQ'; board.e[1] = 'WK'; board.f[1] = 'WB'; board.g[1] = 'WN'; board.h[1] = 'WR'
// board.a[2] = 'WP'; board.b[2] = 'WP'; board.c[2] = 'WP'; board.d[2] = 'WP'; board.e[2] = 'WP'; board.f[2] = 'WP'; board.g[2] = 'WP'; board.h[2] = 'WP'
    
// board.a[8] = 'BR'; board.b[8] = 'BN'; board.c[8] = 'BB'; board.d[8] = 'BQ'; board.e[8] = 'BK'; board.f[8] = 'BB'; board.g[8] = 'BN'; board.h[8] = 'BR'
// board.a[7] = 'BP'; board.b[7] = 'BP'; board.c[7] = 'BP'; board.d[7] = 'BP'; board.e[7] = 'BP'; board.f[7] = 'BP'; board.g[7] = 'BP'; board.h[7] = 'BP'; board.a[7] = 'BP'; board.b[7] = 'BP'; board.c[7] = 'BP'; board.d[7] = 'BP'; board.e[7] = 'BP'; board.f[7] = 'BP'; board.g[7] = 'BP'; board.h[7] = 'BP'

function drawBoard(boardProv) {
    board = boardProv
    for (let c = 0; c <= 7; c++) {
        for (let d = 1; d <= 8; d++) {
            let pos = letters[c] + d
            let piece = boardProv[letters[c]][d]
            if (piece != "") document.querySelector('#'+pos).children[0].innerHTML = piecesName[piece]
            else if (piece == "") document.querySelector('#'+pos).children[0].innerHTML = ''
        }
    }
}

function move (piece, pos, letter, num, dir, ThisBoard) {

    if (ThisBoard == undefined) {console.log('adas')}
    if (ThisBoard != undefined) 

    if (letters.indexOf(pos.charAt(0)) + letter >= 0 && letters.indexOf(pos.charAt(0)) + letter <= 7 
    && Number(pos.charAt(1)) + num >= 1 && Number(pos.charAt(1)) + num <= 8) {
        if (piece.charAt(0) == 'W') {
            
            if (ThisBoard[letters[letters.indexOf(pos.charAt(0)) + letter]][(Number(pos.charAt(1)) + num)] == "" || ThisBoard[letters[letters.indexOf(pos.charAt(0)) + letter]][(Number(pos.charAt(1)) + num)].charAt(0) == "B") {
            
                let final = letters[letters.indexOf(pos.charAt(0)) + letter] + (Number(pos.charAt(1)) + num)
    
                if (piece == "WP") { // atravesssa propria peça

                    if (num == 1 && letter == 0) {
                        if (ThisBoard[final.charAt(0)][final.charAt(1)].charAt(0) == "B") return false
                        
                    }
                    if (num == 2 && letter == 0) {
                        if (ThisBoard[final.charAt(0)][final.charAt(1)].charAt(0) == "B" || 
                        ThisBoard[final.charAt(0)][Number(final.charAt(1)) - 1].charAt(0) == "B" ||
                        ThisBoard[final.charAt(0)][Number(final.charAt(1)) - 1].charAt(0) == "W" ||
                        pos.charAt(1) != 2) return false
                       
                    }
                    if (letter != 0) {
                        
                        if (ThisBoard[final.charAt(0)][final.charAt(1)].charAt(0) == "B") {}               
                        else {
                            if (ThisBoard[final.charAt(0)][final.charAt(1) - 1] == "BP") {
                                if (lastMovePlayed.aft.charAt(0) == final.charAt(0) && lastMovePlayed.bef.charAt(1) - lastMovePlayed.aft.charAt(1) == 2 || lastMovePlayed.bef.charAt(1) - lastMovePlayed.aft.charAt(1) == -2 ) {}      
                                else return false
                            }
                            else return false
                        }    
                    }
                    
                }
                if (piece == "WB" || piece == "WR" || piece == "WQ") {
                    let prov = pos
                    while (prov != final) {    
                        prov = letters[letters.indexOf(prov.charAt(0)) + dir[0]] + (Number(prov.charAt(1)) + dir[1])    
                        if (ThisBoard[letters[letters.indexOf(prov.charAt(0))]][Number(prov.charAt(1))] != "" && ThisBoard[letters[letters.indexOf(prov.charAt(0))]][Number(prov.charAt(1))].charAt(0) == "W" ) {        
                            return false
                        }
                        else if (ThisBoard[letters[letters.indexOf(prov.charAt(0))]][Number(prov.charAt(1))].charAt(0) == "B" && letters[letters.indexOf(prov.charAt(0))] + Number(prov.charAt(1)) == final) {
                            return letters[letters.indexOf(pos.charAt(0)) + letter] + (Number(pos.charAt(1)) + num)
                        }
                        else if (ThisBoard[letters[letters.indexOf(prov.charAt(0))]][Number(prov.charAt(1))].charAt(0) == "B" && letters[letters.indexOf(prov.charAt(0))] + Number(prov.charAt(1)) != final) {
                            return false
                        }
                        
                 
                    }
        
                }   
                if (piece == 'WN') {}
                if (piece == 'WK') {
                    if (letter == -2) {
                        if (ThisBoard[letters[letters.indexOf(final.charAt(0))+1]][final.charAt(1)].charAt(0) != '') return false
                        if (ThisBoard[letters[letters.indexOf(final.charAt(0))-1]][final.charAt(1)].charAt(0) != '') return false
                    }
                    if (letter == +2) {
                        if (ThisBoard[letters[letters.indexOf(final.charAt(0))-1]][final.charAt(1)].charAt(0) != '') return false
                    }
                    
                }
                            
                return letters[letters.indexOf(pos.charAt(0)) + letter] + (Number(pos.charAt(1)) + num)
            }
        }
        
        else if (piece.charAt(0) == 'B') {
            if (ThisBoard[letters[letters.indexOf(pos.charAt(0)) + letter]][(Number(pos.charAt(1)) + num)] == "" || ThisBoard[letters[letters.indexOf(pos.charAt(0)) + letter]][(Number(pos.charAt(1)) + num)].charAt(0) == "W") {
            
                let final = letters[letters.indexOf(pos.charAt(0)) + letter] + (Number(pos.charAt(1)) + num)
    
                if (piece == "BP") {
                    
                    if (num == -1 && letter == 0) {
                        if (ThisBoard[final.charAt(0)][final.charAt(1)].charAt(0) == "W") return false
                        
                    }
                    if (num == -2 && letter == 0) {
                        if (ThisBoard[final.charAt(0)][final.charAt(1)].charAt(0) == "W" || 
                        ThisBoard[final.charAt(0)][Number(final.charAt(1)) + 1].charAt(0) == "W" ||
                        ThisBoard[final.charAt(0)][Number(final.charAt(1)) + 1].charAt(0) == "B" ||
                        pos.charAt(1) != 7) return false   
                    }
                    if (letter != 0) {
                        
                        if (ThisBoard[final.charAt(0)][final.charAt(1)].charAt(0) == "W") {}               
                        else {
                            if (ThisBoard[final.charAt(0)][final.charAt(1) - 1] == "WP") {
                                if (lastMovePlayed.aft.charAt(0) == final.charAt(0) && lastMovePlayed.bef.charAt(1) - lastMovePlayed.aft.charAt(1) == 2 || lastMovePlayed.bef.charAt(1) - lastMovePlayed.aft.charAt(1) == -2 ) {}      
                                else return false
                            }
                            else return false
                        }    
                    }
                }
                if (piece == "BB" || piece == "BR" || piece == "BQ") {
                    let prov = pos
                    while (prov != final) {    
                        prov = letters[letters.indexOf(prov.charAt(0)) + dir[0]] + (Number(prov.charAt(1)) + dir[1])  
                          
                        if (ThisBoard[letters[letters.indexOf(prov.charAt(0))]][Number(prov.charAt(1))] != "" && ThisBoard[letters[letters.indexOf(prov.charAt(0))]][Number(prov.charAt(1))].charAt(0) == "B" ) {        
                            return false
                        }
                        else if (ThisBoard[letters[letters.indexOf(prov.charAt(0))]][Number(prov.charAt(1))].charAt(0) == "W" && letters[letters.indexOf(prov.charAt(0))] + Number(prov.charAt(1)) == final) {
                            return letters[letters.indexOf(pos.charAt(0)) + letter] + (Number(pos.charAt(1)) + num)
                        }
                        else if (ThisBoard[letters[letters.indexOf(prov.charAt(0))]][Number(prov.charAt(1))].charAt(0) == "W" && letters[letters.indexOf(prov.charAt(0))] + Number(prov.charAt(1)) != final) {
                            return false
                        }
                        
                    }
        
                }   
                if (piece == 'BN') {}
                if (piece == 'BK') {
                    if (letter == -2) {
                        if (ThisBoard[letters[letters.indexOf(final.charAt(0))+1]][final.charAt(1)].charAt(0) != '') return false
                        if (ThisBoard[letters[letters.indexOf(final.charAt(0))-1]][final.charAt(1)].charAt(0) != '') return false
                    }
                    if (letter == +2) {
                        if (ThisBoard[letters[letters.indexOf(final.charAt(0))-1]][final.charAt(1)].charAt(0) != '') return false
                    }
                    
                }
                return letters[letters.indexOf(pos.charAt(0)) + letter] + (Number(pos.charAt(1)) + num)
            }
        }
        
    }

    else return false
}

function defineLegalMoves(color, ThisBoard) {
    let legalMoves = []
    

    if (color == 'white') {
        for (let d = 1; d <= 8; d++) {
            for (let c = 0; c <= 7; c++) {
                let pos = letters[c] + d
                let piece = ThisBoard[letters[c]][d]
                if (piece != "") {
                    if (piece == "WP") {
                        legalMoves.push({piece, bef: pos, aft: move(piece, pos, 0, 1, [], ThisBoard)})
                        legalMoves.push({piece, bef: pos, aft: move(piece, pos, 0, 2, [], ThisBoard)})

                        legalMoves.push({piece, bef: pos, aft: move(piece, pos, 1, 1, [], ThisBoard)})
                        legalMoves.push({piece, bef: pos, aft: move(piece, pos, -1, 1, [], ThisBoard)})
                        
                    }
                    if (piece == "WN") {
                        legalMoves.push({piece, bef: pos, aft: move(piece, pos, 2, 1, [], ThisBoard)})
                        legalMoves.push({piece, bef: pos, aft: move(piece, pos, -2, 1, [], ThisBoard)})
                    
                        legalMoves.push({piece, bef: pos, aft: move(piece, pos, 2, -1, [], ThisBoard)})
                        legalMoves.push({piece, bef: pos, aft: move(piece, pos, -2, -1, [], ThisBoard)})
    
                        legalMoves.push({piece, bef: pos, aft: move(piece, pos, 1, -2, [], ThisBoard)})
                        legalMoves.push({piece, bef: pos, aft: move(piece, pos, 1, 2, [], ThisBoard)})
                        
                        legalMoves.push({piece, bef: pos, aft: move(piece, pos, -1, -2, [], ThisBoard)})
                        legalMoves.push({piece, bef: pos, aft: move(piece, pos, -1, 2,  [],ThisBoard)})
                    }
                    if (piece == "WB") {
    
                        legalMoves.push({piece, bef: pos, aft: move(piece, pos, 1, 1, [1, 1], ThisBoard)})
                        legalMoves.push({piece, bef: pos, aft: move(piece, pos, 2, 2, [1, 1], ThisBoard)})
                        legalMoves.push({piece, bef: pos, aft: move(piece, pos, 3, 3, [1, 1], ThisBoard)})
                        legalMoves.push({piece, bef: pos, aft: move(piece, pos, 4, 4, [1, 1], ThisBoard)})
                        legalMoves.push({piece, bef: pos, aft: move(piece, pos, 5, 5, [1, 1], ThisBoard)})
                        legalMoves.push({piece, bef: pos, aft: move(piece, pos, 6, 6, [1, 1], ThisBoard)})
                        legalMoves.push({piece, bef: pos, aft: move(piece, pos, 7, 7, [1, 1], ThisBoard)})
    
                        legalMoves.push({piece, bef: pos, aft: move(piece, pos, -1, -1, [-1, -1], ThisBoard)})
                        legalMoves.push({piece, bef: pos, aft: move(piece, pos, -2, -2, [-1, -1], ThisBoard)})
                        legalMoves.push({piece, bef: pos, aft: move(piece, pos, -3, -3, [-1, -1], ThisBoard)})
                        legalMoves.push({piece, bef: pos, aft: move(piece, pos, -4, -4, [-1, -1], ThisBoard)})
                        legalMoves.push({piece, bef: pos, aft: move(piece, pos, -5, -5, [-1, -1], ThisBoard)})
                        legalMoves.push({piece, bef: pos, aft: move(piece, pos, -6, -6, [-1, -1], ThisBoard)})
                        legalMoves.push({piece, bef: pos, aft: move(piece, pos, -7, -7, [-1, -1], ThisBoard)})
                        
                        legalMoves.push({piece, bef: pos, aft: move(piece, pos, 1, -1, [1, -1], ThisBoard)})
                        legalMoves.push({piece, bef: pos, aft: move(piece, pos, 2, -2, [1, -1], ThisBoard)})
                        legalMoves.push({piece, bef: pos, aft: move(piece, pos, 3, -3, [1, -1], ThisBoard)})
                        legalMoves.push({piece, bef: pos, aft: move(piece, pos, 4, -4, [1, -1], ThisBoard)})
                        legalMoves.push({piece, bef: pos, aft: move(piece, pos, 5, -5, [1, -1], ThisBoard)})
                        legalMoves.push({piece, bef: pos, aft: move(piece, pos, 6, -6, [1, -1], ThisBoard)})
                        legalMoves.push({piece, bef: pos, aft: move(piece, pos, 7, -7, [1, -1], ThisBoard)})
    
                        legalMoves.push({piece, bef: pos, aft: move(piece, pos, -1, 1, [-1, 1], ThisBoard)})
                        legalMoves.push({piece, bef: pos, aft: move(piece, pos, -2, 2, [-1, 1], ThisBoard)})
                        legalMoves.push({piece, bef: pos, aft: move(piece, pos, -3, 3, [-1, 1], ThisBoard)})
                        legalMoves.push({piece, bef: pos, aft: move(piece, pos, -4, 4, [-1, 1], ThisBoard)})
                        legalMoves.push({piece, bef: pos, aft: move(piece, pos, -5, 5, [-1, 1], ThisBoard)})
                        legalMoves.push({piece, bef: pos, aft: move(piece, pos, -6, 6, [-1, 1], ThisBoard)})
                        legalMoves.push({piece, bef: pos, aft: move(piece, pos, -7, 7, [-1, 1], ThisBoard)})
                    }
                    if (piece == "WR") {
                        legalMoves.push({piece, bef: pos, aft: move(piece, pos, 0, 1, [0, 1], ThisBoard)})
                        legalMoves.push({piece, bef: pos, aft: move(piece, pos, 0, 2, [0, 1], ThisBoard)})
                        legalMoves.push({piece, bef: pos, aft: move(piece, pos, 0, 3, [0, 1], ThisBoard)})
                        legalMoves.push({piece, bef: pos, aft: move(piece, pos, 0, 4, [0, 1], ThisBoard)})
                        legalMoves.push({piece, bef: pos, aft: move(piece, pos, 0, 5, [0, 1], ThisBoard)})
                        legalMoves.push({piece, bef: pos, aft: move(piece, pos, 0, 6, [0, 1], ThisBoard)})
                        legalMoves.push({piece, bef: pos, aft: move(piece, pos, 0, 7, [0, 1], ThisBoard)})
    
                        legalMoves.push({piece, bef: pos, aft: move(piece, pos, 0, -1, [0, -1], ThisBoard)})
                        legalMoves.push({piece, bef: pos, aft: move(piece, pos, 0, -2, [0, -1], ThisBoard)})
                        legalMoves.push({piece, bef: pos, aft: move(piece, pos, 0, -3, [0, -1], ThisBoard)})
                        legalMoves.push({piece, bef: pos, aft: move(piece, pos, 0, -4, [0, -1], ThisBoard)})
                        legalMoves.push({piece, bef: pos, aft: move(piece, pos, 0, -5, [0, -1], ThisBoard)})
                        legalMoves.push({piece, bef: pos, aft: move(piece, pos, 0, -6, [0, -1], ThisBoard)})
                        legalMoves.push({piece, bef: pos, aft: move(piece, pos, 0, -7, [0, -1], ThisBoard)})
                        
                        legalMoves.push({piece, bef: pos, aft: move(piece, pos, 1, 0, [1, 0], ThisBoard)})
                        legalMoves.push({piece, bef: pos, aft: move(piece, pos, 2, 0, [1, 0], ThisBoard)})
                        legalMoves.push({piece, bef: pos, aft: move(piece, pos, 3, 0, [1, 0], ThisBoard)})
                        legalMoves.push({piece, bef: pos, aft: move(piece, pos, 4, 0, [1, 0], ThisBoard)})
                        legalMoves.push({piece, bef: pos, aft: move(piece, pos, 5, 0, [1, 0], ThisBoard)})
                        legalMoves.push({piece, bef: pos, aft: move(piece, pos, 6, 0, [1, 0], ThisBoard)})
                        legalMoves.push({piece, bef: pos, aft: move(piece, pos, 7, 0, [1, 0], ThisBoard)})
                        
                        legalMoves.push({piece, bef: pos, aft: move(piece, pos, -1, 0, [-1, 0], ThisBoard)})
                        legalMoves.push({piece, bef: pos, aft: move(piece, pos, -2, 0, [-1, 0], ThisBoard)})
                        legalMoves.push({piece, bef: pos, aft: move(piece, pos, -3, 0, [-1, 0], ThisBoard)})
                        legalMoves.push({piece, bef: pos, aft: move(piece, pos, -4, 0, [-1, 0], ThisBoard)})
                        legalMoves.push({piece, bef: pos, aft: move(piece, pos, -5, 0, [-1, 0], ThisBoard)})
                        legalMoves.push({piece, bef: pos, aft: move(piece, pos, -6, 0, [-1, 0], ThisBoard)})
                        legalMoves.push({piece, bef: pos, aft: move(piece, pos, -7, 0, [-1, 0], ThisBoard)})
                    }
                    if (piece == "WQ") {
                        legalMoves.push({piece, bef: pos, aft: move(piece, pos, 1, 1, [1, 1], ThisBoard)})
                        legalMoves.push({piece, bef: pos, aft: move(piece, pos, 2, 2, [1, 1], ThisBoard)})
                        legalMoves.push({piece, bef: pos, aft: move(piece, pos, 3, 3, [1, 1], ThisBoard)})
                        legalMoves.push({piece, bef: pos, aft: move(piece, pos, 4, 4, [1, 1], ThisBoard)})
                        legalMoves.push({piece, bef: pos, aft: move(piece, pos, 5, 5, [1, 1], ThisBoard)})
                        legalMoves.push({piece, bef: pos, aft: move(piece, pos, 6, 6, [1, 1], ThisBoard)})
                        legalMoves.push({piece, bef: pos, aft: move(piece, pos, 7, 7, [1, 1], ThisBoard)})
    
                        legalMoves.push({piece, bef: pos, aft: move(piece, pos, -1, -1, [-1, -1], ThisBoard)})
                        legalMoves.push({piece, bef: pos, aft: move(piece, pos, -2, -2, [-1, -1], ThisBoard)})
                        legalMoves.push({piece, bef: pos, aft: move(piece, pos, -3, -3, [-1, -1], ThisBoard)})
                        legalMoves.push({piece, bef: pos, aft: move(piece, pos, -4, -4, [-1, -1], ThisBoard)})
                        legalMoves.push({piece, bef: pos, aft: move(piece, pos, -5, -5, [-1, -1], ThisBoard)})
                        legalMoves.push({piece, bef: pos, aft: move(piece, pos, -6, -6, [-1, -1], ThisBoard)})
                        legalMoves.push({piece, bef: pos, aft: move(piece, pos, -7, -7, [-1, -1], ThisBoard)})
                        
                        legalMoves.push({piece, bef: pos, aft: move(piece, pos, 1, -1, [1, -1], ThisBoard)})
                        legalMoves.push({piece, bef: pos, aft: move(piece, pos, 2, -2, [1, -1], ThisBoard)})
                        legalMoves.push({piece, bef: pos, aft: move(piece, pos, 3, -3, [1, -1], ThisBoard)})
                        legalMoves.push({piece, bef: pos, aft: move(piece, pos, 4, -4, [1, -1], ThisBoard)})
                        legalMoves.push({piece, bef: pos, aft: move(piece, pos, 5, -5, [1, -1], ThisBoard)})
                        legalMoves.push({piece, bef: pos, aft: move(piece, pos, 6, -6, [1, -1], ThisBoard)})
                        legalMoves.push({piece, bef: pos, aft: move(piece, pos, 7, -7, [1, -1], ThisBoard)})
    
                        legalMoves.push({piece, bef: pos, aft: move(piece, pos, -1, 1, [-1, 1], ThisBoard)})
                        legalMoves.push({piece, bef: pos, aft: move(piece, pos, -2, 2, [-1, 1], ThisBoard)})
                        legalMoves.push({piece, bef: pos, aft: move(piece, pos, -3, 3, [-1, 1], ThisBoard)})
                        legalMoves.push({piece, bef: pos, aft: move(piece, pos, -4, 4, [-1, 1], ThisBoard)})
                        legalMoves.push({piece, bef: pos, aft: move(piece, pos, -5, 5, [-1, 1], ThisBoard)})
                        legalMoves.push({piece, bef: pos, aft: move(piece, pos, -6, 6, [-1, 1], ThisBoard)})
                        legalMoves.push({piece, bef: pos, aft: move(piece, pos, -7, 7, [-1, 1], ThisBoard)})
    
                        legalMoves.push({piece, bef: pos, aft: move(piece, pos, 0, 1, [0, 1], ThisBoard)})
                        legalMoves.push({piece, bef: pos, aft: move(piece, pos, 0, 2, [0, 1], ThisBoard)})
                        legalMoves.push({piece, bef: pos, aft: move(piece, pos, 0, 3, [0, 1], ThisBoard)})
                        legalMoves.push({piece, bef: pos, aft: move(piece, pos, 0, 4, [0, 1], ThisBoard)})
                        legalMoves.push({piece, bef: pos, aft: move(piece, pos, 0, 5, [0, 1], ThisBoard)})
                        legalMoves.push({piece, bef: pos, aft: move(piece, pos, 0, 6, [0, 1], ThisBoard)})
                        legalMoves.push({piece, bef: pos, aft: move(piece, pos, 0, 7, [0, 1], ThisBoard)})
    
                        legalMoves.push({piece, bef: pos, aft: move(piece, pos, 0, -1, [0, -1], ThisBoard)})
                        legalMoves.push({piece, bef: pos, aft: move(piece, pos, 0, -2, [0, -1], ThisBoard)})
                        legalMoves.push({piece, bef: pos, aft: move(piece, pos, 0, -3, [0, -1], ThisBoard)})
                        legalMoves.push({piece, bef: pos, aft: move(piece, pos, 0, -4, [0, -1], ThisBoard)})
                        legalMoves.push({piece, bef: pos, aft: move(piece, pos, 0, -5, [0, -1], ThisBoard)})
                        legalMoves.push({piece, bef: pos, aft: move(piece, pos, 0, -6, [0, -1], ThisBoard)})
                        legalMoves.push({piece, bef: pos, aft: move(piece, pos, 0, -7, [0, -1], ThisBoard)})
                        
                        legalMoves.push({piece, bef: pos, aft: move(piece, pos, 1, 0, [1, 0], ThisBoard)})
                        legalMoves.push({piece, bef: pos, aft: move(piece, pos, 2, 0, [1, 0], ThisBoard)})
                        legalMoves.push({piece, bef: pos, aft: move(piece, pos, 3, 0, [1, 0], ThisBoard)})
                        legalMoves.push({piece, bef: pos, aft: move(piece, pos, 4, 0, [1, 0], ThisBoard)})
                        legalMoves.push({piece, bef: pos, aft: move(piece, pos, 5, 0, [1, 0], ThisBoard)})
                        legalMoves.push({piece, bef: pos, aft: move(piece, pos, 6, 0, [1, 0], ThisBoard)})
                        legalMoves.push({piece, bef: pos, aft: move(piece, pos, 7, 0, [1, 0], ThisBoard)})
                        
                        legalMoves.push({piece, bef: pos, aft: move(piece, pos, -1, 0, [-1, 0], ThisBoard)})
                        legalMoves.push({piece, bef: pos, aft: move(piece, pos, -2, 0, [-1, 0], ThisBoard)})
                        legalMoves.push({piece, bef: pos, aft: move(piece, pos, -3, 0, [-1, 0], ThisBoard)})
                        legalMoves.push({piece, bef: pos, aft: move(piece, pos, -4, 0, [-1, 0], ThisBoard)})
                        legalMoves.push({piece, bef: pos, aft: move(piece, pos, -5, 0, [-1, 0], ThisBoard)})
                        legalMoves.push({piece, bef: pos, aft: move(piece, pos, -6, 0, [-1, 0], ThisBoard)})
                        legalMoves.push({piece, bef: pos, aft: move(piece, pos, -7, 0, [-1, 0], ThisBoard)})
                    }
                    if (piece == "WK") {
                        legalMoves.push({piece, bef: pos, aft: move(piece, pos, 1, 1, [1, 1], ThisBoard)})
                        legalMoves.push({piece, bef: pos, aft: move(piece, pos, -1, -1, [-1, -1], ThisBoard)})
                        legalMoves.push({piece, bef: pos, aft: move(piece, pos, 1, -1, [1, -1], ThisBoard)})
                        legalMoves.push({piece, bef: pos, aft: move(piece, pos, -1, 1, [-1, 1], ThisBoard)})
    
                        legalMoves.push({piece, bef: pos, aft: move(piece, pos, 0, 1, [0, 1], ThisBoard)})
                        legalMoves.push({piece, bef: pos, aft: move(piece, pos, 0, -1, [0, -1], ThisBoard)})
                        legalMoves.push({piece, bef: pos, aft: move(piece, pos, 1, 0, [1, 0], ThisBoard)})
                        legalMoves.push({piece, bef: pos, aft: move(piece, pos, -1, 0, [-1, 0], ThisBoard)})
                        
                        if (!wKingMoved) {
                            
                            if (ThisBoard['h'][1] == 'WR') legalMoves.push({piece, bef: pos, aft: move(piece, pos, 2, 0, [], ThisBoard)})
                            if (ThisBoard['a'][1] == 'WR') legalMoves.push({piece, bef: pos, aft: move(piece, pos, -2, 0, [], ThisBoard)})
                        }
                        
                    }
                }
            }
            
        }
    }
    else if (color == 'black') {
        for (let d = 1; d <= 8; d++) {
            for (let c = 0; c <= 7; c++) {
                let pos = letters[c] + d
                let piece = ThisBoard[letters[c]][d]
                if (piece != "") {
                    if (piece == "BP") {
                        legalMoves.push({piece, bef: pos, aft: move(piece, pos, 0, -1, [], ThisBoard)})
                        legalMoves.push({piece, bef: pos, aft: move(piece, pos, 0, -2, [], ThisBoard)})

                        legalMoves.push({piece, bef: pos, aft: move(piece, pos, 1, -1, [], ThisBoard)})
                        legalMoves.push({piece, bef: pos, aft: move(piece, pos, -1, -1, [], ThisBoard)})
                    }
                    if (piece == "BN") {
                        legalMoves.push({piece, bef: pos, aft: move(piece, pos, 2, 1, [], ThisBoard)})
                        legalMoves.push({piece, bef: pos, aft: move(piece, pos, -2, 1, [], ThisBoard)})
                        
                        legalMoves.push({piece, bef: pos, aft: move(piece, pos, 2, -1, [], ThisBoard)})
                        legalMoves.push({piece, bef: pos, aft: move(piece, pos, -2, -1, [], ThisBoard)})
    
                        legalMoves.push({piece, bef: pos, aft: move(piece, pos, 1, -2, [],ThisBoard)})
                        legalMoves.push({piece, bef: pos, aft: move(piece, pos, 1, 2, [], ThisBoard)})
                        
                        legalMoves.push({piece, bef: pos, aft: move(piece, pos, -1, -2, [], ThisBoard)})
                        legalMoves.push({piece, bef: pos, aft: move(piece, pos, -1, 2, [], ThisBoard)})
                    }
                    if (piece == "BB") {
    
                        legalMoves.push({piece, bef: pos, aft: move(piece, pos, 1, 1, [1, 1], ThisBoard)})
                        legalMoves.push({piece, bef: pos, aft: move(piece, pos, 2, 2, [1, 1], ThisBoard)})
                        legalMoves.push({piece, bef: pos, aft: move(piece, pos, 3, 3, [1, 1], ThisBoard)})
                        legalMoves.push({piece, bef: pos, aft: move(piece, pos, 4, 4, [1, 1], ThisBoard)})
                        legalMoves.push({piece, bef: pos, aft: move(piece, pos, 5, 5, [1, 1], ThisBoard)})
                        legalMoves.push({piece, bef: pos, aft: move(piece, pos, 6, 6, [1, 1], ThisBoard)})
                        legalMoves.push({piece, bef: pos, aft: move(piece, pos, 7, 7, [1, 1], ThisBoard)})
    
                        legalMoves.push({piece, bef: pos, aft: move(piece, pos, -1, -1, [-1, -1], ThisBoard)})
                        legalMoves.push({piece, bef: pos, aft: move(piece, pos, -2, -2, [-1, -1], ThisBoard)})
                        legalMoves.push({piece, bef: pos, aft: move(piece, pos, -3, -3, [-1, -1], ThisBoard)})
                        legalMoves.push({piece, bef: pos, aft: move(piece, pos, -4, -4, [-1, -1], ThisBoard)})
                        legalMoves.push({piece, bef: pos, aft: move(piece, pos, -5, -5, [-1, -1], ThisBoard)})
                        legalMoves.push({piece, bef: pos, aft: move(piece, pos, -6, -6, [-1, -1], ThisBoard)})
                        legalMoves.push({piece, bef: pos, aft: move(piece, pos, -7, -7, [-1, -1], ThisBoard)})
                        
                        legalMoves.push({piece, bef: pos, aft: move(piece, pos, 1, -1, [1, -1], ThisBoard)})
                        legalMoves.push({piece, bef: pos, aft: move(piece, pos, 2, -2, [1, -1], ThisBoard)})
                        legalMoves.push({piece, bef: pos, aft: move(piece, pos, 3, -3, [1, -1], ThisBoard)})
                        legalMoves.push({piece, bef: pos, aft: move(piece, pos, 4, -4, [1, -1], ThisBoard)})
                        legalMoves.push({piece, bef: pos, aft: move(piece, pos, 5, -5, [1, -1], ThisBoard)})
                        legalMoves.push({piece, bef: pos, aft: move(piece, pos, 6, -6, [1, -1], ThisBoard)})
                        legalMoves.push({piece, bef: pos, aft: move(piece, pos, 7, -7, [1, -1], ThisBoard)})
    
                        legalMoves.push({piece, bef: pos, aft: move(piece, pos, -1, 1, [-1, 1], ThisBoard)})
                        legalMoves.push({piece, bef: pos, aft: move(piece, pos, -2, 2, [-1, 1], ThisBoard)})
                        legalMoves.push({piece, bef: pos, aft: move(piece, pos, -3, 3, [-1, 1], ThisBoard)})
                        legalMoves.push({piece, bef: pos, aft: move(piece, pos, -4, 4, [-1, 1], ThisBoard)})
                        legalMoves.push({piece, bef: pos, aft: move(piece, pos, -5, 5, [-1, 1], ThisBoard)})
                        legalMoves.push({piece, bef: pos, aft: move(piece, pos, -6, 6, [-1, 1], ThisBoard)})
                        legalMoves.push({piece, bef: pos, aft: move(piece, pos, -7, 7, [-1, 1], ThisBoard)})
                    }
                    if (piece == "BR") {
                        legalMoves.push({piece, bef: pos, aft: move(piece, pos, 0, 1, [0, 1], ThisBoard)})
                        legalMoves.push({piece, bef: pos, aft: move(piece, pos, 0, 2, [0, 1], ThisBoard)})
                        legalMoves.push({piece, bef: pos, aft: move(piece, pos, 0, 3, [0, 1], ThisBoard)})
                        legalMoves.push({piece, bef: pos, aft: move(piece, pos, 0, 4, [0, 1], ThisBoard)})
                        legalMoves.push({piece, bef: pos, aft: move(piece, pos, 0, 5, [0, 1], ThisBoard)})
                        legalMoves.push({piece, bef: pos, aft: move(piece, pos, 0, 6, [0, 1], ThisBoard)})
                        legalMoves.push({piece, bef: pos, aft: move(piece, pos, 0, 7, [0, 1], ThisBoard)})
    
                        legalMoves.push({piece, bef: pos, aft: move(piece, pos, 0, -1, [0, -1], ThisBoard)})
                        legalMoves.push({piece, bef: pos, aft: move(piece, pos, 0, -2, [0, -1], ThisBoard)})
                        legalMoves.push({piece, bef: pos, aft: move(piece, pos, 0, -3, [0, -1], ThisBoard)})
                        legalMoves.push({piece, bef: pos, aft: move(piece, pos, 0, -4, [0, -1], ThisBoard)})
                        legalMoves.push({piece, bef: pos, aft: move(piece, pos, 0, -5, [0, -1], ThisBoard)})
                        legalMoves.push({piece, bef: pos, aft: move(piece, pos, 0, -6, [0, -1], ThisBoard)})
                        legalMoves.push({piece, bef: pos, aft: move(piece, pos, 0, -7, [0, -1], ThisBoard)})
                        
                        legalMoves.push({piece, bef: pos, aft: move(piece, pos, 1, 0, [1, 0], ThisBoard)})
                        legalMoves.push({piece, bef: pos, aft: move(piece, pos, 2, 0, [1, 0], ThisBoard)})
                        legalMoves.push({piece, bef: pos, aft: move(piece, pos, 3, 0, [1, 0], ThisBoard)})
                        legalMoves.push({piece, bef: pos, aft: move(piece, pos, 4, 0, [1, 0], ThisBoard)})
                        legalMoves.push({piece, bef: pos, aft: move(piece, pos, 5, 0, [1, 0], ThisBoard)})
                        legalMoves.push({piece, bef: pos, aft: move(piece, pos, 6, 0, [1, 0], ThisBoard)})
                        legalMoves.push({piece, bef: pos, aft: move(piece, pos, 7, 0, [1, 0], ThisBoard)})
                        
                        legalMoves.push({piece, bef: pos, aft: move(piece, pos, -1, 0, [-1, 0], ThisBoard)})
                        legalMoves.push({piece, bef: pos, aft: move(piece, pos, -2, 0, [-1, 0], ThisBoard)})
                        legalMoves.push({piece, bef: pos, aft: move(piece, pos, -3, 0, [-1, 0], ThisBoard)})
                        legalMoves.push({piece, bef: pos, aft: move(piece, pos, -4, 0, [-1, 0], ThisBoard)})
                        legalMoves.push({piece, bef: pos, aft: move(piece, pos, -5, 0, [-1, 0], ThisBoard)})
                        legalMoves.push({piece, bef: pos, aft: move(piece, pos, -6, 0, [-1, 0], ThisBoard)})
                        legalMoves.push({piece, bef: pos, aft: move(piece, pos, -7, 0, [-1, 0], ThisBoard)})
                    }
                    if (piece == "BQ") {
                        legalMoves.push({piece, bef: pos, aft: move(piece, pos, 1, 1, [1, 1], ThisBoard)})
                        legalMoves.push({piece, bef: pos, aft: move(piece, pos, 2, 2, [1, 1], ThisBoard)})
                        legalMoves.push({piece, bef: pos, aft: move(piece, pos, 3, 3, [1, 1], ThisBoard)})
                        legalMoves.push({piece, bef: pos, aft: move(piece, pos, 4, 4, [1, 1], ThisBoard)})
                        legalMoves.push({piece, bef: pos, aft: move(piece, pos, 5, 5, [1, 1], ThisBoard)})
                        legalMoves.push({piece, bef: pos, aft: move(piece, pos, 6, 6, [1, 1], ThisBoard)})
                        legalMoves.push({piece, bef: pos, aft: move(piece, pos, 7, 7, [1, 1], ThisBoard)})
    
                        legalMoves.push({piece, bef: pos, aft: move(piece, pos, -1, -1, [-1, -1], ThisBoard)})
                        legalMoves.push({piece, bef: pos, aft: move(piece, pos, -2, -2, [-1, -1], ThisBoard)})
                        legalMoves.push({piece, bef: pos, aft: move(piece, pos, -3, -3, [-1, -1], ThisBoard)})
                        legalMoves.push({piece, bef: pos, aft: move(piece, pos, -4, -4, [-1, -1], ThisBoard)})
                        legalMoves.push({piece, bef: pos, aft: move(piece, pos, -5, -5, [-1, -1], ThisBoard)})
                        legalMoves.push({piece, bef: pos, aft: move(piece, pos, -6, -6, [-1, -1], ThisBoard)})
                        legalMoves.push({piece, bef: pos, aft: move(piece, pos, -7, -7, [-1, -1], ThisBoard)})
                        
                        legalMoves.push({piece, bef: pos, aft: move(piece, pos, 1, -1, [1, -1], ThisBoard)})
                        legalMoves.push({piece, bef: pos, aft: move(piece, pos, 2, -2, [1, -1], ThisBoard)})
                        legalMoves.push({piece, bef: pos, aft: move(piece, pos, 3, -3, [1, -1], ThisBoard)})
                        legalMoves.push({piece, bef: pos, aft: move(piece, pos, 4, -4, [1, -1], ThisBoard)})
                        legalMoves.push({piece, bef: pos, aft: move(piece, pos, 5, -5, [1, -1], ThisBoard)})
                        legalMoves.push({piece, bef: pos, aft: move(piece, pos, 6, -6, [1, -1], ThisBoard)})
                        legalMoves.push({piece, bef: pos, aft: move(piece, pos, 7, -7, [1, -1], ThisBoard)})
    
                        legalMoves.push({piece, bef: pos, aft: move(piece, pos, -1, 1, [-1, 1], ThisBoard)})
                        legalMoves.push({piece, bef: pos, aft: move(piece, pos, -2, 2, [-1, 1], ThisBoard)})
                        legalMoves.push({piece, bef: pos, aft: move(piece, pos, -3, 3, [-1, 1], ThisBoard)})
                        legalMoves.push({piece, bef: pos, aft: move(piece, pos, -4, 4, [-1, 1], ThisBoard)})
                        legalMoves.push({piece, bef: pos, aft: move(piece, pos, -5, 5, [-1, 1], ThisBoard)})
                        legalMoves.push({piece, bef: pos, aft: move(piece, pos, -6, 6, [-1, 1], ThisBoard)})
                        legalMoves.push({piece, bef: pos, aft: move(piece, pos, -7, 7, [-1, 1], ThisBoard)})
    
                        legalMoves.push({piece, bef: pos, aft: move(piece, pos, 0, 1, [0, 1], ThisBoard)})
                        legalMoves.push({piece, bef: pos, aft: move(piece, pos, 0, 2, [0, 1], ThisBoard)})
                        legalMoves.push({piece, bef: pos, aft: move(piece, pos, 0, 3, [0, 1], ThisBoard)})
                        legalMoves.push({piece, bef: pos, aft: move(piece, pos, 0, 4, [0, 1], ThisBoard)})
                        legalMoves.push({piece, bef: pos, aft: move(piece, pos, 0, 5, [0, 1], ThisBoard)})
                        legalMoves.push({piece, bef: pos, aft: move(piece, pos, 0, 6, [0, 1], ThisBoard)})
                        legalMoves.push({piece, bef: pos, aft: move(piece, pos, 0, 7, [0, 1], ThisBoard)})
    
                        legalMoves.push({piece, bef: pos, aft: move(piece, pos, 0, -1, [0, -1], ThisBoard)})
                        legalMoves.push({piece, bef: pos, aft: move(piece, pos, 0, -2, [0, -1], ThisBoard)})
                        legalMoves.push({piece, bef: pos, aft: move(piece, pos, 0, -3, [0, -1], ThisBoard)})
                        legalMoves.push({piece, bef: pos, aft: move(piece, pos, 0, -4, [0, -1], ThisBoard)})
                        legalMoves.push({piece, bef: pos, aft: move(piece, pos, 0, -5, [0, -1], ThisBoard)})
                        legalMoves.push({piece, bef: pos, aft: move(piece, pos, 0, -6, [0, -1], ThisBoard)})
                        legalMoves.push({piece, bef: pos, aft: move(piece, pos, 0, -7, [0, -1], ThisBoard)})
                        
                        legalMoves.push({piece, bef: pos, aft: move(piece, pos, 1, 0, [1, 0], ThisBoard)})
                        legalMoves.push({piece, bef: pos, aft: move(piece, pos, 2, 0, [1, 0], ThisBoard)})
                        legalMoves.push({piece, bef: pos, aft: move(piece, pos, 3, 0, [1, 0], ThisBoard)})
                        legalMoves.push({piece, bef: pos, aft: move(piece, pos, 4, 0, [1, 0], ThisBoard)})
                        legalMoves.push({piece, bef: pos, aft: move(piece, pos, 5, 0, [1, 0], ThisBoard)})
                        legalMoves.push({piece, bef: pos, aft: move(piece, pos, 6, 0, [1, 0], ThisBoard)})
                        legalMoves.push({piece, bef: pos, aft: move(piece, pos, 7, 0, [1, 0], ThisBoard)})
                        
                        legalMoves.push({piece, bef: pos, aft: move(piece, pos, -1, 0, [-1, 0], ThisBoard)})
                        legalMoves.push({piece, bef: pos, aft: move(piece, pos, -2, 0, [-1, 0], ThisBoard)})
                        legalMoves.push({piece, bef: pos, aft: move(piece, pos, -3, 0, [-1, 0], ThisBoard)})
                        legalMoves.push({piece, bef: pos, aft: move(piece, pos, -4, 0, [-1, 0], ThisBoard)})
                        legalMoves.push({piece, bef: pos, aft: move(piece, pos, -5, 0, [-1, 0], ThisBoard)})
                        legalMoves.push({piece, bef: pos, aft: move(piece, pos, -6, 0, [-1, 0], ThisBoard)})
                        legalMoves.push({piece, bef: pos, aft: move(piece, pos, -7, 0, [-1, 0], ThisBoard)})
                    }
                    if (piece == "BK") {
                        legalMoves.push({piece, bef: pos, aft: move(piece, pos, 1, 1, [1, 1], ThisBoard)})
                        legalMoves.push({piece, bef: pos, aft: move(piece, pos, -1, -1, [-1, -1], ThisBoard)})
                        legalMoves.push({piece, bef: pos, aft: move(piece, pos, 1, -1, [1, -1], ThisBoard)})
                        legalMoves.push({piece, bef: pos, aft: move(piece, pos, -1, 1, [-1, 1], ThisBoard)})
    
                        legalMoves.push({piece, bef: pos, aft: move(piece, pos, 0, 1, [0, 1], ThisBoard)})
                        legalMoves.push({piece, bef: pos, aft: move(piece, pos, 0, -1, [0, -1], ThisBoard)})
                        legalMoves.push({piece, bef: pos, aft: move(piece, pos, 1, 0, [1, 0], ThisBoard)})
                        legalMoves.push({piece, bef: pos, aft: move(piece, pos, -1, 0, [-1, 0], ThisBoard)})
                        
                        if (!bKingMoved) {
                            if (ThisBoard['h'][8] == 'BR') legalMoves.push({piece, bef: pos, aft: move(piece, pos, 2, 0, [], ThisBoard)})
                            if (ThisBoard['a'][8] == 'BR') legalMoves.push({piece, bef: pos, aft: move(piece, pos, -2, 0, [], ThisBoard)})
                        }
    
                    }
                }
            }
            
        }
    }
    

    legalMoves.forEach((moves, i) => {
        if (!moves.aft) legalMoves[i] = ''
    })

    let ind = legalMoves.indexOf('');
    while(ind >= 0){
        legalMoves.splice(ind, 1);
        ind = legalMoves.indexOf('');
    }

    return legalMoves
    
   
}

function changeColor(color) {
    if (color == 'white') return 'black'
    if (color == 'black') return 'white'
}

let value = [[],[],[],[]]
let maxDepth = 0
let rightMove
let lastMovePlayed = {pos: '', bef: '', aft: ''}

function calculate (color, depth, ThisBoard) {
    
    if (depth > maxDepth) maxDepth = depth
    
    let legalMoves = shuffleArray(defineLegalMoves(color, ThisBoard)); 

    legalMoves.forEach((mov, i) => {
        let boardProv = deepCopy(ThisBoard); 

        
        if (mov.bef.charAt(0) == 'e' && mov.aft.charAt(0) == 'g' && mov.piece.charAt(1) == 'K') {        
            boardProv[mov.bef.charAt(0)][mov.bef.charAt(1)] = '';
            boardProv[mov.aft.charAt(0)][mov.aft.charAt(1)] = mov.piece;

            boardProv['h'][mov.bef.charAt(1)] = '';
            boardProv['f'][mov.aft.charAt(1)] = mov.piece.charAt(0) + 'R';
            
            
        }
        else if (mov.bef.charAt(0) == 'e' && mov.aft.charAt(0) == 'g' && mov.piece.charAt(1) == 'K') {        
            boardProv[mov.bef.charAt(0)][mov.bef.charAt(1)] = '';
            boardProv[mov.aft.charAt(0)][mov.aft.charAt(1)] = mov.piece;

            boardProv['a'][mov.bef.charAt(1)] = '';
            boardProv['d'][mov.aft.charAt(1)] = mov.piece.charAt(0) + 'R';
            
        }
        else if (mov.piece == "WP" && mov.aft.charAt(1) == 8) {
            
            boardProv[mov.bef.charAt(0)][mov.bef.charAt(1)] = '';
            boardProv[mov.aft.charAt(0)][mov.aft.charAt(1)] = 'WQ';
        }
        else if (mov.piece == "BP" && mov.aft.charAt(1) == 1) {
            
            boardProv[mov.bef.charAt(0)][mov.bef.charAt(1)] = '';
            boardProv[mov.aft.charAt(0)][mov.aft.charAt(1)] = 'BQ';
        }
        else {
            boardProv[mov.bef.charAt(0)][mov.bef.charAt(1)] = '';
            boardProv[mov.aft.charAt(0)][mov.aft.charAt(1)] = mov.piece;
        }
        
        res = eval(boardProv)
       
        if (depth == maxDepth) {
            calculate(changeColor(color), depth - 1, boardProv) 

            if (i == 0){
                value[depth] = [...value[depth - 1]]
                rightMove = [boardProv, mov]
                lastMovePlayed = mov
            } 
            if (color == 'white') if (value[depth - 1][0] > value[depth][0]) {
                value[depth] = value[depth - 1]
                rightMove = [boardProv, mov]
                lastMovePlayed = mov
            }
            if (color == 'black') if (value[depth - 1][0] < value[depth][0]) {
                value[depth] = value[depth - 1]
                rightMove = [boardProv, mov]
                lastMovePlayed = mov
            }
            
        }
        if (depth > 0 && depth < maxDepth) {
            calculate(changeColor(color), depth - 1, boardProv) 
            
            if (i == 0) value[depth] = [...value[depth - 1]]
            if (color == 'white') if (value[depth - 1][0] > value[depth][0]) value[depth] = [...value[depth - 1]]
            if (color == 'black') if (value[depth - 1][0] < value[depth][0]) value[depth] = [...value[depth - 1]]   
        }

        else if (depth == 0){
              
            if (i == 0) value[depth] = [res, boardProv]
            if (color == 'white') if (res > value[depth][0]) value[depth] = [res, boardProv]
            if (color == 'black') if (res < value[depth][0]) value[depth] = [res, boardProv]      
            
        }
    
         
    });
}


function play() {
    var bef = Date.now();
    calculate(whoToPlay, 3, board)
    var delay = Date.now() - bef;
    
    drawBoard(rightMove[0])
    console.log(whoToPlay + " acabou de jogar o movimento " + rightMove[1].piece + ' from ' + rightMove[1].bef + ' to ' + rightMove[1].aft)
    
    if (rightMove[1].piece == "WK") wKingMoved = true
    if (rightMove[1].piece == "BK") bKingMoved = true

    console.log("Delay: " + delay + "ms")

    let y = 0
    for (let c = 0; c <=7; c++) 
    for (let d = 1; d <=8; d++) {
        let x = board[letters[c]][d].charAt(1)
        if (x == 'Q' || x == 'N' || x == 'R' || x == 'B') y++
    } 
    if (y <= 4) endGameBoards()

    whoToPlay = changeColor(whoToPlay)
}

function playInterval() {
    setTimeout(()=> {
        play()
    }, 500)
    
}

resetBoard()
drawBoard(board)

let pieceClicked;
let legalProv = []
let isToggled = false
document.querySelectorAll(".click").forEach( div => {
    div.addEventListener("click", (e) => {
        
        if (isToggled) playColor = 'black'
        else playColor = 'white'
        
        document.querySelectorAll(".white").forEach(white => {white.classList = 'white'})
        document.querySelectorAll(".black").forEach(black => {black.classList = 'black'})

        let pos = e.target.parentNode.id

        defineLegalMoves(playColor, board).forEach(legal => { 
            if (legal.bef == pos) {
                document.querySelector("#"+legal.aft).classList += ' red'     
                legalProv.push(legal.aft)  

                pieceClicked = [pos, legal.aft, board[pos.charAt(0)][pos.charAt(1)], legalProv]  
            }
        })

        if (pieceClicked != "" && legalProv.indexOf(pos) != -1 && whoToPlay == playColor) {
            
            if (board[pos.charAt(0)][pos.charAt(1)] != playColor ) {
                if (pos.charAt(0) == 'g' && pieceClicked[0].charAt(0) == 'e' && pieceClicked[2].charAt(1) == 'K') {        
                    board[pieceClicked[0].charAt(0)][pieceClicked[0].charAt(1)] = '';
                    board[pos.charAt(0)][pos.charAt(1)] = pieceClicked[2];

                    board['h'][pieceClicked[0].charAt(1)] = '';
                    board['f'][pos.charAt(1)] = pieceClicked[2].charAt(0) + 'R';
                    
                }
                else if (pos.charAt(0) == 'c' && pieceClicked[0].charAt(0) == 'e' && pieceClicked[2].charAt(1) == 'K') {        
                    board[pieceClicked[0].charAt(0)][pieceClicked[0].charAt(1)] = '';
                    board[pos.charAt(0)][pos.charAt(1)] = pieceClicked[2];

                    board['a'][pieceClicked[0].charAt(1)] = '';
                    board['d'][pos.charAt(1)] = pieceClicked[2].charAt(0) + 'R';
                    
                }
                else if (pieceClicked[2] == "WP" && pieceClicked[1].charAt(1) == 8) {
                    board[pieceClicked[0].charAt(0)][pieceClicked[0].charAt(1)] = '';
                    board[pos.charAt(0)][pos.charAt(1)] = 'WQ';
                }
                else if (pieceClicked[2] == "BP" && pieceClicked[1].charAt(1) == 1) {
                    board[pieceClicked[0].charAt(0)][pieceClicked[0].charAt(1)] = '';
                    board[pos.charAt(0)][pos.charAt(1)] = 'BQ';
                }
                else {
                    board[pieceClicked[0].charAt(0)][pieceClicked[0].charAt(1)] = '';
                    board[pos.charAt(0)][pos.charAt(1)] = pieceClicked[2];
                }
                
                if (pieceClicked[2] == "WK") wKingMoved = true
                if (pieceClicked[2] == "BK") bKingMoved = true
                 
                lastMovePlayed = {piece: pieceClicked[2], bef: pieceClicked[0], aft: pos}

                let y = 0
                for (let c = 0; c <=7; c++) 
                for (let d = 1; d <=8; d++) {
                    let x = board[letters[c]][d].charAt(1)
                    if (x == 'Q' || x == 'N' || x == 'R' || x == 'B') y++
                } 
                if (y <= 4) endGameBoards()
                

                legalProv = []
                drawBoard(board)
                whoToPlay = changeColor(playColor)
               
                playInterval()
            } 
        }
    })
}); 

document.addEventListener('DOMContentLoaded', function() {
  let toggleButton = document.getElementById('myToggleButton');

    toggleButton.addEventListener('click', function() {
        isToggled = !isToggled;
        this.classList.toggle('active');
        this.setAttribute('aria-pressed', isToggled);
});
});
