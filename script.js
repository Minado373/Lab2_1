(function () {
  const example = document.getElementById("example");
  const loader = document.getElementById("loader");
  const cw1 = document.getElementById("cw1");
  const cw2 = document.getElementById("cw2");
  const cw3 = document.getElementById("cw3");
  const answer = document.getElementById("answer");
  const createdResult = document.getElementById("created_result");

  const select = document.getElementById("post_id");
  const formButton = document.getElementById("form_button");
  const REQUEST_DELAY = 2000;
  let selectedPost = 1;

  const createPostButton = document.getElementById("create_post_button");

  const baseUrl = "https://jsonplaceholder.typicode.com";

  function startLoader(text) {
    loader.style.display = "block";
    loader.firstChild.textContent = text;
  }

  function hideLoader() {
    loader.style.display = "none";
  }

  function renderData(data, container) {
    const list = document.createElement("ul");

    const items = Array.isArray(data) ? data : [data];

    items.forEach((item) => {
      const li = document.createElement("li");
      li.textContent = `${item.id} ${item.title}`;
      list.appendChild(li);
    });

    container.replaceChildren(list);
  }

  function delayRequest() {
    return new Promise((res) => setTimeout(res, REQUEST_DELAY));
  }

  async function getData(resource) {
    try {
      startLoader("Loading");
      await delayRequest();
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
      renderData(data, answer);
    }
  }

  async function createPost(path) {
    try {
      startLoader("Processing");
      await delayRequest();
      const res = await fetch(`${baseUrl}${path}`, {
        method: "POST",
        body: JSON.stringify({
          title: "Random post",
          body: "ioqjeoiqwjdoaijdoia",
          userId: 1,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      });
      const data = await res.json();

      renderData(
        { id: `Dodano nowy post o ID = `, title: `{${data.id}}` },
        createdResult,
      );
    } catch (error) {
      console.error(error);
    } finally {
      hideLoader();
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

  createPostButton.addEventListener("click", (e) => {
    e.preventDefault();
    createPost("/posts");
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
