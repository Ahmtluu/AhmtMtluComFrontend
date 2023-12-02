import React from "react";

export default function ProjectCard({ project, index }) {
  return (
    <a href={project.slug} className=" " key={index}>
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
}
