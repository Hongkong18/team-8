const db = require('./db')


function handleFeedback(req, res){


    let keywords = req.query.keywords;
    let location = req.query.loc;

    console.log(keywords, location)
    

   db.searchFeedback(keywords, " "+
     location, req, res);

}


module.exports = {
    handleFeedback: handleFeedback
};
