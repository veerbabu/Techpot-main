import '../../../node_modules/bootstrap/scss/bootstrap.scss';
import '../../assets/css/font-awesome.min.css';
import '../../assets/css/animate.css';
import '../../assets/css/style.scss';
import '../../assets/css/responsive.scss';
import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { Link, withRouter  } from 'react-router-dom';
 
class Navigation extends React.Component {
    state = {
        collapsed: true,
    };

    toggleNavbar = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    }

    componentDidMount() {
        let elementId = document.getElementById("navbar");
        document.addEventListener("scroll", () => {
            if (window.scrollY > 170) {
                elementId.classList.add("is-sticky");
                window.history.pushState("", document.title, window.location.pathname);
            } else {
                elementId.classList.remove("is-sticky");
            }
        });
        window.scrollTo(0, 0);

        if (!(window.location.pathname === '/blog' || window.location.pathname === '/blog-details')){
            let mainNavLinks = document.querySelectorAll("nav ul li a");

            window.addEventListener("scroll", () => {
                let fromTop = window.scrollY;
            
                mainNavLinks.forEach(link => {
                let section = document.querySelector(link.hash);
            
                    if (
                        section.offsetTop <= fromTop &&
                        section.offsetTop + section.offsetHeight > fromTop
                    ) {
                        link.classList.add("active");
                    } else {
                        link.classList.remove("active");
                    }
                });
            });
        }
    }

    goToId = (e) => {
        window.location.hash = e;
        window.location.refresh(true);
    }

    renderMenus = () => {
        if (window.location.pathname === '/blog' || window.location.pathname === '/blog-details'){
            return (
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <Link className="nav-link" to="/#home">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link 
                            className="nav-link" 
                            to="/#about"
                            onClick={() => this.goToId("/#about")}
                        >
                            About
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link 
                            className="nav-link" 
                            to="/#team"
                            onClick={() => this.goToId("/#team")}
                        >Team</Link>
                    </li>
                    <li className="nav-item">
                        <Link  
                            className="nav-link" 
                            to="/#services"
                            onClick={() => this.goToId("/#services")}
                        >Services</Link>
                    </li>
                    <li className="nav-item">
                        <Link 
                            className="nav-link" 
                            to="/#work"
                            onClick={() => this.goToId("/#work")}
                        >Work</Link>
                    </li>
                    <li className="nav-item">
                        <Link 
                            className="nav-link" 
                            to="/#price"
                            onClick={() => this.goToId("/#howwework")}
                        >How We Work</Link>
                    </li>
                    <li className="nav-item">
                        <Link 
                            className="nav-link" 
                            to="/#blog"
                            onClick={() => this.goToId("/#blog")}
                        >Blog</Link>
                    </li>
                    <li className="nav-item">
                        <Link 
                            className="nav-link" 
                            to="/#contact"
                            onClick={() => this.goToId("/#contact")}
                        >Contact</Link>
                    </li>
                </ul>
            );
        }

        return (
            <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                    <AnchorLink onClick={this.toggleNavbar} offset={() => 85} className="nav-link" href="#home">Home</AnchorLink>
                </li>
                <li className="nav-item">
                    <AnchorLink onClick={this.toggleNavbar} offset={() => 85} className="nav-link" href="#about">About</AnchorLink>
                </li>
              {/*  <li className="nav-item">
                    <AnchorLink onClick={this.toggleNavbar} offset={() => 85} className="nav-link" href="#team">Team</AnchorLink>
        </li>*/}

        <li className="nav-item">
        <AnchorLink onClick={this.toggleNavbar} offset={() => 85} className="nav-link" href="#howwework">How We Work</AnchorLink>
    </li>

        <li className="nav-item">
                    <AnchorLink onClick={this.toggleNavbar} offset={() => 85} className="nav-link" href="#myservices">Services</AnchorLink>
                </li>
                
                <li className="nav-item">
                    <AnchorLink onClick={this.toggleNavbar} offset={() => 85} className="nav-link" href="#work">Potfolio</AnchorLink>
                </li>
               
              {/*  <li className="nav-item">
                    <AnchorLink onClick={this.toggleNavbar} offset={() => 85} className="nav-link" href="#blog">Blog</AnchorLink>
    </li> */}
                <li className="nav-item">
                    <AnchorLink onClick={this.toggleNavbar} offset={() => 85} className="nav-link" href="#contactz">Contact</AnchorLink>
                </li>
            </ul>
        );
    }

    render(){
        const { collapsed } = this.state;
        const classOne = collapsed ? 'collapse navbar-collapse' : 'navbar-collapse collapse show';
        const classTwo = collapsed ? 'navbar-toggler navbar-toggler-right collapsed' : 'navbar-toggler navbar-toggler-right';
        return (
            <nav id="navbar" className="navbar navbar-expand-lg navbar-light bg-light header-sticky">
                <div className="container">
                    <Link 
                        className="navbar-brand" 
                        to="/"
                        onClick={() => window.location.reload(true)}
                    >
                        <span>Tech</span>PoT
                    </Link>
                    <button 
                        onClick={this.toggleNavbar}
                        className={classTwo} 
                        type="button" 
                        data-toggle="collapse" 
                        data-target="#navbarSupportedContent" 
                        aria-controls="navbarSupportedContent" 
                        aria-expanded="false" 
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className={classOne} id="navbarSupportedContent">
                        {this.renderMenus()}
                    </div>
                </div>
            </nav>
        );
    }
}
 
export default withRouter(Navigation);