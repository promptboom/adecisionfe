import { getBaseURL } from '@/utils/SystemUtils/url.js'
import store from "@/store/index"; 

function utoa(data) {
  return btoa(unescape(encodeURIComponent(data)));
}

function atou(b64) {
  return decodeURIComponent(escape(atob(b64)));
}

export async function requestPost(request_header, request_json, url) {
  let raw_requst_json = {
    'data': utoa(JSON.stringify(request_json))
  };
  let baseURL=getBaseURL()
  let requestUrl =`${baseURL}${url}`
  request_header['isProUser'] = store.getters.getIsProUser;
  const response = await fetch(requestUrl, {
    method: 'POST',
    headers: request_header,
    body: JSON.stringify(raw_requst_json)
  });

  const resultsData=await response.json()
  return resultsData
  // const reader = response.body.getReader();
  // const decoder = new TextDecoder("utf-8")

  // const { value, done } = await reader.read();
  // let decodedValue = decoder.decode(value);
  // let realValue = JSON.parse(decodedValue)
  // return realValue
}