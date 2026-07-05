import appGridUnderlayer from "../assets/images/app-grid/placeholder-app-icon.webp";
import "../styles/app-grid.css";

function AppGrid({ className = "" }) {
  const classNames = ["app-grid", className].filter(Boolean).join(" ");

  return (
    <div className={classNames} aria-hidden="true">
      <div className="app-grid__container">
        <img
          className="app-grid__underlayer"
          src={appGridUnderlayer}
          alt=""
          draggable="false"
        />
      </div>
    </div>
  );
}

export default AppGrid;
