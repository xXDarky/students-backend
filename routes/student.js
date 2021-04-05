import routerx from 'express-promise-router';
import studentController from '../controllers/StudentController';

const router= routerx();

router.post('/add', studentController.add);
router.get('/query', studentController.query);
router.get('/list', studentController.list);
router.put('/update', studentController.update);
router.delete('/remove/:_id', studentController.remove);
router.put('/activate', studentController.activate);
router.put('/deactivate', studentController.deactivate);
router.all('*', (req, res, next) => {
    res.status(405).send('Method not allowed'); 
 });



export default router;

