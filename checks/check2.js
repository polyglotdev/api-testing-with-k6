import http from 'k6/http'
import { check } from 'k6'
import { sleep } from 'k6'

const url = `http://localhost:8888/alphamart/api/basic/fast-random`

export default function () {
  let response = http.get(url)

  console.log(`Response ${response.body}`)

  check(response, {
    'response status is 2xx': (r) => r.status === 200 && r.status < 300,
    'response body is not empty': (r) => r.body.length > 0,
    'response duration < 500ms': (r) => r.timings.duration < 500
  })

  // sleep for 1 second
  const sleepDuration = 1
  console.log(`Sleeping for ${sleepDuration} seconds`)
  sleep(sleepDuration)
}
