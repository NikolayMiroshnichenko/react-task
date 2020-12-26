export default function isJson(str) {
  try {
    const data = JSON.parse(str);
    return data;
  } catch (e) {
    return false;
  }
}
