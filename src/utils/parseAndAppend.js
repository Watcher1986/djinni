export const parseAndAppend = async (template, node) => {
  const parser = new DOMParser();
  const docFragment = parser.parseFromString(template, 'text/html').body;

  while (docFragment.firstChild) {
    await node.appendChild(docFragment.firstChild);
  }
};
