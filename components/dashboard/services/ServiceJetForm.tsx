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
  JetCategories,
  JetCaterings,
  JetAmenities
} from "@/lib/consts"

import {
  onKeyPressValidateDecimalNumber,
  onKeyPressValidateIntegerNumber
} from "@/lib/onKeyPressValidations"

import { useEffect } from "react"

const ServiceJetForm = ({ formik }: any) => {

  const {
    values,
    handleChange,
    handleBlur,
    errors,
    touched,
    setFieldValue
  } = formik

  useEffect(() => {

    if (values.modality === "RENT") {

      setFieldValue("sellPrice", "")
      setFieldValue("totalHours", "")

    }

    if (values.modality === "SALE") {

      setFieldValue("jetCateringId", "")
      setFieldValue("hourlyRate", "")

    }

  }, [setFieldValue, values.modality])

  return (
    <>

      {/* MODALITY */}

      <Grid size={6}>
        <FormLabel>Modality</FormLabel>

        <TextField
          select
          name="modality"
          value={values.modality}
          error={touched.modality && Boolean(errors.modality)}
          helperText={touched.modality && errors.modality}
          onChange={handleChange}
          onBlur={handleBlur}
        >
          <MenuItem value="SALE">Venta</MenuItem>
          <MenuItem value="RENT">Renta</MenuItem>
        </TextField>
      </Grid>

      {/* BASIC INFO */}

      <Grid size={6}>
        <FormLabel>Model</FormLabel>

        <TextField
          name="model"
          value={values.model}
          error={touched.model && Boolean(errors.model)}
          helperText={touched.model && errors.model}
          onChange={handleChange}
          onBlur={handleBlur}
        />
      </Grid>

      <Grid size={6}>
        <FormLabel>Jet Category</FormLabel>

        <TextField
          select
          name="jetCategoryId"
          value={values.jetCategoryId}
          error={touched.jetCategoryId && Boolean(errors.jetCategoryId)}
          helperText={touched.jetCategoryId && errors.jetCategoryId}
          onChange={handleChange}
          onBlur={handleBlur}
        >
          {JetCategories.map(category => (
            <MenuItem key={category.value} value={category.value}>
              {category.label}
            </MenuItem>
          ))}
        </TextField>
      </Grid>

      <Grid size={3}>
        <FormLabel>NM Range</FormLabel>

        <TextField
          name="nmRange"
          value={values.nmRange}
          error={touched.nmRange && Boolean(errors.nmRange)}
          helperText={touched.nmRange && errors.nmRange}
          onChange={handleChange}
          onBlur={handleBlur}
          onKeyDown={onKeyPressValidateDecimalNumber}
        />
      </Grid>

      <Grid size={3}>
        <FormLabel>Passengers Capacity</FormLabel>

        <TextField
          name="passengersCapacity"
          value={values.passengersCapacity}
          error={touched.passengersCapacity && Boolean(errors.passengersCapacity)}
          helperText={touched.passengersCapacity && errors.passengersCapacity}
          onChange={handleChange}
          onBlur={handleBlur}
          onKeyDown={onKeyPressValidateIntegerNumber}
        />
      </Grid>

      <Grid size={3}>
        <FormLabel>Length (m)</FormLabel>

        <TextField
          name="lengthMeters"
          value={values.lengthMeters}
          error={touched.lengthMeters && Boolean(errors.lengthMeters)}
          helperText={touched.lengthMeters && errors.lengthMeters}
          onChange={handleChange}
          onBlur={handleBlur}
          onKeyDown={onKeyPressValidateDecimalNumber}
        />
      </Grid>

      <Grid size={3}>
        <FormLabel>Max Speed</FormLabel>

        <TextField
          name="maxSpeed"
          value={values.maxSpeed}
          error={touched.maxSpeed && Boolean(errors.maxSpeed)}
          helperText={touched.maxSpeed && errors.maxSpeed}
          onChange={handleChange}
          onBlur={handleBlur}
          onKeyDown={onKeyPressValidateDecimalNumber}
        />
      </Grid>

      {/* RENT */}

      {values.modality === "RENT" && (
        <>

          <Grid size={6}>
            <FormLabel>Catering</FormLabel>

            <TextField
              select
              name="jetCateringId"
              value={values.jetCateringId}
              error={touched.jetCateringId && Boolean(errors.jetCateringId)}
              helperText={touched.jetCateringId && errors.jetCateringId}
              onChange={handleChange}
              onBlur={handleBlur}
            >
              {JetCaterings.map(catering => (
                <MenuItem key={catering.value} value={catering.value}>
                  {catering.label}
                </MenuItem>
              ))}
            </TextField>
          </Grid>

          <Grid size={6}>
            <FormLabel>Hourly Rate</FormLabel>

            <TextField
              name="hourlyRate"
              value={values.hourlyRate}
              error={touched.hourlyRate && Boolean(errors.hourlyRate)}
              helperText={touched.hourlyRate && errors.hourlyRate}
              onChange={handleChange}
              onBlur={handleBlur}
              onKeyDown={onKeyPressValidateDecimalNumber}
            />
          </Grid>

        </>
      )}

      {/* SALE */}

      {values.modality === "SALE" && (
        <>

          <Grid size={6}>
            <FormLabel>Sell Price</FormLabel>

            <TextField
              name="sellPrice"
              value={values.sellPrice}
              error={touched.sellPrice && Boolean(errors.sellPrice)}
              helperText={touched.sellPrice && errors.sellPrice}
              onChange={handleChange}
              onBlur={handleBlur}
              onKeyDown={onKeyPressValidateDecimalNumber}
            />
          </Grid>

          <Grid size={6}>
            <FormLabel>Total Hours</FormLabel>

            <TextField
              name="totalHours"
              value={values.totalHours}
              error={touched.totalHours && Boolean(errors.totalHours)}
              helperText={touched.totalHours && errors.totalHours}
              onChange={handleChange}
              onBlur={handleBlur}
              onKeyDown={onKeyPressValidateIntegerNumber}
            />
          </Grid>

        </>
      )}

      {/* AMENITIES */}

      <Grid size={12}>
        <FormLabel>Amenities</FormLabel>

        <FormGroup>
          <Grid container spacing={1}>
            {JetAmenities.map(amenity => (
              <Grid size={4} key={amenity.value}>
                <FormControlLabel
                  control={
                    <Checkbox
                      name="jetHasAmenities"
                      value={String(amenity.value)}
                      checked={values.jetHasAmenities.includes(
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

export default ServiceJetForm