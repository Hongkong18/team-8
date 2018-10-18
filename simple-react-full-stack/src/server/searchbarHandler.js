const db = require('./db')


function handleSearchbar(req, res){


    let docname = req.query.docname;
    let location = req.query.loc;

    console.log(docname, location)
    

   db.searchDoctor(docname, " "+
     location, req, res);

}

module.exports = {
    handleSearchbar: handleSearchbar
};

// export default {handleSeachbar}


