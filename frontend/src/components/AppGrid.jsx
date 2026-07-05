import "../styles/app-grid.css";

function AppGrid({ className = "" }) {
  const classNames = ["app-grid", className].filter(Boolean).join(" ");

  return (
    <div className={classNames} aria-hidden="true">
      <div className="app-grid__container" />
    </div>
  );
}

export default AppGrid;
