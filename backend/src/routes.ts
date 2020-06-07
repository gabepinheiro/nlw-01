import express from 'express';
import multer from 'multer';
import multerConfig from './configs/multer';

import PointsController from './controllers/PointsController';
import ItemsController from './controllers/ItemsController';

const routes = express.Router();
const upload = multer(multerConfig);

const pointsController = new PointsController();
const itemsController = new ItemsController();

//index, show, create, update, destroy/delete

routes.get("/items", itemsController.index);

routes.post('/points', upload.single('image'), pointsController.create);

routes.get('/points', pointsController.index);  
routes.get('/points/:id', pointsController.show);

export default routes;

// Service Patterm
// Repository Pattern (Data Mapper)


// {
// 	"name": "Mercado do Seu ZÉ",
// 	"email": "mimp@imp.com.br",
// 	"whatsapp": "47992838929",
// 	"latitude": -46.81273213,
// 	"longitude": -35.19238112,
// 	"city": "São Paulo",
// 	"uf": "SP",
// 	"items": [
// 		1,
// 		2,
// 		6
// 	]
// } 