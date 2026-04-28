import Link from "next/link"

import { usePublicServices } from "@/context/PublicServicesContext"

const LiveItThisWeek = () => {
  const { latestServices } = usePublicServices()
  console.log(latestServices)
  const mockedServices = [
    {
      type: "Villa Special",
      title: "Sunset Palace Estate",
      subtitle: "Exclusive weekend access to the Golden Mile's finest property.",
      heroImageUrl:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCtILZOPLCHEuwmQo5Xj3zd9XtU1ucWg3Dajt0x_bl0L1LbTgyYQPeKTyvoGgTKsbcd0rzA1U2IO1YXQ5up8dmHjJIv9SzhKAzemL7fCPujoY5AXNKx0iaVMbxp8NEXsuygv6OeJvXAsywXY1HvBlkunoFf0rAJ5JDNx5IU3vBiV84JIkH3yHzCM1MdFyJ3oeLjm7vdz51C6NGiHgbQi03VksJxIf58y-QcLyfJL06mwD4rfPzQuTQPf7EXF9eP11JHRIgoK0aSQF8"
    },
    {
      type: "Gastronomy",
      title: "Chef's Table: Dani García",
      subtitle: "Private tasting menu for 8 guests with wine pairing.",
      heroImageUrl:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCyXspzyLcH2gkJyWNu0s0spCTJqkb_R4Y_Z-LNher-UtJv1wgLEEv7XZ-FPISrD_0ZMVY5gxzA0xTn6FxiBXWkHS9PSIbaw1jMGxncWJ_DnR3P_EbZxW7uJYsmFsCi1kXLOUg4ww-U9_fnwY04Rw18N0O4_22FXZ-KHjtDnr4nYZn6tWTPeXQSHruy-tYG-mP_1PO9k63BYi054koWZ-eCHULryN0sDWBvUDhH3K3TpWRDD_CdmZb9QmfsBcN9qqPxqI6ZA0SlpOU"
    },
    {
      type: "Yacht Charter",
      title: "The Mediterranean Pearl",
      subtitle: "3-day charter to Ibiza including crew and catering.",
      heroImageUrl:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuAKqtc55lgoFB9nQEZ4xr45KBWwOXDXsE7glySNiKUhyGoIP3rgwybX1l8gJo_cE_1fdDFES4zEygkee3GDW3aebKcxlDRnGGJdJwWQDl4XaT2K7SS82lorHD1fZ9hzQx46rqNDiK-u7W_Z4a7YHpNsbb8kq9_j6NPf7QamfcJZn64RuepHdjxldIaDNwAR01ko0E5Qnrb0Cz-OnsYl96cjo0vQPpEkBIUmSxzFjQ-PbuJOLcfhar7saESvqD6sUU6jmVPH_cEjUSw"
    },
    {
      type: "Wellness",
      title: "Holistic Retreat",
      subtitle: "Full spa takeover and personalized therapy sessions.",
      heroImageUrl:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuAJ3aFVnzR8PfOFYEwRP0p7KGXmaH2X_u14veGqaiTM2pQQOfqQPuW7hjouIqpa9jCysM3WvXSgMmsG8T422AUrKwbUDfVfU_q5bPWVdh-ndRtR7jXa6WJgoI7IwJbGH3xOwM_ReiM3OlNZIsjqDdrQe42b6f0QJ8t4b5v_-lEp2cBjaendcz9nm_ONfixOAIxAG_ciLGVdg-2uAVLpTCaFvnGDOgiQESMBdI1RBPlpfUqJwg1bNnIYrRHSboalx-2-yyzoTX25Qns"
    }
  ]
  const listedServices = latestServices.length ? latestServices.slice(0, 3) : mockedServices
  return (
    <section className="bg-[#F9F8F6] py-24 border-t border-deep-brown/10 relative overflow-hidden">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mb-14 text-center">
          <h2 className="font-serif text-3xl text-deep-brown md:text-4xl lg:text-5xl">Live it this week</h2>
          <div className="mx-auto mt-4 h-px w-16 bg-primary-gold"></div>
        </div>

        <div className="scrollbar-hide flex justify-center snap-x snap-mandatory gap-6 overflow-x-auto pb-8 px-2 -mx-2">
          {listedServices.map((item, idx) => (
            <div key={idx} className="min-w-[300px] md:min-w-[360px] snap-center flex flex-col gap-6">
              <Link
                href={item.id ? `/service/${item.id}` : "/catalog"}
                className="group relative aspect-[16/9] w-full cursor-pointer overflow-hidden rounded-sm shadow-md transition-all hover:shadow-lg">
                <div
                  className="h-full w-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                  style={{ backgroundImage: `url(${item.heroImageUrl})` }}></div>
                <div className="absolute inset-0 bg-gradient-to-t from-deep-brown/90 to-transparent opacity-60 group-hover:opacity-75 transition-opacity"></div>
                <div className="absolute bottom-0 p-6 text-left">
                  <span className="mb-1 block text-xs font-bold uppercase tracking-widest text-primary-gold">
                    {item.serviceType.name}
                  </span>
                  <h3 className="font-serif text-xl text-white">{item.title}</h3>
                  <p className="mt-1 text-sm text-white/80 line-clamp-2">{item.subtitle}</p>
                </div>
              </Link>
            </div>
          ))}
        </div>

        {/* <div className="mt-4 flex justify-center gap-2">
            <div className="h-1.5 w-8 rounded-full bg-deep-brown"></div>
            <div className="h-1.5 w-1.5 rounded-full bg-deep-brown/30"></div>
            <div className="h-1.5 w-1.5 rounded-full bg-deep-brown/30"></div>
          </div> */}

        <div className="mt-12 flex justify-center">
          <Link
            href="/catalog"
            className="rounded-sm border border-deep-brown bg-transparent px-8 py-3 text-sm font-bold uppercase tracking-widest text-deep-brown transition-all hover:bg-deep-brown hover:text-white hover:shadow-md active:scale-95">
            View All Weekly Features
          </Link>
        </div>
      </div>
    </section>
  )
}

export default LiveItThisWeek
