const UserDeafaultstate = {
    Users: [
      {
        name: "1.shoeb",
        image: "https://images.unsplash.com/photo-1613361906691-3749d69f81fc?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
        desc: "i live at chaupala nanded",
      },
      {
        name: "2.Rehan",
        image: "https://images.unsplash.com/photo-1551721434-f5a13c7a6d14?ixid=MXwxMjA3fDB8MHx0b3BpYy1mZWVkfDh8YWV1NnJMLWo2ZXd8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        desc: "i live at chaitanya nagar",
      },
      {
        name: "3.Rabay",
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