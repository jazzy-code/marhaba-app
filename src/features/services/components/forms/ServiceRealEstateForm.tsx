import { useEffect } from "react"

import { FormGroup, FormLabel, Grid, MenuItem, TextField } from "@mui/material"
import { FormikProvider, useFormik } from "formik"

import CheckboxGroup from "@/components/fields/CheckboxGroup"
import SelectModality from "@/components/fields/SelectModality"
import { useServices } from "@/context/ServicesContext"
import useFormikHelpers from "@/hooks/useFormikHelpers"
import { onKeyPressValidateDecimalNumber, onKeyPressValidateIntegerNumber } from "@/lib/onKeyPressValidations"
import { formatServiceForm, formatServiceToEditForm } from "@/lib/services"

import { serviceRealEstateForm } from "../../lib/ServicesFormValues"

import ServiceBaseFormWrapper from "../formsHelpers/ServiceBaseFormWrapper"

const ServiceRealEstateForm = ({
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
  const { realEstate } = useServices()
  const { amenities, services, types, stayTypes, housingStatus } = realEstate

  const formik = useFormik({
    initialValues: isCreate
      ? formatServiceForm(serviceRealEstateForm, serviceType)
      : formatServiceToEditForm(serviceToEditForm, ["Amenity", "Service"]),
    validateOnChange: false,
    validateOnBlur: true,
    onSubmit: (values) => mutate(values)
  })

  const { values, handleChange, handleBlur, setFieldValue } = formik
  const { handleErrorField, handleErrorFieldMessage } = useFormikHelpers(formik)

  useEffect(() => {
    if (values.modality === "RENT") {
      setFieldValue("realEstateHousingStatusId", "")
    }

    if (values.modality === "SALE") {
      setFieldValue("realEstateStayTypeId", "")
      setFieldValue("touristLicense", "")
      setFieldValue("guestsCapacity", "")
      setFieldValue("realEstateHasServices", [])
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
            <FormLabel required>Type</FormLabel>
            <TextField
              select
              name="realEstateTypeId"
              value={values.realEstateTypeId}
              onChange={handleChange}
              onBlur={handleBlur}
              error={handleErrorField("realEstateTypeId")}
              helperText={handleErrorFieldMessage("realEstateTypeId")}>
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
              error={handleErrorField("rooms")}
              helperText={handleErrorFieldMessage("rooms")}
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
              error={handleErrorField("fullBathrooms")}
              helperText={handleErrorFieldMessage("fullBathrooms")}
              onChange={handleChange}
              onBlur={handleBlur}
              onKeyDown={onKeyPressValidateIntegerNumber}
            />
          </Grid>
          <Grid size={4}>
            <FormLabel>Half Bathrooms</FormLabel>
            <TextField
              name="halfBathrooms"
              value={values.halfBathrooms}
              error={handleErrorField("halfBathrooms")}
              helperText={handleErrorFieldMessage("halfBathrooms")}
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
              error={handleErrorField("surfaceBuiltMt2")}
              helperText={handleErrorFieldMessage("surfaceBuiltMt2")}
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
              error={handleErrorField("surfacePlotMt2")}
              helperText={handleErrorFieldMessage("surfacePlotMt2")}
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
              error={handleErrorField("surfaceTerraceMt2")}
              helperText={handleErrorFieldMessage("surfaceTerraceMt2")}
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
                error={handleErrorField("realEstateHousingStatusId")}
                helperText={handleErrorFieldMessage("realEstateHousingStatusId")}
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
                  error={handleErrorField("guestsCapacity")}
                  helperText={handleErrorFieldMessage("guestsCapacity")}
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
                  error={handleErrorField("realEstateStayTypeId")}
                  helperText={handleErrorFieldMessage("realEstateStayTypeId")}
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
                  error={handleErrorField("touristLicense")}
                  helperText={handleErrorFieldMessage("touristLicense")}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </Grid>
              <Grid size={12}>
                <FormLabel>Services</FormLabel>
                <FormGroup>
                  <CheckboxGroup
                    items={services}
                    name="realEstateHasServices"
                    selectedValues={values.realEstateHasServices}
                    onChange={handleChange}
                  />
                </FormGroup>
              </Grid>
            </>
          )}
          <Grid size={12}>
            <FormLabel>Amenities</FormLabel>
            <FormGroup>
              <CheckboxGroup
                items={amenities}
                name="realEstateHasAmenities"
                selectedValues={values.realEstateHasAmenities}
                onChange={handleChange}
              />
            </FormGroup>
          </Grid>
        </Grid>
      </ServiceBaseFormWrapper>
    </FormikProvider>
  )
}
export default ServiceRealEstateForm
