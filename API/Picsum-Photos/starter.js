const listImage = document.querySelector(".images");
const loadMore = document.querySelector(".load-more");
loadMore.style.display = "none";
const loaderImage = document.querySelector(".image-loader");
let page = 1;
let limit = 8;
const endpoint = `https://picsum.photos/v2/list?limit=${limit}`;

function createImage(url) {
  const template = `
        <div class="image-item">
            <img src="${url}" alt="" />
        </div>
    `;
  listImage.insertAdjacentHTML("beforeend", template);
}

async function getImage(page) {
  const responts = await fetch(`${endpoint}&page=${page}`);
  const data = await responts.json();
  loaderImage.style.display = "none";
  loadMore.style.display = "block";
  if (Array.isArray(data) && data.length > 0) {
    data.forEach((item) => createImage(item.download_url));
  }

  return data;
}

function handlerbtn() {
  page++;
  getImage(page);
}
loadMore.addEventListener("click", handlerbtn);
getImage();
