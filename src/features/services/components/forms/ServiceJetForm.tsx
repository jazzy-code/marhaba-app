import { useEffect } from "react"

import { Checkbox, FormControlLabel, FormGroup, FormLabel, Grid, MenuItem, TextField } from "@mui/material"
import { FormikProvider, useFormik } from "formik"

import SelectModality from "@/components/fields/SelectModality"
import { useServices } from "@/context/ServicesContext"
import useFormikHelpers from "@/hooks/useFormikHelpers"
import { onKeyPressValidateDecimalNumber, onKeyPressValidateIntegerNumber } from "@/lib/onKeyPressValidations"
import { formatServiceForm, formatServiceToEditForm } from "@/lib/services"

import { serviceJetForm } from "../../lib/ServicesFormValues"

import ServiceBaseFormWrapper from "../../../../components/dashboard/services/ServiceBaseFormWrapper"

const ServiceJetForm = ({
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
  const { jet } = useServices()
  const { categories, caterings, amenities } = jet

  const formik = useFormik({
    initialValues: isCreate
      ? formatServiceForm(serviceJetForm, serviceType)
      : formatServiceToEditForm(serviceToEditForm, ["Amenity"]),
    validateOnChange: false,
    validateOnBlur: true,
    onSubmit: (values) => mutate(values)
  })

  const { values, handleChange, handleBlur, setFieldValue } = formik
  const { handleErrorField, handleErrorFieldMessage } = useFormikHelpers(formik)

  useEffect(() => {
    if (values.modality === "RENT") {
      setFieldValue("totalHours", "")
    }

    if (values.modality === "SALE") {
      setFieldValue("jetCateringId", "")
      setFieldValue("hourlyRate", "")
    }
  }, [setFieldValue, values.modality])

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

          <Grid size={6}>
            <FormLabel>Jet Category</FormLabel>
            <TextField
              select
              name="jetCategoryId"
              value={values.jetCategoryId}
              error={handleErrorField("jetCategoryId")}
              helperText={handleErrorFieldMessage("jetCategoryId")}
              onChange={handleChange}
              onBlur={handleBlur}>
              {categories.map((category) => (
                <MenuItem key={category.id} value={category.id}>
                  {category.name}
                </MenuItem>
              ))}
            </TextField>
          </Grid>

          <Grid size={3}>
            <FormLabel>NM Range</FormLabel>
            <TextField
              name="nmRange"
              value={values.nmRange}
              error={handleErrorField("nmRange")}
              helperText={handleErrorFieldMessage("nmRange")}
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
              error={handleErrorField("passengersCapacity")}
              helperText={handleErrorFieldMessage("passengersCapacity")}
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
              error={handleErrorField("lengthMeters")}
              helperText={handleErrorFieldMessage("lengthMeters")}
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
              error={handleErrorField("maxSpeed")}
              helperText={handleErrorFieldMessage("maxSpeed")}
              onChange={handleChange}
              onBlur={handleBlur}
              onKeyDown={onKeyPressValidateDecimalNumber}
            />
          </Grid>

          {values.modality === "RENT" && (
            <>
              <Grid size={6}>
                <FormLabel>Catering</FormLabel>
                <TextField
                  select
                  name="jetCateringId"
                  value={values.jetCateringId}
                  error={handleErrorField("jetCateringId")}
                  helperText={handleErrorFieldMessage("jetCateringId")}
                  onChange={handleChange}
                  onBlur={handleBlur}>
                  {caterings.map((catering) => (
                    <MenuItem key={catering.id} value={catering.id}>
                      {catering.name}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>

              <Grid size={6}>
                <FormLabel>Hourly Rate</FormLabel>
                <TextField
                  name="hourlyRate"
                  value={values.hourlyRate}
                  error={handleErrorField("hourlyRate")}
                  helperText={handleErrorFieldMessage("hourlyRate")}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  onKeyDown={onKeyPressValidateDecimalNumber}
                />
              </Grid>
            </>
          )}

          {values.modality === "SALE" && (
            <>
              <Grid size={6}>
                <FormLabel>Total Hours</FormLabel>
                <TextField
                  name="totalHours"
                  value={values.totalHours}
                  error={handleErrorField("totalHours")}
                  helperText={handleErrorFieldMessage("totalHours")}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  onKeyDown={onKeyPressValidateIntegerNumber}
                />
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
                          name="jetHasAmenities"
                          value={String(amenity.id)}
                          checked={values.jetHasAmenities.includes(String(amenity.id))}
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

export default ServiceJetForm
