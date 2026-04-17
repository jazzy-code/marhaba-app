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

import { serviceTrainingCoachForm } from "../../lib/ServicesFormValues"
import { serviceTrainingCoachFormSchema } from "../../schemas/serviceForm.schema"
import ServiceBaseFormWrapper from "../formsHelpers/ServiceBaseFormWrapper"

const ServiceTrainingCoachForm = ({
  serviceFiles,
  setServiceFiles,
  serviceToEditForm,
  serviceType,
  isCreate,
  mutate,
  isPending
}: ServiceFormProps) => {
  const { trainingCoach, helpers } = useServices()
  const { disciplines } = trainingCoach
  const { languages } = helpers

  const formik = useFormik({
    initialValues: isCreate
      ? formatServiceForm(serviceTrainingCoachForm, serviceType)
      : formatServiceToEditForm(serviceToEditForm, ["Discipline", "Language"]),
    validationSchema: serviceTrainingCoachFormSchema,
    validateOnChange: false,
    validateOnBlur: true,
    onSubmit: (values) => mutate(values)
  })

  const { values, handleChange, handleBlur } = formik
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
            <FormLabel required>Coach Level</FormLabel>
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
            <FormLabel required>Training Location</FormLabel>
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
            <FormLabel required>Equipment</FormLabel>
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
            <FormLabel required>Discipline</FormLabel>
            <FormHelperText error={handleErrorFieldMessage("trainingCoachHasDisciplines")}>
              {handleErrorFieldMessage("trainingCoachHasDisciplines")}
            </FormHelperText>
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

          <Grid size={12}>
            <FormLabel required>Languages</FormLabel>
            <FormHelperText error={handleErrorFieldMessage("trainingCoachHasLanguages")}>
              {handleErrorFieldMessage("trainingCoachHasLanguages")}
            </FormHelperText>
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
