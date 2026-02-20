import {crearCartaHTML, pedirCarta,valorCarta} from './';


// turno de la computadora
/**
 * 
 * @param {Number} puntosMinimos Puntaje minimo que la computadora necesita para ganar, sin que pase de 21
 * @param {HTMLElement} punto sHTML HTML para mostrar los puntos
 * @param {HTMLElement} divCartasComputadora sHTML HTML para mostrar los puntos
 * @param {Array<String>} deck El mazo generado
 */
export const turnoComputadora = ( puntosMinimos,puntosHTML,divCartasComputadora,deck ) => {

    if(!puntosMinimos) throw new Error('Puntos minimos son necesarios');
    if(!deck) throw new Error('El deck es nesesario');
    if(!puntosHTML) throw new Error('Argumento puntos HTML es necesario');

    let puntosComputadora = 0;

    do {
        const carta = pedirCarta(deck);

        //TODO COMENTARIO ESPECIAL PARA CORREGIR DESPUES
        puntosComputadora = puntosComputadora + valorCarta( carta );
        puntosHTML.innerText = puntosComputadora;
        
        
        const imgCarta = crearCartaHTML(carta);
        divCartasComputadora.append( imgCarta );

        if( puntosMinimos > 21 ) {
            break;
        }

    } while(  (puntosComputadora < puntosMinimos)  && (puntosMinimos <= 21 ) );

    setTimeout(() => {
        if( puntosComputadora === puntosMinimos ) {
            alert('Nadie gana :(');
        } else if ( puntosMinimos > 21 ) {
            alert('Computadora gana')
        } else if( puntosComputadora > 21 ) {
            alert('Jugador Gana');
        } else {
            alert('Computadora Gana')
        }
    }, 100 );
}
