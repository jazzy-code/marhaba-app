import {
  Checkbox,
  FormControlLabel,
  FormGroup,
  FormLabel,
  Grid,
  MenuItem,
  TextField,
  Button
} from "@mui/material"

import {
  YachtAmenities,
  YachtTripulationRoles
} from "@/lib/consts"

import {
  onKeyPressValidateDecimalNumber,
  onKeyPressValidateIntegerNumber
} from "@/lib/onKeyPressValidations"

const ServiceYachtForm = ({ formik }: any) => {
  const {
    values,
    handleChange,
    handleBlur,
    errors,
    touched,
    setFieldValue
  } = formik

  const addTripulation = () => {
    setFieldValue("yachtTripulations", [
      ...values.yachtTripulations,
      { name: "", yachtTripulationRoleId: "" }
    ])
  }

  const removeTripulation = (index: number) => {
    const updated = [...values.yachtTripulations]
    updated.splice(index, 1)
    setFieldValue("yachtTripulations", updated)
  }

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
        <FormLabel>Shipyard</FormLabel>

        <TextField
          name="shipyard"
          value={values.shipyard}
          error={touched.shipyard && Boolean(errors.shipyard)}
          helperText={touched.shipyard && errors.shipyard}
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

      <Grid size={3}>
        <FormLabel>Construction Year</FormLabel>

        <TextField
          name="constructionYear"
          value={values.constructionYear}
          error={touched.constructionYear && Boolean(errors.constructionYear)}
          helperText={touched.constructionYear && errors.constructionYear}
          onChange={handleChange}
          onBlur={handleBlur}
          onKeyDown={onKeyPressValidateIntegerNumber}
        />
      </Grid>

      <Grid size={3}>
        <FormLabel>Refit Year</FormLabel>

        <TextField
          name="refitYear"
          value={values.refitYear}
          error={touched.refitYear && Boolean(errors.refitYear)}
          helperText={touched.refitYear && errors.refitYear}
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

      <Grid size={3}>
        <FormLabel>Total Cabins</FormLabel>

        <TextField
          name="totalCabins"
          value={values.totalCabins}
          error={touched.totalCabins && Boolean(errors.totalCabins)}
          helperText={touched.totalCabins && errors.totalCabins}
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

      {/* RENT */}

      {values.modality === "RENT" && (
        <>
          <Grid size={4}>
            <FormLabel>Port</FormLabel>

            <TextField
              name="port"
              value={values.port}
              error={touched.port && Boolean(errors.port)}
              helperText={touched.port && errors.port}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </Grid>

          <Grid size={4}>
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

          <Grid size={4}>
            <FormLabel>Fuel Performance</FormLabel>

            <TextField
              name="fuelPerformance"
              value={values.fuelPerformance}
              error={touched.fuelPerformance && Boolean(errors.fuelPerformance)}
              helperText={touched.fuelPerformance && errors.fuelPerformance}
              onChange={handleChange}
              onBlur={handleBlur}
              onKeyDown={onKeyPressValidateDecimalNumber}
            />
          </Grid>

          <Grid size={3}>
            <FormLabel>APA (%)</FormLabel>

            <TextField
              name="apa"
              value={values.apa}
              error={touched.apa && Boolean(errors.apa)}
              helperText={touched.apa && errors.apa}
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
            <FormLabel>Motor Hours</FormLabel>

            <TextField
              name="motorHours"
              value={values.motorHours}
              error={touched.motorHours && Boolean(errors.motorHours)}
              helperText={touched.motorHours && errors.motorHours}
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
            {YachtAmenities.map(amenity => (
              <Grid size={4} key={amenity.value}>
                <FormControlLabel
                  control={
                    <Checkbox
                      name="yachtHasAmenities"
                      value={String(amenity.value)}
                      checked={values.yachtHasAmenities.includes(
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

      {/* CREW */}

      <Grid size={12}>
        <FormLabel>Crew</FormLabel>
      </Grid>

      <Grid size={12}>
        {values.yachtTripulations.map((crew: any, index: number) => (
          <Grid container spacing={2} key={index}>
            <Grid size={5}>
              <TextField
                placeholder="Crew name"
                name={`yachtTripulations.${index}.name`}
                value={crew.name}
                error={
                  touched.yachtTripulations?.[index]?.name &&
                  Boolean(errors.yachtTripulations?.[index]?.name)
                }
                helperText={
                  touched.yachtTripulations?.[index]?.name &&
                  errors.yachtTripulations?.[index]?.name
                }
                onChange={handleChange}
              />
            </Grid>

            <Grid size={5}>
              <TextField
                select
                name={`yachtTripulations.${index}.yachtTripulationRoleId`}
                value={crew.yachtTripulationRoleId}
                error={
                  touched.yachtTripulations?.[index]?.yachtTripulationRoleId &&
                  Boolean(errors.yachtTripulations?.[index]?.yachtTripulationRoleId)
                }
                helperText={
                  touched.yachtTripulations?.[index]?.yachtTripulationRoleId &&
                  errors.yachtTripulations?.[index]?.yachtTripulationRoleId
                }
                onChange={handleChange}
              >
                {YachtTripulationRoles.map(role => (
                  <MenuItem key={role.value} value={role.value}>
                    {role.label}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>

            <Grid size={2}>
              <Button color="error" onClick={() => removeTripulation(index)}>
                Remove
              </Button>
            </Grid>
          </Grid>
        ))}
      </Grid>

      <Grid size={12}>
        <Button variant="outlined" onClick={addTripulation}>
          Add Crew Member
        </Button>
      </Grid>
    </>
  )
}

export default ServiceYachtForm