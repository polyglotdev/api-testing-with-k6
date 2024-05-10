import { sleep } from 'k6'
import http from 'k6/http'

export default function () {
  http.get('https://k6.io')
  sleep(Math.random() * 2)
  http.get('https://k6.io/features')
}
