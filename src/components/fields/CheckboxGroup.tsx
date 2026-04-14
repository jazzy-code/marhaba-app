import { memo } from "react"

import { Grid, FormControlLabel, Checkbox } from "@mui/material"

// A very good practice is to use "memo" to avoid unnecessary re-renders in "map" functions
// This improves the performance of the forms when using "formik"
const CheckboxGroup = memo(
  ({ items, name, selectedValues, onChange }: any) => {
    return (
      <Grid container spacing={1}>
        {items.map((item: any) => (
          <Grid size={4} key={item.id}>
            <FormControlLabel
              control={
                <Checkbox
                  name={name}
                  value={String(item.id)}
                  onChange={onChange}
                  checked={selectedValues?.includes(String(item.id))}
                />
              }
              label={item.name}
            />
          </Grid>
        ))}
      </Grid>
    )
  },
  (prevProps, nextProps) => {
    // Just render if the selected values changed
    return prevProps.selectedValues === nextProps.selectedValues && prevProps.items === nextProps.items
  }
)

CheckboxGroup.displayName = "CheckboxGroup"

export default CheckboxGroup
