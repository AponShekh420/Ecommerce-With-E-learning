import CreateProductForm from "@/components/dashboard/ecommerce/products/CreateProductForm";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { Icon } from "@iconify/react";
import Link from "next/link";

export default function AddProduct() {
  return (
    <div>
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
                <BreadcrumbLink href="/dashboard/ecommerce/create-product">
                  Create Product
                </BreadcrumbLink>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
        <div className="space-x-4">
          <Link href="/dashboard/ecommerce/create-product">
            <Button variant="blue">
              <Icon icon="ic:baseline-plus" width="32" height="32" />
              <span>Add Product</span>
            </Button>
          </Link>
        </div>
      </div>
      <CreateProductForm />
    </div>
  );
}
