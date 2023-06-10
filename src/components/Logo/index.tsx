import { Link } from "react-router-dom";
import LogoMarvel from "../../assets/logo.png";

export function Logo() {
  return (
    <Link to={"/"} >
      <img src={LogoMarvel} alt="" />;
    </Link>
  );
}
