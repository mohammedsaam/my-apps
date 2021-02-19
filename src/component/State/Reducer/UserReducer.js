const UserDeafaultstate = {
    Users: [
      {
        name: "shoeb",
        image: "Assets/Rose.jpg",
        desc: "i live at chaupala nanded",
      },
      {
        name: "Rehan",
        image: "Assets/Rose.jpg",
        desc: "i live at chaitanya nagar",
      },
      {
        name: "Rabay",
        image: "logo512.png",
        desc: "i live at aurangabad",
      },
    ],
  };

  export const UserReducer=(state=UserDeafaultstate,action)=>{
      switch(action.type) {
          case "ADD_New_USER":
              return {...state ,Users:  [...state.Users, action.Users]};
              default :
              return state;
      }
      

  }