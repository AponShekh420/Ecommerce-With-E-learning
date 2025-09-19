import PopupButton from "@/components/common/PopupButton";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Icon } from "@iconify/react";
import Link from "next/link";
export default function ProductTableHeader() {
  return (
    <div className="my-4">
      <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-4">
        <div>
          <h1 className="font-bold text-xl mb-3">Products</h1>
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/dashboard">E-Commerce</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href="/dashboard/ecommerce/products">
                  Product List
                </BreadcrumbLink>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
        <div className="space-x-4">
          <Button variant="outline">
            <Icon icon="charm:upload" width="32" height="32" />
            <span>Export</span>
          </Button>
          <Link href="/dashboard/ecommerce/add-product">
            <Button variant="blue">
              <Icon icon="ic:baseline-plus" width="32" height="32" />
              <span>Add Product</span>
            </Button>
          </Link>
        </div>
      </div>
      <div className="flex justify-between flex-col-reverse sm:flex-row gap-4 mt-5">
        <div className="flex items-center w-[15rem] lg:w-[18rem] border rounded-md px-2">
          <Icon
            icon="iconamoon:search-light"
            className="size-5"
            width="18"
            height="18"
          />

          <Input
            placeholder="Search by product name..."
            className="!py-2.5 h-full w-full block border-none focus-visible:ring-0 text-sm placeholder:font-medium placeholder:text-gray-400 "
          />
        </div>
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
  );
}
