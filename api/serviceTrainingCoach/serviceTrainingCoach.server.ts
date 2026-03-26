"use server"

import { apiFetchServer } from "@/config/apiFetchServer"
const prefix = "/service-training-coach"

export async function getTrainingCoachDisciplines() {
  const data = await apiFetchServer(`${prefix}/disciplines`)
  if (data.error) return []
  return data
}
