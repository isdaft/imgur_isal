
// these hold the mappings between short codes and longUrls
var valid = false;
var imgurk = require('imgurk');
var count = 0;


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

function zero(n){ return n < 10 ? '0' + n : n }


function timeStamp() {
    var date = new Date();
	var year = date.getFullYear();
	var month = date.getMonth() + 1;
	var day = date.getDate();
	var hours = date.getHours();
	var min = date.getMinutes();
	var sec = date.getSeconds();
	var returnString = year + "-" +zero(month) + "-" + zero(day) + "T" + zero(hours) + ":" + zero(min) + ":" + sec ;
	return returnString;
}

function insertSearchAt(searchstring, time){
    
}    


exports.getPath = function (req, res){
    
    var path = req.path.substring(1);
    var searchString = req.params.search;
    var offset = req.param('offset');
    var obj = {};
    var linx = [];
    var lastcount = count; //@ this pt in time
    
    count++;
    if (lastcount < count){
        //here we find current date & time and insert insert into mongod to be able to pulled later
        var time = timeStamp();
        insertSearchAt(searchString, time);
    }
    
    //res.send(searchString);
    imgurk.img('search', searchString, 'af9edeb4a606629', function(link){
        //res.send(link); //link[0].id
        for (var item in link){
            console.log(link[item].id);
            obj = {
                url: link[item].link,
                snippet: link[item].title,
                context: "http://imgur.com/gallery/"+link[item].id
            };
            linx.push(obj);
        }
        res.setHeader('Content-Type', 'application/json');
        res.send(JSON.stringify(linx) + " " + count);
    });
    
    
   
    
    
    
}



/*
 * POST creates a short url from a long url
 */
exports.latestSearch = function (req, res) {
    var ls = req.path.substring(1);
    res.send(ls);
    
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
