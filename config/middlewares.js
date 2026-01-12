module.exports = [
  'strapi::logger',
  'strapi::errors',
  'strapi::security',
  {
    name: 'strapi::cors',
    config: {
      origin: [
        'https://kappa-i.github.io',
        'http://localhost:5500',
        'http://127.0.0.1:5500',
        'http://localhost:1337',      // Admin local
        'http://127.0.0.1:1337',      // Admin local (variante)
        'http://localhost:*',         // Tous les ports localhost
        'http://127.0.0.1:*'          // Tous les ports 127.0.0.1
      ],
      methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'HEAD', 'OPTIONS'],
      headers: ['Content-Type', 'Authorization', 'Origin', 'Accept'],
      keepHeaderOnError: true,
    },
  },
  'strapi::poweredBy',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];