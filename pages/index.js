import Head from 'next/head';
import Core from '../components/Core';
import Header from '../components/Header';
import Nav from '../components/Nav';
import requests from '../utils/requests';


export default function Home(props) {
  return (
    <div>
      <Head>
        <title>Movie Service App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>
      <Nav/>
      <Core results={props.results}/>
    </div>
  )
}
export async function getServerSideProps(context) {
  const genre = context.query.genre;
  let result;
  await fetch(
    `https://api.themoviedb.org/3${
    requests[genre]?.url || requests.fetchTrending.url
    }`).then(res => result = res);
  result = await result.json();
  return {
    props: {
      results: result.results
    }
  };
}
