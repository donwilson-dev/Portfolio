import appGridUnderlayer from "../assets/images/app-grid/placeholder-app-icon.webp";
import { appGridApplications } from "../data/appGridData.js";
import "../styles/app-grid.css";

function AppGridIcon({ application }) {
  const iconStyle = {
    "--app-icon-x": `${application.underlayerPosition.x}%`,
    "--app-icon-y": `${application.underlayerPosition.y}%`,
    "--app-icon-size": application.size ? `${application.size}%` : undefined,
  };

  return (
    <li className="app-grid__active-icon" style={iconStyle}>
      <img
        className="app-grid__active-icon-image"
        src={application.icon}
        alt=""
        draggable="false"
      />
    </li>
  );
}

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
        <ol className="app-grid__active-icons">
          {appGridApplications.map((application) => (
            <AppGridIcon key={application.id} application={application} />
          ))}
        </ol>
      </div>
    </div>
  );
}

export default AppGrid;
