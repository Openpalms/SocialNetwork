type initialStateType = typeof initialState;
const initialState = {
  friends: [
    { id: 1, name: 'oleg' },
    { id: 2, name: 'sasha' },
    { id: 3, name: 'gleb' },
  ],
};

const navbarReducer = (state = initialState, action: any): initialStateType => {
  return state;
};
export default navbarReducer;
