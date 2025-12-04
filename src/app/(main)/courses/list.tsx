"use client"

import { courses } from "../../../../db/schema"
import { Card } from "./card";

type Props = {
    courses: typeof courses.$inferSelect[];
    activeCourseId: number,
}

export const List = ({courses, activeCourseId}: Props) => {
  return (
    <div className="pt-6 grid grid-cols-2 lg:grid-cols-[repeat(auto-fill,minmax(210px,1fr))] gap-4">
        {courses.map((item, idx) => (
          <Card 
            key={idx}
            id={item.id}
            title={item.title}
            imageSrc={item.imageSrc}
            onClick={() => {}}
            disable={false}
            active={item.id === activeCourseId}
          />

        ))}
    </div>
  )
}