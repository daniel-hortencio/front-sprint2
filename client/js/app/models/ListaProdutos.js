class ListaProdutos {

  constructor() {
    this._products = []
  }

  adiciona(product) {
    this._products.push(product)
  }

  limpa() {
    this._products = []
  }

  get listProducts() {
    return [].concat(this._products)
  }
}
