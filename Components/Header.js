import Link from 'next/link';

const linkStyle = {
  marginRight: 15
}

const Header = () => (
  <div>
    <Link href="/">
      <a style={linkStyle}>Homepage</a>
    </Link>
    <Link href="/about">
      <a style={linkStyle}>Whoami???</a>
    </Link>
    <Link href="/hiring-info">
      <a style={linkStyle}>Hire Me</a>
    </Link>
    <Link href="/projects">
      <a style={linkStyle}>Portfolio</a>
    </Link>
  </div>
)

export default Header
