import axios from "axios";

const API = {
  // Gets all users
  getUsers: function() {
    return axios.get("/api/user");
  },
  // Gets the user with the given id
  getUser: function(id) {
    return axios.get("/api/user/" + id);
  },
  // Deletes the user with the given id
  deleteUser: function(id) {
    return axios.delete("/api/user/" + id);
  },
// Edit the user with the given id
  editUser: function(id) {
      return axios.put("/api/user/" + id)
  },
  // Saves a user to the database
  saveUser: function(userData) {
    return axios.post("/api/user", userData);
  },
  // Gets all users
  getResources: function() {
    return axios.get("/api/resource");
  },
  // Gets the user with the given id
  getResource: function(id) {
    return axios.get("/api/resource/" + id);
  },
  // Deletes the user with the given id
  deleteResource: function(id) {
    return axios.delete("/api/resource/" + id);
  },
// Edit the user with the given id
  editResource: function(id) {
      return axios.put("/api/resource/" + id)
  },
  // Saves a user to the database
  saveResource: function(userData) {
    return axios.post("/api/resource", userData);
  }
};
export default API;