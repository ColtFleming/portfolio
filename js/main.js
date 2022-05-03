const links = [
  {
    label: "Week 1",
    url: "week1/index.html"
  },
  {
    label:"Week 2",
    url: "week2/index.html"
  },
  {
    label:"Week 3",
    url:"week3/index.html"
  }
]

let text = '<ul>'
for(let i = 0, max = links.length; i < max; i++){
  text = text + '<li><a href="' + links[i].url +'">' + links[i].label + '</a></li>';
}
text = text + '</ul>';
console.log(text);
document.getElementById("jsfile").innerHTML = text;