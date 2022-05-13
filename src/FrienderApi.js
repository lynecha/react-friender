import axios from "axios";
import FormData from 'form-data'

const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:5001/api";

class FrienderApi {

  static token = this.token

  static async request(endpoint, data = {}, method = "get") {
    console.debug("API Call:", endpoint, data, method);

    const url = `${BASE_URL}/${endpoint}`;
    const headers = { Authorization: `Bearer ${FrienderApi.token}` };
    const params = (method === "get")
      ? data
      : {};


    try {
      return (await axios({ url, method, data, params, headers })).data;
    } catch (err) {
      console.error("API Error:", err.response);
      let message = err.response.data.error.message;
      throw Array.isArray(message) ? message : [message];
    }
  }
   /** Return all potental matches for a given user based on location. */

  static async getUsers(token){
    this.token = token
    let res = await this.request(`users`);
    console.log(res)
    return res.matches
  }

   /** Get a token with username/password.  */

   static async login(user) {
    const data = user;
    let res = await this.request(`token`, data, "post");
    return res.access_token;
  }

  /** Register a user and get back a token. */

  static async register(user) {
    const data = user;
    let res = await this.request(`signup`, data, "post");
    console.log(res)
    return res.access_token;
  }

   /** Update a user. */

   static async update(formData, username, token) {
    this.token = token;
    const data = formData;
    let res = await this.request(`users/${username}`, data, "patch");

    return res.user;
  }

  static async getUser(username, token) {
    this.token = token;
    let res = await this.request(`users/${username}`);
    return res.user;
  }

  static async addPhoto(file, username, token) {
    this.token = token;
    let files = new FormData();
    files.append("file", file)
    const headers = { Authorization: `Bearer ${FrienderApi.token}` ,
      "Content-type" :'multipart/form-data'}
    let res = await axios({ url:`${BASE_URL}/users/${username}/photos`, method:"post", data:files, headers: headers }).data;
    return res;
  }



}

export default FrienderApi;