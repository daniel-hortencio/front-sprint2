class ProdutoController {

  constructor() {
    let $ = document.querySelector.bind(document);

    this._mensagem = new Bind(
      new Mensagem(),
      new MensagemView($("#mensagemView")),
      "texto"
    );

    this._products = new Bind(
      new ListaProdutos(),
      new ProdutosView($('#products-container')),
      "adiciona", "limpa"
    )

    this.formSearchProducts = new FormSearchProduct($("#search-input"))

    this.carregaProdutos()
  }

  carregaProdutos() {
    let service = new ProdutoService();

    service.obterProdutos()
      .then(res => {
        let array = res.map(product => new Produto(product.imageURL, product.description, product.price)
        )
        array.forEach(product => this._products.adiciona(product))
      })
      .catch(err => {
        alert("Não foi possível obter os produtos")
        console.log(err)
      });
  }

  searchProducts(event) {
    let service = new ProdutoService();

    this.formSearchProducts.handleSearchProduct(event, service.setSearch)

    service.obterProdutos()
      .then(res => {
        this._products.limpa()
        let array = res.map(product => new Produto(product.imageURL, product.description, product.price)
        )
        array.forEach(product => this._products.adiciona(product))
      })
      .catch(err => {
        alert("Não foi possível obter os produtos")
        console.log(err)
      });
  }
}
