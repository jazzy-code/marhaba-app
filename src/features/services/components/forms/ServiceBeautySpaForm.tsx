import { Checkbox, FormControlLabel, FormGroup, FormHelperText, FormLabel, Grid, TextField } from "@mui/material"
import { FormikProvider, useFormik } from "formik"

import { useServices } from "@/context/ServicesContext"
import useFormikHelpers from "@/hooks/useFormikHelpers"
import { formatServiceForm, formatServiceToEditForm } from "@/lib/services"
import type { ServiceFormProps } from "@/types/services"

import { serviceBeautySpaForm } from "../../lib/ServicesFormValues"
import { serviceBeautySpaFormSchema } from "../../schemas/serviceForm.schema"
import ServiceBaseFormWrapper from "../formsHelpers/ServiceBaseFormWrapper"

const ServiceBeautySpaForm = ({
  serviceFiles,
  setServiceFiles,
  serviceToEditForm,
  serviceType,
  isCreate,
  mutate,
  isPending
}: ServiceFormProps) => {
  const { beautySpa } = useServices()
  const { treatments, products } = beautySpa

  const formik = useFormik({
    initialValues: isCreate
      ? formatServiceForm(serviceBeautySpaForm, serviceType)
      : formatServiceToEditForm(serviceToEditForm, ["Treatment", "Product"]),
    validationSchema: serviceBeautySpaFormSchema,
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
            <FormLabel>Duration (Minutes)</FormLabel>
            <TextField
              type="number"
              name="durationMinutes"
              value={values.durationMinutes}
              error={handleErrorField("durationMinutes")}
              helperText={handleErrorFieldMessage("durationMinutes")}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </Grid>

          <Grid size={6}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={values.hasEquipment || false}
                  onChange={(e) => setFieldValue("hasEquipment", e.target.checked)}
                />
              }
              label="Equipment Included"
            />
          </Grid>

          <Grid size={12}>
            <FormLabel required>Treatments</FormLabel>
            <FormHelperText error={handleErrorFieldMessage("beautySpaHasTreatments")}>
              {handleErrorFieldMessage("beautySpaHasTreatments")}
            </FormHelperText>
            <FormGroup>
              <Grid container spacing={1}>
                {treatments.map((treatment) => (
                  <Grid size={4} key={treatment.id}>
                    <FormControlLabel
                      control={
                        <Checkbox
                          name="beautySpaHasTreatments"
                          value={String(treatment.id)}
                          checked={values.beautySpaHasTreatments.includes(String(treatment.id))}
                          onChange={handleChange}
                        />
                      }
                      label={treatment.name}
                    />
                  </Grid>
                ))}
              </Grid>
            </FormGroup>
          </Grid>

          <Grid size={12}>
            <FormLabel>Products</FormLabel>
            <FormGroup className="!mt-3">
              <Grid container spacing={1}>
                {products.map((product) => (
                  <Grid size={4} key={product.id}>
                    <FormControlLabel
                      control={
                        <Checkbox
                          name="beautySpaHasProducts"
                          value={String(product.id)}
                          checked={values.beautySpaHasProducts.includes(String(product.id))}
                          onChange={handleChange}
                        />
                      }
                      label={product.name}
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

export default ServiceBeautySpaForm
