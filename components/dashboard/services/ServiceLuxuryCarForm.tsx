import { Checkbox, FormControlLabel, FormGroup, FormLabel, Grid, MenuItem, TextField } from "@mui/material"

import { FormikProvider, useFormik } from "formik"

import SelectModality from "@/components/fields/SelectModality"
import { useServices } from "@/context/ServicesContext"
import useFormikHelpers from "@/hooks/useFormikHelpers"
import { onKeyPressValidateDecimalNumber, onKeyPressValidateIntegerNumber } from "@/lib/onKeyPressValidations"
import { formatServiceForm, formatServiceToEditForm } from "@/lib/services"

import { serviceLuxuryCarForm } from "../lib/ServicesFormValues"

import ServiceBaseFormWrapper from "./ServiceBaseFormWrapper"

const ServiceLuxuryCarsForm = ({
  serviceToEditForm,
  serviceType,
  isCreate,
  mutate,
  isPending
}: {
  serviceToEditForm?: any
  serviceType: any
  isCreate: boolean
  mutate: (values: any) => void
  isPending: boolean
}) => {
  const { luxuryCar } = useServices()
  const { amenities, legalSituations, colors } = luxuryCar

  const formik = useFormik({
    initialValues: isCreate
      ? formatServiceForm(serviceLuxuryCarForm, serviceType)
      : formatServiceToEditForm(serviceToEditForm, ["Amenity"]),
    validateOnChange: false,
    validateOnBlur: true,
    onSubmit: (values) => mutate(values)
  })

  const { values, handleChange, handleBlur } = formik
  const { handleErrorField, handleErrorFieldMessage } = useFormikHelpers(formik)

  return (
    <FormikProvider value={formik}>
      <ServiceBaseFormWrapper isPending={isPending} isCreate={isCreate}>
        <Grid container spacing={3}>
          <Grid size={6}>
            <FormLabel>Modality</FormLabel>
            <SelectModality
              value={values.modality}
              error={handleErrorField("modality")}
              helperText={handleErrorFieldMessage("modality")}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </Grid>
          <Grid size={6}>
            <FormLabel>Brand</FormLabel>
            <TextField
              name="brand"
              value={values.brand}
              error={handleErrorField("brand")}
              helperText={handleErrorFieldMessage("brand")}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </Grid>
          <Grid size={4}>
            <FormLabel>Model</FormLabel>
            <TextField
              name="model"
              value={values.model}
              error={handleErrorField("model")}
              helperText={handleErrorFieldMessage("model")}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </Grid>
          <Grid size={4}>
            <FormLabel>Edition</FormLabel>
            <TextField
              name="edition"
              value={values.edition}
              error={handleErrorField("edition")}
              helperText={handleErrorFieldMessage("edition")}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </Grid>
          <Grid size={4}>
            <FormLabel>Year</FormLabel>
            <TextField
              name="year"
              value={values.year}
              error={handleErrorField("year")}
              helperText={handleErrorFieldMessage("year")}
              onChange={handleChange}
              onBlur={handleBlur}
              onKeyDown={onKeyPressValidateIntegerNumber}
            />
          </Grid>
          <Grid size={3}>
            <FormLabel>Transmission</FormLabel>
            <TextField
              select
              name="transmission"
              value={values.transmission}
              error={handleErrorField("transmission")}
              helperText={handleErrorFieldMessage("transmission")}
              onChange={handleChange}
              onBlur={handleBlur}>
              <MenuItem value="AUTOMATIC">Automatic</MenuItem>
              <MenuItem value="MANUAL">Manual</MenuItem>
            </TextField>
          </Grid>
          <Grid size={3}>
            <FormLabel>Motor Type</FormLabel>
            <TextField
              select
              name="motorType"
              value={values.motorType}
              error={handleErrorField("motorType")}
              helperText={handleErrorFieldMessage("motorType")}
              onChange={handleChange}
              onBlur={handleBlur}>
              <MenuItem value="GASOLINE">Gasoline</MenuItem>
              <MenuItem value="DIESEL">Disesel</MenuItem>
              <MenuItem value="ELECTRIC">Electric</MenuItem>
              <MenuItem value="HYBRID">Hybrid</MenuItem>
              <MenuItem value="GAS">Gas</MenuItem>
            </TextField>
          </Grid>
          <Grid size={3}>
            <FormLabel>Horse Power (CV)</FormLabel>
            <TextField
              name="cv"
              value={values.cv}
              error={handleErrorField("cv")}
              helperText={handleErrorFieldMessage("cv")}
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
              error={handleErrorField("passengersCapacity")}
              helperText={handleErrorFieldMessage("passengersCapacity")}
              onChange={handleChange}
              onBlur={handleBlur}
              onKeyDown={onKeyPressValidateIntegerNumber}
            />
          </Grid>
          <Grid size={6}>
            <FormLabel>Exterior Color</FormLabel>
            <TextField
              select
              name="luxuryCarExteriorColorId"
              value={values.luxuryCarExteriorColorId}
              error={handleErrorField("luxuryCarExteriorColorId")}
              helperText={handleErrorFieldMessage("luxuryCarExteriorColorId")}
              onChange={handleChange}
              onBlur={handleBlur}>
              {colors.map((color) => (
                <MenuItem key={color.id} value={color.id}>
                  {color.name}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid size={6}>
            <FormLabel>Interior Color</FormLabel>
            <TextField
              select
              name="luxuryCarInteriorColorId"
              value={values.luxuryCarInteriorColorId}
              error={handleErrorField("luxuryCarInteriorColorId")}
              helperText={handleErrorFieldMessage("luxuryCarInteriorColorId")}
              onChange={handleChange}
              onBlur={handleBlur}>
              {colors.map((color) => (
                <MenuItem key={color.id} value={color.id}>
                  {color.name}
                </MenuItem>
              ))}
            </TextField>
          </Grid>

          {values.modality === "RENT" && (
            <>
              <Grid size={3}>
                <FormLabel>Drive Mode</FormLabel>
                <TextField
                  select
                  name="driveMode"
                  value={values.driveMode}
                  error={handleErrorField("driveMode")}
                  helperText={handleErrorFieldMessage("driveMode")}
                  onChange={handleChange}
                  onBlur={handleBlur}>
                  <MenuItem value="SELFDRIVE">Self Drive</MenuItem>
                  <MenuItem value="CHAUFFEUR">Chauffeur</MenuItem>
                </TextField>
              </Grid>
              <Grid size={3}>
                <FormLabel>Security Deposit</FormLabel>
                <TextField
                  name="securityDeposit"
                  value={values.securityDeposit}
                  error={handleErrorField("securityDeposit")}
                  helperText={handleErrorFieldMessage("securityDeposit")}
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
                  error={handleErrorField("dailyKilometers")}
                  helperText={handleErrorFieldMessage("dailyKilometers")}
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
                  error={handleErrorField("minAge")}
                  helperText={handleErrorFieldMessage("minAge")}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  onKeyDown={onKeyPressValidateIntegerNumber}
                />
              </Grid>
            </>
          )}

          {values.modality === "SALE" && (
            <>
              <Grid size={4}>
                <FormLabel>Owner Type</FormLabel>
                <TextField
                  select
                  name="ownerType"
                  value={values.ownerType}
                  error={handleErrorField("ownerType")}
                  helperText={handleErrorFieldMessage("ownerType")}
                  onChange={handleChange}
                  onBlur={handleBlur}>
                  <MenuItem value="SINGLE">Only owner</MenuItem>
                  <MenuItem value="MULTIPLE">Multiple Owners</MenuItem>
                </TextField>
              </Grid>
              <Grid size={4}>
                <FormLabel>Kilometers</FormLabel>
                <TextField
                  name="kilometers"
                  value={values.kilometers}
                  error={handleErrorField("kilometers")}
                  helperText={handleErrorFieldMessage("kilometers")}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  onKeyDown={onKeyPressValidateIntegerNumber}
                />
              </Grid>
              <Grid size={4}>
                <FormLabel>Legal situation</FormLabel>
                <TextField
                  select
                  name="luxuryCarLegalSituationId"
                  value={values.luxuryCarLegalSituationId}
                  error={handleErrorField("luxuryCarLegalSituationId")}
                  helperText={handleErrorFieldMessage("luxuryCarLegalSituationId")}
                  onChange={handleChange}
                  onBlur={handleBlur}>
                  {legalSituations.map((legalSituation) => (
                    <MenuItem key={legalSituation.id} value={legalSituation.id}>
                      {legalSituation.name}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>
            </>
          )}

          <Grid size={12}>
            <FormLabel>Amenities</FormLabel>
            <FormGroup>
              <Grid container spacing={1}>
                {amenities.map((amenity) => (
                  <Grid size={4} key={amenity.id}>
                    <FormControlLabel
                      control={
                        <Checkbox
                          name="luxuryCarHasAmenities"
                          value={String(amenity.id)}
                          checked={values.luxuryCarHasAmenities.includes(String(amenity.id))}
                          onChange={handleChange}
                        />
                      }
                      label={amenity.name}
                    />
                  </Grid>
                ))}
              </Grid>
            </FormGroup>
          </Grid>
        </Grid>
      </ServiceBaseFormWrapper>
    </FormikProvider>
  )
}

export default ServiceLuxuryCarsForm
