// Import movie
import WatchList from "../models/WatchList";

// Handle create contact actions
exports.new = async function (req, res) {
    var watchlist = new WatchList();
    watchlist.user = req.body.userId;
    watchlist.movies = req.body.movies;

    //test if the user has already a watch list
    let watchList2= await WatchList.findOne({ user: watchlist.user }).exec().then();


    //create a new watch list

        //update the watchlist

        // save the contact and check for errors
        watchlist.findByIdAndUpdate(watchList2._id, {$set: {...watchList}}, {new: true}, function (err) {
            if (err)
                res.status(500).send({ error: err });
            else {
                res.status(201).send({ message: 'New watchlist created!' });
            }
        });

    }




};

