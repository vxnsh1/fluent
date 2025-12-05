import 'dotenv/config';

import * as schema from "../db/schema";
import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';

const sql = neon(process.env.DATABASE_URL!);
const db = drizzle(sql, { schema });

const main = async () => {
    try {
        console.log("Seeding database")

        await db.delete(schema.courses);
        await db.delete(schema.userProgress);
        await db.delete(schema.userProgress);
        await db.delete(schema.units);
        await db.delete(schema.challenges);
        await db.delete(schema.challengeOptions);
        await db.delete(schema.challengeProgress);

        await db.insert(schema.courses).values([
            {
                id: 1,
                title: "Hindi",
                imageSrc: "/india.svg",
            },
            {
                id: 2,
                title: "Japanese",
                imageSrc: "/japan.svg",
            },
            {
                id: 3,
                title: "French",
                imageSrc: "/france.svg",
            },
            {
                id: 4,
                title: "Spanish",
                imageSrc: "/spain.svg",
            },
        ]);

        await db.insert(schema.units).values([
            {
                id: 1,
                courseId: 1,
                title: "Unit 1",
                description: "Learn the basics of Hindi",
                order: 1
            },
        ]);

        await db.insert(schema.lessons).values([
            {
                id: 1,
                unitId: 1,
                order: 1,
                title: "Nouns",
            },
        ]);

        await db.insert(schema.challenges).values([
            {
                id: 1,
                lessonId: 1,
                type: "SELECT",
                order: 1,
                question: 'Which one of these is "the man"?',
            }, 
        ]);

        await db.insert(schema.challengeOptions).values([
            {
                id: 1,
                challengeId: 1,
                imgSrc: "/man.svg",
                correct: true,
                text: "Aadmi",
                audioSrc: "/india_man.mp3",
            },
            {
                id: 2,
                challengeId: 1,
                imgSrc: "/woman.svg",
                correct: false,
                text: "Aurat",
                audioSrc: "/india_woman.mp3",
            },
            {
                id: 3,
                challengeId: 1,
                imgSrc: "/dog.svg",
                correct: false,
                text: "Kutta",
                audioSrc: "/india_dog.mp3",
            },
        ])

        console.log("Seeding finished");
    } catch (error) {
        console.error(error)
        throw new Error("Failed to seed the database")
    }
}

main();