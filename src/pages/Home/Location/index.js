import classname from "classnames/bind";
import Button from "../../../components/Button";
import styles from "./Location.module.scss";
import ProductBox from "../../../components/Product";
import axios from 'axios';
import { Buffer } from 'buffer'

import { useState,useEffect } from "react";
const cx = classname.bind(styles);
function Location() {
  const [data,setdata]=useState([])
  useEffect(()=> {
    axios.get('http://localhost:9000/alltour')
    .then((response)=>{
         setdata(response.data.data)
    })

  },[])
  
  return (
    <div className={cx("wrapper")}>
      <h2>Hè 2023</h2>

      <div className={cx("location-tour")}>
        <Button buttonproduct>Trong Nước</Button>
        <Button buttonproduct>Châu Âu</Button>
        <Button buttonproduct>Đông Nam Á</Button>
        <Button buttonproduct>Châu Mỹ</Button>
        <Button buttonproduct>Châu Phi</Button>
      </div>
      <div className={cx("List-tour")}>
        {
          data.map(value=>{
            
            return (<ProductBox key={value.MaTour} id={value.MaTour} Name={value.DiaDiemDen}  NgayDi={value.NgayDi} img={value.HinhAnh.data}   container />)
          })
        }
        
      </div>
      <div className={cx("Watch-add")}>
        <Button to="/more-summer" LinkMore>
          Xem Thêm
        </Button>
      </div>
    </div>
  );
}

export default Location;
