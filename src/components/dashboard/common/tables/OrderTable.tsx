import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { order_data } from "@/constants/order-data";
import { Icon } from "@iconify/react";
export default function OrderTable({ orders }: { orders: typeof order_data }) {
  return (
    <div>
      <Table className=" !rounded-md border">
        <TableCaption>A list of order list</TableCaption>
        <TableHeader className="bg-stone-100 ">
          <TableRow className="uppercase !h-13">
            <TableHead className="w-[400px] space-x-5 font-bold text-gray-500">
              <Checkbox className="checkbox-t" />
              <span>Order</span>
            </TableHead>
            <TableHead className="font-bold text-gray-500">Date</TableHead>
            <TableHead className="font-bold text-gray-500">Status</TableHead>
            <TableHead className="font-bold text-gray-500">Total</TableHead>
            <TableHead className="font-bold text-gray-500">
              product title
            </TableHead>
            <TableHead className="font-bold text-gray-500">email</TableHead>
            <TableHead className="font-bold text-gray-500">action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {orders?.map((order) => (
            <TableRow key={order.id}>
              <TableCell>
                <div className="flex gap-4 items-center">
                  <Checkbox className="checkbox-t" />
                  <div className="flex items-center gap-x-4">
                    <div className="font-lexend-deca flex items-center gap-1">
                      <h5 className="font-medium">#{order.id}</h5>
                      <p className="text-gray-500  mt-0.5">{order.name}</p>
                    </div>
                  </div>
                </div>
              </TableCell>
              <TableCell>{order.createdAt}</TableCell>
              <TableCell>
                <p className="mt-1 text-sm text-gray-500">{order.status}</p>
              </TableCell>
              <TableCell className="font-medium">${order.price}</TableCell>

              <TableCell>
                <div className="flex gap-2 items-center">
                  <span>{order.products[0].name}</span>
                  <span>{order.products[0].category}</span>
                </div>
              </TableCell>
              <TableCell>{order.email}</TableCell>
              <TableCell>
                <div className="flex items-center gap-x-3">
                  <Button
                    size="icon"
                    variant="outline"
                    className="cursor-pointer hover:text-blue-500 hover:border-blue-500"
                  >
                    <Icon
                      icon="fluent:edit-24-regular"
                      width="32"
                      height="32"
                    />
                  </Button>
                  <Button
                    size="icon"
                    variant="outline"
                    className="cursor-pointer hover:text-blue-500 hover:border-blue-500"
                  >
                    <Icon icon="ph:eye-light" width="32" height="32" />
                  </Button>
                  <Button
                    size="icon"
                    variant="outline"
                    className="cursor-pointer hover:text-red-500 hover:border-red-500"
                  >
                    <Icon
                      icon="mingcute:delete-2-line"
                      width="32"
                      height="32"
                    />
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
