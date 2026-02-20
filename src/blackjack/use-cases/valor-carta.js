/**
 * Obtiene el valor numerico de una carta
 * @param {String} cartaSeleccionada Ejemplo: '10C' , 'AD','KH'
 * @returns {Number} Valor numerico de la carta
 */
export const valorCarta = ( cartaSeleccionada ) => {

    // 1. Validación de seguridad: ¿Existe la carta?
    if ( !cartaSeleccionada ) {
        throw new Error('La carta es obligatoria');
    }

    // 2. Extraer el valor (quitar la última letra: C, D, H, S)
    const valor = cartaSeleccionada .substring(0, cartaSeleccionada.length - 1);

    // 3. Lógica de decisión
    return ( isNaN( valor ) ) ? 
            ( valor === 'A' ) ? 11 : 10
            : valor * 1;
}