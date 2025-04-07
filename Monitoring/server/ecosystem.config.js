module.exports = {
  apps : [{
    name: "monitoring_apiv2",
    script: "./dist/main.js",
    env: {
      NODE_ENV: "development",
    },
    env_production: {
      NODE_ENV: "production",
    }
  }]
}