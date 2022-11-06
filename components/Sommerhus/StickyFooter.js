import { ShoppingCartIcon } from '@heroicons/react/24/outline'

export default function StickyFooter() {
  return (
    <>
      {/*
        Make sure you add some bottom padding to pages that include a sticky banner like this to prevent
        your content from being obscured when the user scrolls to the bottom of the page.
      */}
      <div className="fixed inset-x-0 bottom-0">
        <div className="bg-[#16A34A]">
          <div className="mx-auto max-w-7xl py-3 px-3 sm:px-6 lg:px-8">
            <div className="flex flex-wrap items-center justify-between">
              <div className="flex w-0 flex-1 items-center">
                <span className="flex rounded-lg bg-[#16A34A] p-2">
                  <ShoppingCartIcon className="h-6 w-6 text-white" aria-hidden="true" />
                </span>
                <p className="ml-3 truncate font-medium text-white">
                  <span className="">Total pris for pr. døgn: 1298</span>
                  {/* <span className="hidden md:inline">Big news! We're excited to announce a brand new product.</span> */}
                </p>
              </div>
              <div className="order-3 mt-2 w-full flex-shrink-0 sm:order-2 sm:mt-0 sm:w-auto">
                <a
                  href="#"
                  className="flex items-center justify-center rounded-md border border-transparent bg-white px-4 py-2 text-sm font-medium text-[#16A34A] shadow-sm hover:bg-green-100"
                >
                  Book sommerhus
                </a>
              </div>
        
            </div>
          </div>
        </div>
      </div>
    </>
  )
}