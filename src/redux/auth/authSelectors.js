const getIsAuth = state => !!state.auth.token;

const getUsername = state => state.auth.user.name;

const authSelectors = { getIsAuth, getUsername };
export default authSelectors;
