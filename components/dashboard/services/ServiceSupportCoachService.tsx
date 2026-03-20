import {
  FormLabel,
  Grid,
  MenuItem,
  TextField
} from "@mui/material"

import {
  SupportCoachLevels,
  SupportCoachPlaces,
  SupportCoachEquipments,
  SupportCoachDisciplines
} from "@/lib/consts"

const ServiceSupportCoachForm = ({ formik }: any) => {

  const {
    values,
    handleChange,
    handleBlur,
    errors,
    touched
  } = formik

  return (
    <>

      {/* DISCIPLINE */}

      <Grid size={6}>
        <FormLabel>Discipline</FormLabel>

        <TextField
          select
          name="supportCoachDisciplineId"
          value={values.supportCoachDisciplineId}
          error={touched.supportCoachDisciplineId && Boolean(errors.supportCoachDisciplineId)}
          helperText={touched.supportCoachDisciplineId && errors.supportCoachDisciplineId}
          onChange={handleChange}
          onBlur={handleBlur}
        >
          {SupportCoachDisciplines.map(discipline => (
            <MenuItem key={discipline.value} value={discipline.value}>
              {discipline.label}
            </MenuItem>
          ))}
        </TextField>
      </Grid>

      {/* LEVEL */}

      <Grid size={6}>
        <FormLabel>Coach Level</FormLabel>

        <TextField
          select
          name="level"
          value={values.level}
          error={touched.level && Boolean(errors.level)}
          helperText={touched.level && errors.level}
          onChange={handleChange}
          onBlur={handleBlur}
        >
          {SupportCoachLevels.map(level => (
            <MenuItem key={level.value} value={level.value}>
              {level.label}
            </MenuItem>
          ))}
        </TextField>
      </Grid>

      {/* PLACE */}

      <Grid size={6}>
        <FormLabel>Training Location</FormLabel>

        <TextField
          select
          name="place"
          value={values.place}
          error={touched.place && Boolean(errors.place)}
          helperText={touched.place && errors.place}
          onChange={handleChange}
          onBlur={handleBlur}
        >
          {SupportCoachPlaces.map(place => (
            <MenuItem key={place.value} value={place.value}>
              {place.label}
            </MenuItem>
          ))}
        </TextField>
      </Grid>

      {/* EQUIPMENT */}

      <Grid size={6}>
        <FormLabel>Equipment</FormLabel>

        <TextField
          select
          name="equipment"
          value={values.equipment}
          error={touched.equipment && Boolean(errors.equipment)}
          helperText={touched.equipment && errors.equipment}
          onChange={handleChange}
          onBlur={handleBlur}
        >
          {SupportCoachEquipments.map(equipment => (
            <MenuItem key={equipment.value} value={equipment.value}>
              {equipment.label}
            </MenuItem>
          ))}
        </TextField>
      </Grid>

    </>
  )
}

export default ServiceSupportCoachForm