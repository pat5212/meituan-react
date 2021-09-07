export default {
  // getProductList: (path, rowIndex, pageSize) => `/mock/products/${path}.json?rowIndex=${rowIndex}&pageSize=${pageSize}`,
  getProductList: (path, rowIndex, pageSize) => `http://localhost:8080/jeecg-boot/com.meituan.pd/meituanPd/getProductList?type=${path}&rowIndex=${rowIndex}&pageSize=${pageSize}`,
  // getProductDetail: (id) => `/mock/product_detail/${id}.json`,
  getProductDetail: (id) => `http://localhost:8080/jeecg-boot/com.meituan.pd/meituanPd/getProductDetail?id=${id}`,
  // getShopById: (id) => `/mock/shops/${id}.json`,
  getShopById: (id) => `http://localhost:8080/jeecg-boot/com.meituan.shop/meituanShop/getShopById?id=${id}`,
  getPopularKeywords: () => '/mock/keywords/popular.json',
  getRelatedKeywords: (text) => `/mock/keywords/related.json?keyword=${text}`,
  getRelatedShops: (keyword) => `/mock/shops/related.json?keyword=${keyword}`,
  getOrders: () => `/mock/orders/orders.json`, 
}