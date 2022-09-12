module.exports = ({ env }) => ({
  "vercel-deploy": {
    enabled: true,
    config: {
    deployHook:
        "https://api.vercel.com/v1/integrations/deploy/prj_P6TYqTooLybxMHhwoUi5npimDepm/Z7zGvMDREX",
      apiToken: "9PpC8FtFMPXZY9eapq4poz6E",
      appFilter: "strapi",
      roles: ["strapi-super-admin", "strapi-editor", "strapi-author"],
    },
  },
});