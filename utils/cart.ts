export const getTotal = (cartProducts: any[]) => {
  let total = 0;

  cartProducts?.forEach((product: any) => {
    total += product?.discountedPrice;
  });

  return total;
};

export const getCartProducts = (products: any[], cart: string[]) => {
  const test = products.filter((product: any) => cart.includes(product?._id));

  console.log('test', test);

  return test;
};
