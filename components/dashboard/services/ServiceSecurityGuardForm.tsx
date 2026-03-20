import {
  Checkbox,
  FormControlLabel,
  FormLabel,
  Grid,
  MenuItem,
  TextField
} from "@mui/material"

import {
  SecurityGuardDiscretions,
  SecurityGuardMinContractUnities,
  SecurityGuardProfiles
} from "@/lib/consts"

const ServiceSecurityGuardForm = ({ formik }: any) => {

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

      {/* PROFILE */}

      <Grid size={6}>
        <FormLabel>Security Guard Profile</FormLabel>

        <TextField
          select
          name="securityGuardProfileId"
          value={values.securityGuardProfileId}
          error={touched.securityGuardProfileId && Boolean(errors.securityGuardProfileId)}
          helperText={touched.securityGuardProfileId && errors.securityGuardProfileId}
          onChange={handleChange}
          onBlur={handleBlur}
        >
          {SecurityGuardProfiles.map(profile => (
            <MenuItem key={profile.value} value={profile.value}>
              {profile.label}
            </MenuItem>
          ))}
        </TextField>
      </Grid>

      {/* DISCRETION */}

      <Grid size={6}>
        <FormLabel>Discretion</FormLabel>

        <TextField
          select
          name="discretion"
          value={values.discretion}
          error={touched.discretion && Boolean(errors.discretion)}
          helperText={touched.discretion && errors.discretion}
          onChange={handleChange}
          onBlur={handleBlur}
        >
          {SecurityGuardDiscretions.map(discretion => (
            <MenuItem key={discretion.value} value={discretion.value}>
              {discretion.label}
            </MenuItem>
          ))}
        </TextField>
      </Grid>

      {/* MIN CONTRACT UNITY */}

      <Grid size={6}>
        <FormLabel>Minimum Contract Unit</FormLabel>

        <TextField
          select
          name="minContractUnity"
          value={values.minContractUnity}
          error={touched.minContractUnity && Boolean(errors.minContractUnity)}
          helperText={touched.minContractUnity && errors.minContractUnity}
          onChange={handleChange}
          onBlur={handleBlur}
        >
          {SecurityGuardMinContractUnities.map(unit => (
            <MenuItem key={unit.value} value={unit.value}>
              {unit.label}
            </MenuItem>
          ))}
        </TextField>
      </Grid>

      {/* MIN CONTRACT PERIOD */}

      <Grid size={6}>
        <FormLabel>Minimum Contract Period</FormLabel>

        <TextField
          type="number"
          name="minContractPeriod"
          value={values.minContractPeriod}
          error={touched.minContractPeriod && Boolean(errors.minContractPeriod)}
          helperText={touched.minContractPeriod && errors.minContractPeriod}
          onChange={handleChange}
          onBlur={handleBlur}
        />
      </Grid>

      {/* IS ARMED */}

      <Grid size={6}>
        <FormControlLabel
          control={
            <Checkbox
              checked={values.isArmed || false}
              onChange={(e) =>
                setFieldValue("isArmed", e.target.checked)
              }
            />
          }
          label="Armed Guard"
        />
      </Grid>

    </>
  )
}

export default ServiceSecurityGuardForm