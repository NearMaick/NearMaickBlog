import { NextApiRequest, NextApiResponse } from 'next'
import ejs from 'ejs'
import path from 'path'

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

    return response.send(html)
  })
}
