export function post(url, data) {
  return fetch(url, {
    method: 'POST',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
}

export function get(url) {
  return fetch(url, {
    credentials: 'include'
  })
}
