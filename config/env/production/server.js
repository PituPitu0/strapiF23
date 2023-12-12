module.exports = ({ env }) => ({
  url: env("RENDER_EXTERNAL_URL", "https://strapi-dt37.onrender.com"), // Domyślnie ustawione na lokalne środowisko
  dirs: {
    public: "/data/public",
  },
});