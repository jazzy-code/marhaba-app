import { FormLabel, MenuItem, TextField } from "@mui/material"
import { useFormikContext } from "formik"
import { Banknote, DollarSign } from "lucide-react"

import { useCurrency } from "@/hooks/useCurrency"
import { onKeyPressValidateDecimalNumber } from "@/lib/onKeyPressValidations"

const PriceConfigurationForm = () => {
  const { values, handleChange, handleBlur, setFieldValue } = useFormikContext<any>()

  const { formatStringCurrency } = useCurrency(values.currency)

  const handleCurrencyOnBlur = (e: { target: { name: any; value: any } }) => {
    const { name, value } = e.target
    handleBlur(e)
    setFieldValue(name, formatStringCurrency(value))
  }

  return (
    <div className="md:col-span-3 p-6 bg-luxury-input dark:bg-zinc-800/50 rounded-lg border border-luxury-border mt-4">
      <h3 className="text-lg font-serif font-semibold text-deep-brown mb-6 flex items-center gap-2">
        <DollarSign className="text-primary-gold" />
        Price Configuration
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <div>
          <FormLabel required>Price Model</FormLabel>
          <TextField
            select
            name="priceModel"
            value={values.priceModel}
            sx={{
              "& .MuiSelect-select": {
                backgroundColor: "white"
              }
            }}
            onChange={handleChange}
            onBlur={handleBlur}>
            <MenuItem value="FIXED">Fixed (Ex. 150€)</MenuItem>
            <MenuItem value="CONSULT">To consult</MenuItem>
            <MenuItem value="FROM">From (Ex. Starting at 100€)</MenuItem>
          </TextField>
        </div>
        <div>
          <FormLabel required={values.priceModel !== "CONSULT"}>Price</FormLabel>
          <TextField
            name="price"
            value={values.price}
            sx={{
              "& .MuiInputBase-root": {
                backgroundColor: "white !important"
              }
            }}
            slotProps={{
              input: {
                startAdornment: <Banknote />
              }
            }}
            onChange={handleChange}
            onBlur={handleCurrencyOnBlur}
            onKeyDown={onKeyPressValidateDecimalNumber}
          />
        </div>
        <div>
          <FormLabel required={values.priceModel !== "CONSULT"}>Currency</FormLabel>
          <TextField
            select
            name="currency"
            value={values.currency}
            sx={{
              "& .MuiSelect-select": {
                backgroundColor: "white"
              }
            }}
            onChange={handleChange}
            onBlur={handleBlur}>
            <MenuItem value="EUR">EUR (€)</MenuItem>
            <MenuItem value="USD">USD ($)</MenuItem>
          </TextField>
        </div>
      </div>
    </div>
  )
}

export default PriceConfigurationForm
