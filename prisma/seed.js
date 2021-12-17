const { PrismaClient } = require("@prisma/client");
const db = new PrismaClient();

async function seed() {
  await Promise.all(
    getPosts().map((post) => {
      return db.post.create({ data: post });
    })
  );
}

seed();

function getPosts() {
  return [
    {
      title: "JavaScript Performance Tips",
      body: "We will look at 10 simple tips and tricks to increase the speed of your code when writing JS.",
    },
    {
      title: "Tailwind vs. Bootstrap",
      body: "Both Tailwind and Bootstrap are very popular CSS frameworks. In this article, we will compare them.",
    },
    {
      title: "Python is for noob",
      body: "Today I will explain 10 reasons why learning Python is for complete noobs.",
    },
    {
      title: "TypeScript vs. JavaScript",
      body: "The title makes no sense, use TypeScript forever & always while hating it for constantly screaming at you.",
    },
  ];
}
