import { HeaderOnly } from '~/Layout';

import config from '~/config/routes';

import Home from '~/pages/Home';
import Follow from '~/pages/Follow';
import Profile from '~/pages/Profile';
import Upload from '~/pages/Upload';
import Search from '~/pages/Search';
import Live from '~/pages/Live';

const publicRoutes = [
    {
        path: config.home,
        component: Home,
    },
    {
        path: config.follow,
        component: Follow,
    },
    {
        path: config.live,
        component: Live,
    },
    {
        path: config.profile,
        component: Profile,
    },
    {
        path: config.upload,
        component: Upload,
        layout: HeaderOnly,
    },

    {
        path: config.search,
        component: Search,
        layout: null,
    },
];
const privateRoutes = [];

export { publicRoutes, privateRoutes };
