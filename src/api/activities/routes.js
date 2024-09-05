const routes = (handler) => [
  {
    method: "POST",
    path: "/kegiatan",
    handler: handler.postActivityHandler,
  },
  {
    method: "GET",
    path: "/kegiatan",
    handler: handler.getActivitiesHandler,
  },
  {
    method: "GET",
    path: "/kegiatan/{id}",
    handler: handler.getActivityByIdHandler,
  },
  {
    method: "DELETE",
    path: "/kegiatan/{id}",
    handler: handler.deleteActivityByIdHandler,
  },
];

module.exports = routes;
