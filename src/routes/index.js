import { HeaderOnly } from '~/components/Layout';

import Home from '~/pages/Home';
import Follow from '~/pages/Follow';
import Profile from '~/pages/Profile';
import Upload from '~/pages/Upload';
import Search from '~/pages/Search';

const publicRoutes = [
    {
        path: '/',
        component: Home,
    },
    {
        path: '/follow',
        component: Follow,
    },
    {
        path: '/profile',
        component: Profile,
    },
    {
        path: '/upload',
        component: Upload,
        layout: HeaderOnly,
    },
    {
        path: '/upload',
        component: Search,
        layout: null,
    },
];
const privateRoutes = [];

export { publicRoutes, privateRoutes };
