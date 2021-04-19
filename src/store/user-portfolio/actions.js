import axios from "axios";
export async function fetchUsers({ commit }) {
  // try {
  //   const response = await axios.get("https://reqres.in/api/users");
  //   commit("SET_USER_DETAILS", response.data.data);
  // } catch (error) {
  //   console.log(error);
  // }
}

export function fetchUser({ commit }, id) {
  commit("SET_USER", id);
}
