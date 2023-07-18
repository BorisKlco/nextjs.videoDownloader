const url = "https://www.youtube.com/gSSsZReIFRk";
const splitURL = url.split("/");
const split2 = splitURL[splitURL.length - 1].split("&");
const split3 = split2[0].split("=");
console.log(splitURL, split2, split3);
