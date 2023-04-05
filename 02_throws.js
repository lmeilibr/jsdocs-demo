/**
 * Retorna o primeiro elemento de um array.
 * @param {Array} arr - O array de onde o elemento será retornado.
 * @return {*} O primeiro elemento do array.
 * @throws {Error} Se o array estiver vazio.
 */
function getFirstElement(arr) {
  if (arr.length === 0) {
    throw new Error('Array vazio!');
  }
  return arr[0];
}
