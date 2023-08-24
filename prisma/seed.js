const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const seed = async () => {

  console.log(`STARTING SEED`);
  console.log(`CREATING SHOWS`);

  await prisma.show.create({
    data: {
      name: `The Office`,
      details: `test`,
      imageUrl: `test`,
    }
  })
  await prisma.show.create({
    data: {
      name: `Community`,
      details: `test`,
      imageUrl: `test`,
    }
  })
  await prisma.show.create({
    data: {
      name: `Futurama`,
      details: `test`,
      imageUrl: `test`,
    }
  })
  await prisma.show.create({
    data: {
      name: `Severance`,
      details: `test`,
      imageUrl: `test`,
    }
  })
  await prisma.show.create({
    data: {
      name: `The Righteous Gemstones`,
      details: `test`,
      imageUrl: `test`,
    }
  })
  await prisma.show.create({
    data: {
      name: `How To With John Wilson`,
      details: `test`,
      imageUrl: `test`,
    }
  })
  await prisma.show.create({
    data: {
      name: `Barry`,
      details: `test`,
      imageUrl: `test`,
    }
  })

  console.log(`SHOWS CREATED`);
  console.log(`CREATING USERS`);

  await prisma.user.create({
    data: {
      username: `wyatt`,
      password: `wyatt1111`,
      email: `wyatt@gmail.com`,
      image: `wyattr.jpg`,
      isAdmin: true,
      reviews: {
        create: [
          { show_id: 1,
            rating: 7,
            content: `test`
           },
           { show_id: 2,
            rating: 7,
            content: `test`
           }
        ]
      }

    }
  })

};

seed();
