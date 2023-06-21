import express from 'express';

/**
 * Start the Express Server
 * @name Server
 * @param {express.Express} app Instance of an Express application.
 * @param {string} host Hostname
 * @param {number} port Port number
 * @param {string} user Username
 * @function
 * @memberof module:Application
 */
export default (app, host, port, user) => {
  app.listen(port, () => {
    process.stdout.write(`${user} listen at http://${host}:${port}\n`);
  });
};
