import { Suspense, lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { PATHS } from "./constant/path";
const MainLayout = lazy(() => import("./layouts/MainLayout"));
const ContactPage = lazy(() => import("./pages/ContactPage"));
const HomePage = lazy(() => import("./pages/HomePage"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage"));
const AboutPage = lazy(() => import("./pages/AboutPage"));
const BlogPage = lazy(() => import("./pages/BlogPage"));
const BlogDetailPage = lazy(() => import("./pages/BlogDetailPage"));
const CoursePage = lazy(() => import("./pages/CoursePage"));
const CourseOrderPage = lazy(() => import("./pages/CourseOrderPage"));
const CourseDetailPage = lazy(() => import("./pages/CourseDetailPage"));
const PrivacyPage = lazy(() => import("./pages/PrivacyPage"));
const StudentProfilePage = lazy(() => import("./pages/StudentProfilePage"));
const PaymentMethodPage = lazy(() => import("./pages/PaymentMethodPage"));
const MyInfo = lazy(() => import("./pages/StudentProfilePage/MyInfo"));
const MyCourse = lazy(() => import("./pages/StudentProfilePage/MyCourse"));
const MyPayment = lazy(() => import("./pages/StudentProfilePage/MyPayment"));
const PrivateRoute = lazy(() => import("./components/PrivateRoute"));
const PageLoading = lazy(() => import("./components/PageLoading"));

function App() {
  return (
    <Suspense fallback={<PageLoading />}>
      <BrowserRouter>
        <Routes>
          <Route path={PATHS.HOME} element={<MainLayout />}>
            <Route index element={<HomePage />} />
            <Route path={PATHS.ABOUT} element={<AboutPage />} />
            <Route path={PATHS.CONTACT} element={<ContactPage />} />
            <Route
              path={PATHS.PAYMENT_METHOD}
              element={<PaymentMethodPage />}
            />
            <Route path={PATHS.PRIVACY} element={<PrivacyPage />} />

            <Route element={<PrivateRoute />}>
              <Route
                path={PATHS.COURSE.ORDER_DETAIL}
                element={<CourseOrderPage />}
              />
              <Route
                path={PATHS.PROFILE.INDEX}
                element={<StudentProfilePage />}
              >
                <Route index element={<MyInfo />} />
                <Route path={PATHS.PROFILE.MY_COURSE} element={<MyCourse />} />
                <Route
                  path={PATHS.PROFILE.MY_PAYMENT}
                  element={<MyPayment />}
                />
              </Route>
            </Route>

            <Route path={PATHS.BLOG.INDEX} element={<BlogPage />} />
            <Route path={PATHS.BLOG.DETAIL} element={<BlogDetailPage />} />

            <Route path={PATHS.COURSE.INDEX} element={<CoursePage />} />
            <Route path={PATHS.COURSE.DETAIL} element={<CourseDetailPage />} />

            <Route path={PATHS.NOT_FOUND} element={<NotFoundPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
