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
  LuxuryStayCategories,
  LuxuryStayRooms,
  LuxuryStayCancelations,
  LuxuryStayAmenities
} from "@/lib/consts"

import { onKeyPressValidateIntegerNumber } from "@/lib/onKeyPressValidations"

const ServiceLuxuryStayForm = ({ formik }: any) => {

  const {
    values,
    handleChange,
    handleBlur,
    errors,
    touched
  } = formik

  return (
    <>

      {/* BASIC INFO */}

      <Grid size={4}>
        <FormLabel>Total Guests</FormLabel>

        <TextField
          name="totalGuests"
          value={values.totalGuests}
          error={touched.totalGuests && Boolean(errors.totalGuests)}
          helperText={touched.totalGuests && errors.totalGuests}
          onChange={handleChange}
          onBlur={handleBlur}
          onKeyDown={onKeyPressValidateIntegerNumber}
        />
      </Grid>

      <Grid size={4}>
        <FormLabel>Check In</FormLabel>

        <TextField
          type="time"
          name="checkIn"
          value={values.checkIn}
          error={touched.checkIn && Boolean(errors.checkIn)}
          helperText={touched.checkIn && errors.checkIn}
          onChange={handleChange}
          onBlur={handleBlur}
          InputLabelProps={{ shrink: true }}
        />
      </Grid>

      <Grid size={4}>
        <FormLabel>Check Out</FormLabel>

        <TextField
          type="time"
          name="checkOut"
          value={values.checkOut}
          error={touched.checkOut && Boolean(errors.checkOut)}
          helperText={touched.checkOut && errors.checkOut}
          onChange={handleChange}
          onBlur={handleBlur}
          InputLabelProps={{ shrink: true }}
        />
      </Grid>

      {/* RELATIONS */}

      <Grid size={6}>
        <FormLabel>Category</FormLabel>

        <TextField
          select
          name="luxuryStayCategoryId"
          value={values.luxuryStayCategoryId}
          error={touched.luxuryStayCategoryId && Boolean(errors.luxuryStayCategoryId)}
          helperText={touched.luxuryStayCategoryId && errors.luxuryStayCategoryId}
          onChange={handleChange}
          onBlur={handleBlur}
        >
          {LuxuryStayCategories.map(category => (
            <MenuItem key={category.value} value={category.value}>
              {category.label}
            </MenuItem>
          ))}
        </TextField>
      </Grid>

      <Grid size={6}>
        <FormLabel>Room Type</FormLabel>

        <TextField
          select
          name="luxuryStayRoomId"
          value={values.luxuryStayRoomId}
          error={touched.luxuryStayRoomId && Boolean(errors.luxuryStayRoomId)}
          helperText={touched.luxuryStayRoomId && errors.luxuryStayRoomId}
          onChange={handleChange}
          onBlur={handleBlur}
        >
          {LuxuryStayRooms.map(room => (
            <MenuItem key={room.value} value={room.value}>
              {room.label}
            </MenuItem>
          ))}
        </TextField>
      </Grid>

      <Grid size={6}>
        <FormLabel>Cancelation Policy</FormLabel>

        <TextField
          select
          name="cancelation"
          value={values.cancelation}
          error={touched.cancelation && Boolean(errors.cancelation)}
          helperText={touched.cancelation && errors.cancelation}
          onChange={handleChange}
          onBlur={handleBlur}
        >
          {LuxuryStayCancelations.map(cancel => (
            <MenuItem key={cancel.value} value={cancel.value}>
              {cancel.label}
            </MenuItem>
          ))}
        </TextField>
      </Grid>

      {/* AMENITIES */}

      <Grid size={12}>
        <FormLabel>Amenities</FormLabel>

        <FormGroup>
          <Grid container spacing={1}>
            {LuxuryStayAmenities.map(amenity => (
              <Grid size={4} key={amenity.value}>
                <FormControlLabel
                  control={
                    <Checkbox
                      name="luxuryStayHasAmenities"
                      value={String(amenity.value)}
                      checked={values.luxuryStayHasAmenities.includes(
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

export default ServiceLuxuryStayForm