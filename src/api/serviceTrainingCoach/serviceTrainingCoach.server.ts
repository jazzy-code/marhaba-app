"use server"

import { apiServer } from "@/api/apiServer"
const prefix = "/service-training-coach"

export async function getTrainingCoachDisciplines() {
  const data = await apiServer(`${prefix}/disciplines`)
  if (data.error) return []
  return data
}
