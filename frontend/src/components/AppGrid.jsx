import { appGridCells, appGridConfig } from "../data/appGridData.js";
import "../styles/app-grid.css";

function AppCell({ cell }) {
  const cellStyle = {
    "--app-cell-row": cell.row,
    "--app-cell-column": cell.column,
  };
  const placeholderStyle = {
    "--app-placeholder-icon": `url(${cell.placeholderIcon})`,
  };

  return (
    <li className="app-cell" style={cellStyle}>
      <span
        className="app-cell__placeholder"
        aria-hidden="true"
        style={placeholderStyle}
      />
    </li>
  );
}

function AppGrid({ className = "" }) {
  const classNames = ["app-grid", className].filter(Boolean).join(" ");
  const gridStyle = {
    "--app-grid-columns": appGridConfig.columns,
    "--app-grid-rows": appGridConfig.rows,
  };

  return (
    <div className={classNames} aria-hidden="true">
      <ol className="app-grid__cells" style={gridStyle}>
        {appGridCells.map((cell) => (
          <AppCell key={cell.id} cell={cell} />
        ))}
      </ol>
    </div>
  );
}

export default AppGrid;
