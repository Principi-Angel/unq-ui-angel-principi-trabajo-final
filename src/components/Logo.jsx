import "../styles/components/Logo.css";

const Logo = ({ justTitle = false, small = false }) => {
  return (
    <div className={`logo ${small ? "logo-small" : ""} ${justTitle ? "logo-title-only" : ""}`}>
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
        <span className="logo-word-primary">Palabras</span>
        <span className="logo-word-accent">Encadenadas</span>
      </h1>
    </div>
  );
};

export default Logo;