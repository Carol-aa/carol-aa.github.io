export default getRoute = [
    {
        path: '/',
        redirect: '/list',
    },
    {
        name: 'xx审核平台-列表页',
        path: '/list',
        component: './List',
        hideChildrenInMenu: true,
    },
    {
        name: '审核详情',
        path: '/list/audit',
        component: './Audit',
        hideInMenu: true,
    },

    {
        name: 'xx审核平台- CRUD 示例',
        path: '/table',
        component: './Table',
        routes: [
            {
                name: 'xx审核平台-权限演示',
                path: '/table/access',
                component: './Access/index.tsx',
            },

        ]
    },
]