import MainPage from "@pages/MainPage.vue";
import ProductPage from "@pages/ProductPage.vue";
import ContactsPage from "@pages/ContactsPage.vue";
import DeliveryPayPage from "@pages/DeliveryPayPage.vue";
import WorksPage from "@pages/WorksPage.vue";
import ReviewsPage from "@pages/ReviewsPage.vue";
import NotFoundPage from "@pages/NotFoundPage.vue";
import BasketPage from "@pages/BasketPage.vue";
import OrderPage from "@pages/Order.vue";

export default [
  {
    path: "/",
    component: MainPage,
  },
  {
    path: "/product/:id",
    component: ProductPage,
  },
  // {
  //   path: '/about',
  //   component: AboutPage,
  // },
  {
    path: "/basket",
    component: BasketPage,
  },
  // {
  //   path: '/user',
  //   component: UserPage,
  // },
  {
    path: "/deliveryPay",
    component: DeliveryPayPage,
  },
  {
    path: "/works",
    component: WorksPage,
  },
  {
    path: "/reviews",
    component: ReviewsPage,
  },
  {
    path: "/contacts",
    component: ContactsPage,
  },
  // {
  //   path: '/registation',
  //   component: RegistrationPage,
  // },
  {
    path: "/order",
    component: OrderPage,
  },
  {
    path: "/:pathMatch(.*)*",
    component: NotFoundPage,
  },
  // {
  //   path: '/admin',
  //   component: AdminPage,
  // },
  // {
  //   path: '/admin/type',
  //   component: AdminTypePage,
  // },
  // {
  //   path: '/admin/products',
  //   component: AdminProductsPage,
  // },
  // {
  //   path: '/admin/orders',
  //   component: AdminProductsOrders,
  // },
  // {
  //   path: '/admin/works',
  //   component: AdminWorks,
  // },
  // {
  //   path: '/admin/reviews',
  //   component: AdminReviews,
  // },
];
