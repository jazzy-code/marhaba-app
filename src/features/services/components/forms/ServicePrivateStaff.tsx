import {
  Checkbox,
  FormControlLabel,
  FormGroup,
  FormHelperText,
  FormLabel,
  Grid,
  MenuItem,
  TextField
} from "@mui/material"
import { FormikProvider, useFormik } from "formik"

import { useServices } from "@/context/ServicesContext"
import useFormikHelpers from "@/hooks/useFormikHelpers"
import { formatServiceForm, formatServiceToEditForm } from "@/lib/services"
import type { ServiceFormProps } from "@/types/services"

import { servicePrivateStaffForm } from "../../lib/ServicesFormValues"
import { servicePrivateStaffFormSchema } from "../../schemas/serviceForm.schema"
import ServiceBaseFormWrapper from "../formsHelpers/ServiceBaseFormWrapper"

const ServicePrivateStaffForm = ({
  serviceFiles,
  setServiceFiles,
  serviceToEditForm,
  serviceType,
  isCreate,
  mutate,
  isPending
}: ServiceFormProps) => {
  const { privateStaff, helpers } = useServices()
  const { roles, qualifications } = privateStaff
  const { languages } = helpers

  const formik = useFormik({
    initialValues: isCreate
      ? formatServiceForm(servicePrivateStaffForm, serviceType)
      : formatServiceToEditForm(serviceToEditForm, ["Qualification", "Language"]),
    validationSchema: servicePrivateStaffFormSchema,
    validateOnChange: false,
    validateOnBlur: true,
    onSubmit: (values) => mutate(values)
  })

  const { values, handleChange, handleBlur, setFieldValue } = formik
  const { handleErrorField, handleErrorFieldMessage } = useFormikHelpers(formik)

  return (
    <FormikProvider value={formik}>
      <ServiceBaseFormWrapper
        isPending={isPending}
        isCreate={isCreate}
        serviceFiles={serviceFiles}
        setServiceFiles={setServiceFiles}>
        <Grid container spacing={3}>
          <Grid size={6}>
            <FormLabel required>Staff Role</FormLabel>
            <TextField
              select
              name="privateStaffRoleId"
              value={values.privateStaffRoleId}
              error={handleErrorField("privateStaffRoleId")}
              helperText={handleErrorFieldMessage("privateStaffRoleId")}
              onChange={handleChange}
              onBlur={handleBlur}>
              {roles.map((role) => (
                <MenuItem key={role.id} value={role.id}>
                  {role.name}
                </MenuItem>
              ))}
            </TextField>
          </Grid>

          <Grid size={6}>
            <FormLabel required>Work Regime</FormLabel>
            <TextField
              select
              name="regime"
              value={values.regime}
              error={handleErrorField("regime")}
              helperText={handleErrorFieldMessage("regime")}
              onChange={handleChange}
              onBlur={handleBlur}>
              <MenuItem value="LIVE_IN">Live In (Intern)</MenuItem>
              <MenuItem value="LIVE_OUT">Live Out</MenuItem>
              <MenuItem value="HOURLY">Hourly</MenuItem>
            </TextField>
          </Grid>

          <Grid size={6}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={values.hasVetting || false}
                  onChange={(e) => setFieldValue("hasVetting", e.target.checked)}
                />
              }
              label="Background Check / Vetting Completed"
            />
          </Grid>

          <Grid size={12}>
            <FormLabel required>Qualifications</FormLabel>
            <FormHelperText error={handleErrorFieldMessage("privateStaffHasQualifications")}>
              {handleErrorFieldMessage("privateStaffHasQualifications")}
            </FormHelperText>
            <FormGroup>
              <Grid container spacing={1}>
                {qualifications.map((q) => (
                  <Grid size={4} key={q.id}>
                    <FormControlLabel
                      control={
                        <Checkbox
                          name="privateStaffHasQualifications"
                          value={String(q.id)}
                          checked={values.privateStaffHasQualifications.includes(String(q.id))}
                          onChange={handleChange}
                        />
                      }
                      label={q.name}
                    />
                  </Grid>
                ))}
              </Grid>
            </FormGroup>
          </Grid>

          <Grid size={12}>
            <FormLabel required>Languages</FormLabel>
            <FormHelperText error={handleErrorFieldMessage("privateStaffHasLanguages")}>
              {handleErrorFieldMessage("privateStaffHasLanguages")}
            </FormHelperText>
            <FormGroup>
              <Grid container spacing={1}>
                {languages.map((lang) => (
                  <Grid size={4} key={lang.id}>
                    <FormControlLabel
                      control={
                        <Checkbox
                          name="privateStaffHasLanguages"
                          value={String(lang.id)}
                          checked={values.privateStaffHasLanguages.includes(String(lang.id))}
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

export default ServicePrivateStaffForm
