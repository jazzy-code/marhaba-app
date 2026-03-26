import { Checkbox, FormControlLabel, FormGroup, FormLabel, Grid, MenuItem, TextField } from "@mui/material"
import { FormikProvider, useFormik } from "formik"

import { useServices } from "@/context/ServicesContext"
import useFormikHelpers from "@/hooks/useFormikHelpers"
import { formatServiceForm, formatServiceToEditForm } from "@/lib/services"

import { serviceTrainingCoachForm } from "../lib/ServicesFormValues"

import ServiceBaseFormWrapper from "./ServiceBaseFormWrapper"

const ServiceTrainingCoachForm = ({
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
  const { trainingCoach, helpers } = useServices()
  const { disciplines } = trainingCoach
  const { languages } = helpers

  const formik = useFormik({
    initialValues: isCreate
      ? formatServiceForm(serviceTrainingCoachForm, serviceType)
      : formatServiceToEditForm(serviceToEditForm, ["Discipline", "Language"]),
    validateOnChange: false,
    validateOnBlur: true,
    onSubmit: (values) => mutate(values)
  })

  const { values, handleChange, handleBlur } = formik
  const { handleErrorField, handleErrorFieldMessage } = useFormikHelpers(formik)

  return (
    <FormikProvider value={formik}>
      <ServiceBaseFormWrapper isPending={isPending} isCreate={isCreate}>
        <Grid container spacing={3}>
          <Grid size={6}>
            <FormLabel>Discipline</FormLabel>
            <FormGroup>
              <Grid container spacing={1}>
                {disciplines.map((discipline) => (
                  <Grid size={4} key={discipline.id}>
                    <FormControlLabel
                      control={
                        <Checkbox
                          name="trainingCoachHasDisciplines"
                          value={String(discipline.id)}
                          checked={values.trainingCoachHasDisciplines.includes(String(discipline.id))}
                          onChange={handleChange}
                        />
                      }
                      label={discipline.name}
                    />
                  </Grid>
                ))}
              </Grid>
            </FormGroup>
          </Grid>

          <Grid size={6}>
            <FormLabel>Coach Level</FormLabel>
            <TextField
              select
              name="level"
              value={values.level}
              error={handleErrorField("level")}
              helperText={handleErrorFieldMessage("level")}
              onChange={handleChange}
              onBlur={handleBlur}>
              <MenuItem value="BEGINNER">Beginner</MenuItem>
              <MenuItem value="AMATEUR">Intermediate</MenuItem>
              <MenuItem value="EXPERIENCED">Experienced</MenuItem>
              <MenuItem value="PROFESSIONAL">Professional</MenuItem>
            </TextField>
          </Grid>

          <Grid size={6}>
            <FormLabel>Training Location</FormLabel>
            <TextField
              select
              name="place"
              value={values.place}
              error={handleErrorField("place")}
              helperText={handleErrorFieldMessage("place")}
              onChange={handleChange}
              onBlur={handleBlur}>
              <MenuItem value="PRIVATE_GYM">Private Gym</MenuItem>
              <MenuItem value="PUBLIC_GYM">Public Gym</MenuItem>
              <MenuItem value="IN_VILLA">In Villa</MenuItem>
              <MenuItem value="OUTDOORS">Outdoors</MenuItem>
            </TextField>
          </Grid>

          <Grid size={6}>
            <FormLabel>Equipment</FormLabel>
            <TextField
              select
              name="equipment"
              value={values.equipment}
              error={handleErrorField("equipment")}
              helperText={handleErrorFieldMessage("equipment")}
              onChange={handleChange}
              onBlur={handleBlur}>
              <MenuItem value="COACH_HAS">Coach has equipment</MenuItem>
              <MenuItem value="CLIENT_HAS">Client must has Equipment</MenuItem>
            </TextField>
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
                          name="trainingCoachHasLanguages"
                          value={String(lang.id)}
                          checked={values.trainingCoachHasLanguages.includes(String(lang.id))}
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

export default ServiceTrainingCoachForm
