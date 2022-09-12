module.exports = ({ env }) => ({
  host: env("HOST", "0.0.0.0"),
  port: env.int("PORT", 1337),
  app: {
    keys: env.array("APP_KEYS"),
  },
  "vercel-deploy": {
    enabled: true,
    config: {
      deployHook:
        "https://api.vercel.com/v1/integrations/deploy/prj_P6TYqTooLybxMHhwoUi5npimDepm/Z7zGvMDREX",
      apiToken: "9PpC8FtFMPXZY9eapq4poz6E",
      appFilter: "strapi",
      teamFilter: "",
      roles: ["strapi-super-admin", "strapi-editor", "strapi-author"],
    },
  },
});
