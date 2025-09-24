module.exports = {
  apps: [
    {
      name: 'calmara',
      script: 'npm',
      args: 'run start:pm2',
      watch: false,
    },
  ],
};
