import { jsxs, jsx } from "react/jsx-runtime";
function QRPlaceholder({ value, size = 160, className }) {
  const cells = 21;
  const cellSize = size / cells;
  let h = 0;
  for (let i = 0; i < value.length; i++) h = h * 31 + value.charCodeAt(i) >>> 0;
  const isOn = (x, y) => {
    const n = x * 374761393 + y * 668265263 + h >>> 0;
    return ((n ^ n >>> 13) * 1274126177 >>> 0) % 2 === 0;
  };
  const isFinder = (x, y) => {
    const inBox = (bx, by) => x >= bx && x < bx + 7 && y >= by && y < by + 7;
    return inBox(0, 0) || inBox(cells - 7, 0) || inBox(0, cells - 7);
  };
  const finderCell = (x, y) => {
    const local = (bx, by) => {
      const lx = x - bx, ly = y - by;
      if (lx === 0 || lx === 6 || ly === 0 || ly === 6) return true;
      if (lx >= 2 && lx <= 4 && ly >= 2 && ly <= 4) return true;
      return false;
    };
    if (x < 7 && y < 7) return local(0, 0);
    if (x >= cells - 7 && y < 7) return local(cells - 7, 0);
    if (x < 7 && y >= cells - 7) return local(0, cells - 7);
    return false;
  };
  const rects = [];
  for (let y = 0; y < cells; y++) {
    for (let x = 0; x < cells; x++) {
      const on = isFinder(x, y) ? finderCell(x, y) : isOn(x, y);
      if (on) rects.push(/* @__PURE__ */ jsx("rect", { x: x * cellSize, y: y * cellSize, width: cellSize, height: cellSize }, `${x}-${y}`));
    }
  }
  return /* @__PURE__ */ jsxs(
    "svg",
    {
      width: size,
      height: size,
      viewBox: `0 0 ${size} ${size}`,
      className,
      "aria-label": "QR code preview",
      children: [
        /* @__PURE__ */ jsx("rect", { width: size, height: size, fill: "white" }),
        /* @__PURE__ */ jsx("g", { fill: "currentColor", children: rects })
      ]
    }
  );
}
export {
  QRPlaceholder as Q
};
