import {
  Checkbox,
  FormControlLabel,
  FormGroup,
  FormLabel,
  Grid,
  MenuItem,
  TextField
} from "@mui/material"

import {
  PrivateEventAmenities,
  PrivateEventTypes
} from "@/lib/consts"

const ServicePrivateEventForm = ({ formik }: any) => {

  const {
    values,
    handleChange,
    handleBlur,
    errors,
    touched
  } = formik

  console.log(values)

  return (
    <>

      {/* EVENT TYPE */}

      <Grid size={6}>
        <FormLabel>Event Type</FormLabel>

        <TextField
          select
          name="privateEventTypeId"
          value={values.privateEventTypeId}
          error={touched.privateEventTypeId && Boolean(errors.privateEventTypeId)}
          helperText={touched.privateEventTypeId && errors.privateEventTypeId}
          onChange={handleChange}
          onBlur={handleBlur}
        >
          {PrivateEventTypes.map(type => (
            <MenuItem key={type.value} value={type.value}>
              {type.label}
            </MenuItem>
          ))}
        </TextField>
      </Grid>

      {/* CAPACITY */}

      <Grid size={3}>
        <FormLabel>Capacity</FormLabel>

        <TextField
          type="number"
          name="capacity"
          value={values.capacity}
          error={touched.capacity && Boolean(errors.capacity)}
          helperText={touched.capacity && errors.capacity}
          onChange={handleChange}
          onBlur={handleBlur}
        />
      </Grid>

      {/* LEAD TIME */}

      <Grid size={3}>
        <FormLabel>Lead Time (Days)</FormLabel>

        <TextField
          type="number"
          name="leadTimeDays"
          value={values.leadTimeDays}
          error={touched.leadTimeDays && Boolean(errors.leadTimeDays)}
          helperText={touched.leadTimeDays && errors.leadTimeDays}
          onChange={handleChange}
          onBlur={handleBlur}
        />
      </Grid>

      {/* AMENITIES */}

      <Grid size={12}>
        <FormLabel>Amenities</FormLabel>

        <FormGroup>

          <Grid container spacing={1}>

            {PrivateEventAmenities.map(amenity => (

              <Grid size={4} key={amenity.value}>

                <FormControlLabel
                  control={
                    <Checkbox
                      name="privateEventHasAmenities"
                      value={String(amenity.value)}
                      checked={values.privateEventHasAmenities.includes(
                        String(amenity.value)
                      )}
                      onChange={handleChange}
                    />
                  }
                  label={amenity.label}
                />

              </Grid>

            ))}

          </Grid>

        </FormGroup>
      </Grid>

    </>
  )
}

export default ServicePrivateEventForm