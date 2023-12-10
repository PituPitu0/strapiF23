module.exports = ({ env }) => ({
  url: env("RENDER_EXTERNAL_URL", "http://localhost:1337"), // Domyślnie ustawione na lokalne środowisko
  dirs: {
    public: "/data/public",
  },
});