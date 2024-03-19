import axios from 'axios'

const baseURL = 'https://jsonplaceholder.typicode.com/';

export const GithubUserApiInstance = axios.create({baseURL})