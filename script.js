(function () {
  const example = document.getElementById("example");
  const cw1 = document.getElementById("cw1");
  const cw2 = document.getElementById("cw2");
  const cw3 = document.getElementById("cw3");
  const answer = document.getElementById("answer");

  example.addEventListener("click", function () {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((array) => {
        const list = document.createElement("ul");
        array.map((post) => {
          const item = document.createElement("li");
          item.textContent = `${post.id}. ${post.title}`;
          list.appendChild(item);
        });
        answer.appendChild(list);
      });
  });

  cw1.addEventListener("click", function () {
    //TODO
  });

  cw2.addEventListener("click", function () {
    //TODO
  });

  cw3.addEventListener("click", function () {
    //TODO
  });
})();
