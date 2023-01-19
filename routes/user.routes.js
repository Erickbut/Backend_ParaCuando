const { Router } = require('express')
const router = Router()

router.get('users', (req, res) => {
  res.json('get users')
})

return router