import Link from 'next/link';
import { Navbar, Nav, NavItem, NavLink } from 'react-bootstrap'

class TopNav extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      navClassName: 'transparent',
    }
  }

  componentDidMount() {
    const transitionPoint = window.document.querySelector('header').offsetHeight

    window.document.addEventListener('scroll', () => {
      if(window.scrollY >= transitionPoint) {
        this.setState( { navClassName: 'opaque'} )
      }
      else {
        this.setState( { navClassName: 'transparent'} )
      }
    })
  }

  render() {
    return (
      <React.Fragment>
      <Navbar fixedTop inverse collapseOnSelect className={this.state.navClassName}>
        <Navbar.Header>
          <Link href="/">
            <Navbar.Brand>
            </Navbar.Brand>
          </Link>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight>
            <Link href="/#about" scroll={true} passHref>
              <NavItem>about</NavItem>
            </Link>
            <Link href="/#performers" scroll={true} passHref>
              <NavItem>performers</NavItem>
            </Link>
            <Link href="/#schedule" scroll={true} passHref>
              <NavItem>schedule</NavItem>
            </Link>
            <Link href="/#sponsors" scroll={true} passHref>
              <NavItem>sponsors</NavItem>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <style jsx global>{`
      .transparent {
        background: rgba(0, 0, 0, 0.5);
        border: none;
      } 

      .transparent .navbar-nav>li>a {
        color: #fff;
      }

      .transparent .navbar-nav>li>a:hover {
        color: #F8EB68;
      }

      .opaque { 
        background: #301540;
        border-bottom: 1px solid #e6e6fa;
      }

      .opaque .navbar-nav>li>a {
        color: #e6e6fa;
      }

      .opaque .navbar-nav>li>a:visited {
        color: #e6e6fa;
      }

      .opaque .navbar-nav>li>a:hover {
        color: #F8EB68;
      }
      `}</style>
      </React.Fragment>
    )
  }
}

export default TopNav