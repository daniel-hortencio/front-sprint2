/* Código simplório, apenas para fornecer o serviço para a aplicação */
var api = {};

var produtos = [
  {
    id: '1',
    imageURL: "assets/c1.webp",
    description:
      "Jaqueta Puffer Juvenil Com Capuz Super Mario Branco Tam 10 a 18",
    price: "199,90",
  },
  {
    id: '2',
    imageURL: "assets/c2.webp",
    description:
      "Camiseta Infantil Manga Curta Super Mario Azul Tam 4 a 10",
    price: "39,90",
  },
  {
    id: '3',
    imageURL: "assets/c3.webp",
    description:
      "Camiseta Infantil Manga Curta Super Mario Branco Tam 4 a 10",
    price: "49,90",
  },
  {
    id: '4',
    imageURL: "assets/c4.webp",
    description:
      "Camiseta Infantil Manga Longa Super Mario Vermelho Tam 4 a 10",
    price: "49,90",
  },
  {
    id: '5',
    imageURL: "assets/c5.webp",
    description:
      "Camiseta Juvenil Manga Curta Mario Bros Cinza",
    price: "39,90",
  },
  {
    id: '6',
    imageURL: "assets/c6.webp",
    description:
      "Camiseta Juvenil Manga Curta Super Mario Azul Tam 10 a 18",
    price: "39,90",
  },

  {
    id: '7',
    imageURL: "assets/c8.webp",
    description:
      "Camiseta Juvenil Manga Curta Super Mario Branco Tam 10 a 18",
    price: "49,90",
  },
  {
    id: '8',
    imageURL: "assets/c9.webp",
    description:
      "Camiseta Infantil Manga Curta Super Star Mario Bros Cinza Mescla Chumbo Tam 4 a 10",
    price: "39,90",
  },
  {
    id: '9',
    imageURL: "assets/c10.webp",
    description:
      "Blusa de Moletom Juvenil com Capuz Mario Bros Cinza Mescla Tam 10 a 16",
    price: "149,90",
  },
  {
    id: '10',
    imageURL: "assets/c11.webp",
    description:
      "Camiseta Infantil Manga Curta Mario Bros Vermelho Tam 4 a 10",
    price: "49,90",
  },
  {
    id: '11',
    imageURL: "assets/c12.webp",
    description:
      "Camiseta Infantil Manga Curta Mário Bros Vermelho Tam 4 a 10",
    price: "39,90",
  },
  {
    id: '12',
    imageURL: "assets/c7.webp",
    description:
      "Regata Infantil Mario Bros Branco Tam 4 a 10",
    price: "29,90",
  },
];

var filters = [
  {
    id: "description",
    label: "Nome"
  },
  {
    id: "price",
    label: "Preço"
  },
  {
    id: "color",
    label: "Cor"
  },
  {
    id: "size",
    label: "Tamanho"
  },
]

var categories = {
  all: [
    {
      id: 1,
      label: "Novidades",
      link: "#home"
    },
    {
      id: 2,
      label: "Feminino",
      link: "#home"
    },
    {
      id: 3,
      label: "Masculino",
      link: "#home"
    },
    {
      id: 4,
      label: "Infantil",
      link: "#home"
    },
    {
      id: 5,
      label: "Moda Íntima",
      link: "#home"
    },
    {
      id: 6,
      label: "Calçados",
      link: "#home"
    },
    {
      id: 7,
      label: "Acessórios e Relógios",
      link: "#home"
    },
    {
      id: 8,
      label: "Beleza e Perfume",
      link: "#home"
    },
    {
      id: 9,
      label: "Casa Riachuelo",
      link: "#home"
    },
    {
      id: 10,
      label: "Eletrônicos",
      link: "#home"
    },
    {
      id: 11,
      label: "Personagens",
      link: "#home"
    },
    {
      id: 12,
      label: "Outlet",
      link: "#home"
    }
  ],
  current: [
    {
      id: 1,
      link: "#home",
      name: "Home"
    },
    {
      id: 2,
      link: "#home",
      name: "Infantil"
    },
    {
      id: 3,
      link: "#home",
      name: "Personagens"
    },
    {
      id: 4,
      name: "Mario Bros"
    }
  ]
}



api.products = function (req, res) {
  let { search, sort, sortBy } = req.query

  console.log({ search, sort, sortBy })

  let listProducts = []

  if (sort) {
    if (sortBy === "description") {
      listProducts = produtos.sort((a, b) => {
        let A = a.description.toLowerCase();
        let B = b.description.toLowerCase()
        if (A < B) {
          return parseInt(sort) * (-1)
        }
        if (A > B) {
          return parseInt(sort)
        }
        return 0;

      })
    }

    if (sortBy === "price") {
      listProducts = produtos.sort((a, b) => {
        let A = parseInt(a.price);
        let B = parseInt(b.price);
        if (A < B) {
          return sort * (-1);
        }
        if (A > B) {
          return sort;
        }
        return 0;
      })
    }

    if (sortBy === "color") {
      // BRANCO, AZUL, CINZA, VERMELHO
      const colors = ["Branco", "Azul", "Cinza", "Vermelho"]

      listProducts = produtos.sort((a, b) => {
        let A = colors.find(color => {
          if (a.description.includes(color)) {
            return color
          }
        })

        let B = colors.find(color => {
          if (b.description.includes(color)) {
            return color
          }
        })

        if (A < B) {
          return parseInt(sort) * (-1)
        }
        if (A > B) {
          return parseInt(sort)
        }
        return 0;

      })

      listProducts = produtos
    }


  } else {
    listProducts = produtos
  }

  if (search) {
    listProducts = produtos
      .filter(produto =>
        produto.description.toUpperCase().includes(search.toUpperCase()))
      .map(produto => produto)
  }

  res.json(listProducts);
};

api.productById = function (req, res) {
  let { id } = req.query
  let product = produtos.find(product => product.id === id)

  res.json(product);
};

api.filters = function (req, res) {
  res.json(filters);
};

api.categories = function (req, res) {
  res.json(categories.all);
};

api.breadcrumbs = function (req, res) {
  res.json(categories.current);
};

module.exports = api;
