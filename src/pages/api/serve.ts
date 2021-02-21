import { NextApiRequest, NextApiResponse } from 'next'
import ejs from 'ejs'
import path from 'path'
import pdf from 'html-pdf'

export default function (
  request: NextApiRequest,
  response: NextApiResponse
): void {
  const passengers = [
    {
      name: 'Joyce',
      flightNumber: 7859,
      time: '18h00'
    },
    {
      name: 'Brock',
      flightNumber: 7859,
      time: '18h00'
    },
    {
      name: 'Eve',
      flightNumber: 7859,
      time: '18h00'
    }
  ]

  const filePath = path.join(
    __dirname,
    'codes',
    'MyBlog',
    'src',
    'pages',
    'api',
    'print.ejs'
  )

  ejs.renderFile(filePath, { passengers }, (err, html) => {
    if (err) {
      return response.send('Error loading file')
    }

    const options = {
      height: '11.25in',
      width: '8.5in',
      header: {
        height: '20mm'
      },
      footer: {
        height: '20mm'
      }
    }

    pdf.create(html, options).toFile('report.pdf', (err, data) => {
      if (err) {
        return response.send('Error generating PDF file')
      }

      return response.send(html)
    })
  })
}
