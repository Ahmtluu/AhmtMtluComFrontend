import Link from "next/link";
import React from "react";

export default function AppFooter() {
  return (
    <div className="container px-6 mx-auto">
      <div className="lg:flex">
        <div className="w-full -mx-6 lg:w-2/5">
          <div className="px-6">
            <Link
              href="/"
              className="uppercase font-semibold text-3xl transition-colors duration-300 hover:text-[#008080]"
            >
              ahmtmtlu
            </Link>

            <p className="max-w-sm mt-2 text-gray-500 ">
              Full Stack Web Developer
            </p>

            <div className="flex mt-6 -mx-2">
              <Link
                href="https://bionluk.com/ahmtlu"
                className="mx-2 text-gray-600 transition-colors duration-300  hover:text-[#008080] "
                aria-label="Bionluk"
              >
                {/* <font-awesome-icon
                            :icon="['fa', 'store']"
                            className="icon alt h-4"
                        /> */}
              </Link>

              <Link
                href="https://www.linkedin.com/in/ahmet-mutlu-1b223017a/"
                className="mx-2 text-gray-600 transition-colors duration-300  hover:text-[#008080] "
                aria-label="linkedin"
              >
                {/* <font-awesome-icon
                            :icon="['fab', 'linkedin']"
                            className="icon alt h-4 w-5"
                        /> */}
              </Link>

              <Link
                href="https://github.com/ahmtluu"
                className="mx-2 text-gray-600 transition-colors duration-300  hover:text-[#008080]"
                aria-label="Github"
              >
                {/* <font-awesome-icon
                            :icon="['fab', 'github']"
                            className="icon alt h-4 w-5"
                        /> */}
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-6 lg:mt-0 lg:flex-1">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            <div>
              <Link
                href="/about"
                className="text-gray-700  font-semibold transition-colors duration-300 hover:text-[#008080]"
              >
                Hakkımda
              </Link>
            </div>

            <div>
              <Link
                href="/posts"
                className="text-gray-700  font-semibold transition-colors duration-300 hover:text-[#008080]"
              >
                Yazılarım
              </Link>
            </div>

            <div>
              <h3 className="text-gray-700  font-semibold">Projelerim</h3>
              <Link
                href="https://glourcosmetics.com/"
                className="block mt-2 text-sm text-gray-600  transition-colors duration-300 hover:text-[#008080]"
              >
                Glour Cosmetics
              </Link>
              <Link
                href="https://lunntasarim.com/"
                className="block mt-2 text-sm text-gray-600  transition-colors duration-300 hover:text-[#008080]"
              >
                Lunn Tasarım
              </Link>
              <Link
                href="https://lykkecosmetic.com/"
                className="block mt-2 text-sm text-gray-600  transition-colors duration-300 hover:text-[#008080]"
              >
                Lykke Cosmetic
              </Link>
            </div>

            <div>
              <Link
                href="/contact"
                className="text-gray-700  font-semibold transition-colors duration-300 hover:text-[#008080]"
              >
                İletişim
              </Link>

              <Link
                href="mailto:ahmtt.mtlu@gmail.com"
                className="block mt-2 text-sm text-gray-600  transition-colors duration-300 hover:text-[#008080]"
              >
                ahmtt.mtlu@gmail.com
              </Link>
            </div>
          </div>
        </div>
      </div>

      <hr className="h-px my-6 bg-gray-200 border-none " />

      <div>
        <p className="text-center text-gray-500 ">
          © AhmtMtlu 2023 - Tüm Hakları Gizlidir
        </p>
      </div>
    </div>
  );
}
