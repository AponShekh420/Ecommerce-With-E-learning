import Rating from "@/components/common/Rating";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ProductType } from "@/constants/products";
import { Icon } from "@iconify/react";
import Image from "next/image";
export default function ProductTable({
  products,
}: {
  products: ProductType[];
}) {
  return (
    <div>
      <Table className=" !rounded-md border">
        <TableCaption>A list of product list</TableCaption>
        <TableHeader className="bg-stone-100 ">
          <TableRow className="uppercase !h-13">
            <TableHead className="w-[400px] space-x-5 font-bold text-gray-500">
              <Checkbox className="checkbox-t" />
              <span>product</span>
            </TableHead>
            <TableHead className="font-bold text-gray-500">Sku</TableHead>
            <TableHead className="font-bold text-gray-500">Stock</TableHead>
            <TableHead className="font-bold text-gray-500">Price</TableHead>
            <TableHead className="font-bold text-gray-500">Rating</TableHead>
            <TableHead className="font-bold text-gray-500">Status</TableHead>
            <TableHead className="font-bold text-gray-500">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {products?.map((product) => (
            <TableRow key={product.id}>
              <TableCell>
                <div className="flex gap-4 items-center">
                  <Checkbox className="checkbox-t" />
                  <div className="flex items-center gap-x-4">
                    <Image
                      src={product.image}
                      alt=""
                      width={50}
                      height={50}
                      className="size-12 object-cover rounded-md"
                    />
                    <div className="font-lexend-deca">
                      <h5 className="font-medium">{product.name}</h5>
                      <p className="text-gray-500  mt-0.5">
                        {product.category}
                      </p>
                    </div>
                  </div>
                </div>
              </TableCell>
              <TableCell>SKU-{product.sku}</TableCell>
              <TableCell>
                <div className="bg-gray-200 h-2 rounded-full relative overflow-hidden w-[120px]">
                  <span className="absolute top-0 bg-green-400 w-1/2 h-full left-0"></span>
                </div>
                <p className="mt-1 text-sm text-gray-500">
                  {product.stock} in stock
                </p>
              </TableCell>
              <TableCell className="font-medium">${product.price}</TableCell>
              <TableCell>
                <div className="flex gap-2 items-center">
                  <span>{product.rating[0]}</span>
                  <Rating
                    rating={product.rating[0]}
                    className="text-orange-400 size-3.5"
                  />
                  <span>({product.rating.length})</span>
                </div>
              </TableCell>
              <TableCell>
                <div className="flex items-center gap-2">
                  <span className="size-2.5 bg-black inline-block rounded-full"></span>
                  <span>{product.status}</span>
                </div>
              </TableCell>
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
      <div className="w-fit ml-auto">
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious href="#" />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">1</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
            <PaginationItem>
              <PaginationNext href="#" />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </div>
  );
}
