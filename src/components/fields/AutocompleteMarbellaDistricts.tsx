import { Autocomplete, TextField } from "@mui/material"

import { MarbellaDistricts } from "@/constants"

const AutocompleteMarbellaDistricts = ({ value, onChange, onBlur }: any) => {
  return (
    <Autocomplete
      id="marbella-districts-free-solo"
      freeSolo
      value={value}
      onInputChange={onChange}
      options={MarbellaDistricts}
      renderInput={(params) => <TextField {...params} name="district" onBlur={onBlur} />}
    />
  )
}

export default AutocompleteMarbellaDistricts
