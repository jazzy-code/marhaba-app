"use client"

import { FormControl, FormControlLabel, FormLabel, MenuItem, Radio, RadioGroup, Switch, TextField } from "@mui/material"
import { useFormikContext } from "formik"
import { Map } from "lucide-react"

import AutocompleteMarbellaDistricts from "@/components/fields/AutocompleteMarbellaDistricts"
import { useServices } from "@/context/ServicesContext"
import useFormikHelpers from "@/hooks/useFormikHelpers"

const BasicInformationForm = () => {
  const { helpers } = useServices()
  const { malagaRegions, malagaCities } = helpers
  const formik = useFormikContext<any>()
  const { values, handleChange, handleBlur, setFieldValue } = formik

  const { handleErrorField, handleErrorFieldMessage } = useFormikHelpers(formik)

  return (
    <section className="space-y-8">
      <div className="flex items-center gap-4 pb-4 border-b border-luxury-border">
        <span className="flex items-center justify-center bg-gray-200 text-gray-600 w-8 h-8 rounded-full text-sm font-bold">
          1
        </span>
        <h2 className="text-2xl font-serif font-bold text-deep-brown">Basic Service Information</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2 mt-2">
          <div className="flex justify-between items-center mb-1">
            <FormLabel className="!mb-0" required>
              Title
            </FormLabel>
            <span className="text-[10px] bg-primary-gold/10 text-primary-gold px-2 py-0.5 rounded-full font-medium">
              {values.title?.length || 0}/50
            </span>
          </div>
          <TextField
            name="title"
            value={values.title}
            slotProps={{ htmlInput: { maxLength: 50 } }}
            error={handleErrorField("title")}
            helperText={handleErrorFieldMessage("title")}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </div>
        <div className="md:col-span-1 mt-2">
          <FormLabel>Reference</FormLabel>
          <TextField
            name="reference"
            placeholder="ABC123"
            value={values.reference}
            error={handleErrorField("reference")}
            helperText={handleErrorFieldMessage("reference")}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </div>
        <div className="md:col-span-2 mt-2">
          <div className="flex justify-between items-center mb-1">
            <FormLabel className="!mb-0" required>
              Subtitle / Tagline
            </FormLabel>
            <span className="text-[10px] bg-primary-gold/10 text-primary-gold px-2 py-0.5 rounded-full font-medium">
              {values.subtitle?.length || 0}/100
            </span>
          </div>
          <TextField
            name="subtitle"
            value={values.subtitle}
            slotProps={{ htmlInput: { maxLength: 100 } }}
            error={handleErrorField("subtitle")}
            helperText={handleErrorFieldMessage("subtitle")}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </div>
        <div className="md:col-span-1 flex items-end">
          <FormControlLabel
            control={
              <Switch
                checked={values.exclusiveListing}
                onChange={(e) => setFieldValue("exclusiveListing", e.target.checked)}
              />
            }
            label="Exclusive Listing"
          />
        </div>
        <div className="md:col-span-3">
          <div className="flex justify-between items-center mb-1">
            <FormLabel className="!mb-0">Short description</FormLabel>
            <span className="text-[10px] bg-primary-gold/10 text-primary-gold px-2 py-0.5 rounded-full font-medium">
              {values.shortDescription?.length || 0}/300
            </span>
          </div>
          <TextField
            multiline
            rows={2}
            name="shortDescription"
            value={values.shortDescription}
            slotProps={{ htmlInput: { maxLength: 300 } }}
            error={handleErrorField("shortDescription")}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </div>
        <div className="md:col-span-3">
          <div className="flex justify-between items-center mb-1">
            <FormLabel className="!mb-0">Long description</FormLabel>
            <span className="text-[10px] bg-primary-gold/10 text-primary-gold px-2 py-0.5 rounded-full font-medium">
              {values.longDescription?.length || 0}/1000
            </span>
          </div>
          <TextField
            multiline
            rows={10}
            name="longDescription"
            value={values.longDescription}
            slotProps={{ htmlInput: { maxLength: 1000 } }}
            error={handleErrorField("longDescription")}
            helperText={handleErrorFieldMessage("longDescription")}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </div>
        <div className="md:col-span-3">
          <h3 className="text-lg font-serif font-semibold text-deep-brown flex items-center gap-2">
            <Map className="text-primary-gold" />
            Location
          </h3>
        </div>
        <div className="md:col-span-1">
          <FormLabel required>Málaga Region</FormLabel>
          <TextField
            select
            name="regionId"
            value={values.regionId}
            error={handleErrorField("regionId")}
            helperText={handleErrorFieldMessage("regionId")}
            onChange={handleChange}
            onBlur={handleBlur}>
            {malagaRegions.map((region: any) => (
              <MenuItem key={region.id} value={region.id}>
                {region.name}
              </MenuItem>
            ))}
          </TextField>
        </div>
        <div className="md:col-span-1">
          <FormLabel required>{malagaRegions.find((r: any) => r.id === values.regionId)?.name} City</FormLabel>
          <TextField
            select
            name="cityId"
            value={values.cityId}
            error={handleErrorField("cityId")}
            helperText={handleErrorFieldMessage("cityId")}
            onChange={(e) => [handleChange(e), setFieldValue("district", "")]}
            onBlur={handleBlur}>
            {malagaCities
              .filter((c: any) => c.regionId === values.regionId)
              .map((city: any) => (
                <MenuItem key={city.id} value={city.id}>
                  {city.name}
                </MenuItem>
              ))}
          </TextField>
        </div>
        <div className="md:col-span-1">
          <FormLabel>District</FormLabel>
          {values.cityId === 68 ? (
            <AutocompleteMarbellaDistricts
              value={values.district}
              onChange={(e: any, newValue: any) => handleChange({ target: { name: "district", value: newValue } })}
              onBlur={handleBlur}
            />
          ) : (
            <TextField name="district" value={values.district} onChange={handleChange} onBlur={handleBlur} />
          )}
        </div>
        <div className="md:col-span-3">
          <span className="italic font-semibold text-sm">
            ** If your service is not phisical, you can skip the following part **
          </span>
        </div>
        <div className="md:col-span-3">
          <FormLabel>Address</FormLabel>
          <TextField
            name="address"
            value={values.address}
            error={handleErrorField("address")}
            helperText={handleErrorFieldMessage("address")}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </div>
        <div className="md:col-span-3">
          <FormLabel>Location link</FormLabel>
          <TextField
            placeholder="Google Maps / Apple Maps Link"
            name="locationUrl"
            value={values.locationUrl}
            error={handleErrorField("locationUrl")}
            helperText={handleErrorFieldMessage("locationUrl")}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </div>
        <div className="md:col-span-3">
          <FormControl>
            <FormLabel id="demo-row-radio-buttons-group-label">Location Privacy</FormLabel>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="privacyLevel"
              value={values.privacyLevel}
              onChange={handleChange}>
              <FormControlLabel value="1" control={<Radio />} label="Exact" />
              <FormControlLabel value="2" control={<Radio />} label="Aproximately" />
              <FormControlLabel value="3" control={<Radio />} label="Hidden" />
            </RadioGroup>
          </FormControl>
        </div>
      </div>
    </section>
  )
}

export default BasicInformationForm
