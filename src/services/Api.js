import axios from "axios";
import { API_URL } from "../components/contants/constants";

export const getRecipes = async (searchedQuerry) => {
  try {
    let response = await axios.get(`${API_URL}/search?q=${searchedQuerry}`);
    return response.data;
  } catch (error) {
    console.log("error with handling api", error.message);
    return error.response;
  }
};

export const getRecipe = async (searchedQuerry) => {
  try {
    let response = await axios.get(`${API_URL}/get?rId=${searchedQuerry}`);
    return response.data;
  } catch (error) {
    console.log("error with handling api", error.message);
    return error.response;
  }
};
