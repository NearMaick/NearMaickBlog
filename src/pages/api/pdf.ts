import { NextApiRequest, NextApiResponse } from 'next'
import puppeteer from 'puppeteer'
import { getOptions } from './_lib/chromeOptions'

export default async function (
  request: NextApiRequest,
  response: NextApiResponse,
  isDev: boolean
): Promise<void> {
  const options = await getOptions(isDev)

  const browser = await puppeteer.launch(options)
  const page = await browser.newPage()

  await page.goto(`${process.env.NEXT_PUBLIC_API_URL}/api/serve`, {
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
