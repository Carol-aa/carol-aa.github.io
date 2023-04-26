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
]