import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav >
        <ul className="nav">
          <li>
            <Link to="/">მთავარი გვერდი</Link>
          </li>
          <li>
            <Link to="/contact">კონტაქტი</Link>
          </li>
          <li>
            <Link to="/about">ჩვენს შესახებ</Link>
          </li>
          
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;