import axios from 'axios'

export function getStrapiURL(path) {
  return `${
    process.env.NEXT_PUBLIC_STRAPI_API_URL || "http://localhost:8082"
  }${path}`;
}

  export async function postConnect(mail, password) {

    const { data } = await axios
    .post('http://localhost:8082/auth/local', {
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
    .post('http://localhost:8082/auth/local/register', {
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
    .post('http://localhost:8082/tokens', {
      token: data.jwt,
      user: data.user.id,
    })
    
    return resp
  }

  export async function postUploadImg(data, token) {

    const resp = await axios
    .post(`http://localhost:8082/upload?token=${token}`,data)
    
    return resp
  }

// Helper to make GET requests to Strapi
export async function fetchAPI(path) {
  const requestUrl = getStrapiURL(path);
  const response = await fetch(requestUrl);
  const data = await response.json();
  return data;
}

export async function getCategories() {
  const categories = await fetchAPI("/categories");
  return categories;
}

export async function getMe(token) {
  const { data } = await axios
  .get(`http://localhost:8082/users/me?token=${token}`)
  
  return data;
}

export async function updateMe(data, token) {
  const resp = await axios
  .put(`http://localhost:8082/users/me?token=${token}`, data)
  
  return resp;
}

export async function postProduct(data, token) {
  const resp = await axios
  .post(`http://localhost:8082/products?token=${token}`, data)
  return resp;
}

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

export async function getProduct(slug) {
  const products = await fetchAPI(`/products?slug=${slug}`);
  return products?.[0];
}
