import { COLORS } from "../configs/Constant";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Header() {
    return (
    <div
      class="header-div"
      style={{
        height: "58px",
        width: "100%",
        backgroundColor: COLORS.primary,
        padding: "0px 10px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <div
        class="navbar-left"
        style={{ display: "flex", alignItems: "center" }}
      >
        <img src={""} alt="logo" />
        <h1>Header</h1>
      </div>

      <div className="navbar-right"></div>
    </div>
  );
}

export default Header;
