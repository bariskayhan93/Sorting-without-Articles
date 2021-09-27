const bands = [
  "The Plot in You",
  "The Devil Wears Prada",
  "Pierce the Veil",
  "Norma Jean",
  "The Bled",
  "Say Anything",
  "The Midway State",
  "We Came as Romans",
  "Counterparts",
  "Oh, Sleeper",
  "A Skylit Drive",
  "Anywhere But Here",
  "An Old Dog",
];
function strip(bandName) {
  return bandName.replace(/^(a |the |an )/i, "").trim();
}
bands.sort(function (a, b) {
  return strip(a) > strip(b) ? 1 : -1;
});
function makeUL(array) {
  const list = document.createElement("ul");

  for (let i = 0; i < array.length; i++) {
    const item = document.createElement("li");
    item.appendChild(document.createTextNode(array[i]));
    list.appendChild(item);
  }
  return list;
}
document.getElementById("bands").appendChild(makeUL(bands));
