"use strict";

class ProductStorage {
  #storage;

  constructor(data) {
    if (!data) {
      throw new Error("data storage missing");
    }
    this.#storage = data;
  }

  get_amount_of_product_by_id(id) {
    if (id === undefined) {
      throw new Error("missing parameter");
    }
    const product = this.#storage.find((item) => item.id === id);
    return product ? product.amount : null;
  }

  get_details(id) {
    if (id === undefined) return null;
    const product = this.#storage.find((item) => item.id === id);
    return product && product.details ? [product.details] : null;
  }

  get_total_price_of_products_by_type(type) {
    if (type === undefined) throw new Error("missing parameter");

    const productsOfType = this.#storage.filter((item) => item.type === type);
    if (productsOfType.length === 0) {
      throw new Error("nothing found with given searchValue");
    }

    return productsOfType.reduce((total, product) => total + product.price, 0);
  }

  get_all_products_by_type(type) {
    if (type === undefined) {
      throw new Error("missing parameter");
    }
    const allProductsOfType = this.#storage.filter(
      (item) => item.type === type
    );
    if (allProductsOfType.length === 0) return [];

    return allProductsOfType;
  }

  get_product_colors(id) {
    if (id === undefined) return [];
    const product = this.#storage.find((item) => item.id === id);
    return product && product.colors ? product.colors : [];
  }
}

module.exports = ProductStorage;

// end of class
