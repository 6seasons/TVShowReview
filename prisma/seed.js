const { PrismaClient } = require("@prisma/client");
const bcrypt = require("bcrypt");

const prisma = new PrismaClient();

const seed = async () => {
  console.log(`STARTING SEED`);
  console.log(`CREATING SHOWS`);

  await prisma.show.create({
    data: {
      name: `The Office`,
      details: `The Office is an American mockumentary sitcom television series that depicts the everyday work lives of office employees at the Scranton, Pennsylvania, branch of the fictional Dunder Mifflin Paper Company.`,
      imageUrl: `https://roost.nbcuni.com/bin/viewasset.html/content/dam/Peacock/Landing-Pages/library/theoffice/mainpage/office-vertical-art.jpg/_jcr_content/renditions/original.JPEG`,
    },
  });
  await prisma.show.create({
    data: {
      name: `Community`,
      details: `When fast-talking lawyer Jeff Winger (Joel McHale) finds his degree has been revoked, he is forced to go back to school at Greendale Community College. Hoping to score points with a pretty coed, he invents a study group and invites her to join it. Imagine his surprise when she's not the only one who shows up for help with Spanish from the "board-certified tutor" he proclaims himself to be. Though his command of the language is anything but good, the members continue to meet and end up learning a lot about themselves.`,
      imageUrl: `https://m.media-amazon.com/images/M/MV5BNDQ5NDZiYjktZmFmMy00MjAxLTk1MDktOGZjYTY5YTE1ODdmXkEyXkFqcGdeQXVyNjcwMzEzMTU@._V1_.jpg`,
    },
  });
  await prisma.show.create({
    data: {
      name: `Futurama`,
      details: `Accidentally frozen, pizza-deliverer Fry wakes up 1,000 years in the future. He is taken in by his sole descendant, an elderly and addled scientist who owns a small cargo delivery service. Among the other crew members are Capt. Leela, accountant Hermes, intern Amy, obnoxious robot Bender and lobsterlike moocher "Dr." Zoidberg.`,
      imageUrl: `https://m.media-amazon.com/images/M/MV5BYWI3MTJkN2UtMTU0Zi00ZjE2LThjMWEtYmQ5YmFiZmU1N2JhXkEyXkFqcGdeQXVyMTMzOTQyOTk1._V1_FMjpg_UX1000_.jpg`,
    },
  });
  await prisma.show.create({
    data: {
      name: `Severance`,
      details: `Mark leads a team of office workers whose memories have been surgically divided between their work and personal lives; when a mysterious colleague appears outside of work, it begins a journey to discover the truth about their jobs.`,
      imageUrl: `https://m.media-amazon.com/images/M/MV5BMjkwZjcwMGQtNDAzOC00YjJiLThiYTgtNWU3ZjRiZmY2YzEzXkEyXkFqcGdeQXVyMTMzNDExODE5._V1_.jpg`,
    },
  });
  await prisma.show.create({
    data: {
      name: `The Righteous Gemstones`,
      details: `Well into the second generation of a grand televangelist tradition, the world-famous Gemstone family is living proof that worship pays dividends in all sizes. Patriarch Eli, the man most responsible for the tremendous success of the family's megachurch, is in mourning over the loss of his wife. Jesse, the eldest of the three grown Gemstone siblings, looks to lead in his father's footsteps, but finds his past sins jeopardizing the family ministry. Next in line comes middle sister Judy, who secretly lives with her fiancé and dreams of escaping the Gemstone compound. Rounding out the dysfunctional trio is pseudo-hipster Kelvin, the youngest of the preachers and a thorn in Jesse's side. As the family battles numerous threats to their renowned religious empire, they continue to spread the good word... and make a solid buck doing so.`,
      imageUrl: `https://www.tvguide.com/a/img/catalog/provider/1/1/1-11126706465.jpg`,
    },
  });
  await prisma.show.create({
    data: {
      name: `How To With John Wilson`,
      details: `Documentary filmmaker John Wilson embarks on an odyssey of self-discovery and cultural observation by covertly filming the lives of fellow New Yorkers while trying to share advice. John attempts to give advice while dealing with his own personal issues. The episodes, framed as tutorials and filmed mainly on the streets of New York City, cover topics from small talk to scaffolding. While each episode initially focuses on its title topic, in the course of his investigation, Wilson meets people and strikes up conversations that lead in unpredictable directions.`,
      imageUrl: `https://m.media-amazon.com/images/M/MV5BN2I1ZmVlZmItYmQ4My00ZWQxLTljYjgtMWU3MjRiNjFkZWZiXkEyXkFqcGdeQXVyNjYyMjE4NDY@._V1_.jpg`,
    },
  });
  await prisma.show.create({
    data: {
      name: `Barry`,
      details: `Disillusioned at the thought of taking down another "mark," depressed, low-level hit man Barry Berkman seeks a way out. When the Midwesterner reluctantly travels to Los Angeles to execute a hit on an actor who is bedding a mobster's wife, little does Barry know that the City of Angels may be his sanctuary. He follows his target into acting class and ends up instantly drawn to the community of eager hopefuls, especially dedicated student Sally, who becomes the object of his affection. While Barry wants to start a new life as an actor, his handler, Fuches, has other ideas, and the hit man's criminal past won't let him walk away so easily.`,
      imageUrl: `https://flxt.tmsimg.com/assets/p21660058_b_v13_aa.jpg`,
    },
  });

  console.log(`SHOWS CREATED`);
  console.log(`CREATING USERS AND REVIEWS`);

  await prisma.user.create({
    data: {
      username: `wyatt`,
      password: await bcrypt.hash(`wyatt1111`, 10),
      email: `wyatt@gmail.com`,
      image: `wyatt.jpg`,
      isAdmin: true,
      reviews: {
        create: [
          { show_id: 1, rating: 7, content: `I love this show` },
          { show_id: 2, rating: 9, content: `I really love this show` },
          { show_id: 3, rating: 8 },
          { show_id: 4, rating: 9 },
          { show_id: 5, rating: 10 },
        ],
      },
    },
  });

  await prisma.user.create({
    data: {
      username: `tom`,
      password: await bcrypt.hash(`tom1111`, 10),
      email: `tom@gmail.com`,
      image: `tom.jpg`,
      isAdmin: true,
      reviews: {
        create: [
          { show_id: 6, rating: 7, content: `I love this show` },
          { show_id: 7, rating: 4, content: `I really love this show` },
          { show_id: 1, rating: 8 },
          { show_id: 2, rating: 7 },
          { show_id: 3, rating: 6, content: `this was alright` },
        ],
      },
    },
  });

  await prisma.user.create({
    data: {
      username: `david`,
      password: await bcrypt.hash(`david1111`, 10),
      email: `david@gmail.com`,
      image: `david.jpg`,
      isAdmin: true,
      reviews: {
        create: [
          { show_id: 4, rating: 7, content: `I love this show` },
          { show_id: 6, rating: 8, content: `I love this show` },
          { show_id: 5, rating: 8 },
          { show_id: 1, rating: 7 },
          {
            show_id: 2,
            rating: 6,
            content: `dunno if this was supposed to be good`,
          },
        ],
      },
    },
  });

  console.log(`USERS AND REVIEWS CREATED`);
  console.log(`CREATING COMMENTS`);

  await prisma.comment.createMany({
    data: [
      {
        content: `dude are you crazy this sucks`,
        user_id: 1,
        review_id: 6,
      },
      {
        content: `I agree`,
        user_id: 3,
        review_id: 6,
      },
      {
        content: `BAD TAKE`,
        user_id: 1,
        review_id: 8,
      },
      {
        content: `dude are you crazy this sucks`,
        user_id: 1,
        review_id: 11,
      },
      {
        content: `I agree`,
        user_id: 1,
        review_id: 12,
      },
      {
        content: `idk`,
        user_id: 3,
        review_id: 1,
      },
      {
        content: `great point`,
        user_id: 2,
        review_id: 1,
      },
    ],
  });
};

seed();
