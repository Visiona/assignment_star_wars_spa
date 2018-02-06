export function getResourceId(url) {
  let myArray = (/\d.*$/g).exec(url)
  return myArray[0]
}

export function getParams(query) {
  if (!query) {
    return { };
  }

  return (/^[?#]/.test(query) ? query.slice(1) : query)
    .split('&')
    .reduce((params, param) => {
      let [ key, value ] = param.split('=');
      params[key] = value ?
        decodeURIComponent(value.replace(/\+/g, ' ')) :
        '';
      return params;
    }, { });
}

export function getResourceName(path) {
  if (!path) {
    return ''
  }

  return (/\d.?/.test(path) ? path.slice(1).replace(/\/.*/g, '') : path.slice(1) )

}
