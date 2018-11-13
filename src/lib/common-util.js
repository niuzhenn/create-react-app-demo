export function Fetch(method, url, body) {
  method = method.toUpperCase();
  if ('GET' === method) {
    body = undefined;
  } else {
    body = body && JSON.stringify(body);
  }

  return fetch(url, {
    method,
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body
  }).then((res) => {
    if (res.status >= 200 && res.status < 300) {
      return res.json();
    } else {
      return Promise.reject('---request fail---');
    }
  })
}