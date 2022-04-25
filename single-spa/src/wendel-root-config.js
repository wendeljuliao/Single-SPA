import { registerApplication, start } from "single-spa";

registerApplication({
  name: "@single-spa/welcome",
  app: () => System.import("@single-spa/welcome"),
  activeWhen: (location) => location.pathname === "/",
});

registerApplication({
  name: "@wendel/react-single",
  app: () => System.import("@wendel/react-single"),
  activeWhen: (location) => location.pathname === "/react-single",
});

registerApplication({
  name: "@wendel/react-multiples",
  app: () => System.import("@wendel/react-multiples"),
  activeWhen: ["/react-multiples"],
});

registerApplication({
  name: "@wendel/react-parcel",
  app: () => System.import("@wendel/react-parcel"),
  activeWhen: (location) => location.pathname === "/react-parcel",
});

registerApplication({
  name: "@wendel/react-lazy",
  app: () => System.import("@wendel/react-lazy"),
  activeWhen: ["/react-lazy"],
});

registerApplication({
  name: "@wendel/react-route",
  app: () => System.import("@wendel/react-route"),
  activeWhen: (location) => location.pathname === "/react-route",
});

registerApplication({
  name: "@wendel/react-header",
  app: () => System.import("@wendel/react-header"),
  activeWhen: ["/"],
});

start({
  urlRerouteOnly: true,
});
