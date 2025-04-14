import "./Button.css";
import { FaUser, FaLock } from "react-icons/fa";

function Button({type, placeholder, value, onChange, required}) {

    return (
    <div>
        <input type={type} placeholder={placeholder} value={value} onChange={onChange} required={required} />
        {type === "text" ? <FaUser className="icon"/> : type === "password" ? <FaLock className="icon"/> : ""}
    </div>
  )
}

export default Button