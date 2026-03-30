import { FormGroup, FormLabel, Grid, MenuItem, TextField } from "@mui/material"
import { FormikProvider, useFormik } from "formik"

import CheckboxGroup from "@/components/fields/CheckboxGroup"
import { useServices } from "@/context/ServicesContext"
import useFormikHelpers from "@/hooks/useFormikHelpers"
import { onKeyPressValidateIntegerNumber } from "@/lib/onKeyPressValidations"
import { formatServiceForm, formatServiceToEditForm } from "@/lib/services"

import { serviceLuxuryStayForm } from "../../lib/ServicesFormValues"
import ServiceBaseFormWrapper from "../formsHelpers/ServiceBaseFormWrapper"

const ServiceLuxuryStayForm = ({
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
  const { luxuryStay } = useServices()
  const { amenities, categories, rooms } = luxuryStay

  const formik = useFormik({
    initialValues: isCreate
      ? formatServiceForm(serviceLuxuryStayForm, serviceType)
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
          {/* BASIC INFO */}

          <Grid size={4}>
            <FormLabel>Total Guests</FormLabel>
            <TextField
              name="totalGuests"
              value={values.totalGuests}
              error={handleErrorField("totalGuests")}
              helperText={handleErrorFieldMessage("totalGuests")}
              onChange={handleChange}
              onBlur={handleBlur}
              onKeyDown={onKeyPressValidateIntegerNumber}
            />
          </Grid>

          <Grid size={4}>
            <FormLabel>Check In</FormLabel>
            <TextField
              type="time"
              name="checkIn"
              value={values.checkIn}
              error={handleErrorField("checkIn")}
              helperText={handleErrorFieldMessage("checkIn")}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </Grid>

          <Grid size={4}>
            <FormLabel>Check Out</FormLabel>
            <TextField
              type="time"
              name="checkOut"
              value={values.checkOut}
              error={handleErrorField("checkOut")}
              helperText={handleErrorFieldMessage("checkOut")}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </Grid>

          {/* RELATIONS */}

          <Grid size={6}>
            <FormLabel>Category</FormLabel>
            <TextField
              select
              name="luxuryStayCategoryId"
              value={values.luxuryStayCategoryId}
              error={handleErrorField("luxuryStayCategoryId")}
              helperText={handleErrorFieldMessage("luxuryStayCategoryId")}
              onChange={handleChange}
              onBlur={handleBlur}>
              {categories.map((category) => (
                <MenuItem key={category.id} value={category.id}>
                  {category.name}
                </MenuItem>
              ))}
            </TextField>
          </Grid>

          <Grid size={6}>
            <FormLabel>Room Type</FormLabel>
            <TextField
              select
              name="luxuryStayRoomId"
              value={values.luxuryStayRoomId}
              error={handleErrorField("luxuryStayRoomId")}
              helperText={handleErrorFieldMessage("luxuryStayRoomId")}
              onChange={handleChange}
              onBlur={handleBlur}>
              {rooms.map((room) => (
                <MenuItem key={room.id} value={room.id}>
                  {room.name}
                </MenuItem>
              ))}
            </TextField>
          </Grid>

          <Grid size={6}>
            <FormLabel>Cancelation Policy</FormLabel>
            <TextField
              select
              name="cancelation"
              value={values.cancelation}
              error={handleErrorField("cancelation")}
              helperText={handleErrorFieldMessage("cancelation")}
              onChange={handleChange}
              onBlur={handleBlur}>
              <MenuItem value="STRICT">Strict</MenuItem>
              <MenuItem value="FLEXIBLE">Flexible</MenuItem>
            </TextField>
          </Grid>

          {/* AMENITIES */}

          <Grid size={12}>
            <FormLabel>Amenities</FormLabel>
            <FormGroup>
              <CheckboxGroup
                items={amenities}
                name="luxuryStayHasAmenities"
                selectedValues={values.luxuryStayHasAmenities}
                onChange={handleChange}
              />
            </FormGroup>
          </Grid>
        </Grid>
      </ServiceBaseFormWrapper>
    </FormikProvider>
  )
}

export default ServiceLuxuryStayForm
