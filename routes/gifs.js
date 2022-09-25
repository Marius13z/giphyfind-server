import express from 'express'
import { getFavoriteGifs, saveFavoriteGifs, saveSearch } from '../controllers/gifs.js'

// create router
const router = express.Router()

router.get('/:id', getFavoriteGifs)
router.post('/', saveFavoriteGifs)
router.post('/search', saveSearch)

export default router;