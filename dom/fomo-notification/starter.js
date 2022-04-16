window.addEventListener("load", function () {
  let index = 0;
  const delay = 5000;
  const listNoti = [
    {
      title: "Welcome to notification",
      dec: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi earum fugit consequatur cupiditate officiis sapiente beatae? ",
      image: "https://source.unsplash.com/random",
    },
    {
      title: "Welcome to javascript course",
      dec: "Aliquam tempore error perferendis accusamus autem! Tempore, sequi deserunt? Quibusdam inventore non temporibus rerum.",
      image:
        "https://www.istockphoto.com/search/2/image?phrase=beutiful&alloweduse=availableforalluses&excludenudity=true&sort=best&mediatype=photography&utm_source=unsplash&utm_medium=affiliate&utm_campaign=srp_photos_top&utm_content=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Fbeutiful&utm_term=beutiful%3A%3A%3A",
    },
    {
      title: "Welcome to this tutorial",
      dec: " Eius, ipsa exercitationem ea odio quibusdam maxime, quos iure praesentium  ",
      image:
        "https://media.istockphoto.com/photos/two-pendant-lights-hang-over-kitchen-island-picture-id1272358382?b=1&k=20&m=1272358382&s=170667a&w=0&h=b_z0yvPvGoyQy0PkhDw-MLFM-k9x35_EVFiijjGwGXs=",
    },
  ];
  function createNotifycation() {
    const notifi = `
            <div class="noti">
                <img src="${listNoti[index].image}" alt="" class="noti-image"/>
                <div class="noti-content">
                    <h3 class="noti-title">${listNoti[index].title}</h3>
                    <p class="noti-desc">${listNoti[index].dec}</p>
                </div>
            </div>
        `;
    document.body.insertAdjacentHTML("beforeend", notifi);
  }

  this.setInterval(function () {
    createNotifycation();
    index++;
    console.log(index);
    if (index > listNoti.length - 1) {
      index = 0;
    }
    const notifi = document.querySelectorAll(".noti");

    setInterval(function () {
      [...notifi].forEach((item) => item.parentNode.removeChild(item));
    }, delay);
  }, delay);
});
