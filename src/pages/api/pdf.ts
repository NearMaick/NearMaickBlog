import { NextApiRequest, NextApiResponse } from 'next'
import puppeteer from 'puppeteer'

export default async function (
  request: NextApiRequest,
  response: NextApiResponse
): Promise<void> {
  const browser = await puppeteer.launch({ headless: true })
  const page = await browser.newPage()

  await page.goto('http://localhost:3000/api/serve', {
    waitUntil: 'networkidle0'
  })

  const pdf = await page.pdf({
    printBackground: true,
    format: 'letter',
    margin: {
      top: '20px',
      bottom: '40px',
      left: '20px',
      right: '20px'
    }
  })

  await browser.close()

  response.setHeader('Content-Type', 'application/pdf')

  return response.send(pdf)
}
