(function () {
  const example = document.getElementById("example");
  const loader = document.getElementById("loader");
  const cw1 = document.getElementById("cw1");
  const cw2 = document.getElementById("cw2");
  const cw3 = document.getElementById("cw3");
  const answer = document.getElementById("answer");

  const select = document.getElementById("post_id");
  const formButton = document.getElementById("form_button");
  const FETCH_DELAY = 2000;
  let selectedPost = 1;

  const baseUrl = "https://jsonplaceholder.typicode.com";

  function startLoader() {
    loader.style.display = "block";
  }

  function hideLoader() {
    loader.style.display = "none";
  }

  function renderData(data) {
    const list = document.createElement("ul");

    const items = Array.isArray(data) ? data : [data];

    items.forEach((item) => {
      const li = document.createElement("li");
      li.textContent = `${item.id}. ${item.title}`;
      list.appendChild(li);
    });

    answer.replaceChildren(list);
  }

  async function getData(resource) {
    try {
      startLoader();
      await new Promise((res) => setTimeout(res, FETCH_DELAY));
      const res = await fetch(`${baseUrl}${resource}`);

      if (!res.ok) {
        throw new Error(`HTTP error: ${res.status}`);
      }

      return await res.json();
    } catch (err) {
      return undefined;
    } finally {
      hideLoader();
    }
  }

  async function fetchAndRender(resource) {
    const data = await getData(resource);

    if (data !== undefined) {
      renderData(data);
    }
  }

  example.addEventListener("click", function () {
    fetchAndRender("/posts");
  });

  formButton.addEventListener("click", (event) => {
    event.preventDefault();
    fetchAndRender(`/posts/${selectedPost}`);
  });

  select.addEventListener("change", (e) => {
    selectedPost = e.target.value;
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
