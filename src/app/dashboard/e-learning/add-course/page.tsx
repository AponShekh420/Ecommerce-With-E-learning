import { CourseTabs } from "@/components/dashboard/e-learning/add-course/CourseTabs";
import CourseForm from "@/components/dashboard/e-learning/CourseForm";
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
          <h1 className="font-bold text-xl mb-3">New Course</h1>
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/dashboard">E-Learning</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href="/dashboard/ecommerce/create-product">
                  Create Course
                </BreadcrumbLink>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
        <div className="space-x-4">
          <Link href="/dashboard/ecommerce/create-product">
            <Button variant="blue">
              <Icon icon="ic:baseline-plus" width="32" height="32" />
              <span>Add Course</span>
            </Button>
          </Link>
        </div>
      </div>
      <CourseForm />
      <CourseTabs/>
    </div>
  );
}
