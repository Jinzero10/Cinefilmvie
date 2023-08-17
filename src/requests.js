const key = process.env.REACT_APP_MOVIETMDB_API_KEY;

const requests = {
    //homepage requests
    requestTrending: `/trending/all/week?api_key=${key}&language=en-US`,
    requestOriginals: `/discover/tv?api_key=${key}&with_networks=213`,
    requestTopRated: `/movie/top_rated?api_key=${key}&language=en-US`,
    requestAction: `/discover/movie?api_key=${key}&with_genres=28`,
    requestComedy: `/discover/movie?api_key=${key}&with_genres=35`,
    requestHorror: `/discover/movie?api_key=${key}&with_genres=27`,
    requestRomance: `/discover/movie?api_key=${key}&with_genres=10749`,
    requestDocumentaries: `/discover/movie?api_key=${key}&with_genres=99`,

    //Movie page request list
    requestMovies: `/discover/movie?api_key=${key}`,
    requestPopular: `/movie/popular?api_key=${key}`,
    requestUpcoming: `/movie/upcoming?api_key=${key}`,
    requestAnimation: `/discover/movie?api_key=${key}&with_genres=16`,
    requestAdventure: `/discover/movie?api_key=${key}&with_genres=12`,
    requestCrime: `/discover/movie?api_key=${key}&with_genres=80`,
    requestWar: `/discover/movie?api_key=${key}&with_genres=37`,
    requestMystery: `/discover/movie?api_key=${key}&with_genres=10402`,
    requestFantasy: `/discover/movie?api_key=${key}&with_genres=14`,
    //tv shows requests
    requestTv: `/discover/tv?api_key=${key}`,
    requestTrendingTv: `/trending/tv/day?api_key=${key}`,
    requestTvTopRated: `/tv/top_rated?api_key=${key}`,
    requestAiringToday: `/tv/airing_today?api_key=${key}`,
    requestActionAdventure: `/discover/tv?api_key=${key}&with_genres=10759`,
    requestKids: `/discover/tv?api_key=${key}&with_genres=10762`,
    requestReality: `/discover/tv?api_key=${key}&with_genres=10764`,
    requestSoap: `/discover/tv?api_key=${key}&with_genres=10766`,
    requestPolitics: `/discover/tv?api_key=${key}&with_genres=10768`,
    requestTalk: `/discover/tv?api_key=${key}&with_genres=10767`,
};

export default requests;
