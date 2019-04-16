// import GeoPattern from 'geopattern';

const GNEERATORS = [
  'octogons',
  'plusSigns',
  'xes',
  'triangles',
  'diamonds',
  'squares',
  'plaid',
  'sineWaves'
];

const COLORS = [
  '#c7ecee',
  '#39bae6',
  '#1976d2',
  '#ff4081',
  '#75cac3',
  '#ff5252',
  '#f3d516',
  '#aa96da',
  '#3f72af'
];

export const random = (function() {
  let seed = Date.now();
  const rnd = () => {
    seed = (seed * 9301 + 49297) % 233280;
    return seed / 233280;
  };

  return number => Math.ceil(rnd() * number);
})();

export const arrRandom = arr => arr[random(arr.length) % arr.length];

/* export function generateGeo(opts = {}) {
  const defaultOpts = {
    seed: Date.now().toString(),
    generator: arrRandom(GNEERATORS),
    color: arrRandom(COLORS)
  };
  const { seed, generator, color } = { ...defaultOpts, ...opts };
  return GeoPattern.generate(seed, {
    generator,
    color
  });
} */
