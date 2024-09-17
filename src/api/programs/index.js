const ProgramsHandler = require("./handler");
const routes = require("./routes");

module.exports = {
  name: "programs",
  version: "1.0.0",
  register: async (server, { service, validator }) => {
    const programsHandler = new ProgramsHandler(service, validator);
    server.route(routes(programsHandler));
  },
};
