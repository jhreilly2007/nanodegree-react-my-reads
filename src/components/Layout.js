/** This was for testing purposes. No longer needed. Originally 
 * I coded the BrowserNavigation in index.js. I moved this to App.js
 * I used this to have the Home and Search links on the top of each page*/

import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
    <br /><br />
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/search">Search</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;