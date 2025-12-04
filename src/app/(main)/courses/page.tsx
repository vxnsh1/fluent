import { getCourses, getUserProgress } from "../../../../db/queries"
import { List } from "./list"

const CoursesPage = async () => {
  const courseData =  getCourses();
  const userProgressData =  getUserProgress();

  const [
    course,
    userProgress,
  ] =  await Promise.all([
    courseData,
    userProgressData,
  ])
  return (
    <div className="h-full max-w-228 px-3 mx-auto pt-4">
        <h1 className="text-2xl font-bold ">
            Language Courses 
        </h1>
        <List 
          courses={course}
          activeCourseId={userProgress?.activeCourseId}
        />
    </div>
  );
};
export default CoursesPage