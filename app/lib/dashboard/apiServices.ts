"use server"

import { apiFetchServer } from "@/config/apiFetchServer"

export async function getServices() {
  try {
    const data = await apiFetchServer("/categories")

    return data
  } catch (error) {
    console.error("Error getting services:", error)
    return []
  }
}