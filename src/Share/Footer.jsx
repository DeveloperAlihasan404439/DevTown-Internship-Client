import { Link } from "react-router-dom";
import { FaTwitter,FaFacebook,FaYoutube  } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="footer footer-center p-10 border-[#3D8AD0] bg-gradient-to-r from-[#07163d] to-[#3D8AD0] text-white rounded">
      <nav className="grid grid-flow-col gap-4">
        <Link to="/" className="link link-hover">Home</Link>
        <Link to="/allProducts" className="link link-hover">All Products</Link>
        <Link className="link link-hover">Press kit</Link>
      </nav>
      <nav>
        <div className="grid grid-flow-col gap-4 text-3xl">
        <FaTwitter/><FaFacebook/><FaYoutube/>
        </div>
      </nav>
      <aside>
        <p>Copyright © 25-12-2023 - MENU Industries Ltd</p>
      </aside>
    </footer>
  );
};

export default Footer;
