(function (VonicUI, dependencies, components) {
'use strict';

VonicUI.routes = {
    linkActiveClass: 'vonic-selected',
    maps: [
        {
            path: '/',
            name: 'Index',
            component: components.Index
        },
        {
            path: '/about',
            name: 'About',
            component: components.About
        }
    ]
};

})(VonicUI, null, VonicUI.components);
