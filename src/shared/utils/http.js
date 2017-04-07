const parseJSON = response =>
  new Promise(resolve => response.json()
    .then(json => resolve({
      status: response.status,
      ok: response.ok,
      json,
    })))

const request = (endpoint, options) =>
  new Promise((resolve, reject) => {
    fetch(endpoint, options)
      .then(parseJSON)
      .then((response) => {
        if (response.ok) {
          return resolve(response.json)
        }
        return reject(response.json.message)
      })
      .catch(err => reject(err.message))
  })

export default request
