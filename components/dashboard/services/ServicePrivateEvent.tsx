import { Checkbox, FormControlLabel, FormGroup, FormLabel, Grid, MenuItem, TextField } from "@mui/material"
import { FormikProvider, useFormik } from "formik"

import { useServices } from "@/context/ServicesContext"
import useFormikHelpers from "@/hooks/useFormikHelpers"
import { formatServiceForm, formatServiceToEditForm } from "@/lib/services"

import { servicePrivateEventForm } from "../lib/ServicesFormValues"

import ServiceBaseFormWrapper from "./ServiceBaseFormWrapper"

const ServicePrivateEventForm = ({
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
  const { privateEvent } = useServices()
  const { types, amenities } = privateEvent

  const formik = useFormik({
    initialValues: isCreate
      ? formatServiceForm(servicePrivateEventForm, serviceType)
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
            <FormLabel>Event Type</FormLabel>
            <TextField
              select
              name="privateEventTypeId"
              value={values.privateEventTypeId}
              error={handleErrorField("privateEventTypeId")}
              helperText={handleErrorFieldMessage("privateEventTypeId")}
              onChange={handleChange}
              onBlur={handleBlur}>
              {types.map((type) => (
                <MenuItem key={type.id} value={type.id}>
                  {type.name}
                </MenuItem>
              ))}
            </TextField>
          </Grid>

          <Grid size={3}>
            <FormLabel>Capacity</FormLabel>
            <TextField
              type="number"
              name="capacity"
              value={values.capacity}
              error={handleErrorField("capacity")}
              helperText={handleErrorFieldMessage("capacity")}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </Grid>

          <Grid size={3}>
            <FormLabel>Lead Time (Days)</FormLabel>
            <TextField
              type="number"
              name="leadTimeDays"
              value={values.leadTimeDays}
              error={handleErrorField("leadTimeDays")}
              helperText={handleErrorFieldMessage("leadTimeDays")}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </Grid>

          <Grid size={12}>
            <FormLabel>Amenities</FormLabel>
            <FormGroup>
              <Grid container spacing={1}>
                {amenities.map((amenity) => (
                  <Grid size={4} key={amenity.id}>
                    <FormControlLabel
                      control={
                        <Checkbox
                          name="privateEventHasAmenities"
                          value={String(amenity.id)}
                          checked={values.privateEventHasAmenities.includes(String(amenity.id))}
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

export default ServicePrivateEventForm
