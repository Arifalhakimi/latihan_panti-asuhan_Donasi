const routes = (handler) => [
  {
    method: "POST",
    path: "/program",
    handler: handler.postProgramHandler,
  },
  {
    method: "GET",
    path: "/program",
    handler: handler.getProgramsHandler,
  },
  {
    method: "GET",
    path: "/program/{id}",
    handler: handler.getProgramByIdHandler,
  },
  {
    method: "PUT",
    path: "/program/{id}",
    handler: handler.putProgramByIdHandler,
  },
  {
    method: "DELETE",
    path: "/program/{id}",
    handler: handler.deleteProgramByIdHandler,
  },
];

module.exports = routes;
