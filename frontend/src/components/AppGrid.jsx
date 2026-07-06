import { useState } from "react";
import appGridUnderlayer from "../assets/images/app-grid/placeholder-app-icon.webp";
import { appGridApplications } from "../data/appGridData.js";
import "../styles/app-grid.css";

function AppGridIcon({ application, index, isReplay, onActivate }) {
  const iconStyle = {
    "--app-icon-delay": `${index * 150}ms`,
    "--app-icon-x": `${application.underlayerPosition.x}%`,
    "--app-icon-y": `${application.underlayerPosition.y}%`,
    "--app-icon-size": application.size ? `${application.size}%` : undefined,
  };
  const iconClassName = [
    "app-grid__active-icon",
    isReplay ? "app-grid__active-icon--replay" : "",
  ]
    .filter(Boolean)
    .join(" ");

  const handleKeyDown = (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      onActivate(application.id);
    }
  };

  return (
    <li
      aria-label={`Replay ${application.name} icon transition`}
      className={iconClassName}
      onClick={() => onActivate(application.id)}
      onKeyDown={handleKeyDown}
      role="button"
      style={iconStyle}
      tabIndex={0}
    >
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
  const [iconTransitionCounts, setIconTransitionCounts] = useState({});
  const classNames = ["app-grid", className].filter(Boolean).join(" ");

  const replayIconTransition = (id) => {
    setIconTransitionCounts((currentCounts) => ({
      ...currentCounts,
      [id]: (currentCounts[id] ?? 0) + 1,
    }));
  };

  return (
    <div className={classNames}>
      <div className="app-grid__container">
        <img
          className="app-grid__underlayer"
          src={appGridUnderlayer}
          alt=""
          draggable="false"
        />
        <ol className="app-grid__active-icons">
          {appGridApplications.map((application, index) => (
            <AppGridIcon
              application={application}
              index={index}
              isReplay={(iconTransitionCounts[application.id] ?? 0) > 0}
              key={`${application.id}-${iconTransitionCounts[application.id] ?? 0}`}
              onActivate={replayIconTransition}
            />
          ))}
        </ol>
      </div>
    </div>
  );
}

export default AppGrid;
