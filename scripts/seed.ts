import 'dotenv/config';

import * as schema from "../db/schema";
import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';

const sql = neon(process.env.DATABASE_URL!);
const db = drizzle(sql, { schema });

const main = async () => {
    try {
        console.log("Seedin database")

        await db.delete(schema.courses);
        await db.delete(schema.userProgress);

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
        ])

        console.log("Seeding finished");
    } catch(error) {
        console.error(error)
        throw new Error("Failed to seed the database")
    }
}

main();