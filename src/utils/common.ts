/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
interface SetMeta {
  title: string;
}

export const setMeta = ({ title }: SetMeta): void => {
  document.title = title;
};

export const pathToRegex = (path: string): RegExp =>
  new RegExp("^" + path.replace(/\//g, "\\/").replace(/:\w+/g, "(.+)") + "$");

export const fromEntries = (iterable: any): any => {
  return [...iterable].reduce((obj, [key, val]) => {
    obj[key] = val;
    return obj;
  }, {});
};

export const getUrlParams = (match: any) => {
  const values = match.result.slice(1);
  const keys = Array.from(match.route.path.matchAll(/:(\w+)/g)).map((res) => res[1]);

  return fromEntries(keys.map((key, i) => [key, values[i]]));
};

export const isInternalRoute = (url: string): boolean =>
  !url.startsWith("http://") && !url.startsWith("https://") && !url.startsWith("#");

export const lerp = (a: number, b: number, n: number): number => (1 - n) * a + n * b;

export const getMousePos = (e): any => {
  return {
    x: e.clientX,
    y: e.clientY,
  };
};
