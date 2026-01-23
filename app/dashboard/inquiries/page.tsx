export default function InquiresPage() {
  return (
    <div className="flex-1 overflow-y-auto p-6 lg:p-10">
      <div className="max-w-7xl mx-auto flex flex-col gap-8 h-full">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <h1 className="font-serif text-2xl text-brown-dark dark:text-white font-medium">My Inquiries</h1>
            <p className="text-warm-grey mt-2 font-sans text-sm">Review and manage inquiries for your services.</p>
          </div>
          <div className="relative group w-full md:w-64">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <i className="w-4 h-4 text-stone-400 group-focus-within:text-primary-gold transition-colors" data-lucide="search"></i>
            </div>
            <input className="block w-full pl-10 pr-3 py-2 border-none border-b border-transparent border-b-stone-200 focus:border-b-primary-gold focus:ring-0 bg-white dark:bg-surface-dark placeholder-stone-400 text-sm transition-all shadow-sm rounded-sm" placeholder="Search inquiries..." type="text" />
          </div>
        </div>
        <div className="bg-white dark:bg-surface-dark rounded-sm shadow-sm border border-subtle-border dark:border-stone-800 flex flex-col">
          <div className="p-6 border-b border-subtle-border dark:border-stone-800">
            <h2 className="font-serif text-xl text-brown-dark dark:text-white font-medium">Received Inquiries</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="text-xs font-sans text-warm-grey uppercase tracking-widest bg-stone-50/50 dark:bg-stone-900/50 border-b border-subtle-border dark:border-stone-800">
                  <th className="px-6 py-4 font-semibold pl-8">Client</th>
                  <th className="px-6 py-4 font-semibold">Service / Message</th>
                  <th className="px-6 py-4 font-semibold">Date</th>
                  <th className="px-6 py-4 font-semibold">Status</th>
                  <th className="px-6 py-4 font-semibold text-right pr-8">Actions</th>
                </tr>
              </thead>
              <tbody className="text-sm divide-y divide-subtle-border dark:divide-stone-800">
                <tr className="group hover:bg-stone-50 dark:hover:bg-stone-800/50 transition-colors">
                  <td className="px-6 py-4 pl-8">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-stone-200 flex items-center justify-center text-brown-dark font-serif font-bold text-sm shrink-0">
                        JD
                      </div>
                      <div>
                        <p className="font-serif text-brown-dark dark:text-stone-200 font-medium text-base group-hover:text-primary-gold transition-colors">James Dawson</p>
                        <p className="text-warm-grey text-xs mt-0.5">j.dawson@example.com</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <p className="font-serif text-brown-dark dark:text-stone-200 font-medium text-sm">Majestic 50m Yacht Charter</p>
                    <p className="text-warm-grey text-xs mt-0.5 truncate max-w-[200px]">Looking for availability next weekend for a sunset...</p>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2 text-warm-grey text-xs">
                      <span>Today, 10:30 AM</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-amber-50 text-amber-800 border border-amber-100/50 dark:bg-amber-900/20 dark:text-amber-400 dark:border-amber-900/30">
                      New
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right pr-8">
                    <div className="flex justify-end gap-2">
                      <button className="p-2 text-primary-gold hover:bg-primary-gold/10 rounded-full transition-colors" title="View Details">
                        <i className="w-4 h-4" data-lucide="eye"></i>
                      </button>
                      <button className="p-2 text-primary-gold hover:bg-primary-gold/10 rounded-full transition-colors" title="Contact Client">
                        <i className="w-4 h-4" data-lucide="mail"></i>
                      </button>
                      <button className="p-2 text-warm-grey hover:bg-stone-100 dark:hover:bg-stone-800 rounded-full transition-colors" title="More Options">
                        <i className="w-4 h-4" data-lucide="more-horizontal"></i>
                      </button>
                    </div>
                  </td>
                </tr>
                <tr className="group hover:bg-stone-50 dark:hover:bg-stone-800/50 transition-colors">
                  <td className="px-6 py-4 pl-8">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-stone-200 flex items-center justify-center text-brown-dark font-serif font-bold text-sm shrink-0">
                        SC
                      </div>
                      <div>
                        <p className="font-serif text-brown-dark dark:text-stone-200 font-medium text-base group-hover:text-primary-gold transition-colors">Sarah Connor</p>
                        <p className="text-warm-grey text-xs mt-0.5">sarah.c@techcorp.com</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <p className="font-serif text-brown-dark dark:text-stone-200 font-medium text-sm">Villa Las Brisas</p>
                    <p className="text-warm-grey text-xs mt-0.5 truncate max-w-[200px]">Interested in booking for a private event in July.</p>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2 text-warm-grey text-xs">
                      <span>Yesterday, 4:15 PM</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-50 text-green-800 border border-green-100/50 dark:bg-green-900/20 dark:text-green-400 dark:border-green-900/30">
                      Contacted
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right pr-8">
                    <div className="flex justify-end gap-2">
                      <button className="p-2 text-primary-gold hover:bg-primary-gold/10 rounded-full transition-colors" title="View Details">
                        <i className="w-4 h-4" data-lucide="eye"></i>
                      </button>
                      <button className="p-2 text-primary-gold hover:bg-primary-gold/10 rounded-full transition-colors" title="Contact Client">
                        <i className="w-4 h-4" data-lucide="phone"></i>
                      </button>
                      <button className="p-2 text-warm-grey hover:bg-stone-100 dark:hover:bg-stone-800 rounded-full transition-colors" title="More Options">
                        <i className="w-4 h-4" data-lucide="more-horizontal"></i>
                      </button>
                    </div>
                  </td>
                </tr>
                <tr className="group hover:bg-stone-50 dark:hover:bg-stone-800/50 transition-colors">
                  <td className="px-6 py-4 pl-8">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-stone-200 flex items-center justify-center text-brown-dark font-serif font-bold text-sm shrink-0">
                        MR
                      </div>
                      <div>
                        <p className="font-serif text-brown-dark dark:text-stone-200 font-medium text-base group-hover:text-primary-gold transition-colors">Michael Ross</p>
                        <p className="text-warm-grey text-xs mt-0.5">m.ross@legal.com</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <p className="font-serif text-brown-dark dark:text-stone-200 font-medium text-sm">Supercar City Tour</p>
                    <p className="text-warm-grey text-xs mt-0.5 truncate max-w-[200px]">Is the Ferrari 488 available for this Saturday?</p>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2 text-warm-grey text-xs">
                      <span>Oct 25, 2023</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-amber-50 text-amber-800 border border-amber-100/50 dark:bg-amber-900/20 dark:text-amber-400 dark:border-amber-900/30">
                      New
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right pr-8">
                    <div className="flex justify-end gap-2">
                      <button className="p-2 text-primary-gold hover:bg-primary-gold/10 rounded-full transition-colors" title="View Details">
                        <i className="w-4 h-4" data-lucide="eye"></i>
                      </button>
                      <button className="p-2 text-primary-gold hover:bg-primary-gold/10 rounded-full transition-colors" title="Contact Client">
                        <i className="w-4 h-4" data-lucide="mail"></i>
                      </button>
                      <button className="p-2 text-warm-grey hover:bg-stone-100 dark:hover:bg-stone-800 rounded-full transition-colors" title="More Options">
                        <i className="w-4 h-4" data-lucide="more-horizontal"></i>
                      </button>
                    </div>
                  </td>
                </tr>
                <tr className="group hover:bg-stone-50 dark:hover:bg-stone-800/50 transition-colors opacity-75">
                  <td className="px-6 py-4 pl-8">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-stone-200 flex items-center justify-center text-brown-dark font-serif font-bold text-sm shrink-0">
                        EL
                      </div>
                      <div>
                        <p className="font-serif text-brown-dark dark:text-stone-200 font-medium text-base group-hover:text-primary-gold transition-colors">Emma Larson</p>
                        <p className="text-warm-grey text-xs mt-0.5">emma.larson@design.net</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <p className="font-serif text-brown-dark dark:text-stone-200 font-medium text-sm">Private Chef Experience</p>
                    <p className="text-warm-grey text-xs mt-0.5 truncate max-w-[200px]">Inquiry regarding a dinner for 8 people.</p>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2 text-warm-grey text-xs">
                      <span>Oct 20, 2023</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-50 text-gray-600 border border-gray-100/50 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-700">
                      Archived
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right pr-8">
                    <div className="flex justify-end gap-2">
                      <button className="p-2 text-primary-gold hover:bg-primary-gold/10 rounded-full transition-colors" title="View Details">
                        <i className="w-4 h-4" data-lucide="eye"></i>
                      </button>
                      <button className="p-2 text-primary-gold hover:bg-primary-gold/10 rounded-full transition-colors" title="Contact Client">
                        <i className="w-4 h-4" data-lucide="mail"></i>
                      </button>
                      <button className="p-2 text-warm-grey hover:bg-stone-100 dark:hover:bg-stone-800 rounded-full transition-colors" title="More Options">
                        <i className="w-4 h-4" data-lucide="more-horizontal"></i>
                      </button>
                    </div>
                  </td>
                </tr>
                <tr className="group hover:bg-stone-50 dark:hover:bg-stone-800/50 transition-colors">
                  <td className="px-6 py-4 pl-8">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-stone-200 flex items-center justify-center text-brown-dark font-serif font-bold text-sm shrink-0">
                        DK
                      </div>
                      <div>
                        <p className="font-serif text-brown-dark dark:text-stone-200 font-medium text-base group-hover:text-primary-gold transition-colors">David King</p>
                        <p className="text-warm-grey text-xs mt-0.5">dking@finance.org</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <p className="font-serif text-brown-dark dark:text-stone-200 font-medium text-sm">VIP Heli-Transfer</p>
                    <p className="text-warm-grey text-xs mt-0.5 truncate max-w-[200px]">Transfer from Malaga Airport to Puerto Banus.</p>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2 text-warm-grey text-xs">
                      <span>Oct 18, 2023</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-50 text-green-800 border border-green-100/50 dark:bg-green-900/20 dark:text-green-400 dark:border-green-900/30">
                      Contacted
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right pr-8">
                    <div className="flex justify-end gap-2">
                      <button className="p-2 text-primary-gold hover:bg-primary-gold/10 rounded-full transition-colors" title="View Details">
                        <i className="w-4 h-4" data-lucide="eye"></i>
                      </button>
                      <button className="p-2 text-primary-gold hover:bg-primary-gold/10 rounded-full transition-colors" title="Contact Client">
                        <i className="w-4 h-4" data-lucide="phone"></i>
                      </button>
                      <button className="p-2 text-warm-grey hover:bg-stone-100 dark:hover:bg-stone-800 rounded-full transition-colors" title="More Options">
                        <i className="w-4 h-4" data-lucide="more-horizontal"></i>
                      </button>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="border-t border-subtle-border dark:border-stone-800 bg-stone-50 dark:bg-stone-900 p-4 flex items-center justify-between rounded-b-sm">
            <span className="text-xs text-stone-500">Showing 1-5 of 8 Inquiries</span>
            <div className="flex gap-1">
              <button className="p-2 rounded-sm hover:bg-stone-200 dark:hover:bg-stone-800 text-stone-500 disabled:opacity-50">
                <span className="material-symbols-outlined">chevron_left</span>
              </button>
              <button className="px-3 py-1 rounded-sm bg-primary-gold text-white text-xs font-medium shadow-sm">1</button>
              <button className="px-3 py-1 rounded-sm hover:bg-stone-200 dark:hover:bg-stone-800 text-stone-600 dark:text-stone-400 text-xs font-medium transition-colors">2</button>
              <button className="p-2 rounded-sm hover:bg-stone-200 dark:hover:bg-stone-800 text-stone-500">
                <i className="w-4 h-4" data-lucide="chevron-right"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}