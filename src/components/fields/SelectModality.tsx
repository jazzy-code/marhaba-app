import { MenuItem, TextField } from "@mui/material"

const SelectModality = ({ value, error, helperText, onChange, onBlur }: any) => {
  return (
    <TextField
      select
      name="modality"
      value={value}
      error={error}
      helperText={helperText}
      onChange={onChange}
      onBlur={onBlur}>
      <MenuItem value="SALE">Sell</MenuItem>
      <MenuItem value="RENT">Rent</MenuItem>
    </TextField>
  )
}

export default SelectModality
