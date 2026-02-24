module.exports = {
  apps: [{
    name: 'basket-site',
    script: 'apps/web/dist/server/entry.mjs',
    env: {
      HOST: '127.0.0.1',
      PORT: 4321,
      KEYSTATIC_GITHUB_CLIENT_ID: 'Iv23lifqBojRYH3rs170',
      KEYSTATIC_GITHUB_CLIENT_SECRET: '243ec8a65f80826917a4cd4cd8a365cc7989c07e',
      KEYSTATIC_SECRET: 'basket_tournament_secret_key_2026',
    },
  }],
}
