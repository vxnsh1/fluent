import { getCourses } from "../../../../db/queries"
import { List } from "./list"

const CoursesPage = async () => {
  const data = await getCourses();
  return (
    <div className="h-full max-w-228 px-3 mx-auto">
        <h1 className="text-2xl font-bold ">
            Language Courses 
        </h1>
        <List 
          courses={data}
          activeCourseId={1}
        />
    </div>
  )
}

export default CoursesPage