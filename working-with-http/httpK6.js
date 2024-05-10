import http from 'k6/http'
import { check } from 'k6'

const url = `http://localhost:8888/alphamart/api/basic/echo?name=domhallan`

export default function () {
  let response = http.get(url)

  console.log(`Response ${response.body}`)

  check(response, {
    'is status 200': (r) => r.status === 200
  })
}
