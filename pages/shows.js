import React from "react";
import Layout from "../components/Layout";
import Link from "next/link";
import fetch from "isomorphic-unfetch";

const Articles = props => (
  <ul>
    {props.json.map(item => (
      <li>
        <Link href="/post/[id]" as={`/post/${item.id}`}>
          {item.name}
        </Link>
      </li>
    ))}
  </ul>
);

Articles.getInitialProps = async function() {
  //const userAgent = req ? req.headers['user-agent'] : navigator.userAgent
  const res = await fetch("https://api.tvmaze.com/search/shows?q=batman");
  const data = await res.json();
  console.log(`Show data fetched. Count: ${data.length}`);
  return {
    json: data.map(entry => entry.show)
  };
};

const PageContent = (
  <>
    <h1>Ватман сериал по-сезонам</h1>
    <Articles />
  </>
);
export default function Shows() {
  return <Layout content={PageContent} />;
}
