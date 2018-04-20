import Counter from '../components/Counter';
import Hello from '../components/Hello';


export default [
    {
        path: '/',
        component: Counter,
        routes: [
            {
                path: 'hello',
                component: Hello,
            },
        ],
    },
];
