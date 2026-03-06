export const createCardElement = (tag, attributes, ...contents) => {
  const element = document.createElement(tag);
  for (const [key, value] of Object.entries(attributes)) {
    element.setAttribute(key, value);
  }

  if (contents.length === 1 && typeof contents[0] === "string") {
    element.textContent = contents;
    return element;
  }

  element.append(...contents.map((content) => createCardElement(...content)));
  return element;
};

export const cls = (className) => ({ class: className });

export const ELEMENT = {
  DIV: "div",
  H2: "h2",
  P: "p",
  IMG: "img",
  LEGEND: "legend",
};
