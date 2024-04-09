export let BASE_URL = "https://www.premiumbathware.com";  //http://192.168.0.103:3000
export let API_BASE_URL = "https://kohler-black.vercel.app"; //http://localhost:8080

const env = process.env.NODE_ENV;
if(env == "development"){
  // do something
  BASE_URL = "http://192.168.0.110:3000";
  API_BASE_URL = "http://192.168.0.110:8080";
}
else if (env == "production"){
 // do something
 BASE_URL = "https://www.premiumbathware.com";
 API_BASE_URL = "https://kohler-black.vercel.app";
}