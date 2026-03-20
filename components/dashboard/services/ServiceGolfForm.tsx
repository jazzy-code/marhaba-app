import {
  Checkbox,
  FormControlLabel,
  FormGroup,
  FormLabel,
  Grid,
  TextField
} from "@mui/material"

import { GolfAmenities } from "@/lib/consts"

const ServiceGolfForm = ({ formik }: any) => {

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

      {/* HOLES */}

      <Grid size={3}>
        <FormLabel>Total Holes</FormLabel>

        <TextField
          type="number"
          name="totalHoles"
          value={values.totalHoles}
          error={touched.totalHoles && Boolean(errors.totalHoles)}
          helperText={touched.totalHoles && errors.totalHoles}
          onChange={handleChange}
          onBlur={handleBlur}
        />
      </Grid>

      {/* MAX PLAYERS */}

      <Grid size={3}>
        <FormLabel>Max Players</FormLabel>

        <TextField
          type="number"
          name="maxPlayers"
          value={values.maxPlayers}
          error={touched.maxPlayers && Boolean(errors.maxPlayers)}
          helperText={touched.maxPlayers && errors.maxPlayers}
          onChange={handleChange}
          onBlur={handleBlur}
        />
      </Grid>

      {/* HANDICAP MALE */}

      <Grid size={3}>
        <FormLabel>Handicap Required (Male)</FormLabel>

        <TextField
          type="number"
          name="handicapRequiredMale"
          value={values.handicapRequiredMale}
          error={touched.handicapRequiredMale && Boolean(errors.handicapRequiredMale)}
          helperText={touched.handicapRequiredMale && errors.handicapRequiredMale}
          onChange={handleChange}
          onBlur={handleBlur}
        />
      </Grid>

      {/* HANDICAP FEMALE */}

      <Grid size={3}>
        <FormLabel>Handicap Required (Female)</FormLabel>

        <TextField
          type="number"
          name="handicapRequiredFemale"
          value={values.handicapRequiredFemale}
          error={touched.handicapRequiredFemale && Boolean(errors.handicapRequiredFemale)}
          helperText={touched.handicapRequiredFemale && errors.handicapRequiredFemale}
          onChange={handleChange}
          onBlur={handleBlur}
        />
      </Grid>

      {/* GREEN FEE */}

      <Grid size={4}>
        <FormLabel>Green Fee</FormLabel>

        <TextField
          type="number"
          name="greenFee"
          value={values.greenFee}
          error={touched.greenFee && Boolean(errors.greenFee)}
          helperText={touched.greenFee && errors.greenFee}
          onChange={handleChange}
          onBlur={handleBlur}
        />
      </Grid>

      {/* CONCIERGE FEE */}

      <Grid size={4}>
        <FormLabel>Concierge Fee</FormLabel>

        <TextField
          type="number"
          name="conciergeFee"
          value={values.conciergeFee}
          error={touched.conciergeFee && Boolean(errors.conciergeFee)}
          helperText={touched.conciergeFee && errors.conciergeFee}
          onChange={handleChange}
          onBlur={handleBlur}
        />
      </Grid>

      {/* BUGGY */}

      <Grid size={4}>
        <FormControlLabel
          control={
            <Checkbox
              checked={values.isElectricBuggyIncluded || false}
              onChange={(e) =>
                setFieldValue("isElectricBuggyIncluded", e.target.checked)
              }
            />
          }
          label="Electric Buggy Included"
        />
      </Grid>

      {/* AMENITIES */}

      <Grid size={12}>
        <FormLabel>Amenities</FormLabel>

        <FormGroup>
          <Grid container spacing={1}>

            {GolfAmenities.map(amenity => (

              <Grid size={4} key={amenity.value}>

                <FormControlLabel
                  control={
                    <Checkbox
                      name="golfHasAmenities"
                      value={String(amenity.value)}
                      checked={values.golfHasAmenities.includes(
                        String(amenity.value)
                      )}
                      onChange={handleChange}
                    />
                  }
                  label={amenity.label}
                />

              </Grid>

            ))}

          </Grid>
        </FormGroup>
      </Grid>

    </>
  )
}

export default ServiceGolfForm