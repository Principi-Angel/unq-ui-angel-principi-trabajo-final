// ButtonCustom.jsx
import { useNavigate } from "react-router-dom";
import "../styles/components/CustomButton.css";

function CustomButton({ label, route }) {
  const navigate = useNavigate();

  return (
    <button className="custom-button" onClick={() => navigate(route)}>
      {label}
    </button>
  );
}

export default CustomButton;
