numero = parseInt(Math.random()*3+1);
switch(numero){
    case 1 :
        document.write('<img src="https://st.depositphotos.com/1020341/4233/i/450/depositphotos_42333899-stock-photo-portrait-of-huge-beautiful-male.jpg"');
        break;
    case 2 :
        document.write('<img src="https://slp-statics.astockcdn.net/static_assets/staging/21fall/homepage/curated-asset-collection/card-2.jpg?width=580"');
        break;
    case 3:
        document.write('<img src="https://www.muycomputer.com/wp-content/uploads/2021/02/android.jpg"');
        break;
    default:
        document.write('Ha ocurrido un problema');
}