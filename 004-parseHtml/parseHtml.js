import { parseHTML } from 'k6/html'
import http from 'k6/http'

export default function () {
  const res = http.get('https://k6.io')
  const doc = parseHTML(res.body) // equivalent to res.html()
  const pageTitle = doc.find('head title').text()
  const langAttr = doc.find('html').attr('lang')

  console.log(`Page title: ${pageTitle}`)
  console.log(`Lang attribute: ${langAttr}`)
  console.log(`Number of images: ${doc.find('img').length}`)
}
