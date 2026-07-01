import { useNavigate } from "react-router-dom";

const BackToMenuButton = () => {
  const navigate = useNavigate();

  const handleClick = () => { navigate("/"); };

  return (
    <button onClick={handleClick}>
      Menú
    </button>
  );
};

export default BackToMenuButton;