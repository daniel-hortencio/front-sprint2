class ProdutoService {

  constructor() {
    this._http = new HttpService()
    this._url = "/products"
    this._search = ""
    self = this
  }

  templateSearch() {
    let template = this._url

    if (this._search) {
      template += `?search=${this._search}`
    }
    return template
  }

  obterProdutos() {
    return this._http.get(this.templateSearch())
  }

  setSearch(search) {
    self._search = search
  }
}
