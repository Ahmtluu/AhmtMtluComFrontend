import React, { useEffect, useState } from "react";
import axios from "axios";
import ProjectSkeloton from "./Skeletons/ProjectSkeloton";
import { useGetProjectsQuery } from "@/app/Redux/services/project";

require("dotenv").config();

export default function Project() {


  const { data, error, isLoading } = useGetProjectsQuery();
  console.log(data);


  return (
    <section className=" my-24">
      <div className="container lg:px-6 px-0 py-10 mx-auto">
        <h1 className="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl animate-fade-up">
          Projelerim
        </h1>

        <p className="mt-4 text-center text-gray-500  animate-fade-up">
          Sadece kod yazmakla kalmıyor, aynı zamanda projelerinizi hayata
          geçirmek için stratejik düşünce ve yaratıcı yaklaşımlar kullanıyorum.
        </p>
        {!isLoading && (
          <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 sm:grid-cols-2 lg:grid-cols-3">
            {data && data.length === 0 && (
              <h3 className="font-bold uppercase text-slate-700 mt-28">
                Henüz herhangi bir proje yayımlanmamış
              </h3>
            )}

            {data && data.map((project, index) => {
              return (
                <a href={project.slug} className=" ">
                  <div className="relative group transform transition hover:scale-105 duration-700 bg-slate-700">
                    <img
                      className="w-full md:h-72 backdrop-blur-md duration-700 group-hover:opacity-20"
                      src={`'/storage/' ${project.image}`}
                    />
                    <div className="opacity-0 group-hover:opacity-100 flex justify-center items-center">
                      <h2 className="text-center absolute inset-x-0 lg:top-32 top-16 text-xl text-white font-semibold duration-700">
                        {project.title}
                      </h2>
                    </div>
                  </div>
                </a>
              );
            })}
          </div>
        )}

        {isLoading && !error && <ProjectSkeloton />}
        {error && (
          <h3 class="font-bold uppercase text-gray-900">
            Şu anda maalesef projelere ulaşılamıyor lütfen daha sonra tekrar
            deneyiniz!
          </h3>
        )}
      </div>
    </section>
  );
}
