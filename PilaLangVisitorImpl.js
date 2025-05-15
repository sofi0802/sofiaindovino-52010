import PilaLangVisitor from './PilaLangVisitor.js';

export default class PilaLangVisitorImpl extends PilaLangVisitor {
  constructor() {
    super();
    this.pila = [];
  }
  
  visitPrograma(ctx) {
    if (!ctx.ID()) {
      console.error('Error: no se encontró identificador después de "pila"');
      return;
    }
    const nombre = ctx.ID().getText();
    this.pila = [];
    console.log(`let ${nombre} = [];`);
    ctx.comando().forEach(comandoCtx => {
      this.visit(comandoCtx);
    });
  }

  visitCrear(ctx) {
    const valores = this.visit(ctx.lista());
    console.log(`pila = [${valores.join(', ')}];`);
  }

  visitEmpujar(ctx) {
    const val = this.visit(ctx.valor());
    console.log(`pila.push(${val});`);
  }

  visitSacar(ctx) {
    console.log(`pila.pop();`);
  }

  visitMirar(ctx) {
    console.log(`console.log(pila[pila.length - 1]);`);
  }

  visitLista(ctx) {
    return ctx.valor().map(v => this.visit(v));
  }

  visitValor(ctx) {
    return ctx.NUMERO() ? ctx.NUMERO().getText() : ctx.TEXTO().getText();
  }
}
