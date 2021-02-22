import { v4 as uuidv4 } from 'uuid';
export const PersonReducers = {
    personDetail: [
      {
        uuidv4();,
        name: "Sam",
        age: 20,
        description: "He is a 1st year student",
        image:
          "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8cGVyc29ufGVufDB8fDB8&ixlib=rb-1.2.1&w=1000&q=80",
      },
      {
        id:uuidv4(),
        name: "Mazhar",
        age: 21,
        description: `He is a 2nr year student`,
        image:
          "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NHx8cGVyc29ufGVufDB8fDB8&ixlib=rb-1.2.1&w=1000&q=80",
      },
      {
        id:uuidv4(),
        name: "Rizwan",
        age: 22,
        description: `He is a 3rd year student`,
        image: "",
      },
      {
        id:uuidv4(),
        name: "Aadil",
        age: 23,
        description: `He is a 12th student`,
        image: "",
      },
      {
        id:uuidv4(), 
        name: "Zahoor",
        age: 24,
        description: `He is a 11th student`,
        image: "",
      },
      {
        id:uuidv4(),
        name: "Mujahed",
        age: 25,
        description: `He is a 10th student`,
        image: "",
      },
      {
        id:uuidv4(),
        name: "Kaleem",
        age: 26,
        description: `He is a 9th student`,
        image: "",
      },
      {
        name: "Zubair",
        age: 27,
        description: `He is a 8th student`,
        image: "",
      },
      {

        name: "Aamer",
        age: 28,
        description: `He is a 7th student`,
        image: "",
      },
    ],
  };