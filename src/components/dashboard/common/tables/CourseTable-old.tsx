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
import { CourseType } from "@/constants/courses";
import { Icon } from "@iconify/react";
import Image from "next/image";
export default function CourseTable({
  courses,
}: {
  courses: CourseType[];
}) {
  return (
    <div>
      <Table className=" !rounded-md border">
        <TableCaption>A list of course list</TableCaption>
        <TableHeader className="bg-stone-100 ">
          <TableRow className="uppercase !h-13">
            <TableHead className="w-[400px] space-x-5 font-bold text-gray-500">
              <Checkbox className="checkbox-t" />
              <span>Course</span>
            </TableHead>
            <TableHead className="font-bold text-gray-500">Price</TableHead>
            <TableHead className="font-bold text-gray-500">Students</TableHead>
            <TableHead className="font-bold text-gray-500">Categories</TableHead>
            <TableHead className="font-bold text-gray-500">Speaker</TableHead>
            <TableHead className="font-bold text-gray-500">Date</TableHead>
            <TableHead className="font-bold text-gray-500">Status</TableHead>
            <TableHead className="font-bold text-gray-500">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {courses?.map((course) => (
            <TableRow key={course.id}>
              <TableCell>
                <div className="flex gap-4 items-center">
                  <Checkbox className="checkbox-t" />
                  <div className="flex items-center gap-x-4">
                    <Image
                      src={course.image}
                      alt=""
                      width={50}
                      height={50}
                      className="size-12 object-cover rounded-md"
                    />
                    <div className="font-lexend-deca">
                      <h5 className="font-medium">{course.title}</h5>
                      <p className="text-gray-500  mt-0.5">
                        {course.category}
                      </p>
                    </div>
                  </div>
                </div>
              </TableCell>
              <TableCell className="font-medium">${course.price}</TableCell>
              <TableCell>{course.students}</TableCell>
              <TableCell className="font-medium">{course.category}</TableCell>
              <TableCell className="font-medium">{course.speaker}</TableCell>
              <TableCell className="font-medium">{course.date}</TableCell>
              <TableCell>
                <div className="flex items-center gap-2">
                  <span className="size-2.5 bg-black inline-block rounded-full"></span>
                  <span>{course.status}</span>
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
