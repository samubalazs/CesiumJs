import { getCoordinates } from '@/server/locations/coordinates'
import { Coordinate } from '@/typings/coordinates'
import { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Coordinate[]>,
) {
  if (req.method === 'GET') {
    try {
      const data = await getCoordinates()
      return res.status(200).json(data)
    } catch (err: any) {
      if (err.statusCode) {
        return res.status(err.statusCode).send(err.message)
      } else {
        return res.status(500).end()
      }
    }
  } else {
    res.status(405).end()
  }
}
