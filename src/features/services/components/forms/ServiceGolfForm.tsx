import { Checkbox, FormControlLabel, FormGroup, FormLabel, Grid, TextField } from "@mui/material"
import { FormikProvider, useFormik } from "formik"

import { useServices } from "@/context/ServicesContext"
import useFormikHelpers from "@/hooks/useFormikHelpers"
import { formatServiceForm, formatServiceToEditForm } from "@/lib/services"
import type { ServiceFormProps } from "@/types/services"

import { serviceGolfForm } from "../../lib/ServicesFormValues"
import ServiceBaseFormWrapper from "../formsHelpers/ServiceBaseFormWrapper"

const ServiceGolfForm = ({
  serviceFiles,
  setServiceFiles,
  serviceToEditForm,
  serviceType,
  isCreate,
  mutate,
  isPending
}: ServiceFormProps) => {
  const { golf } = useServices()
  const { amenities } = golf

  const formik = useFormik({
    initialValues: isCreate
      ? formatServiceForm(serviceGolfForm, serviceType)
      : formatServiceToEditForm(serviceToEditForm, ["Amenity"]),
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
          <Grid size={3}>
            <FormLabel>Total Holes</FormLabel>
            <TextField
              type="number"
              name="totalHoles"
              value={values.totalHoles}
              error={handleErrorField("totalHoles")}
              helperText={handleErrorFieldMessage("totalHoles")}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </Grid>

          <Grid size={3}>
            <FormLabel>Max Players</FormLabel>
            <TextField
              type="number"
              name="maxPlayers"
              value={values.maxPlayers}
              error={handleErrorField("maxPlayers")}
              helperText={handleErrorFieldMessage("maxPlayers")}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </Grid>

          <Grid size={3}>
            <FormLabel>Handicap Required (Male)</FormLabel>
            <TextField
              type="number"
              name="handicapRequiredMale"
              value={values.handicapRequiredMale}
              error={handleErrorField("handicapRequiredMale")}
              helperText={handleErrorFieldMessage("handicapRequiredMale")}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </Grid>

          <Grid size={3}>
            <FormLabel>Handicap Required (Female)</FormLabel>
            <TextField
              type="number"
              name="handicapRequiredFemale"
              value={values.handicapRequiredFemale}
              error={handleErrorField("handicapRequiredFemale")}
              helperText={handleErrorFieldMessage("handicapRequiredFemale")}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </Grid>

          <Grid size={4}>
            <FormLabel>Green Fee</FormLabel>
            <TextField
              type="number"
              name="greenFee"
              value={values.greenFee}
              error={handleErrorField("greenFee")}
              helperText={handleErrorFieldMessage("greenFee")}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </Grid>

          <Grid size={4}>
            <FormLabel>Concierge Fee</FormLabel>
            <TextField
              type="number"
              name="conciergeFee"
              value={values.conciergeFee}
              error={handleErrorField("conciergeFee")}
              helperText={handleErrorFieldMessage("conciergeFee")}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </Grid>

          <Grid size={4}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={values.isElectricBuggyIncluded || false}
                  onChange={(e) => setFieldValue("isElectricBuggyIncluded", e.target.checked)}
                />
              }
              label="Electric Buggy Included"
            />
          </Grid>

          <Grid size={12}>
            <FormLabel>Amenities</FormLabel>
            <FormGroup>
              <Grid container spacing={1}>
                {amenities.map((amenity) => (
                  <Grid size={4} key={amenity.id}>
                    <FormControlLabel
                      control={
                        <Checkbox
                          name="golfHasAmenities"
                          value={String(amenity.id)}
                          checked={values.golfHasAmenities.includes(String(amenity.id))}
                          onChange={handleChange}
                        />
                      }
                      label={amenity.name}
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

export default ServiceGolfForm
