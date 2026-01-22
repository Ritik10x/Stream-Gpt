
export const API_options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer ' + import.meta.env.VITE_TMDB_KEY
  }
};

export const IMG_CDN_URL = 'https://image.tmdb.org/t/p/w500'

export const BG_URL ="https://assets.nflxext.com/ffe/siteui/vlv3/9c363af5-4750-4f14-87d1-8125f5276db0/web/IN-en-20251027-TRIFECTA-perspective_b68b1528-3a10-4997-9f99-48ccbdb86626_large.jpg" 

export const SUPPORTED_LANGUAGES = [
  {identifier:'en', name:'English'},
  {identifier:'hindi', name:'Hindi'},
  {identifier:'spainsh', name:'Spainsh'},

]

export const Gemini_APi_KEY = import.meta.env.VITE_GEMINI_API_KEY
