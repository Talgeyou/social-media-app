import moment from "moment";

let state = {
  profiles: [
    {
      user: {
        id: 0,
        name: "Talge",
        description: "Hi, I'm React Frontend Developer",
        imgUrl: "https://s.ppy.sh/a/9200248",
      },
      posts: [
        {
          id: 0,
          author: {
            id: 0,
            name: "Talge",
            imgUrl: "https://s.ppy.sh/a/9200248",
          },
          body: "This is my first post :3",
          creationDate: moment().format("YYYY-MM-DD HH:mm:ss"),
        },
        {
          id: 1,
          author: {
            id: 0,
            name: "Talge",
            imgUrl: "https://s.ppy.sh/a/9200248",
          },
          body: "Hey, there :)",
          creationDate: moment().format("YYYY-MM-DD HH:mm:ss"),
        },
      ],
    },
    {
      user: {
        id: 1,
        name: "RAGEEXE",
        description: "BANDA CREEPS",
        imgUrl: "https://s.ppy.sh/a/7417358",
      },
      posts: [
        {
          id: 0,
          author: {
            id: 1,
            name: "RAGEEXE",
            imgUrl: "https://s.ppy.sh/a/7417358",
          },
          body: "This is my first post :3",
          creationDate: moment().format("YYYY-MM-DD HH:mm:ss"),
        },
        {
          id: 1,
          author: {
            id: 1,
            name: "RAGEEXE",
            imgUrl: "https://s.ppy.sh/a/7417358",
          },
          body: "Hey, there :)",
          creationDate: moment().format("YYYY-MM-DD HH:mm:ss"),
        },
      ],
    },
  ],
  dialogs: [
    {
      id: 0,
      user: {
        id: 1,
        name: "RAGEEXE",
        imgUrl: "https://s.ppy.sh/a/7417358",
      },
      messages: [
        {
          id: 0,
          author: {
            id: 0,
            name: "Talge",
            imgUrl: "https://s.ppy.sh/a/9200248",
          },
          body: "Wassup",
        },
        {
          id: 1,
          author: {
            id: 1,
            name: "RAGEEXE",
            imgUrl: "https://s.ppy.sh/a/7417358",
          },
          body: "Hi",
        },
      ],
    },
    {
      id: 1,
      user: {
        id: 2,
        name: "Clopervok",
      },
      messages: [
        {
          id: 0,
          author: {
            id: 0,
            name: "Talge",
            imgUrl: "https://s.ppy.sh/a/9200248",
          },
          body: "Hello :)",
        },
        {
          id: 1,
          author: {
            id: 2,
            name: "Clopervok",
          },
          body: "Hi :3",
        },
      ],
    },
  ],
};

export default state;
