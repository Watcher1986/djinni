/**
 * Matches a path against a set of routes and executes the corresponding function
 * @param {string} path The path to match
 * @param {object} routes The routes object to match against
 * @returns {*} The return value of the matched function or null if no match found
 */

function matchRoute(path, routes) {
  // Validate inputs
  if (typeof path !== 'string') {
    throw new Error('Path must be a string');
  }
  if (typeof routes !== 'object' || !routes) {
    throw new Error('Routes must be an object');
  }

  // Loop through routes and check for matches
  for (let route in routes) {
    const pattern = new RegExp(`^${route.replace(/:\w+/g, '(\\w+)')}$`);
    const matches = path.match(pattern);

    if (matches) {
      // Execute function if match is a function
      if (typeof routes[route] === 'function') {
        return routes[route](...matches.slice(1));
      }
      // Recurse if match is an object
      else if (typeof routes[route] === 'object') {
        return matchRoute(path, routes[route]);
      }
    }
  }

  // No match found
  return null;
}

export default matchRoute;
