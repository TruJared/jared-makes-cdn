export interface Props {
  navigation: { name: string; href: string }[];
}

import { useState, useEffect } from "react";
import { Dialog } from "@headlessui/react";
import {
  Bars3Icon,
  XMarkIcon,
  SunIcon,
  MoonIcon,
} from "@heroicons/react/24/outline";

export default function Navigation(props: Props) {
  const { navigation } = props;
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState<boolean>();

  useEffect(() => {
    // TODO needs to use local storage to save the dark mode setting
    window
      .matchMedia("(prefers-color-scheme: dark)")
      .addEventListener("change", (e) => setDarkMode(e.matches ? true : false));

    // Setup dark/light mode for the first time
    setDarkMode(
      window.matchMedia("(prefers-color-scheme: dark)").matches ? true : false
    );

    return () => {
      window
        .matchMedia("(prefers-color-scheme: dark)")
        .removeEventListener("change", () => {});
    };
  }, []);

  return (
    <header className="bg-white">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          {!mobileMenuOpen && (
            <span>
              {darkMode ? (
                <MoonIcon
                  className="h-6 w-6 cursor-pointer"
                  aria-hidden="true"
                  onClick={() => setDarkMode(false)}
                />
              ) : (
                <SunIcon
                  className="h-6 w-6 cursor-pointer"
                  aria-hidden="true"
                  onClick={() => setDarkMode(true)}
                />
              )}
            </span>
          )}
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              {item.name}
            </a>
          ))}
        </div>
        {/* this keeps the nav centered */}
        <div className="hidden lg:flex lg:flex-1 lg:justify-end"></div>
      </nav>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            {darkMode ? (
              <MoonIcon
                className="h-6 w-6 cursor-pointer"
                aria-hidden="true"
                onClick={() => setDarkMode(false)}
              />
            ) : (
              <SunIcon
                className="h-6 w-6 cursor-pointer"
                aria-hidden="true"
                onClick={() => setDarkMode(true)}
              />
            )}
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}
