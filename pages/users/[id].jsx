import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import ProductsList from "../../components/ProductsList";
import { getUsers, getUser } from "../../utils/api";
import { getStrapiMedia } from "../../utils/medias";

const UserPage = ({ user }) => {
  const router = useRouter();
  if (router.isFallback) {
    return <div>Loading user...</div>;
  }

  const [memberSince, setMemberSince] = useState('')


  const calculDate = () => {
    const now = Date.now();
    const currentDate = now - new Date(user.created_at);
    setMemberSince(Math.trunc(currentDate/1000/60/60/24))
  }

  console.log(memberSince);
  useEffect(() => {
    calculDate()
  }, [])

  return (
    <div>
    <Head>
      <title>{user.username}</title>
    </Head>
    <div>name : {user.username}</div>
    <div>mail : {user.email} </div>
    <div>note : {user.note} </div>
    <div>nb annonces : {user.products.length} </div>
    <div>Member since : {memberSince}</div>
    <ProductsList products={user.products} user={user}/>
  </div>
  );
};

export default UserPage;

export async function getStaticProps({ params }) {
  const user = await getUser(params.id);

  return { props: { user } };
}

export async function getStaticPaths() {
  const users = await getUsers();
  return {
    paths: users.map((_user) => {
      return {
        params: { id: _user.id.toString() },
      };
    }),
    fallback: true,
  };
}
