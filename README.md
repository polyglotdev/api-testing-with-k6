# Grafana K6

[course link](https://www.udemy.com/course/l6-rest-api-performance-testing-github-copilot-chatgpt-ai-assistant/learn/)

## K6

- K6 is a modern load testing tool
- It is developer centric
- It is open source
- It is scriptable

## K6 Features

- Scripting in Javascript
- Supports HTTP/1.1, HTTP/2, and Websockets
- Supports distributed testing
- Supports CI/CD integration
- Supports cloud execution
- Supports metrics and thresholds
- Supports plugins

## Performance Testing

## Functional Requirements

- Features and Capabilities
- What function the system should perform
- Tangible and can be tested directly
- Examples: Login, Register, Search, etc.

## Non-Functional Requirements

- Qualities beyond core functionality
- Describe how the system should perform
- Examples: Performance, Scalability, Security, Latency, etc.

## Types of Testing

1. Capacity Testing: how many users software handle before performance degrades
2. Load Testing: software can handle expected number of users without performance degrading
3. Stress Testing: simulating peak users, checking software's ability to handle peak load/traffic
4. Soak Testing: How well software performs under high activity level
5. Smoke Testing: Quick check to ensure core requirement works as expected.
6. Spike Testing: Testing software's ability to handle sudden spikes in traffic
7. Scalability Testing: Software's ability to scale up or down based on demand
8. Regression Testing: Testing software after changes to ensure no new bugs introduced

## Frontend vs Backend Testing

- Most software today is a combination of frontend and backend
- Performance testing can be done on both
- Common tools and methods
- Differ on approach and emphasis

## Frontend Testing

- assess performance at UI level
- round trp how and when page elements load
- Ensure positive user experience
- Possible metrics
  - Load time
  - Page size
  - Page load time
  - Page rendering time
  - Page interactivity
- Tools
  - Lighthouse
  - WebPageTest
  - GTmetrix
  - Pingdom
  - etc, etc

> 🧠 Don't just test the frontend, test the backend too!

## Backend Testing

- target core software functionality
- Asses non-functional requirements as cohesive unit
  - Scalability
  - Elasticity
  - Reliability
  - Availability
  - Resilience
  - Latency

## Backend vs Frontend Testing

- Broader scope
  - API testing
- Less resource intensive
- Does not test UX or UI
- Fundamental architecture rather than visible elements
- Wider range of elements to test
  - Database
  - Server
  - Network
  - etc
- can be less resource intensive

## K6 for API Performance Testing

- Load Profile: Shape of traffic generated by test over time
  - Duration: time it takes to run the entire test and its stages
  - Ramp up: Gradual increase of virtual users over a specified time during testing mimicking real-world traffic
  - Ramp down: The gradual decrease of the virtual users over a specified time after the test is complete
  - Throughput: Measure of how much load the test generates over time, usually defined in VU per second
  - Duration: Time it takes to run the entire test and its stages

## Smoke Testing

- Quick check to ensure core requirements work as expected
- Minimal number of VUs and short duration
- Check whether major issues exists on low traffic
- Must be passed before continue other test type

## Load Testing

- Test software's ability to handle expected number of users without performance degrading
- How software handles expected traffic
- Typically includes ramp up and ramp down
- Fixed period (constant VU's)

## Stress Testing

- Test simulates the traffic the software is expected to experience at the highest point
- Similar to load but higher throughput
- Example:
  - load test 50 VU's, while stress test 100 VU's

## Soak Testing

- Similar to load testing but over a longer period
- Some performance bottlenecks, such as those caused by memory management defects, appear only during longer periods of sustained activity
- Verify whether performance degrades over time
- Long Duration: hours, days, etc etc

## Spike Testing

- Sudden and massive traffic increase
- Good for simulating timed events like
  - Black Friday
  - Cyber Monday
  - etc

## Performance Testing Ethics

- Ethics on how to use K6
- Do not use K6 to attack or degrade a system
  - We can use test.k6.io for learning
  - Communicate with our team and stakeholders
  - DO NOT RUN TESTS ON PRODUCTION SYSTEMS WITHOUT PERMISSION

## Performance Testing Phases

- Planning: define scope, objectives, and requirements
- Scripting: create test cases and scenarios
- Execution: run the test on given environments
- Analysis: analyze the results and identify bottlenecks

## K6 Commands

- `k6 run script.js`: run the script
- `k6 run --vus 10 --duration 30s script.js`: run the script with 10 VUs for 30 seconds
- `k6 run --vus 10 --duration 30s --out influxdb=http://localhost:8086/myk6db script.js`: run the script with 10 VUs for 30 seconds and output the results to influxdb

## Reading the Graphs

> 🗒️ k6 runs multiple iterations in parallel with virtual users (VUs). In general terms, more virtual users means more simulated traffic.
>
> VUs are essentially parallel while(true) loops. Scripts are written in JavaScript, as ES6 modules, so you can break larger tests into smaller pieces or make reusable pieces as you like.

## The init context and the default function

For a test to run, you need to have *init* code, which prepares the test, and VU code, which makes requests.

Code in the init context defines functions and configures the test options (like `duration`).

Every test also has a `default` function, which defines the VU logic.

```javascript
import http from 'k6/http'

export function setup() {
  // init code
}
```

Init code runs first and is called only once per VU. The default code runs as many times or as long as is configured in the test options.

## Set Options

Instead of typing `--vus 10` and `--duration 30s` every time, you can set these options in the script, you can set the options in the script.

```javascript
import http from 'k6/http'
import { sleep } from 'k6'
export const options = {
  vus: 10,
  duration: '30s',
}
export default function () {
  http.get('http://test.k6.io')
  sleep(1)
}
```

## The `--vus` (or `-u`) flag

- Sets the number of virtual users(VUs) to simulate during the test
- Must be combined with
  - `--duration` flag or `-d` flag
  - `--iterations` flag or `-i` flag
  - `--stage` flag or `-s` flag
- `k6 run filename.js --vus 10 -d 30s`: run the script with 10 VUs for 30 seconds
- `k6 run filename.js --vus N -i I`: run the script with N VUs for I iterations
  - I must be >= to N
- Can combine with `--stage` flag or `-s` flag
- Set number of VU at **START** of the test
  - Idle until needed
- `--vus` or `-u` < maximum VU in `-s`
- `--vus` or `-u` > maximum VU in `-s`
- `k6 run filename.js --vus 10 -s 5m:20, 10m:3`: run the script with 10 VUs for 5 minutes and 20 VUs for 10 minutes
  - Start with 10 VUs
  - After 5 minutes, increase to 20 VUs
  - Decrease to 3 VU after 10 minutes
  - 7 VU idle

## Make K6 Sleep

- `sleep` function
- The `sleep` function pauses the VU for a specified amount of time
- Performance testing simulates user behavior
- `sleep` adds pauses between requests mimicking user behavior
- Enhances realism of test

## Use Cases for Sleep

- Suitable
  - Simulate sequential user behavior
  - Imitate actions taking time
  - High CPU usage
- Not Suitable
  - Stress test
  - High Traffic scenarios
  - Low CPU usage

> The docker command for testing the instructor code is

```bash
docker run --name ai-assistant-testing-sample -p 8888:8888 -d timpamungkas/ai-assistant-testing:1.0.0
```

Then you can access the Swagger UI at [here](http://localhost:8888/alphamart/swagger-ui/index.html#/)

## Metrics

- Output from K6
- Numbers that show specific aspects of the test
- Can be used to identify bottlenecks

## K6 Metric Types

1. Counter: Incremental value
   1. How many times a specific event occurred
2. Gauge: Current value
   1. Value at a specific point in time
3. Rate: Rate of change
   1. Percentage of an event
4. Trend: Value over time
   1. How a value changes over time(min, max, median, average, percentile)

Here is a link to the [Built in metrics](https://grafana.com/docs/k6/latest/using-k6/metrics/reference/)

## HTTP Specific Metrics





| Metric Name           | What is it?                                                                                                                                                                               | Significance                                                                                                                                       |
| --------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| `http_req_blocked`    | The time from when a request is made until the first byte is sent. This metric includes time spent on DNS lookup, TLS handshake (if applicable), and waiting for an available connection. | High values can indicate issues with network configuration, DNS resolution time, or connection saturation.                                         |
| `http_req_connecting` | The time spent establishing a new TCP connection. If a connection is reused (like in keep-alive), this will be zero.                                                                      | High values could indicate network issues or server-side limitations in handling new connections.                                                  |
| `http_req_duration`   | Total time for the request. It includes sending time, waiting, and receiving time.                                                                                                        | It's a key metric for overall request performance. Longer durations could indicate server-side processing delays, slow network, or backend issues. |
| `http_req_failed`     | Percentage of the requests that failed. A request is considered a failure if it doesn't return a response or returns an unexpected response (like an error status code).                  | High failure rates are critical and could point to server errors, capacity issues, or network problems.                                            |
| `http_req_receiving`  | Time spent receiving the response from the server.                                                                                                                                        | High values can indicate issues with the TLS configuration, network latency, or server-side processing of TLS connections.                         |
