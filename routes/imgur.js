
// these hold the mappings between short codes and longUrls
var valid = false;




function mongoInsert(db, collection_name, data,cb) {
        var collection = db.collection(collection_name);
        collection.insert(data, function(err, res) {
        if(err) {
            console.log(err);
        }
        else {
            console.log('Inserted into the ' + collection_name + ' collection');
            console.log('inserted ' + data.longUrls );
            cb(res);
        }
        }); //insert end
    } //mongoInsert func end


    


exports.getPath = function (req, res){
    
    var path = req.path.substring(1);
    var http = "http://www.";
    var https = "https://www.";
    
    var check = path.indexOf(http);
    var checks = path.indexOf(https);
    var baseUrl = 'http://' + req.app.get('hostname') + '/';
    
    //api format
    if (check >= 0 || checks >= 0){ // http or https
        //res.send(path + " + " + check);
        valid = true;
    } else if (check === -1 || checks === -1){ // http or https
        res.send("error: link does not contain http://www. or https://www.");
        valid = false;
    }
    
    
    
} //end getHttp export



/*
 * POST creates a short url from a long url
 */
exports.createShort = function (req, res) {

    
    
};

/*
 * GET retrieves long url from short url
 */
exports.getLong = function (req, res) {

    // grab the path and strip the leading slash
    
    
    
};


function createShortCode(longUrl) {
    //
    
}
