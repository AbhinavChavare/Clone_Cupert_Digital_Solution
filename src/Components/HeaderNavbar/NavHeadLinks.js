import React from 'react'

const NavHeadLinks = () => {
    return (
        <div className='links-cont'>
               <ul ><li ><a href="https://www.cyperts.net/">HOME</a></li>
                    <li ><a href="https://www.cyperts.net/about-us/">ABOUT</a></li>
                    <li ><a href="https://www.cyperts.net/services/" aria-current="page">Services</a>
                        <ul className="sub-menu">
                            <li><a href="https://www.cyperts.net/website-development/">WEBSITE DEVELOPMENT</a></li>
                            <li ><a href="https://www.cyperts.net/mobile-app-development/">MOBILE APPLICATION DEVELOPMENT</a></li>
                            <li ><a href="https://www.cyperts.net/digital-marketing/">DIGITAL MARKETING</a></li>
                        </ul>
                    </li>
                    <li ><a href="https://www.cyperts.net/portfolio/">PORTFOLIO</a></li>
                    <li ><a href="https://www.cyperts.net/blog/">BLOG</a></li>
                    <li ><a href="https://www.cyperts.net/case-studies/">CASE STUDIES</a></li>
                    <li ><a href="https://www.cyperts.net/contact/">Contact</a>
                        <ul className="sub-menu">
                            <li><a href="https://www.cyperts.net/career/">CAREER</a></li>
                        </ul>
                    </li>
                </ul>
                {/* <div className="top-search"> */}
                    {/* <a href=""><i className="fa fa-search"></i></a>
                    <form method="get" id="searchform" action="https://www.cyperts.net/" className="search-widget">
                        <input type="text" name="s" id="s" placeholder="Search..." value="" />
                        <button type="submit" value="Search"><i className="fa fa-search"></i></button>
                    </form>					</div> */}

                {/* <div className="pcart">
                </div> */}

        </div>
    )
}

export default NavHeadLinks

