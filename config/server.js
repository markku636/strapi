module.exports = ({ env }) => ({
  host: env("HOST", "0.0.0.0"),
  port: env.int("PORT", 1337),
  app: {
    keys: env.array("APP_KEYS"),
  },
  vercel: {
    // Required
    token: "9PpC8FtFMPXZY9eapq4poz6E",
    // Required
    projectId: "prj_P6TYqTooLybxMHhwoUi5npimDepm",    
    // Optional (required if you use teams)
    // teamId: env("VERCEL_TEAM_ID"),
    // Required (hooks)
    triggers: {
      production: "https://api.vercel.com/v1/integrations/deploy/prj_P6TYqTooLybxMHhwoUi5npimDepm/Z7zGvMDREX",
    },
    // Optional
    config: {
      // Number of latest deployments
      deployments: 10,
    },
  },
});
