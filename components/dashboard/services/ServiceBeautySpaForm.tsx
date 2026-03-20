import {
  Checkbox,
  FormControlLabel,
  FormGroup,
  FormLabel,
  Grid,
  TextField
} from "@mui/material"

import {
  BeautySpaTreatments,
  BeautySpaProducts
} from "@/lib/consts"

const ServiceBeautySpaForm = ({ formik }: any) => {

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

      {/* DURATION */}

      <Grid size={6}>
        <FormLabel>Duration (Minutes)</FormLabel>

        <TextField
          type="number"
          name="durationMinutes"
          value={values.durationMinutes}
          error={touched.durationMinutes && Boolean(errors.durationMinutes)}
          helperText={touched.durationMinutes && errors.durationMinutes}
          onChange={handleChange}
          onBlur={handleBlur}
        />
      </Grid>

      {/* EQUIPMENT */}

      <Grid size={6}>
        <FormControlLabel
          control={
            <Checkbox
              checked={values.hasEquipment || false}
              onChange={(e) =>
                setFieldValue("hasEquipment", e.target.checked)
              }
            />
          }
          label="Equipment Included"
        />
      </Grid>

      {/* TREATMENTS */}

      <Grid size={12}>
        <FormLabel>Treatments</FormLabel>

        <FormGroup>
          <Grid container spacing={1}>

            {BeautySpaTreatments.map(treatment => (

              <Grid size={4} key={treatment.value}>

                <FormControlLabel
                  control={
                    <Checkbox
                      name="beautySpaHasTreatments"
                      value={String(treatment.value)}
                      checked={values.beautySpaHasTreatments.includes(
                        String(treatment.value)
                      )}
                      onChange={handleChange}
                    />
                  }
                  label={treatment.label}
                />

              </Grid>

            ))}

          </Grid>
        </FormGroup>
      </Grid>

      {/* PRODUCTS */}

      <Grid size={12}>
        <FormLabel>Products</FormLabel>

        <FormGroup>
          <Grid container spacing={1}>

            {BeautySpaProducts.map(product => (

              <Grid size={4} key={product.value}>

                <FormControlLabel
                  control={
                    <Checkbox
                      name="beautySpaHasProducts"
                      value={String(product.value)}
                      checked={values.beautySpaHasProducts.includes(
                        String(product.value)
                      )}
                      onChange={handleChange}
                    />
                  }
                  label={product.label}
                />

              </Grid>

            ))}

          </Grid>
        </FormGroup>
      </Grid>

    </>
  )
}

export default ServiceBeautySpaForm