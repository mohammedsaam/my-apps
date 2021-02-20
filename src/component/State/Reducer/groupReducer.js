export const groupReducer = (state = groupsDefaultState, action) => {
    switch (action.type) {
      case "ADD_NEW_GROUP":
        return { ...state, groups: [...state.groups, action.groups] };
        default :

return state;

    }
  };
  
  const groupsDefaultState = {
    groups: [
      {
        name: "Redux Practical",
        image: "https://images.unsplash.com/photo-1575152046278-adb86343e2a8?ixid=MXwxMjA3fDB8MHx0b3BpYy1mZWVkfDN8NnNNVmpUTFNrZVF8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        desc: "This Is First Group Created With Redux",
      },
      {
        name: "Learning Redux",
        image: "https://images.unsplash.com/photo-1575152046278-adb86343e2a8?ixid=MXwxMjA3fDB8MHx0b3BpYy1mZWVkfDN8NnNNVmpUTFNrZVF8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        desc: "This Is First Group Created With Redux",
      },
      {
        name: "React Developers",
        image: "logo512.png",
        desc: "This Is First Group Created With Redux",
      },
    ],
  };