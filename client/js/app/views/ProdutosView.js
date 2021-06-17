class ProdutosView extends View {

  constructor(elemento) {
    super(elemento);
  }

  template(model) {
    return model._products.map(product => `
      <li class="products__card">
        <div class="card">
          <img class="card__img" src="${product.imageURL}" alt="${product.description}" />
          <p class="card__description">
            ${product.description}
          </p>
          <p class="card__price">R$ ${product.price}</p>
        </div>
      </li>
    ` ).join("")
  }

}
