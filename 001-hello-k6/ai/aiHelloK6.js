import http from 'k6/http'
import { check } from 'k6'

export default function () {
  let res = http.get('https://www.instagram.com/')
  check(res, {
    'status is 200': (r) => r.status === 200
  })
  console.log('Response time was ' + String(res.timings.duration) + ' ms')
}
