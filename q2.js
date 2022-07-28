var url = "https://www.kommunicate.io/poweredby?utm_source=https://www.kommunicate.io/&utm_medium=webplugin&utm_campaign=poweredby";
var params = "utm_medium";
function getUrlParameterValue(url, parameter) {
   return new URL(url).searchParams.get(parameter);
}
console.log(getUrlParameterValue(url, params)); 