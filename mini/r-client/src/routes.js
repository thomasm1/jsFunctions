import Dashboard from "views/Dashboard";
import PostList from "components/PostList";

const routes = [
  {
    path: "/",
    name: "Dashboard",
    icon: "tim-icons icon-chart-pie-36",
    component: Dashboard,
    layout: "/admin"
  },
  {
    collapse: true,
    name: "Pages",
    icon: "tim-icons icon-image-02",
    state: "pagesCollapse",
    views: [
      {
        path: "/posts",
        name: "Posts",
        mini: "P",
        component: PostList, // Changed to PostList
        layout: "/admin"
      },
    ]
  }
];

export default routes;
