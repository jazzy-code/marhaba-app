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
  LuxuryCarAmenities,
  ExteriorLuxuryCarColors,
  InteriorLuxuryCarColors
} from "@/lib/consts"

import {
  onKeyPressValidateDecimalNumber,
  onKeyPressValidateIntegerNumber
} from "@/lib/onKeyPressValidations"

const ServiceLuxuryCarsForm = ({ formik }: any) => {
  const {
    values,
    handleChange,
    handleBlur,
    errors,
    touched
  } = formik

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
        <FormLabel>Brand</FormLabel>

        <TextField
          name="brand"
          value={values.brand}
          error={touched.brand && Boolean(errors.brand)}
          helperText={touched.brand && errors.brand}
          onChange={handleChange}
          onBlur={handleBlur}
        />
      </Grid>

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
        <FormLabel>Edition</FormLabel>

        <TextField
          name="edition"
          value={values.edition}
          error={touched.edition && Boolean(errors.edition)}
          helperText={touched.edition && errors.edition}
          onChange={handleChange}
          onBlur={handleBlur}
        />
      </Grid>

      <Grid size={3}>
        <FormLabel>Year</FormLabel>

        <TextField
          name="year"
          value={values.year}
          error={touched.year && Boolean(errors.year)}
          helperText={touched.year && errors.year}
          onChange={handleChange}
          onBlur={handleBlur}
          onKeyDown={onKeyPressValidateIntegerNumber}
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

      {/* COLORS */}

      <Grid size={6}>
        <FormLabel>Exterior Color</FormLabel>

        <TextField
          select
          name="exteriorLuxuryCarColorId"
          value={values.exteriorLuxuryCarColorId}
          error={touched.exteriorLuxuryCarColorId && Boolean(errors.exteriorLuxuryCarColorId)}
          helperText={touched.exteriorLuxuryCarColorId && errors.exteriorLuxuryCarColorId}
          onChange={handleChange}
          onBlur={handleBlur}
        >
          {ExteriorLuxuryCarColors.map(color => (
            <MenuItem key={color.value} value={color.value}>
              {color.label}
            </MenuItem>
          ))}
        </TextField>
      </Grid>

      <Grid size={6}>
        <FormLabel>Interior Color</FormLabel>

        <TextField
          select
          name="interiorLuxuryCarColorId"
          value={values.interiorLuxuryCarColorId}
          error={touched.interiorLuxuryCarColorId && Boolean(errors.interiorLuxuryCarColorId)}
          helperText={touched.interiorLuxuryCarColorId && errors.interiorLuxuryCarColorId}
          onChange={handleChange}
          onBlur={handleBlur}
        >
          {InteriorLuxuryCarColors.map(color => (
            <MenuItem key={color.value} value={color.value}>
              {color.label}
            </MenuItem>
          ))}
        </TextField>
      </Grid>

      {/* RENT */}

      {values.modality === "RENT" && (
        <>
          <Grid size={3}>
            <FormLabel>Drive Mode</FormLabel>

            <TextField
              select
              name="driveMode"
              value={values.driveMode}
              error={touched.driveMode && Boolean(errors.driveMode)}
              helperText={touched.driveMode && errors.driveMode}
              onChange={handleChange}
              onBlur={handleBlur}
            >
              <MenuItem value="SELFDRIVE">Self Drive</MenuItem>
              <MenuItem value="CHAUFFEUR">Chauffeur</MenuItem>
            </TextField>
          </Grid>

          <Grid size={3}>
            <FormLabel>Transmission</FormLabel>

            <TextField
              select
              name="transmission"
              value={values.transmission}
              error={touched.transmission && Boolean(errors.transmission)}
              helperText={touched.transmission && errors.transmission}
              onChange={handleChange}
              onBlur={handleBlur}
            >
              <MenuItem value="AUTOMATIC">Automatic</MenuItem>
              <MenuItem value="MANUAL">Manual</MenuItem>
            </TextField>
          </Grid>

          <Grid size={3}>
            <FormLabel>Daily Rate</FormLabel>

            <TextField
              name="dailyRate"
              value={values.dailyRate}
              error={touched.dailyRate && Boolean(errors.dailyRate)}
              helperText={touched.dailyRate && errors.dailyRate}
              onChange={handleChange}
              onBlur={handleBlur}
              onKeyDown={onKeyPressValidateDecimalNumber}
            />
          </Grid>

          <Grid size={3}>
            <FormLabel>Security Deposit</FormLabel>

            <TextField
              name="securityDeposit"
              value={values.securityDeposit}
              error={touched.securityDeposit && Boolean(errors.securityDeposit)}
              helperText={touched.securityDeposit && errors.securityDeposit}
              onChange={handleChange}
              onBlur={handleBlur}
              onKeyDown={onKeyPressValidateDecimalNumber}
            />
          </Grid>

          <Grid size={3}>
            <FormLabel>Daily Kilometers</FormLabel>

            <TextField
              name="dailyKilometers"
              value={values.dailyKilometers}
              error={touched.dailyKilometers && Boolean(errors.dailyKilometers)}
              helperText={touched.dailyKilometers && errors.dailyKilometers}
              onChange={handleChange}
              onBlur={handleBlur}
              onKeyDown={onKeyPressValidateIntegerNumber}
            />
          </Grid>

          <Grid size={3}>
            <FormLabel>Minimum Age</FormLabel>

            <TextField
              name="minAge"
              value={values.minAge}
              error={touched.minAge && Boolean(errors.minAge)}
              helperText={touched.minAge && errors.minAge}
              onChange={handleChange}
              onBlur={handleBlur}
              onKeyDown={onKeyPressValidateIntegerNumber}
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
            <FormLabel>Kilometers</FormLabel>

            <TextField
              name="kilometers"
              value={values.kilometers}
              error={touched.kilometers && Boolean(errors.kilometers)}
              helperText={touched.kilometers && errors.kilometers}
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
            {LuxuryCarAmenities.map(amenity => (
              <Grid size={4} key={amenity.value}>
                <FormControlLabel
                  control={
                    <Checkbox
                      name="luxuryCarHasAmenities"
                      value={String(amenity.value)}
                      checked={values.luxuryCarHasAmenities.includes(
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

export default ServiceLuxuryCarsForm