import { createHashRouter } from 'react-router-dom';
import NotFoundErrorPage from './pages/page-not-found';
import ExtensionPage from './pages/extension';
import DashboardPage from './pages/dashboard';

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
    ]);
}