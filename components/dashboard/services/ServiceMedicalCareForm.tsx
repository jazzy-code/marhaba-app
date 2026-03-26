import { Checkbox, FormControlLabel, FormGroup, FormLabel, Grid, MenuItem, TextField } from "@mui/material"
import { FormikProvider, useFormik } from "formik"

import { useServices } from "@/context/ServicesContext"
import useFormikHelpers from "@/hooks/useFormikHelpers"
import { formatServiceForm, formatServiceToEditForm } from "@/lib/services"

import { serviceMedicalCareForm } from "../lib/ServicesFormValues"

import ServiceBaseFormWrapper from "./ServiceBaseFormWrapper"

const ServiceMedicalCareForm = ({
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
  const { medicalCare, helpers } = useServices()
  const { attentions, services, specialties } = medicalCare
  const { languages } = helpers

  const formik = useFormik({
    initialValues: isCreate
      ? formatServiceForm(serviceMedicalCareForm, serviceType)
      : formatServiceToEditForm(serviceToEditForm, ["Service", "Specialty", "Language", "Attention"]),
    validateOnChange: false,
    validateOnBlur: true,
    onSubmit: (values) => mutate(values)
  })

  const { values, handleChange, handleBlur, setFieldValue } = formik
  const { handleErrorField, handleErrorFieldMessage } = useFormikHelpers(formik)

  return (
    <FormikProvider value={formik}>
      <ServiceBaseFormWrapper isPending={isPending} isCreate={isCreate}>
        <Grid container spacing={3}>
          <Grid size={12}>
            <FormLabel>Certifications</FormLabel>
            <TextField
              multiline
              rows={3}
              name="certifications"
              value={values.certifications}
              error={handleErrorField("certifications")}
              helperText={handleErrorFieldMessage("certifications")}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </Grid>

          <Grid size={6}>
            <FormLabel>Response Type</FormLabel>
            <TextField
              select
              name="response"
              value={values.response}
              error={handleErrorField("response")}
              helperText={handleErrorFieldMessage("response")}
              onChange={handleChange}
              onBlur={handleBlur}>
              <MenuItem value="IMMEDIATELY">Immediately</MenuItem>
              <MenuItem value="PREVIOUS_APPOINTMENT">Previous Appointment</MenuItem>
            </TextField>
          </Grid>

          <Grid size={6}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={values.isCleanupIncluded || false}
                  onChange={(e) => setFieldValue("isCleanupIncluded", e.target.checked)}
                />
              }
              label="Cleanup Included"
            />
          </Grid>

          <Grid size={6}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={values.isServiceAndTravelIncluded || false}
                  onChange={(e) => setFieldValue("isServiceAndTravelIncluded", e.target.checked)}
                />
              }
              label="Service & Travel Included"
            />
          </Grid>

          <Grid size={12}>
            <FormLabel>Services</FormLabel>
            <FormGroup>
              <Grid container spacing={1}>
                {services.map((service) => (
                  <Grid size={4} key={service.id}>
                    <FormControlLabel
                      control={
                        <Checkbox
                          name="medicalCareHasServices"
                          value={String(service.id)}
                          checked={values.medicalCareHasServices.includes(String(service.id))}
                          onChange={handleChange}
                        />
                      }
                      label={service.name}
                    />
                  </Grid>
                ))}
              </Grid>
            </FormGroup>
          </Grid>

          <Grid size={12}>
            <FormLabel>Specialties</FormLabel>
            <FormGroup>
              <Grid container spacing={1}>
                {specialties.map((spec) => (
                  <Grid size={4} key={spec.id}>
                    <FormControlLabel
                      control={
                        <Checkbox
                          name="medicalCareHasSpecialties"
                          value={String(spec.id)}
                          checked={values.medicalCareHasSpecialties.includes(String(spec.id))}
                          onChange={handleChange}
                        />
                      }
                      label={spec.name}
                    />
                  </Grid>
                ))}
              </Grid>
            </FormGroup>
          </Grid>

          <Grid size={12}>
            <FormLabel>Languages</FormLabel>
            <FormGroup>
              <Grid container spacing={1}>
                {languages.map((lang) => (
                  <Grid size={4} key={lang.id}>
                    <FormControlLabel
                      control={
                        <Checkbox
                          name="medicalCareHasLanguages"
                          value={String(lang.id)}
                          checked={values.medicalCareHasLanguages.includes(String(lang.id))}
                          onChange={handleChange}
                        />
                      }
                      label={lang.name}
                    />
                  </Grid>
                ))}
              </Grid>
            </FormGroup>
          </Grid>

          <Grid size={12}>
            <FormLabel>Attention Types</FormLabel>
            <FormGroup>
              <Grid container spacing={1}>
                {attentions.map((att) => (
                  <Grid size={4} key={att.id}>
                    <FormControlLabel
                      control={
                        <Checkbox
                          name="medicalCareHasAttentions"
                          value={String(att.id)}
                          checked={values.medicalCareHasAttentions.includes(String(att.id))}
                          onChange={handleChange}
                        />
                      }
                      label={att.name}
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

export default ServiceMedicalCareForm
