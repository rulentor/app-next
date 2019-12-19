import Link from "next/link";

const linkStyle = {
  marginRight: 15
};

const Header = () => (
  <div>
    <Link href="/">
      <a style={linkStyle}>Home</a>
    </Link>
    <Link href="/about">
      <a style={linkStyle}>О проэкте</a>
    </Link>
    <Link href="/blog">
      <a style={linkStyle}>События</a>
    </Link>
    <Link href="/shows">
      <a style={linkStyle}>Ватман TV</a>
    </Link>
  </div>
);

export default Header;
