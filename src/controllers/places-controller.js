export const placesController = {
  index: {
    handler: async function (request, h) {
      const loggedInUser = request.auth.credentials;
      return h.view("addPlace", { title: "Add a Place", user: loggedInUser });
    },
  },
  report: {
    handler: async function (request, h) {
      const loggedInUser = request.auth.credentials;
      return h.view("Report", {
        title: "Places to Date",
        user: loggedInUser,
      });
    },
  },
  addPlace: {
    handler: async function (request, h) {
      try {
        const loggedInUser = request.auth.credentials;
        return h.redirect("/report");
      } catch (err) {
        return h.view("main", { errors: [{ message: err.message }] });
      }
    },
  },
};
