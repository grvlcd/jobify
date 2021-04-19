export function SET_USER_DETAILS(state, users) {
  state.users = users;
}

export function SET_USER(state, id) {
  state.user = state.users.find(user => user.id == id);
}
