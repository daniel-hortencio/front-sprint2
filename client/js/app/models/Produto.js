class Produto {

  constructor(imageURL = "", description = "", price = null) {
    this._imageURL = imageURL,
      this._description = description,
      this._price = price

    //Object.Freeze
  }

  get imageURL() {
    let imageURL = this._imageURL

    return imageURL
  }

  get description() {
    let description = this._description

    return description
  }

  get price() {
    let price = this._price

    return price
  }

}
