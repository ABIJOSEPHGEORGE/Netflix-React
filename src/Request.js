const api_key = '0f1bd05fa1516d09698b7475084f3adb'

const request = {
    requestPopular  :  `https://api.themoviedb.org/3/movie/popular?api_key=${api_key}`,
    requestTopRated  : `https://api.themoviedb.org/3/movie/top_rated?api_key=${api_key}`,
    requestUpcoming  : `https://api.themoviedb.org/3/movie/upcoming?api_key=${api_key}`,
}

module.exports = {
    request : request,
    api_key : api_key,
}