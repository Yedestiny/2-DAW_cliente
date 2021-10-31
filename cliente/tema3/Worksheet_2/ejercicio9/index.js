var lanzamientos = [
    {dado1:'', dado2: '', total:''}
    ];
    var contador = [
    [0,0,0,0,0,0],
    [0,0,0,0,0,0],
    [0,0,0,0,0,0],
    [0,0,0,0,0,0],
    [0,0,0,0,0,0],
    [0,0,0,0,0,0]
    ];
    
    function lanzamiento() {
        lan1 = Math.floor(Math.random()*(7-1))+1;
        lan2 = Math.floor(Math.random()*(7-1))+1;
        lanzamientos.push({dado1 : lan1, dado2 : lan2, total : lan1+lan2});
    };
    
    function simulacion(){
        for (let i = 0; i < 36001; i++) {
            lanzamiento()
            contador[(lanzamientos[i+1].dado1)-1][(lanzamientos[i+1].dado2)-1]++
        };
    };
    
    
    simulacion()