import { getServices } from "@/app/lib/dashboard/apiServices";
import ServicesPage from "@/components/dashboard/services/ServicesPage";

export default async function Page() {
  const initialData = await getServices();
  return <ServicesPage initialData={initialData} />
}