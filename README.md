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