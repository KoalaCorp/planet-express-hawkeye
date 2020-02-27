import AppHome from '@/components/AppHome';
const AppVisualization = () => import('@/components/AppVisualization');


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
