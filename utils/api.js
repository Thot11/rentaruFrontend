/* eslint-disable prettier/prettier */
import axios from 'axios'

// Helpers

export function getStrapiURL(path) {
  return `${
    process.env.NEXT_PUBLIC_STRAPI_API_URL
  }${path}`;
}


export async function fetchAPI(path) {
  const requestUrl = getStrapiURL(path);
  const response = await fetch(requestUrl);
  const data = await response.json();
  return data;
}

// GET Request with strapi helper

export async function getCategory(slug) {
  const categories = await fetchAPI(`/categories?slug=${slug}`);
  return categories?.[0];
}

export const getProducts = async () => {
  return await fetchAPI("/products");
}

export async function getUsers() {
  const users = await fetchAPI("/users");
  return users;
}

export async function getUser(id) {
  const users = await fetchAPI(`/users/${id}`);
  return users;
}

export async function getHomePage() {
  const home = await fetchAPI("/home");
  return home;
}

export async function getLandingPage() {
  const landing = await fetchAPI("/landing");
  return landing;
}

export async function getProduct(slug) {
  const products = await fetchAPI(`/products?slug=${slug}`);
  return products?.[0];
}

export async function getProductsByCategory(categories) {
  const products = await fetchAPI(`/products?categories_contains=${categories.map((category, index) => category.id + '&categories_contains=')}`);
  return products;
}

export async function getProductsByTitle(title) {
  const products = await fetchAPI(`/products?title=${title}`);
  return products;
}

export async function getCategories() {
  const categories = await fetchAPI("/categories");
  return categories;
}

export async function getMe(token) {
  const me = await fetchAPI(`/users/me?token=${token}`);
  return me;
}

export async function getMangaCollection(token) {
  const mangaCollection = await fetchAPI(`/manga-apis?token=${token}`);
  return mangaCollection;
}

// POST Request

export async function postConnect(mail, password) {

  const { data } = await axios
  .post(`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/auth/local`, {
    identifier: mail,
    password: password,
  })

  return data
}

export async function postSignUp(
  mail,
  password,
  ville,
  departement,
  prenom,
  nom,
  phone,
  username,
  address,
  selectedFile
  ) {

  const {data} = await axios
  .post(`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/auth/local/register`, {
      email: mail,
      password,
      username,
      confirmed: true,
      ville,
      departement,
      prenom,
      nom,
      phone,
      address,
      profilPic : selectedFile
  })

  return data
}

export async function postTokenToUser(data) {

  const resp = await axios
  .post(`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/tokens`, {
    token: data.jwt,
    user: data.user.id,
  })
  
  return resp
}

export async function postUploadImg(data, token) {

  const resp = await axios
  .post(`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/upload?token=${token}`,data)
  
  return resp
}



export async function postProduct(data, token) {
  const resp = await axios
  .post(`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/products?token=${token}`, data)
  return resp;
}

// PUT Request

export async function updateMe(data, token) {
  const resp = await axios
  .put(`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/users/me?token=${token}`, data)
  
  return resp;
}

export async function updateProduct(id, data, token) {
  const resp = await axios
  .put(`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/products/${id}?token=${token}`, data)
  
  return resp;
}


