const db = require('./db')


function handleSearchbar(req, res){


    let doctor_name = req.query.docname;
    let location = req.query.loc;

    console.log(doctor_name, location)
    

   db.searchDoctor(doctor_name, " "+
     location, req, res);

}

module.exports = {
    handleSearchbar: handleSearchbar
};

// export default {handleSeachbar}


