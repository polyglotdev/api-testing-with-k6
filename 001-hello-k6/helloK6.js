import http from "k6/http";

export default function () {
  const url = http.get("http://test.k6.io");
  const res = http.get(url);

  console.log(`Response time was ${res.timings.duration} ms`);
}
