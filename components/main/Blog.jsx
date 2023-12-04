import { useGetPostsQuery } from "@/app/Redux/services/post";
import React from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import DOMPurify from "dompurify";

export default function Blog() {
  const searchParams = useSearchParams();
  const pageNumber = searchParams.get("page");
  const categoryName = searchParams.get("category");
  const { data, error, isLoading } = useGetPostsQuery({
    pageNumber: pageNumber,
    category: categoryName,
  });

  return (
    <section className=" pb-32">
      <div className="container lg:px-6 px-0 py-10 mx-auto">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl ">
            Yazılar
          </h1>

          {data && data.posts.data.length !== 0 && (
            <a
              href="/blog"
              className="px-6 py-2 font-medium tracking-wide text-slate-900 capitalize transition-colors duration-300 transform bg-white border-2 hover:bg-slate-700 hover:text-white hover:border-slate-700"
            >
              Tümü
            </a>
          )}
        </div>

        <hr className="my-8 border-gray-200 " />

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
          {data && data.posts.data.length == 0 && !error && (
            <h3 className="font-bold uppercase text-gray-900">
              Henüz herhangi bir yazı hazırlanmamıştır
            </h3>
          )}

          {error && (
            <h3 className="font-bold uppercase text-gray-900">
              Şu anda maalesef yazılara ulaşılamıyor lütfen daha sonra tekrar
              deneyiniz!
            </h3>
          )}

          {data &&
            data.posts.data.map((article, index) => {
              return (
                <div
                  key={article.id}
                  className="hover:shadow-xl duration-500 transition-shadow border rounded-md"
                >
                  <img
                    className="object-cover object-center w-full h-64 lg:h-48"
                    src={`${process.env.NEXT_PUBLIC_API_URL}/storage/${article.image}`}
                    alt=""
                  />

                  <div className="mt-8 px-4 pb-4">
                    <Link
                      href={{
                        pathname: "blog",
                        query: `category=${article.category.name}`,
                      }}
                      className="text-teal-600 uppercase font-semibold"
                    >
                      {article.category.name}
                    </Link>

                    <h1 className="mt-4 text-xl font-semibold text-gray-800 ">
                      {article.title}
                    </h1>

                    <div
                      className="mt-2 text-gray-500 line-clamp-3"
                      dangerouslySetInnerHTML={{
                        __html: DOMPurify.sanitize(article.body),
                      }}
                    ></div>

                    <div className="flex items-center justify-end mt-4 ">
                      <Link
                        className="px-6 py-2 font-medium rounded-md tracking-wide text-slate-900 capitalize transition-colors duration-300 transform bg-white border-2 hover:bg-slate-700 hover:text-white hover:border-slate-700"
                        href={`blog/${article.slug}`}
                      >
                        Daha Fazlası
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </section>
  );
}
