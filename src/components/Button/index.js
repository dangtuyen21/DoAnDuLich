import classname from "classnames/bind";
import styles from "./Button.module.scss";
import { NavLink } from "react-router-dom";
const cx = classname.bind(styles);
function Button({
  to,
  href,
  txt,
  children,
  onClick,
  watchadd,
  watchadd2,
  login,
  logout,
  search,
  buttonproduct,
  buttonlocation,
  marginleft,
  pagingpage,
  pagingpageactive,
  purchase,
  LinkMore,
  underline,
  loginweb,
  forgotPass,
  linkregister,
  registerweb,
  btnBack,
  showhidden,
  loginadmin,
  itemmenu,
  btnDetailAdmin,
  btnLogoutAdmin,
  activeitem,
  servicebtn,
  btnAdd,
  btnSearch,
  btnSubmit,
  itemmenuactive,
  editbtn,
  payment,
  Booking,
  Cancel,
  btnInfor,
  btnLogout,
  btnExcel,
  addlike,
  watchdetail,
  book
}) {
  let Comp = "button";
  const props = {
    onClick,
  };
  if (to) {
    
    props.to = to;
    Comp = NavLink;
  } else if (href) {
    props.href = href;
    Comp = "a";
  }
  else if(txt)
  {
    Comp="div";
  }

  const classes = cx({
    watchadd,
    watchadd2,
    login,
    logout,
    search,
    buttonproduct,
    buttonlocation,
    marginleft,
    pagingpage,
    pagingpageactive,
    purchase,
    LinkMore,
    underline,
    loginweb,
    forgotPass,
    linkregister,
    registerweb,
    btnBack,
    showhidden,
    loginadmin,
    itemmenu,
    btnDetailAdmin,
    btnLogoutAdmin,
    servicebtn,
    activeitem,
    btnAdd,
    btnSearch,
    btnSubmit,
    itemmenuactive,
    editbtn,
    payment,
    Booking,
    Cancel,
    btnInfor,
    btnLogout,
    btnExcel,
    addlike,
    book,
    watchdetail
  });
  return (
    <Comp className={classes} {...props}>
      <span>{children}</span>
    </Comp>
  );
}

export default Button;
