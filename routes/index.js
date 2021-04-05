import routerx from 'express-promise-router';
import studentRouter from './student';

const router=routerx();

router.use('/student', studentRouter)

export default router; 