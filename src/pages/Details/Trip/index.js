import * as React from "react";
import styles from "./Trip.module.scss";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import { useReactToPrint } from "react-to-print";
import TabPanel from "@mui/lab/TabPanel";
import HTMLReactParser from "html-react-parser";
import classNames from "classnames/bind";
import pq1 from "../../../../../travel-ui/src/assets/images/PhuQuoc/pq1.jpeg";
import HelpForm from "./HelpForm";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook, faPrint } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles);
export default function Trip({ trip1, trip2, trip3, all }) {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const handlScroll = () => {
      if (window.scrollY >= 1100 && window.scrollY <= 3550) {
        setShow(!show);
      } else {
        setShow(show);
      }
    };
    window.addEventListener("scroll", handlScroll);
    return () => {
      window.removeEventListener("scroll", handlScroll);
    };
  }, []);
  const [value, setValue] = useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const componentRef = React.useRef();

  const handlePrint = useReactToPrint({ content: () => componentRef.current });

  return (
    <div className={cx("wrapper")}>
      <h2 className={cx("wrapper-title")}>Lịch Trình Tour</h2>
      <button onClick={handlePrint} className={cx("wrapper-title-btn")}>
        <FontAwesomeIcon icon={faPrint} />
        Print Tour
      </button>{" "}
      (Vui Lòng Chọn Tất Cả Lịch Trình Tour Để In)
      <div className={cx("img-box")}>
        <Box sx={{ width: "100%", typography: "body1" }}>
          <TabContext value={value}>
            <Box
              sx={{ borderBottom: 1, borderColor: "divider", fontWeight: 600 }}
            >
              <TabList
                onChange={handleChange}
                aria-label="lab API tabs example"
              >
                <Tab label="Ngày 1" value="1" />
                <Tab label="Ngày 2" value="2" />
                <Tab label="Ngày 3" value="3" />
                <Tab label="Tất Cả" value="9" />
              </TabList>
            </Box>

            <TabPanel value="1"> {HTMLReactParser(`${trip1}`)}</TabPanel>
            <TabPanel value="2"> {HTMLReactParser(`${trip2}`)}</TabPanel>
            <TabPanel value="3">{HTMLReactParser(`${trip3}`)}</TabPanel>
            <TabPanel ref={componentRef} value="9">
              {HTMLReactParser(`${trip1}`)}
              {HTMLReactParser(`${trip2}`)}
              {HTMLReactParser(`${trip3}`)}
              </TabPanel>
          </TabContext>
        </Box>
      </div>
      {/* <div className={cx("help")}>{show && <HelpForm />}</div> */}
    </div>
  );
}
