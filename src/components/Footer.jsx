import "../assets/css/footer.css";
import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <div className="footer">
            <p>Todos los derechos reservados &copy; ema</p>
            <Link to="https://www.instagram.com/SoyeLema/"> <i class="fa-brands fa-instagram"></i></Link> | <Link to="https://github.com/SoyeLema">  <i class="fa-brands fa-github"></i> </Link> | <Link to="https://steamcommunity.com/id/SoyeLema/">  <i class="fa-brands fa-steam"></i> </Link>
        </div>
    );
}
