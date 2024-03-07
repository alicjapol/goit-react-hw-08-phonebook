const selectIsLoggedIn = (state) => state.auth.setIsLoggedIn;
const selectUser = (state) => state.auth.user;

export { selectIsLoggedIn, selectUser };