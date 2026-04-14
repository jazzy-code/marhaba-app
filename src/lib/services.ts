import pluralize from "pluralize"

const manyToManyGlobalEntities = ["Language", "Country"]

const toLowerCaseFirst = (str: string): string => {
  if (!str) return str
  return str.charAt(0).toLowerCase() + str.slice(1)
}

export const formatServiceForm = (form: any, serviceType: any) => {
  return { ...form, serviceType: serviceType.key, serviceTypeId: serviceType.id }
}

export const formatServiceToEditForm = (form: any, manyToManyModelEntities: string[] = ["Amenity"]) => {
  const serviceType = toLowerCaseFirst(form.serviceType)
  const formatManyToManyModels: Record<string, any> = {}

  manyToManyModelEntities.forEach((model) => {
    const modelKey = `${serviceType}Has${pluralize(model)}`
    const fieldKey = manyToManyGlobalEntities.includes(model)
      ? `${toLowerCaseFirst(model)}Id`
      : `${serviceType}${model}Id`
    formatManyToManyModels[modelKey] = form[modelKey].map((item: any) => String(item[fieldKey]))
  })

  return { ...form, ...formatManyToManyModels }
}
