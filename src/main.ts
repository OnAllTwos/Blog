import './style.css'
import { Router } from './router';
import Home from './pages/home/home';
import Garden from './pages/garden/garden';


let router = new Router()
router.get('', Home)
router.get('#/garden', Garden)

router.init()

