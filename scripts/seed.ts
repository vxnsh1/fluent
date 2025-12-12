import "dotenv/config";

import * as schema from "../db/schema";
import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";

const sql = neon(process.env.DATABASE_URL!);
const db = drizzle(sql, { schema });

const main = async () => {
  try {
    console.log("Seeding database...");

    // -------------------------------------
    // 1. CLEAR DATA 
    // -------------------------------------
    await db.delete(schema.challengeOptions);
    await db.delete(schema.challengeProgress);
    await db.delete(schema.challenges);
    await db.delete(schema.lessons);
    await db.delete(schema.units);
    await db.delete(schema.userProgress);
    await db.delete(schema.courses);

    // -------------------------------------
    // 2. SEED COURSES
    // -------------------------------------
    await db.insert(schema.courses).values([
      { id: 1, title: "Hindi", imageSrc: "/india.svg" },
      { id: 2, title: "Japanese", imageSrc: "/japan.svg" },
      { id: 3, title: "French", imageSrc: "/france.svg" },
      { id: 4, title: "Spanish", imageSrc: "/spain.svg" },
    ]);

    // -------------------------------------
    // 3. SEED UNITS
    // -------------------------------------
    await db.insert(schema.units).values([
      {
        id: 1,
        courseId: 1,
        title: "Unit 1",
        description: "Learn the basics of Hindi",
        order: 1,
      },
    ]);

    // -------------------------------------
    // 4. SEED LESSONS
    // -------------------------------------
    await db.insert(schema.lessons).values([
      // Original lesson
      { id: 1, unitId: 1, order: 1, title: "Nouns" },

      // CLONED lesson (exact same content)
      { id: 2, unitId: 1, order: 2, title: "Verbs" },

      { id: 3, unitId: 1, order: 3, title: "Verbs" },

      { id: 4, unitId: 1, order: 4, title: "Verbs" },

      { id: 5, unitId: 1, order: 5, title: "Verbs" },

      { id: 6, unitId: 1, order: 6, title: "Verbs" },
    ]);

    // -------------------------------------
    // 5. SEED CHALLENGES
    // -------------------------------------
    await db.insert(schema.challenges).values([
      // ---- LESSON 1 ----
      {
        id: 1,
        lessonId: 1,
        type: "SELECT",
        order: 1,
        question: 'Which one of these is "the man"?',
      },
      {
        id: 2,
        lessonId: 1,
        type: "ASSIST",
        order: 2,
        question: '"the woman"?',
      },
      {
        id: 3,
        lessonId: 1,
        type: "SELECT",
        order: 3,
        question: 'Which one of these is "the bear"?',
      },

      // ---- LESSON 2 ----
      {
        id: 4,
        lessonId: 2,
        type: "SELECT",
        order: 1,
        question: 'Which one of these is "the man"?',
      },
      {
        id: 5,
        lessonId: 2,
        type: "ASSIST",
        order: 2,
        question: '"the woman"?',
      },
      {
        id: 6,
        lessonId: 2,
        type: "SELECT",
        order: 3,
        question: 'Which one of these is "the bear"?',
      },
    ]);

    // -------------------------------------
    // 6. SEED CHALLENGE OPTIONS
    // -------------------------------------
    await db.insert(schema.challengeOptions).values([
      // --------------------------
      // LESSON 1 OPTIONS
      // --------------------------

      // Challenge 1
      {
        challengeId: 1,
        imgSrc: "/man.svg",
        correct: true,
        text: "आदमी",
        audioSrc: "/india_man.mp3",
      },
      {
        challengeId: 1,
        imgSrc: "/woman.svg",
        correct: false,
        text: "औरत",
        audioSrc: "/india_woman.mp3",
      },
      {
        challengeId: 1,
        imgSrc: "/bear.svg",
        correct: false,
        text: "भालू",
        audioSrc: "/india_bear.mp3",
      },

      // Challenge 2
      {
        challengeId: 2,
        correct: false,
        text: "आदमी",
        audioSrc: "/india_man.mp3",
      },
      {
        challengeId: 2,
        correct: true,
        text: "औरत",
        audioSrc: "/india_woman.mp3",
      },
      {
        challengeId: 2,
        correct: false,
        text: "भालू",
        audioSrc: "/india_bear.mp3",
      },

      // Challenge 3
      {
        challengeId: 3,
        imgSrc: "/man.svg",
        correct: false,
        text: "आदमी",
        audioSrc: "/india_man.mp3",
      },
      {
        challengeId: 3,
        imgSrc: "/woman.svg",
        correct: false,
        text: "औरत",
        audioSrc: "/india_woman.mp3",
      },
      {
        challengeId: 3,
        imgSrc: "/bear.svg",
        correct: true,
        text: "भालू",
        audioSrc: "/india_bear.mp3",
      },

      // --------------------------
      // LESSON 2 OPTIONS
      // --------------------------

      // Challenge 4
      {
        challengeId: 4,
        imgSrc: "/man.svg",
        correct: true,
        text: "आदमी",
        audioSrc: "/india_man.mp3",
      },
      {
        challengeId: 4,
        imgSrc: "/woman.svg",
        correct: false,
        text: "औरत",
        audioSrc: "/india_woman.mp3",
      },
      {
        challengeId: 4,
        imgSrc: "/bear.svg",
        correct: false,
        text: "भालू",
        audioSrc: "/india_bear.mp3",
      },

      // Challenge 5
      {
        challengeId: 5,
        correct: false,
        text: "आदमी",
        audioSrc: "/india_man.mp3",
      },
      {
        challengeId: 5,
        correct: true,
        text: "औरत",
        audioSrc: "/india_woman.mp3",
      },
      {
        challengeId: 5,
        correct: false,
        text: "भालू",
        audioSrc: "/india_bear.mp3",
      },

      // Challenge 6
      {
        challengeId: 6,
        imgSrc: "/man.svg",
        correct: false,
        text: "आदमी",
        audioSrc: "/india_man.mp3",
      },
      {
        challengeId: 6,
        imgSrc: "/woman.svg",
        correct: false,
        text: "औरत",
        audioSrc: "/india_woman.mp3",
      },
      {
        challengeId: 6,
        imgSrc: "/bear.svg",
        correct: true,
        text: "भालू",
        audioSrc: "/india_bear.mp3",
      },
    ]);

    console.log("Seeding finished successfully 🌱✨");
  } catch (error) {
    console.error(error);
    throw new Error("Failed to seed the database");
  }
};

main();
