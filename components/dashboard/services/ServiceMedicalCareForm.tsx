import { Checkbox, FormControlLabel, FormGroup, FormLabel, Grid, MenuItem, TextField } from "@mui/material"

import {
  MedicalCareResponses,
  MedicalCareAttentions,
  MedicalCareServices,
  MedicalCareSpecialities,
  Languages
} from "@/lib/consts"

const ServiceMedicalCareForm = ({ formik }: any) => {
  const { values, handleChange, handleBlur, errors, touched, setFieldValue } = formik

  return (
    <>
      {/* BASIC INFO */}

      <Grid size={12}>
        <FormLabel>Certifications</FormLabel>

        <TextField
          multiline
          rows={3}
          name="certifications"
          value={values.certifications}
          error={touched.certifications && Boolean(errors.certifications)}
          helperText={touched.certifications && errors.certifications}
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
          error={touched.response && Boolean(errors.response)}
          helperText={touched.response && errors.response}
          onChange={handleChange}
          onBlur={handleBlur}>
          {MedicalCareResponses.map((response) => (
            <MenuItem key={response.value} value={response.value}>
              {response.label}
            </MenuItem>
          ))}
        </TextField>
      </Grid>

      {/* FLAGS */}

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

      {/* SERVICES */}

      <Grid size={12}>
        <FormLabel>Services</FormLabel>

        <FormGroup>
          <Grid container spacing={1}>
            {MedicalCareServices.map((service) => (
              <Grid size={4} key={service.value}>
                <FormControlLabel
                  control={
                    <Checkbox
                      name="medicalCareHasServices"
                      value={String(service.value)}
                      checked={values.medicalCareHasServices.includes(String(service.value))}
                      onChange={handleChange}
                    />
                  }
                  label={service.label}
                />
              </Grid>
            ))}
          </Grid>
        </FormGroup>
      </Grid>

      {/* SPECIALITIES */}

      <Grid size={12}>
        <FormLabel>Specialities</FormLabel>

        <FormGroup>
          <Grid container spacing={1}>
            {MedicalCareSpecialities.map((spec) => (
              <Grid size={4} key={spec.value}>
                <FormControlLabel
                  control={
                    <Checkbox
                      name="medicalCareHasSpecialities"
                      value={String(spec.value)}
                      checked={values.medicalCareHasSpecialities.includes(String(spec.value))}
                      onChange={handleChange}
                    />
                  }
                  label={spec.label}
                />
              </Grid>
            ))}
          </Grid>
        </FormGroup>
      </Grid>

      {/* LANGUAGES */}

      <Grid size={12}>
        <FormLabel>Languages</FormLabel>

        <FormGroup>
          <Grid container spacing={1}>
            {Languages.map((lang) => (
              <Grid size={4} key={lang.value}>
                <FormControlLabel
                  control={
                    <Checkbox
                      name="medicalCareHasLanguages"
                      value={String(lang.value)}
                      checked={values.medicalCareHasLanguages.includes(String(lang.value))}
                      onChange={handleChange}
                    />
                  }
                  label={lang.label}
                />
              </Grid>
            ))}
          </Grid>
        </FormGroup>
      </Grid>

      {/* ATTENTIONS */}

      <Grid size={12}>
        <FormLabel>Attention Types</FormLabel>

        <FormGroup>
          <Grid container spacing={1}>
            {MedicalCareAttentions.map((att) => (
              <Grid size={4} key={att.value}>
                <FormControlLabel
                  control={
                    <Checkbox
                      name="medicalCareHasAttentions"
                      value={String(att.value)}
                      checked={values.medicalCareHasAttentions.includes(String(att.value))}
                      onChange={handleChange}
                    />
                  }
                  label={att.label}
                />
              </Grid>
            ))}
          </Grid>
        </FormGroup>
      </Grid>
    </>
  )
}

export default ServiceMedicalCareForm
