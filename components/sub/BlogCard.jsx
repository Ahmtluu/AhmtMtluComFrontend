import React from "react";

export default function BlogCard({ article }) {
  return (
    <div>
      <div className="flex bg-white transition hover:shadow-xl mb-8">
        <div className="rotate-180 p-2 [writing-mode:_vertical-lr]">
          <time
            dateTime="2022-10-10"
            className="flex items-center justify-between gap-4 text-xs font-bold uppercase text-gray-900"
          >
            <span>2022</span>
            <span className="w-px flex-1 bg-gray-900/10"></span>
            <span>Oct 10</span>
          </time>
        </div>

        <div className="hidden sm:block sm:basis-56">
          <img
            alt="Post Image"
            src={`${process.env.NEXT_PUBLIC_API_URL}/storage/${article.image}`}
            className="aspect-square h-full w-full"
          />
        </div>

        <div className="flex flex-1 flex-col justify-between">
          <div className="border-gray-900/10 p-4 sm:border-l-transparent sm:p-6">
            <Link
              href={`/blog?category=${article.category.name}`}
              className="text-teal-700 uppercase text-sm font-medium"
            >
              {article.category.name}
            </Link>
            <Link
              href={{
                pathname: `blog/${article.slug}`,
              }}
            >
              <img
                alt="Post Image"
                src={`${process.env.NEXT_PUBLIC_API_URL}/storage/${article.image}`}
                className="block sm:hidden sm:basis-56 aspect-square h-full w-full"
              />

              <h1 className="font-bold uppercase text-gray-900">
                {article.title}
              </h1>

              <div
                className="mt-2 line-clamp-3 text-sm/relaxed text-gray-700"
                dangerouslySetInnerHTML={{
                  __html: DOMPurify.sanitize(article.body),
                }}
              />
            </Link>
          </div>
        </div>
      </div>
      <div className="border-b-2 my-6" />
    </div>
  );
}
