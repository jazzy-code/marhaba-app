import { ChangeEvent, ReactNode, useState } from "react"

import { TextField, TextFieldProps } from "@mui/material"
import { FormikProps } from "formik"

/**
 * This component was created as an option to improve form performance when using “formik”.
 *
 * It works by maintaining its own internal state; when the onBlur event is triggered,
 * it sends the values to the formik form, so that formik avoids rendering the entire form
 * every time a key is pressed.
 *
 * The component receives the "formik" instance as a prop.
 * It can accept any native ·MUI TextField" prop.
 * We only handle the state, onChange, and onBlur internally
 */

type TextFieldFormikProps = TextFieldProps & {
  formik: FormikProps<any>
  name: string
  select?: boolean
  children?: ReactNode
}
const TextFieldFormik = ({ formik, name, select, children, ...props }: TextFieldFormikProps) => {
  const [localValue, setLocalValue] = useState(formik.values[name] || "")

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setLocalValue(e.target.value)
  }

  const onBlur = (e: any) => {
    formik.setFieldValue(name, e.target.value) // Sync with formik after onBlur
    formik.handleBlur(e)
  }

  if (select) {
    return (
      <TextField {...props} name={name} value={localValue} onChange={onChange} onBlur={onBlur} select>
        {children}
      </TextField>
    )
  }

  return <TextField {...props} name={name} value={localValue} onChange={onChange} onBlur={onBlur} />
}

export default TextFieldFormik
