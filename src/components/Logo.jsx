import "../styles/components/Logo.css";

const Logo = ({ justTitle = false }) => {
  return (
    <div className="logo">
      {!justTitle && (
        <div className="logo-chain">
          <span className="link" />
          <span className="link" />
          <span className="link timer-link">
            <span>15</span>
          </span>
        </div>
      )}

      <h1 className="logo-title">
        Palabras
        <span>Encadenadas</span>
      </h1>
    </div>
  );
};

export default Logo;
