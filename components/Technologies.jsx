import React from "react";

export default function Technologies() {
  const technologies = [
    [
      {
        name: "JavaScript",
        description:
          "Fingerstache flexitarian street art 8-bit waist co, subway tile poke farm.",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/640px-JavaScript-logo.png",
        color: "text-[#FDE047]",
        hovercolor: "hover:border-[#FDE047]",
        url: "https://developer.mozilla.org/en-US/docs/Web/API/Document",
      },

      {
        name: "MySQL",
        url: "https://mysql.com/",
        description:
          "Fingerstache flexitarian street art 8-bit waist co, subway tile poke farm.",
        image:
          "https://upload.wikimedia.org/wikipedia/labs/8/8e/Mysql_logo.png",
        color: "text-[#FB923C]",
        hovercolor: "hover:border-[#FB923C]",
      },
    ],
    [
      {
        name: "MongoDB",
        url: "https://www.mongodb.com/",
        description:
          "Fingerstache flexitarian street art 8-bit waist co, subway tile poke farm.",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/MongoDB_Logo.svg/512px-MongoDB_Logo.svg.png",
        color: "text-[#008080]",
        hovercolor: "hover:border-[#008080]",
        attributes: "",
      },
      {
        name: "PHP",
        url: "https://www.php.net/",
        description:
          "Fingerstache flexitarian street art 8-bit waist co, subway tile poke farm.",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/PHP-logo.svg/2560px-PHP-logo.svg.png",
        color: "text-[#0C4A6E]",
        hovercolor: "hover:border-[#0C4A6E]",
        attributes: "",
      },
      {
        name: "TailwindCSS",
        url: "  https://tailwindcss.com/",
        description:
          "Fingerstache flexitarian street art 8-bit waist co, subway tile poke farm.",
        image:
          "https://cdn.icon-icons.com/icons2/2699/PNG/512/tailwindcss_logo_icon_170649.png",
        color: "text-[#0C4A6E]",
        hovercolor: "hover:border-[#0C4A6E]",
        attributes: "lg:w-64",
      },
    ],
    [
      {
        name: "Docker",
        url: "https://docker.com/",
        description:
          "Fingerstache flexitarian street art 8-bit waist co, subway tile poke farm.",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/e/ea/Docker_%28container_engine%29_logo_%28cropped%29.png",
        color: "text-[#0284C7]",
        hovercolor: "hover:border-[#0284C7]",
      },
      {
        name: "Linux",
        url: "https://endeavouros.com/",
        description:
          "Fingerstache flexitarian street art 8-bit waist co, subway tile poke farm.",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Tux.svg/1200px-Tux.svg.png",
        color: "text-[#E11D48]",
        hovercolor: "hover:border-[#E11D48]",
        attributes: "",
      },
    ],
    [
      {
        name: "Laravel",
        url: "https://laravel.com/",
        description:
          "Fingerstache flexitarian street art 8-bit waist co, subway tile poke farm.",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Laravel.svg/1969px-Laravel.svg.png",
        color: "text-[#E11D48]",
        hovercolor: "hover:border-[#E11D48]",
        attributes: "lg:h-42",
      },
      {
        name: "NextJS",
        url: "https://nextjs.org/",
        description:
          "Fingerstache flexitarian street art 8-bit waist co, subway tile poke farm.",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Nextjs-logo.svg/1200px-Nextjs-logo.svg.png",
        color: "text-[#16A34A]",
        hovercolor: "hover:border-[#16A34A]",
        attributes: "",
      },
    ],
  ];

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 lg:py-24 py:6 mx-auto">
        <div className="flex flex-wrap w-full lg:mb-20 mb-8 flex-col items-center text-center">
          <h1 className="sm:text-3xl text-2xl name-font mb-2 text-[#008080] text-center lg:w-1/2 sm:w-full font-black">
            İşte bu, BENİM DÜNYAM!
          </h1>
          <h1 className="sm:text-3xl text-2xl name-font mb-2 text-[#008080] text-center lg:w-1/2 sm:w-full font-black">
            <code>&lt;?php echo "Hello World"; ?&gt;</code>
          </h1>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:gap-16 gap-12">
          {technologies.map((technology, index) => {
            return (
              <div className="grid gap-8 lg:p-16 p-2">
                {technology.map((tech, index) => {
                  return (
                    <a href={tech.url}>
                      <img
                        className={`rounded-lg ${tech.attributes}`}
                        src={tech.image}
                        alt=""
                      />
                    </a>
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
