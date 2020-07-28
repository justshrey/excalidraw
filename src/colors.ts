import oc from "open-color";

const REACT_APP_ENABLE_EXTRA_BRAND_COLORS =
  process.env.REACT_APP_ENABLE_EXTRA_BRAND_COLORS;

const extracolors: string[] = [];

if (REACT_APP_ENABLE_EXTRA_BRAND_COLORS !== "") {
  var arr = REACT_APP_ENABLE_EXTRA_BRAND_COLORS.split(",");
  arr.forEach((element) => {
    extracolors.push(element.trim());
  });
}

const shades = (i: number) => [
  oc.red[i],
  oc.pink[i],
  oc.grape[i],
  oc.violet[i],
  oc.indigo[i],
  oc.blue[i],
  oc.cyan[i],
  oc.teal[i],
  oc.green[i],
  oc.lime[i],
  oc.yellow[i],
  oc.orange[i],
];

export default {
  canvasBackground: [oc.white, oc.gray[0], oc.gray[1], ...shades(0)],
  elementBackground: ["transparent", oc.gray[4], oc.gray[6], ...shades(6)],
  elementStroke: [oc.black, oc.gray[8], oc.gray[7], ...shades(9)],
  extraColors: extracolors,
};
