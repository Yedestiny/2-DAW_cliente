function matriz(f,c){
    arrBid = new Array(f);
    for (i=0; i<f;i++){
        arrBid[i] = new Array(c);
        arrBid[i].fill(0);
    }
    fTesoro = Math.trunc(Math.random() * f + 1);
    cTesoro = Math.trunc(Math.random() * c + 1);
    arrBid[fTesoro-1][cTesoro-1]=toString(fTesoro)+toString(cTesoro);
}

matriz(8,8);