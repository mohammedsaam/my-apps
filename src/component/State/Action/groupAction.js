export const addNewGroup = (name, id) => ({
    type: "ADD_NEW_GROUP",
    groups: {
      name,
      id,
    },
  });

  export const addNewUser = (name,id)=>({
      type:"ADD_NEW_USER",
      Users:{
          name, id,
      },

  });