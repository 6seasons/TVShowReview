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
  console.log(`CREATING USERS AND REVIEWS`);

  await prisma.user.create({
    data: {
      username: `wyatt`,
      password: `wyatt1111`,
      email: `wyatt@gmail.com`,
      image: `wyatt.jpg`,
      isAdmin: true,
      reviews: {
        create: [
          { show_id: 1,
            rating: 7,
            content: `I love this show`
           },
           { show_id: 2,
            rating: 9,
            content: `I really love this show`
           },
           { show_id: 3,
            rating: 8,
           },
           { show_id: 4,
            rating: 9,
           },
           { show_id: 5,
            rating: 10,
           }
        ]
      }
    }
  })

  await prisma.user.create({
    data: {
      username: `tom`,
      password: `tom1111`,
      email: `tom@gmail.com`,
      image: `tom.jpg`,
      isAdmin: true,
      reviews: {
        create: [
          { show_id: 6,
            rating: 7,
            content: `I love this show`
           },
           { show_id: 7,
            rating: 4,
            content: `I really love this show`
           },
           { show_id: 1,
            rating: 8,
           },
           { show_id: 2,
            rating: 7,
           },
           { show_id: 3,
            rating: 6,
           }
        ]
      }
    }
  })

  await prisma.user.create({
    data: {
      username: `david`,
      password: `david1111`,
      email: `david@gmail.com`,
      image: `david.jpg`,
      isAdmin: true,
      reviews: {
        create: [
          { show_id: 4,
            rating: 7,
            content: `I love this show`
           },
           { show_id: 6,
            rating: 8,
            content: `I love this show`
           },
           { show_id: 5,
            rating: 8,
           },
           { show_id: 1,
            rating: 7,
           },
           { show_id: 2,
            rating: 6,
           }
        ]
      }
    }
  })

  console.log(`USERS AND REVIEWS CREATED`);
  console.log(`CREATING COMMENTS`);

};

seed();
