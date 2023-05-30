class Calc {
  add = (a, b) => a + b;
  sub = (a, b) => a - b;
  mul = (a, b) => a * b;
  div = (a, b) => a / b;
}
const obj = new Calc
// export default new Calc;
// export default obj    
export default Calc // exporting class will create obj in the prog
