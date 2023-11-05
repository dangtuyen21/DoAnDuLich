import React, { useEffect, useState } from "react";
import style from "./AddTour.module.scss";
import classNames from "classnames/bind";
import JoditEditor from "jodit-react";

import "tippy.js/dist/tippy.css"; // optional
import CurrencyInput from "react-currency-input-field";
import Tippy from "@tippyjs/react/headless"; // different import path!
import Button from "../../../../components/Button/index";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowDown,
  faChevronDown,
  faImage,
  faSortDown,
  faUpload,
} from "@fortawesome/free-solid-svg-icons";
import FormData from "form-data";
import axios from "../../../../setup-axios/axios";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
const cx = classNames.bind(style);
export default function AddTour() {
  const countries = [
    {
      name: "NN",
      states: [
        {
          name: "Chau A",
          cities: [
            "Han Quoc",
            "Nhat Ban",
            "Thai Lan",
            "Campuchia",
            "Lao",
            "Myanmar",
            "Trung Quoc",
            "Singapore",
            "A rap Xe Ut",
            "Philippines",
            "UAE",
            "HongKong",
            "Quatar",
            "Maldives",
            "MaCao",
          ],
        },
        {
          name: "Chau Au",
          cities: [
            "Pháp",
            "Tây Ban Nha",
            "Thụy Điển",
            "Đức",
            "Phần Lan",
            "Na Uy",
            "Italy",
            "Đan Mạch",
            "Thụy Sĩ",
            "Hà Lan",
            "Anh",
          ],
        },
        {
          name: "Chau My",
          cities: [
            "Hoa Kỳ",
            "Canada",
            "Mexico",
            "Chile",
            "Argentina",
            "Brazil",
          ],
        },
      ],
    },
    {
      name: "TN",
      states: [
        {
          name: "Bac",
          cities: [
            "Ha Noi",
            "Sapa",
            "Vinh Ha Long",
            " Hà Giang",
            "Cao Bằng",
            "Lào Cai",
            "Bắc Kạn",
            "Lạng Sơn",
            "Tuyên Quang",
            "Yên Bái",
            "Thái Nguyên",
            "Phú Thọ",
            "Bắc Giang",
            "Lai Châu",
            "Điện Biên",
            "Sơn La",
            "Hòa Bình",
          ],
        },
        {
          name: "Trung",
          cities: [
            "Thanh Hoá",
            "Nghệ An",
            "Hà Tĩnh",
            "Quảng Bình",
            "Quảng Trị",
            "Thừa Thiên-Huế",
            " Kon Tum",
            "Gia Lai",
            "Đắc Lắc",
            "Đắc Nông",
            "Lâm Đồng",
            "Đà Nẵng",
            "Quảng Nam",
            "Quảng Ngãi",
            "Bình Định",
            "Phú Yên",
            "Khánh Hoà",
            "Ninh Thuận",
            "Bình Thuận",
          ],
        },
        {
          name: "Nam",
          cities: [
            "Bình Phước",
            "Bình Dương",
            "Đồng Nai",
            "Tây Ninh",
            "Bà Rịa Vũng Tàu",
            "Long An",
            "Đồng Tháp",
            "Tiền Giang",
            "An Giang",
            "Bến Tre",
            "Vĩnh Long",
            "Trà Vinh",
            "Hậu Giang",
            "Kiên Giang",
            "Sóc Trăng",
            "Bạc Liêu",
            "Cà Mau",
          ],
        },
      ],
    },
  ];
  const vehicles = ["Xe Khach", "May bay", "Tu tuc"];
  const [country, setCountry] = useState("Loai Tour");
  const [state, setState] = useState("Khu Vuc");
  const [city, setCity] = useState("Dia Diem Den");
  const [TenTour, setTenTour] = useState("");
  const [ngayDi, setNgayDi] = useState("");
  const [ngayVe, setNgayVe] = useState("");
  const [phuongTien, setPhuongTien] = useState("");
  const [quyMo, setQuyMo] = useState("");
  const [diaDiemDi, setDiaDiemDi] = useState("TP.HCM");
  const [giaTour, setGiaTour] = useState("");
  const [giamGia, setGiamGia] = useState("");
  const [hinhAnh1, setHinhAnh1] = useState(null);
  const [hinhAnh2, setHinhAnh2] = useState(null);
  const [hinhAnh3, setHinhAnh3] = useState(null);
  const [hinhAnh4, setHinhAnh4] = useState(null);
  const [hinhAnh5, setHinhAnh5] = useState(null);
  const [files, setFiles] = useState([]);
  const [imageName1, setImageName1] = useState("");
  const [imageName2, setImageName2] = useState("");
  const [imageName3, setImageName3] = useState("");
  const [imageName4, setImageName4] = useState("");
  const [imageName5, setImageName5] = useState("");
  const [imageName6, setImageName6] = useState("");
  const [lichTrinh1, setLichTrinh1] = useState("");
  const [lichTrinh2, setLichTrinh2] = useState("");
  const [lichTrinh3, setLichTrinh3] = useState("");
  const [lichTrinh4, setLichTrinh4] = useState("");
  const [lichTrinh5, setLichTrinh5] = useState("");
  const [lichTrinh6, setLichTrinh6] = useState("");
  const [lichTrinh7, setLichTrinh7] = useState("");
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);

  const handleChange2 = (event) => {
    setState(event.target.value);
    setCities(states.find((state) => state.name === event.target.value).cities);
  };
  const handleChange3 = (event) => {
    setCity(event.target.value);
  };
  const handleChange = (event) => {
    setCountry(event.target.value);
    setStates(
      countries.find((item) => item.name === event.target.value).states
    );
  };
  const handleAddTour = (e) => {
    e.preventDefault();
    let fd = new FormData();
    fd.append("imgone", hinhAnh1);
    fd.append("imgone", hinhAnh2);
    fd.append("imgone", hinhAnh3);
    fd.append("imgone", hinhAnh4);
    fd.append("imgone", hinhAnh5);
    fd.append("date", ngayDi);
    fd.append("date", ngayVe);
    fd.append("char", TenTour);
    fd.append("char", giaTour);
    fd.append("char", giamGia);
    fd.append("char", diaDiemDi);
    fd.append("number", quyMo);
    fd.append("editor", lichTrinh1);
    fd.append("editor", lichTrinh2);
    fd.append("editor", lichTrinh3);
    fd.append("editor", lichTrinh4);
    fd.append("editor", lichTrinh5);
    fd.append("editor", lichTrinh6);
    fd.append("editor", lichTrinh7);
    fd.append("select", country);
    fd.append("select", state);
    fd.append("select", city);
    fd.append("select", phuongTien);
    console.log(fd);
    axios
      .post("/tourserver/add-tour", fd, {
        headers: { "Content-Type": "multipart/form-data" },
      })
      .then((res) => {
        if (res && res.message === "success") {
          toast.success("da them tour moi");
        } else {
          toast.error("khong them duoc tour moi");
        }
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {}, []);
  return (
    <form className={cx("wrapper")} onSubmit={(e) => handleAddTour(e)}>
      <p className={cx("title")}>Nhap thong tin tour</p>
      <div className={cx("form")}>
        <div className={cx("left")}>
          <div className={cx("list-label")}>
            <label htmlFor="">Ten tour</label>
            <label htmlFor="">Ngay di</label>
            <label htmlFor="">Ngay ve</label>
            <label htmlFor="">Quy mo</label>
            <label htmlFor="">Phuong tien</label>
            <label htmlFor="">Gia tour</label>
            <label htmlFor="">Giam gia</label>
          </div>
          <div className={cx("list-input")}>
            <input
              type="text"
              value={TenTour}
              name="char"
              onChange={(e) => setTenTour(e.target.value)}
            />
            <input
              type="date"
              value={ngayDi}
              name="date"
              onChange={(e) => setNgayDi(e.target.value)}
            />
            <input
              type="date"
              value={ngayVe}
              name="date"
              onChange={(e) => setNgayVe(e.target.value)}
            />
            <input
              type="number"
              value={quyMo}
              name="number"
              onKeyDown={(evt) =>
                ["e", "E", "+", "-"].includes(evt.key) && evt.preventDefault()
              }
              onChange={(e) => setQuyMo(e.target.value)}
            />
            <select
              name="select"
              id=""
              value={phuongTien}
              onChange={(e) => setPhuongTien(e.target.value)}
            >
              <option>{phuongTien ? phuongTien : "Phuong Tien"}</option>
              {vehicles.map((item) => (
                <option value={item}>{item}</option>
              ))}
            </select>
            <input
              name="char"
              type="text"
              value={giaTour}
              onChange={(e) => setGiaTour(e.target.value)}
            />
            <input
              name="char"
              type="text"
              value={giamGia}
              onChange={(e) => setGiamGia(e.target.value)}
            />
          </div>
        </div>
        <div className={cx("right")}>
          <div className={cx("list-label")}>
            <label htmlFor="">Loai tour</label>
            <label htmlFor="">Khu vuc</label>
            <label htmlFor="">Dia diem di</label>
            <label htmlFor="">Dia diem den</label>
            <label htmlFor="">Trang thai</label>
          </div>
          <div className={cx("list-input")}>
            <select name="select" id="" value={country} onChange={handleChange}>
              <option value="">{country ? country : "country"}</option>
              {countries.map((item) => (
                <option value={item.name}>{item.name}</option>
              ))}
            </select>
            <select name="select" id="" onChange={handleChange2} value={state}>
              {" "}
              <option>{state ? state : "Loai Tour"}</option>
              {states.map((item) => (
                <option value={item.name}>{item.name}</option>
              ))}
            </select>
            <input
              type="text"
              value={diaDiemDi}
              name="char"
              onChange={(e) => setDiaDiemDi(e.target.value)}
              placeholder="TP.HCM"
              disabled
            />
            <select name="select" id="" value={city} onChange={handleChange3}>
              <option>Dia Diem Den</option>
              {cities.map((item) => (
                <option value={item}>{item}</option>
              ))}
            </select>
            <select name="" id=""></select>
          </div>
        </div>
      </div>
      <p className={cx("title")}>Upload hinh anh tour</p>
      <div className={cx("form-down")}>
        <div className={cx("left")}>
          <div className={cx("list-label")}>
            <label htmlFor="">Hinh anh bia</label>
            <label htmlFor="">Hinh anh 1</label>
            <label htmlFor="">Hinh anh 2</label>
            <label htmlFor="">Hinh anh 3</label>
            <label htmlFor="">Hinh anh 4</label>
          </div>
          <div className={cx("list-input")}>
            <input
              type="file"
              id="imagetwo"
              name="imgone"
              accept=".png, .jpg, .jpeg"
              style={{ display: "none" }}
              onChange={(e) => {
                setHinhAnh1(e.target.files[0]);
                setImageName2(e.target.files[0].name);
              }}
            />
            <div className={cx("form-upload")}>
              <p>{imageName2 ? imageName2 : ""}</p>
              <div className={cx("label")}>
                <label htmlFor="imagetwo">UPLOAD</label>
              </div>
            </div>
            <input
              type="file"
              name="files"
              id="imagethree"
              accept=".png, .jpg, .jpeg"
              style={{ display: "none" }}
              onChange={(e) => {
                setHinhAnh2(e.target.files[0]);
                setImageName3(e.target.files[0].name);
              }}
            />
            <div className={cx("form-upload")}>
              <p>{imageName3 ? imageName3 : ""}</p>
              <div className={cx("label")}>
                <label htmlFor="imagethree">UPLOAD</label>
              </div>              
            </div>
            <input
              type="file"
              name="imgone"
              id="imagefour"
              accept=".png, .jpg, .jpeg"
              style={{ display: "none" }}
              onChange={(e) => {
                setHinhAnh3(e.target.files[0]);
                setImageName4(e.target.files[0].name);
              }}
            />
            <div className={cx("form-upload")}>
              <p>{imageName4 ? imageName4 : ""}</p>
              <div className={cx("label")}>
                <label htmlFor="imagefour">UPLOAD</label>
              </div>
            </div>
            <input
              type="file"
              name="imgone"
              id="imagefive"
              accept=".png, .jpg, .jpeg"
              style={{ display: "none" }}
              onChange={(e) => {
                setHinhAnh4(e.target.files[0]);
                setImageName5(e.target.files[0].name);
              }}
            />
            <div className={cx("form-upload")}>
              <p>{imageName5 ? imageName5 : ""}</p>
              <div className={cx("label")}>
                <label htmlFor="imagefive">UPLOAD</label>
              </div>
            </div>
            <input
              type="file"
              name="imgone"
              id="imagesix"
              accept=".png, .jpg, .jpeg"
              style={{ display: "none" }}
              onChange={(e) => {
                setHinhAnh5(e.target.files[0]);
                setImageName6(e.target.files[0].name);
              }}
            />
            <div className={cx("form-upload")}>
              <p>{imageName6 ? imageName6 : ""}</p>
              <div className={cx("label")}>
                <label htmlFor="imagesix">UPLOAD</label>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={cx("list-tourist")}>
        <p className={cx("title")}>Lich trinh tour</p>
        <div className={cx("form-text")}>
          <label htmlFor="">Ngay 1</label>
          <JoditEditor
            value={lichTrinh1}
            name="editor"
            onChange={(e) => setLichTrinh1(e)}
            className=""
          />
        </div>
        <div className={cx("form-text")}>
          <label htmlFor="">Ngay 2</label>
          <JoditEditor
            value={lichTrinh2}
            name="editor"
            onChange={(e) => setLichTrinh2(e)}
            className=""
          />
        </div>
        <div className={cx("form-text")}>
          <label htmlFor="">Ngay 3</label>
          <JoditEditor
            value={lichTrinh3}
            name="editor"
            onChange={(e) => setLichTrinh3(e)}
            className=""
          />
        </div>
        <div className={cx("form-text")}>
          <label htmlFor="">Ngay 4</label>
          <JoditEditor
            value={lichTrinh4}
            name="editor"
            onChange={(e) => setLichTrinh4(e)}
            className=""
          />
        </div>
        <div className={cx("form-text")}>
          <label htmlFor="">Ngay 5</label>
          <JoditEditor
            name="editor"
            value={lichTrinh5}
            onChange={(e) => setLichTrinh5(e)}
            className=""
          />
        </div>
        <div className={cx("form-text")}>
          <label htmlFor="">Ngay 6</label>
          <JoditEditor
            name="editor"
            value={lichTrinh6}
            onChange={(e) => setLichTrinh6(e)}
            className=""
          />
        </div>
        <div className={cx("form-text")}>
          <label htmlFor="">Ngay 7</label>
          <JoditEditor
            name="editor"
            value={lichTrinh7}
            onChange={(e) => setLichTrinh7(e)}
            className=""
          />
        </div>
      </div>
      <div className={cx("btn-submit")}>
        <Link to="/tour" className={cx("text")}>
          <button className={cx("btn-cancel")}>TRO LAI</button>
        </Link>
        <button className={cx("btn-submit")} type="submit">
          THEM MOI
        </button>
      </div>
    </form>
  );
}
