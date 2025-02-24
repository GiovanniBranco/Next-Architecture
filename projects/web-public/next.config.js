const withPlugins = require("next-compose-plugins");
const withTM = require("next-transpile-modules")([
  "@next-architecture/design-system",
  "@next-architecture/utils",
]);

/**
 * @type {import('next').NextConfig}
 *
 */

module.exports = withPlugins([withTM], {
  trailingSlash: true,
});
