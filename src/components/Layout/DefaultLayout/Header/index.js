import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classname from "classnames/bind";
import styles from "./Header.module.scss";
import { useNavigate } from "react-router-dom";
import Button from "../../../Button";
import Tippy from "@tippyjs/react/headless"; // different import path!
import "tippy.js/dist/tippy.css"; // optional
import { faCaretDown, faEarth } from "@fortawesome/free-solid-svg-icons";
import { faBell, faStar } from "@fortawesome/free-regular-svg-icons";
import { Link } from "react-router-dom";

import logo from "../../../../../src/assets/images/logo.png";
import { useEffect, useRef, useState } from "react";
import Menu from "./Menu";
const cx = classname.bind(styles);
function Header() {
  const navigate = useNavigate();
  const [set, setvalue] = useState(false);
  const [set1, setvalue1] = useState(false);
  const menuref = useRef();
  const red = useRef();
  useEffect(() => {
    window.addEventListener("click", (e) => {
      if (e.target === menuref.current) {
        setvalue(false);
        setvalue1(false);
      }
    });
    window.removeEventListener("click", menuref.current);
  });
  const handleclick = () => {
    if (set === false) {
      setvalue(true);
    } else {
      setvalue(false);
    }
  };
  const handleclick1 = () => {
    if (set1 === false) {
      setvalue1(true);
    } else {
      setvalue1(false);
    }
  };

  return (
    <div className={cx("wrapper")}>
      <div>
        <img src={logo} alt="Logo" width={400} height={150}></img>
      </div>

      <div className={cx("warpper-link")}>
        <div className={cx("warpper-link-h")}>
          <Link className={cx("link")} to="/review">
            {" "}
            Trang Chu
          </Link>
          <Link className={cx("link")} to="/">
            Ưu Đãi
          </Link>
          <Link className={cx("link")} to="/">
            Chúng Tôi
          </Link>
          <Link className={cx("link")} to="/">
            Hợp Tác
          </Link>
        </div>
        <Tippy
          placement="bottom"
          interactive
          render={(attrs) => <Menu tabIndex="-1" {...attrs} />}
        >
          <div className={cx("warpper-link-h")}>
            <div className={cx("link")} onClick={handleclick}>
              {" "}
              Tour Trong Nước{" "}
              <span>
                <FontAwesomeIcon icon={faCaretDown} />
              </span>
            </div>

            <div className={cx("link")} onClick={handleclick1}>
              Tour Nước Ngoài{" "}
              <span>
                <FontAwesomeIcon onClick={handleclick1} icon={faCaretDown} />
              </span>
            </div>
          </div>
        </Tippy>
      </div>
      <div className={cx("warpper-link-icon")}>
        <div>
          <Button login onClick={() => navigate("/login")}>
            Đăng Nhập
          </Button>
        </div>
        <div>
          <Button logout onClick={() => navigate("/register")}>
            Đăng Ky
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Header;
