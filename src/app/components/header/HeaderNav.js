'use client'
import { useState } from 'react'
import { Dialog, Popover, } from '@headlessui/react'
import {
  Bars3Icon,
  XMarkIcon,
} from '@heroicons/react/24/outline'


export default function HeaderNav() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="bg-[#212428] text-white border-b-[0.5px] border-slate-700">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 pb-4 pt-2 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1 flex-col">
          <a href="/" className="-m-1.5 p-1.5">
            <span className="text-[#2896df] text-[30px] font-bold hover:text-white transition-all duration-200">GZ DEV</span>
          </a>
          <span className="text-white text-lg">Frontend Developer</span>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <Popover.Group className="hidden lg:flex lg:gap-x-12 text-white font-merriweather">
          <a href="/" className="text-lg font-semibold leading-6 hover:text-[#2896df] transition-all duration-200">
            HOME
          </a>
          <a href="/projects" className="text-lg font-semibold leading-6 hover:text-[#2896df] transition-all duration-200">
            PROJECTS
          </a>
          <a href="/about" className="text-lg font-semibold leading-6 hover:text-[#2896df] transition-all duration-200">
            ABOUT
          </a>
          <a href="contact" className="text-lg font-semibold leading-6 hover:text-[#2896df] transition-all duration-200">
            CONTACT
          </a>
        </Popover.Group>
      </nav>
      <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-[#212428] px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <div className="flex flex-col">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="text-[#2896df] text-[30px] font-bold">GZ DEV</span>
              </a>
              <span className="text-white text-lg">Frontend Developer</span>
            </div>
            
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-white"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10 font-merriweather">
              <div className="space-y-2 py-6">
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-gray-50"
                >
                  HOME
                </a>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-gray-50"
                >
                  SKILLS
                </a>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-gray-50"
                >
                  ABOUT
                </a>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-gray-50"
                >
                  CONTACT
                </a>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  )
}
