import axios from "axios";
import React, { useEffect, useState } from "react";

export default function Blog() {
  const [articles, setArticle] = useState([]);
  const [isSuccessed, setSuccessStatus] = useState(false);
  const [isLoading, setLoadingStatus] = useState(true);

  const [isError, setErrorStatus] = useState(false);

  const getArticles = async () => {
    await axios(`${process.env.API_URL}/api/get_all_articles`)
      .then((res) => {
        articles.value = res.data.posts.data;
        setSuccessStatus(true);
      })
      .catch((e) => {
        setErrorStatus(true);
      });
    setLoadingStatus(false);
  };

  useEffect(() => {
    getArticles();
  }, []);

  return (
    <section class=" pb-32">
      <div class="container lg:px-6 px-0 py-10 mx-auto">
        <div class="flex items-center justify-between">
          <h1 class="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl ">
            Yazılar
          </h1>

          <a
            v-if="isSuccessed && articles.length !== 0"
            href="/blog"
            class="px-6 py-2 font-medium tracking-wide text-slate-900 capitalize transition-colors duration-300 transform bg-white border-2 hover:bg-slate-700 hover:text-white hover:border-slate-700"
          >
            Tümü
          </a>
        </div>

        <hr class="my-8 border-gray-200 " />

        <div class="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
          {articles && articles.length == 0 && !isError && (
            <h3 class="font-bold uppercase text-gray-900">
              Henüz herhangi bir yazı hazırlanmamıştır
            </h3>
          )}

          {isError && (
            <h3 class="font-bold uppercase text-gray-900">
              Şu anda maalesef yazılara ulaşılamıyor lütfen daha sonra tekrar
              deneyiniz!
            </h3>
          )}

          {articles &&
            articles.map((article, index) => {
              return (
                <div
                  key={article.id}
                  class="hover:shadow-xl duration-500 transition-shadow"
                >
                  <img
                    class="object-cover object-center w-full h-64 lg:h-80"
                    src={`${config.public.apiUrl}/storage/${article.image}`}
                    alt=""
                  />

                  <div class="mt-8 px-4 pb-4">
                    <span class="text-teal-600 uppercase font-semibold">
                      {article.category.name}
                    </span>

                    <h1 class="mt-4 text-xl font-semibold text-gray-800 ">
                      {article.title}
                    </h1>

                    <p class="mt-2 text-gray-500 ">{article.description}</p>

                    <div class="flex items-center justify-between mt-4">
                      <Link
                        class="px-6 py-2 font-medium tracking-wide text-slate-900 capitalize transition-colors duration-300 transform bg-white border-2 hover:bg-slate-700 hover:text-white hover:border-slate-700"
                        href={`posts/${article.slug}`}
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
