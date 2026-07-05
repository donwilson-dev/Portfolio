import placeholderAppIcon from "../assets/images/app-grid/placeholder-app-icon.png";

export const appGridConfig = {
  columns: 5,
  rows: 5,
};

export const appGridCells = Array.from(
  { length: appGridConfig.columns * appGridConfig.rows },
  (_, index) => {
    const row = Math.floor(index / appGridConfig.columns) + 1;
    const column = (index % appGridConfig.columns) + 1;

    return {
      id: `app-grid-cell-${row}-${column}`,
      row,
      column,
      placeholderIcon: placeholderAppIcon,
      activeApp: null,
    };
  },
);
