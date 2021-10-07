import { db } from 'src/lib/db'

export const captures = () => {
  return db.capture.findMany()
}

export const createCapture = ({ input }) => {
  return db.capture.create({ data: input })
}
