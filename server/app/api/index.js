/* Código simplório, apenas para fornecer o serviço para a aplicação */
var api = {};

var produtos = [
  {
    imageURL: "assets/c1.webp",
    description:
      "Jaqueta Puffer Juvenil Com Capuz Super Mario Branco Tam 10 a 18",
    price: "199,90",
  },
  {
    imageURL: "assets/c2.webp",
    description:
      "Camiseta Infantil Manga Curta Super Mario Azul Tam 4 a 10",
    price: "39,90",
  },
  {
    imageURL: "assets/c3.webp",
    description:
      "Camiseta Infantil Manga Curta Super Mario Branco Tam 4 a 10",
    price: "49,90",
  },
  {
    imageURL: "assets/c4.webp",
    description:
      "Camiseta Infantil Manga Longa Super Mario Vermelho Tam 4 a 10",
    price: "49,90",
  },
  {
    imageURL: "assets/c5.webp",
    description:
      "Camiseta Juvenil Manga Curta Mario Bros Cinza",
    price: "39,90",
  },
  {
    imageURL: "assets/c6.webp",
    description:
      "Camiseta Juvenil Manga Curta Super Mario Azul Tam 10 a 18",
    price: "39,90",
  },
  {
    imageURL: "assets/c7.webp",
    description:
      "Regata Infantil Mario Bros Branco Tam 4 a 10",
    price: "29,90",
  },
  {
    imageURL: "assets/c8.webp",
    description:
      "Camiseta Juvenil Manga Curta Super Mario Branco Tam 10 a 18",
    price: "49,90",
  },
  {
    imageURL: "assets/c9.webp",
    description:
      "Camiseta Infantil Manga Curta Super Star Mario Bros Cinza Mescla Chumbo Tam 4 a 10",
    price: "39,90",
  },
  {
    imageURL: "assets/c10.webp",
    description:
      "Blusa de Moletom Juvenil com Capuz Mario Bros Cinza Mescla Tam 10 a 16",
    price: "149,90",
  },
  {
    imageURL: "assets/c11.webp",
    description:
      "Camiseta Infantil Manga Curta Mario Bros Vermelho Tam 4 a 10",
    price: "49,90",
  },
  {
    imageURL: "assets/c12.webp",
    description:
      "Camiseta Infantil Manga Curta Mário Bros Vermelha Tam 4 a 10",
    price: "39,90",
  },
];

api.lista = function (req, res) {
  let { search } = req.query
  let listProducts = produtos

  if (search) {
    listProducts = produtos
      .filter(produto =>
        produto.description.toUpperCase().includes(search.toUpperCase()))
      .map(produto => produto)
  }

  res.json(listProducts);
};

module.exports = api;
