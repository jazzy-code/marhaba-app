export default function useFormikHelpers(formik: any) {
  const { errors, touched } = formik
  const handleErrorField = (field: string) => touched[field] && Boolean(errors[field])
  const handleErrorFieldMessage = (field: string) => touched[field] && errors[field] && String(errors[field])
  return { handleErrorField, handleErrorFieldMessage }
}
