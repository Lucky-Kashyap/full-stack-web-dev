import express from "express";

const app = express();

app.get("/api/products", (req, res) => {
  // res.send();
  const products = [
    {
      id: 1,
      name: "table metal",
      price: 300,
      image:
        "https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
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
    res.send(products);
  }, 3000);
});

const port = process.env.PORT || 8500;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
