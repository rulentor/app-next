import Link from "next/link";

const Home = () => (
  <div>
    <h1>Привет Главная</h1>
    <Link href="/contacts">
      <a>Контакты</a>
    </Link>
    <br />
    <Link href="/blog">
      <a>Блог</a>
    </Link>
  </div>
);

export default Home;
