import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <div style={{ textAlign: 'center' }}>
        <Link to="/">Home</Link>
      </div>
      <Outlet />
    </>
  )
};

export default Layout;