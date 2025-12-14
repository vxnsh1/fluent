import { neon } from "@neondatabase/serverless";
import "dotenv/config";
import { drizzle } from "drizzle-orm/neon-http";
import * as schema from "../db/schema";

const sql = neon(process.env.DATABASE_URL!);
const db = drizzle(sql, { schema });

const main = async () => {
  try {
    console.log("Seeding database...");

    // Delete all existing data
    await Promise.all([
      db.delete(schema.userProgress),
      db.delete(schema.challenges),
      db.delete(schema.units),
      db.delete(schema.lessons),
      db.delete(schema.courses),
      db.delete(schema.challengeOptions),
      db.delete(schema.userSubscription),
    ]);

    // Insert 1 Japanese course
    const [course] = await db
      .insert(schema.courses)
      .values([{ title: "Japanese", imageSrc: "/japan.svg" }])
      .returning();

    // Insert 1 unit
    const [unit] = await db
      .insert(schema.units)
      .values([
        {
          courseId: course.id,
          title: "Unit 1",
          description: "Learn the basics of Japanese",
          order: 1,
        },
      ])
      .returning();

    // Insert 5 lessons
    const lessons = await db
      .insert(schema.lessons)
      .values([
        { unitId: unit.id, title: "Nouns", order: 1 },
        { unitId: unit.id, title: "Verbs", order: 2 },
        { unitId: unit.id, title: "Adjectives", order: 3 },
        { unitId: unit.id, title: "Phrases", order: 4 },
        { unitId: unit.id, title: "Sentences", order: 5 },
      ])
      .returning();

    // Only seed challenges for top 2 lessons
    const topLessons = lessons.slice(0, 2);

    for (const lesson of topLessons) {
      const challengesData = [
        {
          lessonId: lesson.id,
          type: "SELECT" as const,
          question: 'Which one is "the man"?',
          order: 1,
        },
        {
          lessonId: lesson.id,
          type: "ASSIST" as const,
          question:  '"the woman"?',
          order: 2,
        },
        {
          lessonId: lesson.id,
          type: "SELECT" as const,
          question: 'Which one is "the boy"?',
          order: 3,
        },
        {
          lessonId: lesson.id,
          type: "SELECT" as const,
          question: 'Which one is "the girl"?',
          order: 4,
        },
      ];

      const insertedChallenges = await db
        .insert(schema.challenges)
        .values(challengesData)
        .returning();

      // Seed challenge options with proper ids
      for (const challenge of insertedChallenges) {
        if (challenge.order === 1) {
          await db.insert(schema.challengeOptions).values([
            {
              challengeId: challenge.id,
              correct: true,
              text: "男 (おとこ)",
              imgSrc: "/man.svg",
              audioSrc: "/jp_man.mp3",
            },
            {
              challengeId: challenge.id,
              correct: false,
              text: "女 (おんな)",
              imgSrc: "/woman.svg",
              audioSrc: "/jp_woman.mp3",
            },
            {
              challengeId: challenge.id,
              correct: false,
              text: "子供 (こども)",
              imgSrc: "/boy.svg",
              audioSrc: "/jp_boy.mp3",
            },
          ]);
        }

        if (challenge.order === 2) {
          await db.insert(schema.challengeOptions).values([
            {
              challengeId: challenge.id,
              correct: true,
              text: "女 (おんな)",
              audioSrc: "/jp_woman.mp3",
            },
            {
              challengeId: challenge.id,
              correct: false,
              text: "男 (おとこ)",
              audioSrc: "/jp_man.mp3",
            },
            {
              challengeId: challenge.id,
              correct: false,
              text: "子供 (こども)",
              audioSrc: "/jp_boy.mp3",
            },
          ]);
        }

         if (challenge.order === 3) {
          await db.insert(schema.challengeOptions).values([
            {
              challengeId: challenge.id,
              correct: false,
              text: "女 (おんな)",
              imgSrc: "/woman.svg",
              audioSrc: "/jp_woman.mp3",
            },
            {
              challengeId: challenge.id,
              correct: false,
              text: "男 (おとこ)",
              imgSrc: "/man.svg",
              audioSrc: "/jp_man.mp3",
            },
            {
              challengeId: challenge.id,
              correct: true,
              text: "子供 (こども)",
              imgSrc: "/boy.svg",
              audioSrc: "/jp_boy.mp3",
            },
          ]);
        }

        if (challenge.order === 4) {
          await db.insert(schema.challengeOptions).values([
            {
              challengeId: challenge.id,
              correct: false,
              text: "女 (おんな)",
              imgSrc: "/woman.svg",
              audioSrc: "/jp_woman.mp3",
            },
            {
              challengeId: challenge.id,
              correct: true,
              text: "男 (おとこ)",
              imgSrc: "/girl.svg",
              audioSrc: "/jp_girl.mp3",
            },
            {
              challengeId: challenge.id,
              correct: false,
              text: "子供 (こども)",
              imgSrc: "/boy.svg",
              audioSrc: "/jp_boy.mp3",
            },
          ]);
        }
      }
    }

    console.log("Database seeded successfully 🌱✨");
  } catch (error) {
    console.error(error);
    throw new Error("Failed to seed database");
  }
};

void main();
