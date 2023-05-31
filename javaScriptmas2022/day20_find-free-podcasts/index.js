import podcasts from "./data.js";

/* Find Free Podcasts 

We have a list of podcasts and need the ability to filter by only
podcasts which are free.

Write a function that takes in the podcast data and returns an new
array of only those podcasts which are free.

Additionally, your new array should return only 
objects containing only the podcast title, rating, and whether or 
not it is paid. 

Expected output: 
[
    {title: "Scrimba Podcast", rating: 10, paid: false}, 
    {title: "Something about Witches", rating: 8, paid: false}, 
    {title: "Coding Corner", rating: 9, paid: false}
]
*/

function getFreePodcasts(data) {
  return data
    .filter((x) => x.paid === false)
    .map((x) => ({ title: x.title, rating: x.rating, paid: x.paid }));

  //Notes: From others
  //    var freeData = data.filter(checkFree);
  //    var formattedFreeData = data.map(formatData);
  //    return formattedFreeData;

  //    function formatData(dataObj) {
  //        var {title,rating,paid}=dataObj;
  //        return {title,rating,paid};
  //    }

  //    function checkFree(dataObj) {
  //        return dataObj.paid==false;
  //    }

  //Notes: From others
  //      let freePodcasts = data.filter( podcast => podcast.paid === false)

  //    return freePodcasts.map( podcast =>({
  //        title: podcast.title,
  //        rating: podcast.rating,
  //        paid: podcast.paid
  //    }))

  //Notes: From others
  // return data.filter(x => x.paid === false).map(({title, rating, paid}) => ({title, rating, paid}))
}

console.log(getFreePodcasts(podcasts));

// Link
// https://scrimba.com/scrim/co7194dd6afc7bb770bf5d419
