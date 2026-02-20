
/**
 * 
 * @param {String} carta 
 * @returns {HTMLImageElement} carta Imagen de retorno
 */ 
export const crearCartaHTML= (carta) =>{

    if(!carta) throw new Error('La carta es un argumento obligatorio')

    const base = import.meta.env.BASE_URL;    

    // <img class="carta" src="assets/cartas/2C.png">
    const imgCarta = document.createElement('img');
    imgCarta.src = `${base}/cartas/${ carta }.png`; //3H, JD
    imgCarta.classList.add('carta');
    

    return imgCarta
}