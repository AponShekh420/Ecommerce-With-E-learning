import CourseTable from "@/components/dashboard/common/tables/CourseTable";
import CoursesTableHeader from "@/components/dashboard/e-learning/courses/CoursesTableHeader";
import { coursesData } from "@/constants/courses";

export default function Courses() {
  return (
    <div>
      <CoursesTableHeader />
      <CourseTable courses={coursesData} />
    </div>
  );
}
