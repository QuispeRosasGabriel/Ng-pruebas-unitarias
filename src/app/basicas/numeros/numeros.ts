export const incrementar = (numero: number) => {
  if (numero > 100) {
    return 100;
  }
  if (numero <= 0) {
    return 0;
  }
  else {
    return numero + 1;
  }
}
