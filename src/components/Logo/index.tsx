import { Link } from "react-router-dom";
import LogoMarvel from "../../assets/logo.png";
import { LogoStyle } from "./styles";

export function Logo() {
  return (
    <Link to={"/"} >
      <LogoStyle src={LogoMarvel} alt="" />;
    </Link>
  );
}
