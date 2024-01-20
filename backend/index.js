import express from "express";

const app = express();

app.get("/api/products", (req, res) => {
  const products = [
    {
      id: 1,
      name: "table wooden",
      price: 200,
      image:
        "https://images.pexels.com/photos/2866796/pexels-photo-2866796.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 2,
      name: "Camera",
      price: 300,
      image:
        "https://images.pexels.com/photos/821651/pexels-photo-821651.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 3,
      name: "Mino",
      price: 300,
      image:
        "https://images.pexels.com/photos/4841375/pexels-photo-4841375.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 4,
      name: "Over",
      price: 300,
      image:
        "https://images.pexels.com/photos/6527697/pexels-photo-6527697.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 5,
      name: "Geta",
      price: 300,
      image:
        "https://images.pexels.com/photos/11124443/pexels-photo-11124443.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
  ];

  if (req.query.search) {
    const filterProducts = products.filter((product) =>
      product.name.includes(req.query.search)
    );
    res.send(filterProducts);
    return;
  }

  setTimeout(() => {
    // http://localhost:3000/api/products?search=product-name

    res.send(products);
  }, 3000);
});

const port = process.env.port || 3000;

app.listen(port, () => {
  console.log(`Server Running On Port ${port}`);
});
