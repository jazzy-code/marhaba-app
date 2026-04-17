import { useEffect } from "react"

import { Checkbox, FormControlLabel, FormGroup, FormLabel, Grid, MenuItem, TextField, Button } from "@mui/material"
import { FormikProvider, useFormik } from "formik"

import SelectModality from "@/components/fields/SelectModality"
import { useServices } from "@/context/ServicesContext"
import useFormikHelpers from "@/hooks/useFormikHelpers"
import { onKeyPressValidateDecimalNumber, onKeyPressValidateIntegerNumber } from "@/lib/onKeyPressValidations"
import { formatServiceForm, formatServiceToEditForm } from "@/lib/services"
import type { ServiceFormProps } from "@/types/services"

import { serviceYachtForm } from "../../lib/ServicesFormValues"
import { serviceYachtFormSchema } from "../../schemas/serviceForm.schema"
import ServiceBaseFormWrapper from "../formsHelpers/ServiceBaseFormWrapper"

const ServiceYachtForm = ({
  serviceFiles,
  setServiceFiles,
  serviceToEditForm,
  serviceType,
  isCreate,
  mutate,
  isPending
}: ServiceFormProps) => {
  const { yacht, helpers } = useServices()
  const { amenities, tripulationRoles } = yacht
  const { countries } = helpers

  const formik = useFormik({
    initialValues: isCreate
      ? formatServiceForm(serviceYachtForm, serviceType)
      : formatServiceToEditForm(serviceToEditForm, ["Amenity", "Tripulation"]),
    validationSchema: serviceYachtFormSchema,
    validateOnChange: false,
    validateOnBlur: true,
    onSubmit: (values) => mutate(values)
  })

  const { errors, touched, values, handleChange, handleBlur, setFieldValue } = formik
  const { handleErrorField, handleErrorFieldMessage } = useFormikHelpers(formik)

  const addTripulation = () => {
    setFieldValue("yachtTripulation", [...values.yachtTripulation, { name: "", yachtTripulationRoleId: "" }])
  }

  const removeTripulation = (index: number) => {
    const updated = [...values.yachtTripulation]
    updated.splice(index, 1)
    setFieldValue("yachtTripulation", updated)
  }

  useEffect(() => {
    if (values.modality === "RENT") {
      setFieldValue("motorHours", "")
      setFieldValue("countryId", "")
    }

    if (values.modality === "SALE") {
      setFieldValue("port", "")
      setFieldValue("fuelPerformance", "")
      setFieldValue("apa", "")
      setFieldValue("realEstateHasServices", [])
    }
  }, [setFieldValue, values.modality])

  return (
    <FormikProvider value={formik}>
      <ServiceBaseFormWrapper
        isPending={isPending}
        isCreate={isCreate}
        serviceFiles={serviceFiles}
        setServiceFiles={setServiceFiles}>
        <Grid container spacing={3}>
          <Grid size={6}>
            <FormLabel required>Modality</FormLabel>
            <SelectModality
              value={values.modality}
              error={handleErrorField("modality")}
              helperText={handleErrorFieldMessage("modality")}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </Grid>

          <Grid size={6}>
            <FormLabel required>Shipyard</FormLabel>
            <TextField
              name="shipyard"
              value={values.shipyard}
              error={handleErrorField("shipyard")}
              helperText={handleErrorFieldMessage("shipyard")}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </Grid>

          <Grid size={6}>
            <FormLabel required>Model</FormLabel>
            <TextField
              name="model"
              value={values.model}
              error={handleErrorField("model")}
              helperText={handleErrorFieldMessage("model")}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </Grid>

          <Grid size={3}>
            <FormLabel required>Construction Year</FormLabel>
            <TextField
              name="constructionYear"
              value={values.constructionYear}
              error={handleErrorField("constructionYear")}
              helperText={handleErrorFieldMessage("constructionYear")}
              onChange={handleChange}
              onBlur={handleBlur}
              onKeyDown={onKeyPressValidateIntegerNumber}
            />
          </Grid>

          <Grid size={3}>
            <FormLabel required>Refit Year</FormLabel>
            <TextField
              name="refitYear"
              value={values.refitYear}
              error={handleErrorField("refitYear")}
              helperText={handleErrorFieldMessage("refitYear")}
              onChange={handleChange}
              onBlur={handleBlur}
              onKeyDown={onKeyPressValidateIntegerNumber}
            />
          </Grid>

          <Grid size={3}>
            <FormLabel required>Length (m)</FormLabel>
            <TextField
              name="lengthMeters"
              value={values.lengthMeters}
              error={handleErrorField("lengthMeters")}
              helperText={handleErrorFieldMessage("lengthMeters")}
              onChange={handleChange}
              onBlur={handleBlur}
              onKeyDown={onKeyPressValidateDecimalNumber}
            />
          </Grid>

          <Grid size={3}>
            <FormLabel required>Max Speed</FormLabel>
            <TextField
              name="maxSpeed"
              value={values.maxSpeed}
              error={handleErrorField("maxSpeed")}
              helperText={handleErrorFieldMessage("maxSpeed")}
              onChange={handleChange}
              onBlur={handleBlur}
              onKeyDown={onKeyPressValidateDecimalNumber}
            />
          </Grid>

          <Grid size={3}>
            <FormLabel required>Total Cabins</FormLabel>
            <TextField
              name="totalCabins"
              value={values.totalCabins}
              error={handleErrorField("totalCabins")}
              helperText={handleErrorFieldMessage("totalCabins")}
              onChange={handleChange}
              onBlur={handleBlur}
              onKeyDown={onKeyPressValidateIntegerNumber}
            />
          </Grid>

          <Grid size={3}>
            <FormLabel required>Passengers Capacity</FormLabel>
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

          {values.modality === "RENT" && (
            <>
              <Grid size={4}>
                <FormLabel required>Port</FormLabel>
                <TextField
                  name="port"
                  value={values.port}
                  error={handleErrorField("port")}
                  helperText={handleErrorFieldMessage("port")}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </Grid>

              <Grid size={4}>
                <FormLabel required>Fuel Performance</FormLabel>
                <TextField
                  name="fuelPerformance"
                  value={values.fuelPerformance}
                  error={handleErrorField("fuelPerformance")}
                  helperText={handleErrorFieldMessage("fuelPerformance")}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  onKeyDown={onKeyPressValidateDecimalNumber}
                />
              </Grid>

              <Grid size={4}>
                <FormLabel required>Country</FormLabel>
                <TextField
                  select
                  name="countryId"
                  value={values.countryId}
                  error={handleErrorField("countryId")}
                  helperText={handleErrorFieldMessage("countryId")}
                  onChange={handleChange}
                  onBlur={handleBlur}>
                  {countries.map((country) => (
                    <MenuItem key={country.id} value={country.id}>
                      {country.name}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>
            </>
          )}

          {values.modality === "SALE" && (
            <Grid size={6}>
              <FormLabel required>Motor Hours</FormLabel>
              <TextField
                name="motorHours"
                value={values.motorHours}
                error={handleErrorField("motorHours")}
                helperText={handleErrorFieldMessage("motorHours")}
                onChange={handleChange}
                onBlur={handleBlur}
                onKeyDown={onKeyPressValidateIntegerNumber}
              />
            </Grid>
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
                          name="yachtHasAmenities"
                          value={String(amenity.id)}
                          checked={values.yachtHasAmenities.includes(String(amenity.id))}
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

          <Grid size={12}>
            <FormLabel>Crew</FormLabel>
          </Grid>

          <Grid size={12}>
            {values.yachtTripulation.map((crew: any, index: number) => (
              <Grid container spacing={2} key={index}>
                <Grid size={5}>
                  <TextField
                    placeholder="Crew name"
                    name={`yachtTripulation.${index}.name`}
                    value={crew.name}
                    error={
                      (touched.yachtTripulation as any)?.[index]?.name &&
                      Boolean((errors.yachtTripulation as any)?.[index]?.name)
                    }
                    helperText={
                      (touched.yachtTripulation as any)?.[index]?.name &&
                      (errors.yachtTripulation as any)?.[index]?.name
                    }
                    onChange={handleChange}
                  />
                </Grid>

                <Grid size={5}>
                  <TextField
                    select
                    name={`yachtTripulation.${index}.yachtTripulationRoleId`}
                    value={crew.yachtTripulationRoleId}
                    error={
                      (touched.yachtTripulation as any)?.[index]?.yachtTripulationRoleId &&
                      Boolean((errors.yachtTripulation as any)?.[index]?.yachtTripulationRoleId)
                    }
                    helperText={
                      (touched.yachtTripulation as any)?.[index]?.yachtTripulationRoleId &&
                      (errors.yachtTripulation as any)?.[index]?.yachtTripulationRoleId
                    }
                    onChange={handleChange}>
                    {tripulationRoles.map((role) => (
                      <MenuItem key={role.id} value={role.id}>
                        {role.name}
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
        </Grid>
      </ServiceBaseFormWrapper>
    </FormikProvider>
  )
}

export default ServiceYachtForm
