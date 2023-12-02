import React from "react";

export default function NotFound() {
  return (
    <div class="flex items-center justify-center min-h-screen  py-48">
      <div class="flex flex-col">
        <div class="flex flex-col items-center">
          <div class="text-slate-500 font-bold text-7xl">404</div>

          <div class="font-bold text-slate-700 text-3xl xl:text-7xl lg:text-6xl md:text-5xl mt-10">
            Sayfa bulunamadı
          </div>

          <div class="text-gray-400 font-medium text-sm md:text-xl lg:text-2xl mt-8 text-center">
            Aramış olduğun sayfa bulunamadı! Silinmiş veya taşınmış olabilir
          </div>
        </div>
      </div>
    </div>
  );
}
