(function () {
  const example = document.getElementById("example");
  const loader = document.getElementById("loader");
  const dots = loader.querySelectorAll("span");
  const cw1 = document.getElementById("cw1");
  const cw2 = document.getElementById("cw2");
  const cw3 = document.getElementById("cw3");
  const answer = document.getElementById("answer");

  dots[dots.length - 1].addEventListener("animationend", () => {
    dots.forEach((dot) => {
      dot.classList.remove("appear");
      setTimeout(() => {
        dot.classList.add("appear");
      }, 0);
    });
  });

  example.addEventListener("click", function () {
    try {
      loader.style.display = "block";
      dots.forEach((dot) => {
        dot.classList.add("appear");
      });
      setTimeout(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
          .then((response) => response.json())
          .then((array) => {
            const list = document.createElement("ul");
            array.map((post) => {
              const item = document.createElement("li");
              item.textContent = `${post.id}. ${post.title}`;
              list.appendChild(item);
            });
            loader.style.display = "none";
            answer.appendChild(list);
          });
      }, 6000);
    } catch (err) {
      console.error(err);
    }
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
