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
];

let jsfile = document.getElementById('jsfile');
let ul = document.createElement('ul');
for(let i = 0, max = links.length; i < max; i++){
  let li = document.createElement('li');
  let a = document.createElement('a');
  let link = document.createTextNode(links[i].label)
  a.appendChild(link);
  a.title = links[i].label;
  a.href = links[i].url;
  li.appendChild(a);
  ul.appendChild(li);
}
jsfile.appendChild(ul);

