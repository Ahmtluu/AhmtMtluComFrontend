import React from "react";
import ProjectSkeloton from "../Skeletons/ProjectSkeloton";
import { useGetProjectsQuery } from "@/app/Redux/services/project";
import ProjectCard from "../sub/ProjectCard";
import Framer from "@/components/main/PageFramer";

export default function Project() {
  const { data, error, isLoading } = useGetProjectsQuery();
  return (
    <section className=" my-24">
      <div className="container lg:px-6 px-0 py-10 mx-auto">
        <h1 className="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl ">
          Projelerim
        </h1>

        <p className="mt-4 text-center text-gray-500 ">
          Sadece kod yazmakla kalmıyor, aynı zamanda projelerinizi hayata
          geçirmek için stratejik düşünce ve yaratıcı yaklaşımlar kullanıyorum.
        </p>
        {!isLoading && !error && (
          <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 sm:grid-cols-2 lg:grid-cols-3 h-64">
            {data && data.projects.data.length === 0 && (
              <h3 className="font-bold uppercase text-slate-700 mt-28">
                Henüz herhangi bir proje yayımlanmamış
              </h3>
            )}

            {!isLoading &&
              data &&
              data.projects.data.map((project, index) => {
                return (
                  <Framer key={index}>
                    <ProjectCard project={project} index={index} />
                  </Framer>
                );
              })}
          </div>
        )}

        {isLoading && !error && <ProjectSkeloton />}
        {error && (
          <h3 className="font-bold uppercase text-gray-900">
            Şu anda maalesef projelere ulaşılamıyor lütfen daha sonra tekrar
            deneyiniz!
          </h3>
        )}
      </div>
    </section>
  );
}
