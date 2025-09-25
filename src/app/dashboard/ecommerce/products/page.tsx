import ProductTable from "@/components/dashboard/common/tables/ProductTable";
import ProductTableHeader from "@/components/dashboard/ecommerce/products/ProductTableHeader";
import { productsData } from "@/constants/products";

export default function Products() {
  return (
    <div>
      <ProductTableHeader />
      <ProductTable products={productsData} />
    </div>
  );
}
