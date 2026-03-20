'use client'

import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, Switch, TextField } from "@mui/material"
import { useFormikContext } from "formik"
import { DollarSign, Map } from "lucide-react"

const BasicInformationForm = () => {
  const { values, handleChange, handleBlur, errors, touched } = useFormikContext<any>()

  return (
    <section className="space-y-8">
      <div className="flex items-center gap-4 pb-4 border-b border-luxury-border">
        <span className="flex items-center justify-center bg-gray-200 text-gray-600 w-8 h-8 rounded-full text-sm font-bold">1</span>
        <h2 className="text-2xl font-serif font-bold text-deep-brown">Basic Service Information</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2 mt-2">
          <FormLabel required>Title</FormLabel>
          <TextField name="title" placeholder="Ej: Cena Gastronómica Privada al Atardecer" value={values.title} onChange={handleChange} onBlur={handleBlur} />
        </div>
        <div className="md:col-span-1 mt-2">
          <FormLabel required>Reference</FormLabel>
          <TextField name="reference" placeholder="Ej: 123456" value={values.reference} onChange={handleChange} onBlur={handleBlur} />
        </div>
        <div className="md:col-span-2">
          <div className="flex justify-between items-center mb-1">
            <FormLabel className="!mb-0" required>Short description</FormLabel>
            <span className="text-[10px] bg-primary-gold/10 text-primary-gold px-2 py-0.5 rounded-full font-medium">0/180</span>
          </div>
          <TextField multiline rows={2} placeholder="Breve resumen atractivo" name="shortDescription" value={values.shortDescription} onChange={handleChange} onBlur={handleBlur} />
        </div>
        <div className="md:col-span-1 flex items-center">
          <FormControlLabel control={<Switch defaultChecked />} label="Exclusive Listing" />
        </div>
        <div className="md:col-span-3">
          <FormLabel required>Long description</FormLabel>
          <TextField multiline rows={7} name="longDescription" value={values.longDescription} onChange={handleChange} onBlur={handleBlur} />
          <p className="text-xs text-luxury-gray/60 mt-2 text-right">Se recomiendan mínimo 300 caracteres para mejor posicionamiento.</p>
        </div>
        <div className="md:col-span-3">
          <h3 className="text-lg font-serif font-semibold text-deep-brown mb-3 flex items-center gap-2">
            <Map className="text-primary-gold" />
            Location
          </h3>
          <FormLabel required>Location</FormLabel>
          <TextField placeholder="Av. Paseo de la Reforma 123" name="location" value={values.location} onChange={handleChange} onBlur={handleBlur} />
        </div>
        <div className="md:col-span-3">
          <FormLabel required>Location link</FormLabel>
          <TextField placeholder="Link de Google Maps" name="locationUrl" value={values.locationUrl} onChange={handleChange} onBlur={handleBlur} />
        </div>
        <div className="md:col-span-3">
          <FormControl>
            <FormLabel id="demo-row-radio-buttons-group-label">Location Privacy</FormLabel>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="locationPrivacy"
              value={values.locationPrivacy}
              onChange={handleChange}
            >
              <FormControlLabel value="female" control={<Radio />} label="Exact" />
              <FormControlLabel value="male" control={<Radio />} label="Aproximately" />
              <FormControlLabel value="other" control={<Radio />} label="Hidden" />
            </RadioGroup>
          </FormControl>
        </div>
        <div className="md:col-span-3 p-6 bg-luxury-input dark:bg-zinc-800/50 rounded-lg border border-luxury-border mt-4">
          <h3 className="text-lg font-serif font-semibold text-deep-brown mb-6 flex items-center gap-2">
            <DollarSign className="text-primary-gold" />
            Price Configuration
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div>
              <FormLabel>Price Model</FormLabel>
              <select className="w-full bg-white dark:bg-zinc-800 border-luxury-border dark:border-zinc-700 rounded text-luxury-gray dark:text-gray-200 focus:ring-1 focus:ring-primary-gold focus:border-primary-gold py-2.5">
                <option>Fijo (Ej. 150€)</option>
                <option>Dese (Ej. Desde 150€)</option>
                <option>A consultar (Ej. Contact for price)</option>
              </select>
            </div>
            <div>
              <FormLabel>Price</FormLabel>
              <div className="relative">
                <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-luxury-gray/50 text-[20px]">payments</span>
                <input className="pl-10 w-full bg-white dark:bg-zinc-800 border-luxury-border dark:border-zinc-700 rounded text-luxury-gray dark:text-gray-200 focus:ring-1 focus:ring-primary-gold focus:border-primary-gold placeholder:text-luxury-gray/40 py-2.5" placeholder="0.00" type="number" />
              </div>
            </div>
            <div>
              <FormLabel>Currency</FormLabel>
              <div className="relative">
                <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-luxury-gray/50 text-[20px]">currency_exchange</span>
                <select className="pl-10 w-full bg-white dark:bg-zinc-800 border-luxury-border dark:border-zinc-700 rounded text-luxury-gray dark:text-gray-200 focus:ring-1 focus:ring-primary-gold focus:border-primary-gold py-2.5">
                  <option>EUR (€)</option>
                  <option>USD ($)</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BasicInformationForm