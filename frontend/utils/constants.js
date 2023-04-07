export const sidebarItems = [
  {
    id: 0,
    key: "home",
    name: "Home",
    icon: "bi bi-grid",
    href: "/",
  },
  {
    id: 1,
    key: "animelist",
    name: "Anime List",
    icon: "bi bi-menu-button-wide",
    href: "/animelist",
  },
  {
    id: 2,
    key: "statistics",
    name: "Statistics",
    icon: "bi bi-bar-chart",
    href: "/statistics",
  },
  {
    id: 3,
    key: "search",
    name: "Search",
    icon: "bi bi-search",
    href: "/search",
  },
  {
    id: 4,
    key: "seasons",
    name: "Seasons",
    icon: "bi bi-calendar3",
    href: "/seasons",
  },
  {
    id: 5,
    key: "register",
    name: "Register",
    icon: "bi bi-card-list",
    href: "/register",
  },
  {
    id: 6,
    name: "Login",
    key: "login",
    icon: "bi bi-box-arrow-in-right",
    href: "/login",
  },
  {
    id: 7,
    key: "jellyfin",
    name: "Jellyfin",
    icon: "bi bi-link",
    href: "/jellyfin",
  },
  {
    id: 8,
    name: "Authorize",
    key: "authorise",
    icon: "bi bi-shield-check",
    href: "/authorise",
  },
]

export const animeTabs = [
  {
    key: "current",
    name: "current",
    value: "Current",
    className: "nav-link w-100 active",
  },
  {
    key: "completed",
    name: "completed",
    value: "Completed",
    className: "nav-link w-100",
  },
  {
    key: "onhold",
    name: "onhold",
    value: "On Hold",
    className: "nav-link w-100",
  },
  {
    key: "dropped",
    name: "dropped",
    value: "Dropped",
    className: "nav-link w-100",
  },
  {
    key: "plantowatch",
    name: "plantowatch",
    value: "Plan to Watch",
    className: "nav-link w-100",
  },
]
