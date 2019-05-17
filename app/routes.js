const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line

router.post("/juggling-balls-answer", function(request, response){

var jugglingBalls = request.session.data['juggling-balls']

if (jugglingBalls == "None - I cannot juggle") {
  response.redirect("/ineligible")
} else {
  response.redirect("/juggling-tricks")
}

})



module.exports = router
