import { Checkbox, FormControlLabel, FormGroup, FormLabel, Grid, MenuItem, Switch, TextField } from "@mui/material"
import { FormikProvider, useFormik } from "formik"

import { useServices } from "@/context/ServicesContext"
import useFormikHelpers from "@/hooks/useFormikHelpers"
import { formatServiceForm, formatServiceToEditForm } from "@/lib/services"

import { serviceSecurityGuardForm } from "../../lib/ServicesFormValues"

import ServiceBaseFormWrapper from "../../../../components/dashboard/services/ServiceBaseFormWrapper"

const ServiceSecurityGuardForm = ({
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
  const { securityGuard, helpers } = useServices()
  const { profiles, backgroundTypes } = securityGuard
  const { languages } = helpers

  const formik = useFormik({
    initialValues: isCreate
      ? formatServiceForm(serviceSecurityGuardForm, serviceType)
      : formatServiceToEditForm(serviceToEditForm, ["Profile", "Language"]),
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
          <Grid size={4}>
            <FormLabel>Background Type</FormLabel>
            <TextField
              select
              name="securityGuardBackgroundTypeId"
              value={values.securityGuardBackgroundTypeId}
              error={handleErrorField("securityGuardBackgroundTypeId")}
              helperText={handleErrorFieldMessage("securityGuardBackgroundTypeId")}
              onChange={handleChange}
              onBlur={handleBlur}>
              {backgroundTypes.map((type: any) => (
                <MenuItem key={type.id} value={type.id}>
                  {type.name}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid size={4}>
            <FormLabel>Discretion</FormLabel>
            <TextField
              select
              name="discretion"
              value={values.discretion}
              error={handleErrorField("discretion")}
              helperText={handleErrorFieldMessage("discretion")}
              onChange={handleChange}
              onBlur={handleBlur}>
              <MenuItem value="VISIBLE">Visible</MenuItem>
              <MenuItem value="INCOGNITO">Incognito</MenuItem>
            </TextField>
          </Grid>
          <Grid size={4} className="flex items-center">
            <FormControlLabel
              control={
                <Switch
                  checked={values.isArmed || false}
                  onChange={(e) => setFieldValue("isArmed", e.target.checked)}
                />
              }
              label="Is Armed?"
            />
          </Grid>
          <Grid size={4}>
            <FormLabel>Minimum Contract Unit</FormLabel>
            <TextField
              select
              name="minContractUnity"
              value={values.minContractUnity}
              error={handleErrorField("minContractUnity")}
              helperText={handleErrorFieldMessage("minContractUnity")}
              onChange={handleChange}
              onBlur={handleBlur}>
              <MenuItem value="HOURS">Hours</MenuItem>
              <MenuItem value="DAYS">Days</MenuItem>
            </TextField>
          </Grid>
          <Grid size={4}>
            <FormLabel>Minimum Contract Period</FormLabel>
            <TextField
              type="number"
              name="minContractPeriod"
              value={values.minContractPeriod}
              error={handleErrorField("minContractPeriod")}
              helperText={handleErrorFieldMessage("minContractPeriod")}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </Grid>

          <Grid size={12}>
            <FormLabel>Security Guard Profile</FormLabel>
            <FormGroup>
              <Grid container spacing={1}>
                {profiles.map((profile) => (
                  <Grid size={4} key={profile.id}>
                    <FormControlLabel
                      control={
                        <Checkbox
                          name="securityGuardHasProfiles"
                          value={String(profile.id)}
                          checked={values.securityGuardHasProfiles.includes(String(profile.id))}
                          onChange={handleChange}
                        />
                      }
                      label={profile.name}
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
                          name="securityGuardHasLanguages"
                          value={String(lang.id)}
                          checked={values.securityGuardHasLanguages.includes(String(lang.id))}
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
        </Grid>
      </ServiceBaseFormWrapper>
    </FormikProvider>
  )
}

export default ServiceSecurityGuardForm
