import { Checkbox, FormControlLabel, FormGroup, FormLabel, Grid, MenuItem, TextField } from "@mui/material"
import { FormikProvider, useFormik } from "formik"

import SelectModality from "@/components/fields/SelectModality"
import { useServices } from "@/context/ServicesContext"
import { RealEstateAmenities } from "@/lib/consts"
import { onKeyPressValidateDecimalNumber, onKeyPressValidateIntegerNumber } from "@/lib/onKeyPressValidations"

import { serviceRealEstateForm } from "../lib/ServicesFormValues"

import ServiceBaseFormWrapper from "./ServiceBaseFormWrapper"

const ServiceRealEstateForm = ({
  serviceToEdit,
  isCreate,
  mutate,
  isPending
}: {
  serviceToEdit?: any
  isCreate: boolean
  mutate: (values: any) => void
  isPending: boolean
}) => {
  const { realEstate } = useServices()
  const { amenities, types, stayTypes, housingStatus } = realEstate

  const serviceDetails = { ...serviceToEdit }
  const { service = {} } = serviceToEdit
  delete serviceDetails.service

  const serviceToEditForm = serviceDetails?.id
    ? { ...service, ...serviceDetails, serviceType: service.serviceType.key }
    : null

  const formik = useFormik({
    initialValues: isCreate ? serviceRealEstateForm : serviceToEditForm,
    validateOnChange: false,
    validateOnBlur: true,
    onSubmit: (values) => mutate(values)
  })

  const { values, handleChange, handleBlur, errors, touched } = formik

  return (
    <FormikProvider value={formik}>
      <ServiceBaseFormWrapper isPending={isPending} isCreate={isCreate}>
        <Grid container spacing={3}>
          <Grid size={6}>
            <FormLabel>Modality</FormLabel>
            <SelectModality
              value={values.modality}
              error={touched.modality && Boolean(errors.modality)}
              helperText={touched?.modality && errors?.modality}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </Grid>
          <Grid size={6}>
            <FormLabel required>Type</FormLabel>
            <TextField
              select
              name="realEstateTypeId"
              value={values.realEstateTypeId}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.realEstateTypeId && Boolean(errors.realEstateTypeId)}
              helperText={touched.realEstateTypeId && String(errors.realEstateTypeId)}>
              {types.map((type) => (
                <MenuItem key={type.id} value={type.id}>
                  {type.name}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid size={4}>
            <FormLabel>Rooms</FormLabel>
            <TextField
              name="rooms"
              value={values.rooms}
              error={touched.rooms && Boolean(errors.rooms)}
              helperText={touched.rooms && String(errors.rooms)}
              onChange={handleChange}
              onBlur={handleBlur}
              onKeyDown={onKeyPressValidateIntegerNumber}
            />
          </Grid>
          <Grid size={4}>
            <FormLabel>Full Bathrooms</FormLabel>
            <TextField
              name="fullBathrooms"
              value={values.fullBathrooms}
              error={touched.fullBathrooms && Boolean(errors.fullBathrooms)}
              helperText={touched.fullBathrooms && String(errors.fullBathrooms)}
              onChange={handleChange}
              onBlur={handleBlur}
              onKeyDown={onKeyPressValidateIntegerNumber}
            />
          </Grid>
          <Grid size={4}>
            <FormLabel>Full Bathrooms</FormLabel>
            <TextField
              name="halfBathrooms"
              value={values.halfBathrooms}
              error={touched.halfBathrooms && Boolean(errors.halfBathrooms)}
              helperText={touched.halfBathrooms && String(errors.halfBathrooms)}
              onChange={handleChange}
              onBlur={handleBlur}
              onKeyDown={onKeyPressValidateIntegerNumber}
            />
          </Grid>
          <Grid size={6}>
            <FormLabel>Surface Built (m2)</FormLabel>
            <TextField
              name="surfaceBuiltMt2"
              value={values.surfaceBuiltMt2}
              error={touched.surfaceBuiltMt2 && Boolean(errors.surfaceBuiltMt2)}
              helperText={touched.surfaceBuiltMt2 && String(errors.surfaceBuiltMt2)}
              onChange={handleChange}
              onBlur={handleBlur}
              onKeyDown={onKeyPressValidateDecimalNumber}
            />
          </Grid>
          <Grid size={6}>
            <FormLabel>Surface Plot(m2)</FormLabel>
            <TextField
              name="surfacePlotMt2"
              value={values.surfacePlotMt2}
              error={touched.surfacePlotMt2 && Boolean(errors.surfacePlotMt2)}
              helperText={touched.surfacePlotMt2 && String(errors.surfacePlotMt2)}
              onChange={handleChange}
              onBlur={handleBlur}
              onKeyDown={onKeyPressValidateDecimalNumber}
            />
          </Grid>
          <Grid size={6}>
            <FormLabel>Superfice Terrace (m2)</FormLabel>
            <TextField
              name="surfaceTerraceMt2"
              value={values.surfaceTerraceMt2}
              error={touched.surfaceTerraceMt2 && Boolean(errors.surfaceTerraceMt2)}
              helperText={touched.surfaceTerraceMt2 && String(errors.surfaceTerraceMt2)}
              onChange={handleChange}
              onBlur={handleBlur}
              onKeyDown={onKeyPressValidateDecimalNumber}
            />
          </Grid>
          {values.modality === "SALE" && (
            <Grid size={6}>
              <FormLabel>Housing Status</FormLabel>
              <TextField
                select
                name="realEstateHousingStatusId"
                value={values.realEstateHousingStatusId}
                error={touched.realEstateHousingStatusId && Boolean(errors.realEstateHousingStatusId)}
                helperText={touched.realEstateHousingStatusId && String(errors.realEstateHousingStatusId)}
                onChange={handleChange}
                onBlur={handleBlur}>
                {housingStatus.map((type) => (
                  <MenuItem key={type.id} value={type.id}>
                    {type.name}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
          )}
          {values.modality === "RENT" && (
            <>
              <Grid size={6}>
                <FormLabel>Guests Capacity</FormLabel>
                <TextField
                  name="guestsCapacity"
                  value={values.guestsCapacity}
                  error={touched.guestsCapacity && Boolean(errors.guestsCapacity)}
                  helperText={touched.guestsCapacity && String(errors.guestsCapacity)}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  onKeyDown={onKeyPressValidateDecimalNumber}
                />
              </Grid>
              <Grid size={6}>
                <FormLabel>Stay Type</FormLabel>
                <TextField
                  select
                  name="realEstateStayTypeId"
                  value={values.realEstateStayTypeId}
                  error={touched.realEstateStayTypeId && Boolean(errors.realEstateStayTypeId)}
                  helperText={touched.realEstateStayTypeId && String(errors.realEstateStayTypeId)}
                  onChange={handleChange}
                  onBlur={handleBlur}>
                  {stayTypes.map((type) => (
                    <MenuItem key={type.id} value={type.id}>
                      {type.name}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>
              <Grid size={6}>
                <FormLabel>Touristic Licence (VTF)</FormLabel>
                <TextField
                  name="touristLicense"
                  value={values.touristLicense}
                  error={touched.touristLicense && Boolean(errors.touristLicense)}
                  helperText={touched.touristLicense && String(errors.touristLicense)}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </Grid>
            </>
          )}
          <Grid size={12}>
            <FormLabel>Amenities</FormLabel>
            <FormGroup>
              <Grid container spacing={1}>
                {RealEstateAmenities.map((amenity) => (
                  <Grid size={4} key={amenity.value}>
                    <FormControlLabel
                      control={
                        <Checkbox
                          name="realEstateHasAmenities"
                          value={amenity.value}
                          onChange={handleChange}
                          checked={values.realEstateHasAmenities.includes(String(amenity.value))}
                        />
                      }
                      label={amenity.label}
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
export default ServiceRealEstateForm
