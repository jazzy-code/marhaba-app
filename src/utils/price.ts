export const getPriceModel = (model: string) =>
  model === "FIXED" ? "Price" : model === "FROM" ? "Strating at" : "Consult Price"
