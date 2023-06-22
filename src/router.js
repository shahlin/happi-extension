import { createBrowserRouter } from 'react-router-dom';
import NotFoundErrorPage from './pages/page-not-found';
import ExtensionPage from './pages/extension';
import DashboardPage from './pages/dashboard';

export default function router() {
    return createBrowserRouter([
        {
            path: "/",
            element: <ExtensionPage />,
            errorElement: <NotFoundErrorPage />,
        },
        {
            path: "dashboard",
            element: <DashboardPage />,
        },
    ]);
}