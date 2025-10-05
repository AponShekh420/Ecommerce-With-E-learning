"use client";
import { DeleteModal } from "@/components/common/DeleteModal";
import PopupButton from "@/components/common/PopupButton";
import Rating from "@/components/common/Rating";
import SearchBox from "@/components/common/SearchBox";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
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
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ProductType } from "@/types/Product";
import { getProductStatusColor } from "@/utils/getStatusColor";

import { Icon } from "@iconify/react";
import Image from "next/image";
import Link from "next/link";
export default function ProductTable({
  products,
}: {
  products: ProductType[];
}) {
  return (
    <div>
      <div className="my-5">
        <div className="flex justify-between flex-col-reverse sm:flex-row gap-4 mt-5">
          <SearchBox placeholder="Search by product name..." />
          <div className="space-x-4">
            <Sheet>
              <SheetTrigger>
                <PopupButton className="hover:text-blue-400 hover:border-blue-500 capitalize ">
                  <Icon icon="majesticons:filter-line" width="20" height="20" />
                  <span>filters</span>
                </PopupButton>
                <span></span>
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetTitle>Product Filters</SheetTitle>
                  <hr className="mt-2" />
                  <SheetDescription>
                    <span className="mt-4 inline-block">
                      <label>Amount</label>
                      <span className="flex items-center gap-2 mt-2">
                        <Input placeholder="$ 0.00" />
                        <span className="font-bold text-gray-200">-</span>
                        <Input placeholder="$ 0.00" />
                      </span>
                    </span>
                    <span className="mt-4 block">
                      <label>Created Date</label>
                      <input
                        type="date"
                        className="border py-2 w-full px-4 rounded-md mt-2 "
                      />
                    </span>
                    <span className="mt-4 block">
                      <label>Status</label>
                      <select className="border py-2 w-full px-4 rounded-md mt-2 capitalize">
                        <option>Select Status</option>
                        <option value="paid">paid</option>
                        <option value="pending">pending</option>
                        <option value="overdue">overdue</option>
                        <option value="draft">draft</option>
                      </select>
                    </span>
                    <PopupButton className="w-[95%] bg-blue-500 text-white !py-2 mt-4 absolute bottom-10 left-1/2 -translate-1/2">
                      Show Results
                    </PopupButton>
                  </SheetDescription>
                </SheetHeader>
              </SheetContent>
            </Sheet>

            <Button
              variant="outline"
              size="icon"
              className="hover:text-blue-400 hover:border-blue-500 capitalize text-gray-500"
            >
              <Icon icon="vaadin:list" width="32" height="32" />
            </Button>
          </div>
        </div>
      </div>
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
                      src={product.thumbnail}
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
                <div
                  className={`flex items-center gap-2 ${getProductStatusColor(
                    product.status
                  )}`}
                >
                  <span className="size-2.5 bg-current inline-block rounded-full"></span>
                  <span>{product.status}</span>
                </div>
              </TableCell>
              <TableCell>
                <div className="flex items-center gap-x-3">
                  <Link
                    href={`/dashboard/ecommerce/products/edit/${product.slug}`}
                  >
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
                  </Link>
                  <Link href={`/dashboard/ecommerce/products/${product.slug}`}>
                    <Button
                      size="icon"
                      variant="outline"
                      className="cursor-pointer hover:text-blue-500 hover:border-blue-500"
                    >
                      <Icon icon="ph:eye-light" width="32" height="32" />
                    </Button>
                  </Link>
                  <DeleteModal deleteAction={() => console.log(product.id)}>
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
                  </DeleteModal>
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
