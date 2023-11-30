"use client";
import React, { useEffect, useState, Fragment } from "react";

import { Dialog, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

export default function AppHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollPosition, setLastScrollPosition] = useState(0);
  const [scrollOffset, setScrollOffset] = useState(40);

  const navigation = [
    { name: "Ana sayfa", href: "/" },
    { name: "Yazılar", href: "/blog" },
    { name: "Hakkımda", href: "/about" },
    { name: "İletişim", href: "/contact" },
  ];

  const onScroll = () => {
    if (window.pageYOffset < 0) {
      return;
    }
    if (Math.abs(window.pageYOffset - lastScrollPosition) < scrollOffset) {
      return;
    }
    setShowHeader(window.pageYOffset < lastScrollPosition);
    setLastScrollPosition(window.pageYOffset);
  };

  useEffect(() => {
    setLastScrollPosition(window.pageYOffset);

    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, [lastScrollPosition]);

  return (
    <header
      className={`header fixed top-0 inset-x-0 shadow-sm backdrop-blur-lg bg-grey/80 z-50 ${
        showHeader ? "" : "is-hidden"
      }`}
    >
      <nav
        className="flex items-center lg:justify-around justify-between p-6"
        aria-label="Global"
      >
        <div className="flex">
          <Link
            href="/"
            className="-m-1.5 p-1.5 uppercase text-slate-700 font-bold text-2xl hover:text-[#008080] duration-500"
          >
            ahmtmtlu
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md p-2.5 text-slate-700"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item, index) => {
            return (
              <Link
                key={index}
                className="text-md font-semibold leading-6 text-slate-700 transtion-colors duration-500 "
                href={item.href}
              >
                {item.name}
              </Link>
            );
          })}
        </div>
      </nav>
      <Transition appear show={mobileMenuOpen} as={Fragment}>
        <Dialog
          className="lg:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          open={mobileMenuOpen}
          onClose={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <div className="fixed inset-0 z-50 dialog-panel px-6" />

          <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <Link
                href="/"
                className="-m-1.5 p-1.5 uppercase font-bold text-2xl hover:text-[#008080] duration-500 text-slate-700"
              >
                ahmtmtlu
              </Link>
              <button
                type="button"
                className="rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="mt-6 flow-root">
                <div className="-my-6 divide-y divide-gray-500/10">
                  <div className="space-y-2 py-6">
                    {navigation.map((item, index) => {
                      return (
                        <Transition.Child
                          as={Fragment}
                          enter="ease-out duration-300"
                          enterFrom="opacity-0 scale-95"
                          enterTo="opacity-100 scale-100"
                          leave="ease-in duration-200"
                          leaveFrom="opacity-100 scale-100"
                          leaveTo="opacity-0 scale-95"
                        >
                          <Link
                            key={index}
                            className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-slate-700 hover:bg-gray-50"
                            href={`${item.href}`}
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                          >
                            {item.name}
                          </Link>
                        </Transition.Child>
                      );
                    })}
                  </div>
                </div>
              </div>
            </Transition.Child>
          </Dialog.Panel>
        </Dialog>
      </Transition>
    </header>
  );
}
