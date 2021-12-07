type ProductModel = {
  _id: string;
  name: string;
  description: string;
  quantity: number;
  saled_count: number;
  discount_percent: number;
  price: number;
  status: number;
  category_detail_id: string;
  images: Array<string>;
  created_at: string;
  updated_at: string;
};

export default ProductModel;