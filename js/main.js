const links = [
  {
    label: "Week 1",
    url: "week1/story_editor.html",
    class: "one"
  },
  {
    label:"Week 2",
    url: "week2/index.html",
    class: "two"
  },
  {
    label:"Week 3",
    url:"week3/index.html",
    class: "three"
  },
  {
    label:"Week 4",
    url:"week4/index.html",
    class: "four"
  },
  {
    label:"Week 5",
    url:"week5/index.html",
    class:"five"
  },
  {
    label:"Week 6",
    url:"week6/index.html",
    class:"six"
  },
  {
    label:"Week 7",
    url:"week7/index.html",
    class:"seven"
  },
  {
    label:"Week 8",
    url:"week8/index.html",
    class:"eight"
  },
  {
    label:"Week 9",
    url:"week9/index.html",
    class:"nine"
  },
  {
    label:"Week 10",
    url:"week10/index.html",
    class:"ten"
  },
  {
    label:"Final",
    url:"final/index.html",
    class:"final"
  }
];

function generateList(){
  let jsfile = document.getElementById('jsfile');
  let ul = document.createElement('ul');
  for(let i = 0, max = links.length; i < max; i++){
    let a = document.createElement('a');
    a.setAttribute('class', links[i].class);
    let li = document.createElement('li');
    li.setAttribute('id', 'listItems');
    let link = document.createTextNode(links[i].label)
    a.appendChild(link);
    a.title = links[i].label;
    a.href = links[i].url;
    li.appendChild(a);
    ul.appendChild(li);
  }
  jsfile.appendChild(ul);
}
