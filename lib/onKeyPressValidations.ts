
const regExpNumber = /^\d*$/

export const validateNumericField = (value: any) => {
  return value === '' || regExpNumber.test(value)
}

export const onKeyPressValidateMaxNumber = (event: any, maxNumber: number) => {
  if (event.target.value >= maxNumber) {
    event.preventDefault()
  }
}

export const onKeyPressValidatePhoneNumber = (event: any) => {
  const key = event.keyCode
  if (key === 37 || key === 38 || key === 39 || key === 40 || key === 8 || key === 46 || key === 9) {
    return
  }

  // Solo permite dígitos del 0 al 9
  if (!regExpNumber.test(event.key)) {
    event.preventDefault()
  }

  if (event.target.value.length >= 10) {
    event.preventDefault()
  }
}

export const onKeyPressValidatePostalCode = (event: any) => {
  const key = event.keyCode
  if (key === 37 || key === 38 || key === 39 || key === 40 || key === 8 || key === 46 || key === 9) {
    return
  }

  // Solo permite dígitos del 0 al 9
  if (!regExpNumber.test(event.key)) {
    event.preventDefault()
  }

  if (event.target.value.length >= 5) {
    event.preventDefault()
  }
}

export const onKeyPressValidateIntegerNumber = (event: any) => {
  const key = event.keyCode

  // Permite teclas de navegación, borrar, tab, etc.
  if (
    key === 37 ||
    key === 38 ||
    key === 39 ||
    key === 40 || // flechas
    key === 8 ||
    key === 46 ||
    key === 9 // backspace, delete, tab
  ) {
    return
  }

  // Solo permite dígitos del 0 al 9
  if (!regExpNumber.test(event.key)) {
    event.preventDefault()
  }
}

export const onKeyPressValidateDecimalNumber = (event: any) => {
  const key = event.keyCode

  if (key === 37 || key === 38 || key === 39 || key === 40 || key === 8 || key === 46 || key === 9) {
    return
  }
  if (!/^[\d|.|,]+/.test(event.key)) event.preventDefault()
}

