// For Add Items to Cart

export const addCart = (product) => {
  return {
    type: 'ADDITEM',
    payload: product,
  };
};

// For Delete Items from Cart

export const removeCart = (product) => {
  return {
    type: 'DELITEM',
    payload: product,
  };
};
