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

  const filePath = path.join(__dirname, `${process.env.API_FILE_PATH}`)

  ejs.renderFile(filePath, { passengers }, (err, html) => {
    if (err) {
      return response.send(`Error loading file, ${err}`)
    }

    return response.send(html)
  })
}
