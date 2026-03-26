import { FormLabel, MenuItem, TextField } from "@mui/material"
import { useFormikContext } from "formik"
import { Banknote, DollarSign } from "lucide-react"

import { onKeyPressValidateDecimalNumber } from "@/lib/onKeyPressValidations"

const PriceConfigurationForm = () => {
  const { values, handleChange, handleBlur, errors, touched } = useFormikContext<any>()
  return (
    <div className="md:col-span-3 p-6 bg-luxury-input dark:bg-zinc-800/50 rounded-lg border border-luxury-border mt-4">
      <h3 className="text-lg font-serif font-semibold text-deep-brown mb-6 flex items-center gap-2">
        <DollarSign className="text-primary-gold" />
        Price Configuration
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <div>
          <FormLabel>Price Model</FormLabel>
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
            <MenuItem value="FIXED">
              Fixed <small className="ms-1">(Ex. 150€)</small>
            </MenuItem>
            <MenuItem value="FROM">
              From <small className="ms-1">(Ex. Starting at 150€)</small>
            </MenuItem>
            <MenuItem value="CONSULT">To consult</MenuItem>
          </TextField>
        </div>
        <div>
          <FormLabel>Price</FormLabel>
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
            onBlur={handleBlur}
            onKeyDown={onKeyPressValidateDecimalNumber}
          />
        </div>
        <div>
          <FormLabel>Currency</FormLabel>
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
