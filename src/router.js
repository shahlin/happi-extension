import { createHashRouter } from 'react-router-dom';
import NotFoundErrorPage from './pages/page-not-found';
import ExtensionPage from './pages/extension';
import DashboardPage from './pages/dashboard';
import FaqPage from './pages/faq';
import MetricsPage from './pages/metrics';
import ContactPage from './pages/contact';
import SpaceFrameworkPage from './pages/space-framework';

export default function router() {
    return createHashRouter([
        {
            path: "/",
            element: <ExtensionPage />,
            errorElement: <NotFoundErrorPage />,
        },
        {
            path: "dashboard",
            element: <DashboardPage />,
        },
        {
            path: "faq",
            element: <FaqPage />,
        },
        {
            path: "metrics",
            element: <MetricsPage />,
        },
        {
            path: "contact",
            element: <ContactPage />,
        },
        {
            path: "space-framework",
            element: <SpaceFrameworkPage />,
        },
    ]);
}