module.exports = {
  apps: [
    {
      name: 'calmara',
      script: 'npx',
      args: 'serve dist/calmara/browser -s -l 4200',
      watch: false,
    },
  ],
};
