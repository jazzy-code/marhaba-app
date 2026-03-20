import {
  Checkbox,
  FormControlLabel,
  FormGroup,
  FormLabel,
  Grid,
  MenuItem,
  Switch,
  TextField,
} from "@mui/material"

import {
  PropertyManagementTypes,
  PropertyManagementServices,
} from "@/lib/consts"

import {
  onKeyPressValidateDecimalNumber,
} from "@/lib/onKeyPressValidations"

const ServicePropertyManagementForm = ({ formik }: any) => {
  const { values, handleChange, handleBlur, errors, touched } = formik

  return (
    <>
      <Grid size={6}>
        <FormLabel>Reference</FormLabel>
        <TextField
          name="reference"
          value={values.reference}
          error={touched.reference && Boolean(errors.reference)}
          helperText={touched.reference && errors.reference}
          onChange={handleChange}
          onBlur={handleBlur}
        />
      </Grid>

      <Grid size={6}>
        <FormLabel>Property Type</FormLabel>
        <TextField
          select
          name="propertyManagementTypeId"
          value={values.propertyManagementTypeId}
          error={
            touched.propertyManagementTypeId &&
            Boolean(errors.propertyManagementTypeId)
          }
          helperText={
            touched.propertyManagementTypeId &&
            errors.propertyManagementTypeId
          }
          onChange={handleChange}
          onBlur={handleBlur}
        >
          {PropertyManagementTypes.map((type) => (
            <MenuItem key={type.value} value={type.value}>
              {type.label}
            </MenuItem>
          ))}
        </TextField>
      </Grid>

      <Grid size={6}>
        <FormLabel>Title</FormLabel>
        <TextField
          name="title"
          value={values.title}
          error={touched.title && Boolean(errors.title)}
          helperText={touched.title && errors.title}
          onChange={handleChange}
          onBlur={handleBlur}
        />
      </Grid>

      <Grid size={6}>
        <FormLabel>Subtitle</FormLabel>
        <TextField
          name="subtitle"
          value={values.subtitle}
          error={touched.subtitle && Boolean(errors.subtitle)}
          helperText={touched.subtitle && errors.subtitle}
          onChange={handleChange}
          onBlur={handleBlur}
        />
      </Grid>

      <Grid size={12}>
        <FormLabel>Short Description</FormLabel>
        <TextField
          multiline
          rows={2}
          name="shortDescription"
          value={values.shortDescription}
          error={touched.shortDescription && Boolean(errors.shortDescription)}
          helperText={touched.shortDescription && errors.shortDescription}
          onChange={handleChange}
          onBlur={handleBlur}
        />
      </Grid>

      <Grid size={12}>
        <FormLabel>Long Description</FormLabel>
        <TextField
          multiline
          rows={4}
          name="longDescription"
          value={values.longDescription}
          error={touched.longDescription && Boolean(errors.longDescription)}
          helperText={touched.longDescription && errors.longDescription}
          onChange={handleChange}
          onBlur={handleBlur}
        />
      </Grid>

      <Grid size={6}>
        <FormLabel>Location</FormLabel>
        <TextField
          name="location"
          value={values.location}
          error={touched.location && Boolean(errors.location)}
          helperText={touched.location && errors.location}
          onChange={handleChange}
          onBlur={handleBlur}
        />
      </Grid>

      <Grid size={6}>
        <FormLabel>Location URL</FormLabel>
        <TextField
          name="locationUrl"
          value={values.locationUrl}
          error={touched.locationUrl && Boolean(errors.locationUrl)}
          helperText={touched.locationUrl && errors.locationUrl}
          onChange={handleChange}
          onBlur={handleBlur}
        />
      </Grid>

      <Grid size={4}>
        <FormLabel>Latitude</FormLabel>
        <TextField
          name="latitute"
          value={values.latitute}
          error={touched.latitute && Boolean(errors.latitute)}
          helperText={touched.latitute && errors.latitute}
          onChange={handleChange}
          onBlur={handleBlur}
          onKeyDown={onKeyPressValidateDecimalNumber}
        />
      </Grid>

      <Grid size={4}>
        <FormLabel>Longitude</FormLabel>
        <TextField
          name="longitude"
          value={values.longitude}
          error={touched.longitude && Boolean(errors.longitude)}
          helperText={touched.longitude && errors.longitude}
          onChange={handleChange}
          onBlur={handleBlur}
          onKeyDown={onKeyPressValidateDecimalNumber}
        />
      </Grid>

      <Grid size={4}>
        <FormLabel>Monthly Rate</FormLabel>
        <TextField
          name="monthlyRate"
          value={values.monthlyRate}
          error={touched.monthlyRate && Boolean(errors.monthlyRate)}
          helperText={touched.monthlyRate && errors.monthlyRate}
          onChange={handleChange}
          onBlur={handleBlur}
          onKeyDown={onKeyPressValidateDecimalNumber}
        />
      </Grid>

      <Grid size={6}>
        <FormLabel>Management Fee (%)</FormLabel>
        <TextField
          name="managementFee"
          value={values.managementFee}
          error={touched.managementFee && Boolean(errors.managementFee)}
          helperText={touched.managementFee && errors.managementFee}
          onChange={handleChange}
          onBlur={handleBlur}
          onKeyDown={onKeyPressValidateDecimalNumber}
        />
      </Grid>

      <Grid size={3}>
        <FormLabel>Exclusive Listing</FormLabel>
        <Switch
          name="exclusiveListing"
          checked={values.exclusiveListing}
          onChange={handleChange}
        />
      </Grid>

      <Grid size={3}>
        <FormLabel>Technical Inspection</FormLabel>
        <Switch
          name="hasTechnicalInspection"
          checked={values.hasTechnicalInspection}
          onChange={handleChange}
        />
      </Grid>

      <Grid size={12}>
        <FormLabel>Services Included</FormLabel>

        <FormGroup>
          <Grid container spacing={1}>
            {PropertyManagementServices.map((service) => (
              <Grid size={4} key={service.value}>
                <FormControlLabel
                  control={
                    <Checkbox
                      name="propertyManagementHasAmenities"
                      value={String(service.value)}
                      onChange={handleChange}
                      checked={values.propertyManagementHasAmenities.includes(
                        String(service.value)
                      )}
                    />
                  }
                  label={service.label}
                />
              </Grid>
            ))}
          </Grid>
        </FormGroup>
      </Grid>
    </>
  )
}

export default ServicePropertyManagementForm