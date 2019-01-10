// Import movie
import movies from "../models/Movie";




// Handle index actions
exports.index = function (req, res) {

    let pageNo = parseInt(req.query.pageNo);
    let size = parseInt(req.query.size);
    let message="";
    let query={};
    if(pageNo < 0 || pageNo === 0) {
        message = {"error" : true,"message" : "invalid page number, should start with 1"};
        return res.json(message)
    }

    query.skip = size * (pageNo - 1);
    query.limit = size;



    // Find some documents
    movies.countDocuments({},function(err,totalCount) {
        if(err) {
            message = {"error" : true,"message" : "Error fetching data"}
        }
        movies.find({},{},query,function(err,data) {
            // Mongo command to fetch all data from collection.
            if(err) {
                message = {"error" : true,"message" : "Error fetching data"};
            } else {
                let totalPages = Math.ceil(totalCount / size);
                message = {"status" : "success","message": "Movies retrieved successfully","movies" : data,"pages": totalPages};
            }
            res.json(message);
        });
    });





};
