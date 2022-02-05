import React,{useState} from "react";

import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

export default function InputBox(props) {
    const [isVisible,setisVisible]=useState(false);
  return <div>
      {props.type==="password" && ((isVisible && <VisibilityIcon/>) || ((!isVisible) && <VisibilityOffIcon/>))}
      <input type={props.type} placeholder={props.placeholder}/>
     
  </div>;
}
