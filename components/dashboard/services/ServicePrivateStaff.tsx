import {
  Checkbox,
  FormControlLabel,
  FormGroup,
  FormLabel,
  Grid,
  MenuItem,
  TextField
} from "@mui/material"

import {
  PrivateStaffRoles,
  PrivateStaffRegimes,
  PrivateStaffQualifications
} from "@/lib/consts"

const ServicePrivateStaffForm = ({ formik }: any) => {

  const {
    values,
    handleChange,
    handleBlur,
    errors,
    touched,
    setFieldValue
  } = formik

  return (
    <>

      {/* ROLE */}

      <Grid size={6}>
        <FormLabel>Staff Role</FormLabel>

        <TextField
          select
          name="privateStaffRoleId"
          value={values.privateStaffRoleId}
          error={touched.privateStaffRoleId && Boolean(errors.privateStaffRoleId)}
          helperText={touched.privateStaffRoleId && errors.privateStaffRoleId}
          onChange={handleChange}
          onBlur={handleBlur}
        >
          {PrivateStaffRoles.map(role => (
            <MenuItem key={role.value} value={role.value}>
              {role.label}
            </MenuItem>
          ))}
        </TextField>
      </Grid>

      {/* REGIME */}

      <Grid size={6}>
        <FormLabel>Work Regime</FormLabel>

        <TextField
          select
          name="regime"
          value={values.regime}
          error={touched.regime && Boolean(errors.regime)}
          helperText={touched.regime && errors.regime}
          onChange={handleChange}
          onBlur={handleBlur}
        >
          {PrivateStaffRegimes.map(regime => (
            <MenuItem key={regime.value} value={regime.value}>
              {regime.label}
            </MenuItem>
          ))}
        </TextField>
      </Grid>

      {/* VETTING */}

      <Grid size={6}>
        <FormControlLabel
          control={
            <Checkbox
              checked={values.hasVetting || false}
              onChange={(e) =>
                setFieldValue("hasVetting", e.target.checked)
              }
            />
          }
          label="Background Check / Vetting Completed"
        />
      </Grid>

      {/* QUALIFICATIONS */}

      <Grid size={12}>
        <FormLabel>Qualifications</FormLabel>

        <FormGroup>
          <Grid container spacing={1}>

            {PrivateStaffQualifications.map(q => (

              <Grid size={4} key={q.value}>

                <FormControlLabel
                  control={
                    <Checkbox
                      name="privateStaffHasQualifications"
                      value={String(q.value)}
                      checked={values.privateStaffHasQualifications.includes(
                        String(q.value)
                      )}
                      onChange={handleChange}
                    />
                  }
                  label={q.label}
                />

              </Grid>

            ))}

          </Grid>
        </FormGroup>
      </Grid>

    </>
  )
}

export default ServicePrivateStaffForm