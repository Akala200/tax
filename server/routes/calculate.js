import { Router } from 'express';
import CalculateTaxController from '../controllers/CalculateTaxController';


const router = Router();

const {
  calculate
} = CalculateTaxController;

router.post('/calculate', calculate);


export default router;
