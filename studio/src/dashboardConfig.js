export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "60db43dbd7da690a76712ad6",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-crpfu2xp",
                  apiId: "900d59e7-a24e-4a52-8389-146c58499c77",
                },
                {
                  buildHookId: "60db43db2574d60a31c48f2a",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-pshtiw7a",
                  apiId: "24df856b-5d0e-4be4-86c5-31b43e4c0414",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/dakotabaker395/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-pshtiw7a.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
