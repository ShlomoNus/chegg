import axios from 'axios';

const baseURL = 'https://api.github.com/users/';

export const GithubUserApiInstance = axios.create({ baseURL });
