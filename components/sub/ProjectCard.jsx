import Link from "next/link";
import React from "react";

export default function ProjectCard({ project, index }) {
  return (
    <Link
      href={project.slug}
      key={index}
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="relative group transform transition hover:scale-105 duration-700 bg-slate-700 rounded-md">
        <img
          className="w-full md:h-64 backdrop-blur-md duration-700 group-hover:opacity-20 rounded-md"
          src={`${process.env.NEXT_PUBLIC_API_URL}/storage/${project.image}`}
        />
        <div className="opacity-0 group-hover:opacity-100 flex justify-center items-center">
          <h2 className="text-center absolute inset-x-0 lg:top-32 top-16 text-xl text-white font-semibold duration-700">
            {project.title}
          </h2>
        </div>
      </div>
    </Link>
  );
}
