// const { products } = require("./data/products");
const promotions = ["SINGLE LOOK", "DOUBLE LOOK", "TRIPLE LOOK", "FULL LOOK"];

function getPrice(product, look) {
  const promotion = product.promotions.find((promotion) => {
    return promotion.looks.includes(look);
  });

  return promotion ? promotion.price : product.regularPrice;
}

function getCartPrice(products, promotion) {
  return products.reduce(
    (sum, product) => {
      const price = getPrice(product, promotion);
      sum.totalPrice += price;
      sum.discountValue += product.regularPrice - price;
      sum.discount =
        (sum.discountValue / (sum.discountValue + sum.totalPrice)) * 100;
      return sum;
    },
    {
      totalPrice: 0,
      discountValue: 0,
      discount: 0,
    }
  );
}

function getCartPromotion(products) {
  const categories = products.reduce((categories, product) => {
    if (!categories.includes(product.category)) {
      categories.push(product.category);
    }
    return categories;
  }, []);

  return promotions[categories.length - 1];
}

function addProductToCart(cart, product) {
  let newCart = { ...cart };
  newCart.products.push(product);
  newCart.promotion = getCartPromotion(newCart.products);
  newCart = {
    ...newCart,
    ...getCartPrice(newCart.products, newCart.promotion),
  };

  return newCart;
}

function getShoppingCart(ids, productsList) {
  const products = productsList.filter((product) => {
    return ids.includes(product.id);
  });

  const cart = products.reduce(
    (cart, product) => {
      cart = addProductToCart(cart, product);
      return cart;
    },
    {
      products: [],
      promotion: "",
    }
  );

  cart.products = cart.products.map((product) => {
    return {
      name: product.name,
      category: product.category,
    };
  });
  cart.totalPrice = cart.totalPrice.toFixed(2);
  cart.discountValue = cart.discountValue.toFixed(2);
  cart.discount = `${cart.discount.toFixed(2)}%`;

  return cart;
}

// const cart = getShoppingCart([120, 230, 310, 490], products);
// const cart = getShoppingCart([130, 140, 230, 260], products);
// const cart = getShoppingCart([110, 120, 130, 140], products);
// const cart = getShoppingCart([110, 130, 140, 230, 310, 330], products);
// console.log(cart);

module.exports = { getShoppingCart };
