import AppHome from '@/components/AppHome';
const AppVisualization = () => import('@/components/AppVisualization');

import vis from 'vis-network';
// Object.defineProperty(Vue.prototype, '$vis', { value: vis });



const routes = [
    {
        path: '/',
        name: 'Home',
        component: AppHome
    },
    {
        path: '/visualization',
        name: 'Visualization',
        component: AppVisualization
    }
];

export default routes;
