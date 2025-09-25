import OrderTable from "@/components/dashboard/common/tables/OrderTable";
import OrdersTableHeader from "@/components/dashboard/ecommerce/orders/OrdersTableHeader";
import { order_data } from "@/constants/order-data";

export default function Orders() {
  return (
    <div>
      <OrdersTableHeader />
      <OrderTable orders={order_data} />
    </div>
  );
}
