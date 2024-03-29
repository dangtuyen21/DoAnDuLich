import React, { useEffect, useState } from "react";
import styles from "./Price.module.scss";
import classNames from "classnames/bind";
import Button from "../../../components/Button";
import axios from "../../../setup-axios/axios";
import slugify from "react-slugify";
import dateFormat from "dayjs";

const cx = classNames.bind(styles);
export default function Price({ noiDen, noiDi, MaTour, NgayDi }) {
  const [valuemain, setarrayvaluemain] = useState([]);
 
 
  
  
  useEffect(() => {
    axios.post('/tour/tourhere',{noiDi,noiDen}).then((res) => {
      setarrayvaluemain(res.data);
      
    });
  }, [MaTour]);
  console.log(valuemain);
  // useEffect(() => {
  //   axios
  //     .post("/tour/tourhere", {
  //       DiaDiemDi: DiaDiemDi,
  //       DiaDiemDen: DiaDiemDen,
  //     })
  //     .then((response) => {
  //       setarrayvaluemain(response.data);
  //       console.log(response.data);
  //     });
  // }, [MaTour]);
  // useEffect(() => {
  //   axios.get(`tour/alltour/list/${MaTour}`).then((response) => {
  //     setvalue(response.data);
  //   });
  // }, [MaTour]);

  // if (valuemain.length === 0) {
  //   var unique = value.filter((item) => !valuemain.includes(item.MaTour));
  // } else {
  //   var unique = value.filter((item) => valuemain.includes(item.MaTour));
  // }

  // return (
  //   <div className={cx("wrapper")}>
  //     <div className={cx("box-line-1")}>
  //       <div>Ngày Khởi Hành</div>
  //       <div>Mã Tour</div>
  //       <div>Giá Tour</div>
  //       <div>Đợt Khuyến Mãi</div>
  //       <div>Khuyến Mãi</div>
  //       <div></div>
  //     </div>
  //     {valuemain.map((value, i) => {
  //       const price = new Intl.NumberFormat("vi-VN", {
  //         style: "currency",
  //         currency: "VND",
  //       }).format(value.GiaTour);
  //       const date = value.NgayDi;
  //       const datenew = dateFormat(date).format("DD/MM/YYYY");

  //       const datepost = dateFormat(date).format("YYYY/MM/DD");
  //       return (
  //         <div className={cx("box-line-2")}>
  //           <div>
  //             <span>{datenew}</span>
  //           </div>
  //           <div>
  //             <span>{value.LoaiTour + value.MaTour}</span>
  //           </div>
  //           <div>
  //             <span style={{ color: "#f7472e", fontWeight: 600 }}>{price}</span>
  //           </div>
  //           <div>
  //             <span>
  //               {value.ten_dotgiamgia}+ {value.ten_dotgiamgiathem}
  //             </span>
  //           </div>
  //           <div style={{ color: "#f7472e", fontWeight: 600 }}>
  //             <span>{value.mucgiamgia}% / Vé</span>
  //           </div>

  //           <div>
  //             <div className={cx("box-line-a")}>
  //               <Button
  //                 underline
  //                 txt
  //                 book
  //                 to={
  //                   "/bill/" +
  //                   slugify(value.TenTour) +
  //                   "/" +
  //                   value.MaTour +
  //                   "/" +
  //                   slugify(datepost) +
  //                   "/" +
  //                   value.mucgiamgia
  //                 }
  //               >
  //                 Đặt Tour
  //               </Button>
  //             </div>
  //           </div>
  //         </div>
  //       );
  //     })}
  //     {/* {unique.map((value, i) => {
  //       const price = new Intl.NumberFormat("vi-VN", {
  //         style: "currency",
  //         currency: "VND",
  //       }).format(value.GiaTour);
  //       const date = value.NgayDi;
  //       const datenew = dateFormat(date).format("DD/MM/YYYY");

  //       const datepost = dateFormat(date).format("YYYY/MM/DD");
  //       return (
  //         <div className={cx("box-line-2")}>
  //           <div>
  //             <span>{datenew}</span>
  //           </div>
  //           <div>
  //             <span>{value.LoaiTour + value.MaTour}</span>
  //           </div>
  //           <div>
  //             <span style={{ color: "#f7472e", fontWeight: 600 }}>{price}</span>
  //           </div>
  //           <div>
  //             <span>
  //               {value.ten_dotgiamgia}+{value.ten_dotgiamgiathem}
  //             </span>
  //           </div>
  //           <div style={{ color: "#f7472e", fontWeight: 600 }}>
  //             <span>{value.mucgiamgia}% / Vé</span>
  //           </div>
  //           <div>
  //             <div className={cx("box-line-a")}>
  //               <Button
  //                 underline
  //                 txt
  //                 book
  //                 to={
  //                   "/bill/" +
  //                   slugify(value.TenTour) +
  //                   "/" +
  //                   value.MaTour +
  //                   "/" +
  //                   slugify(datepost) +
  //                   "/" +
  //                   "0"
  //                 }
  //               >
  //                 Đặt Tour
  //               </Button>
  //             </div>
  //           </div>
  //         </div>
  //       );
  //     })} */}
  //   </div>
  // );
  return (
    <div className={cx("wrapper")}>
      <div className={cx("box-line-1")}>
        <div>Ngày Khởi Hành</div>
        <div>Mã Tour</div>
        <div>Giá Tour</div>
        <div>Đợt Khuyến Mãi</div>
        <div>Khuyến Mãi</div>
        <div></div>
      </div>
      {valuemain.map((value, i) => {
        if (value.mucgiamgia===null) {
          value.mucgiamgia=0
        }
        const price = new Intl.NumberFormat("vi-VN", {
          style: "currency",
          currency: "VND",
        }).format(value.GiaTour);
        const date = value.NgayDi;
        const datenew = dateFormat(date).format("DD/MM/YYYY");

        const datepost = dateFormat(date).format("YYYY/MM/DD");
        return (
          <div className={cx("box-line-2")}>
            <div>
              <span>{datenew}</span>
            </div>
            <div>
              <span>{value.LoaiTour + value.MaTour}</span>
            </div>
            <div>
              <span style={{ color: "#f7472e", fontWeight: 600 }}>{price}</span>
            </div>
            <div>
              <span>
                {value.ten_dotgiamgia} {value.ten_dotgiamgia===null ?"" : '+'} {value.ten_dotgiamgiathem}
              </span>
            </div>
            <div style={{ color: "#f7472e", fontWeight: 600 }}>
              <span>{value.mucgiamgia}% / Vé</span>
            </div>

            
              <div className={cx("box-line-a")}>
                <Button
                
                  
                  book
                  to={
                    "/bill/" +
                    slugify(value.TenTour) +
                    "/" +
                    value.MaTour +
                    "/" +
                    slugify(datepost) +
                    "/" +
                    value.mucgiamgia
                  }
                >
                  Đặt Tour
                </Button>
              </div>
            
          </div>
        );
      })}
      {/* {unique.map((value, i) => {
        const price = new Intl.NumberFormat("vi-VN", {
          style: "currency",
          currency: "VND",
        }).format(value.GiaTour);
        const date = value.NgayDi;
        const datenew = dateFormat(date).format("DD/MM/YYYY");

        const datepost = dateFormat(date).format("YYYY/MM/DD");
        return (
          <div className={cx("box-line-2")}>
            <div>
              <span>{datenew}</span>
            </div>
            <div>
              <span>{value.LoaiTour + value.MaTour}</span>
            </div>
            <div>
              <span style={{ color: "#f7472e", fontWeight: 600 }}>{price}</span>
            </div>
            <div>
              <span>
                {value.ten_dotgiamgia}+{value.ten_dotgiamgiathem}
              </span>
            </div>
            <div style={{ color: "#f7472e", fontWeight: 600 }}>
              <span>{value.mucgiamgia}% / Vé</span>
            </div>
            <div>
              <div className={cx("box-line-a")}>
                <Button
                  underline
                  txt
                  book
                  to={
                    "/bill/" +
                    slugify(value.TenTour) +
                    "/" +
                    value.MaTour +
                    "/" +
                    slugify(datepost) +
                    "/" +
                    "0"
                  }
                >
                  Đặt Tour
                </Button>
              </div>
            </div>
          </div>
        );
      })} */}
    </div>
  );
}
