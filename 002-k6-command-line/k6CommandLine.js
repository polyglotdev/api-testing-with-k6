import http from 'k6/http'
import { sleep } from 'k6'

export default function () {
  http.get('https://test.k6.io')

  const durationInSeconds = (exec.instance.currentTest.duration / 1000).toFixed(
    2
  )
  console.log(
    `Iteration ${exec.scenario.iterationInTest} Duration: ${durationInSeconds} seconds` +
      ` VU: ${exec.vu.idInTest}` +
      `Script has been running for: ${durationInSeconds} seconds`
  )
}
