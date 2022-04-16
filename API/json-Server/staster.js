// npm install -g json-server
// json-server --watch db.json

window.addEventListener("load", function () {
  const endpoint = "http://localhost:3000/courses";
  const formPost = document.querySelector(".form-post");

  async function addItem({ ...item }) {
    const respoinse = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
      body: JSON.stringify({ ...item }),
    });
  }

  formPost.addEventListener("submit", async function (e) {
    e.preventDefault();
    const item = {
      image: this.elements["image"].value,
      title: this.elements["title"].value,
      author: this.elements["author"].value,
      rating: this.elements["rating"].value,
      price: this.elements["price"].value,
      besrtSeller: this.elements["besrtSeller"].checked,
      buyAmount: this.elements["buyAmount"].value,
    };

    await addItem({ ...item });
  });
});

// window.addEventListener("load", function () {
//   const endpoint = "http://localhost:3000/courses";
//   const formPost = document.querySelector(".form-post");
//   const courseList = document.querySelector(".course-list");
//   const formSubmit = document.querySelector(".form-submit");
//   const searchCourses = document.querySelector(".search-courses");
//   let updateId = null;

//   function debounceFn(func, wait, immediate) {
//     let timeout;
//     return function () {
//       let context = this,
//         args = arguments;
//       let later = function () {
//         timeout = null;
//         if (!immediate) func.apply(context, args);
//       };
//       let callNow = immediate && !timeout;
//       clearTimeout(timeout);
//       timeout = setTimeout(later, wait);
//       if (callNow) func.apply(context, args);
//     };
//   }

//   function app() {
//     getHadleCourses();
//   }
//   app();

//   async function getCourse(id) {
//     const respoinse = await fetch(`${endpoint}/${id}`);
//     const data = await respoinse.json();
//     return data;
//   }

//   async function getHadleCourses(link = endpoint) {
//     const respoinse = await fetch(link);
//     const data = await respoinse.json();
//     console.log(data);
//     if (Array.isArray(data) && data.length > 0) {
//       courseList.innerHTML = "";
//       data.forEach((item) => renderCourses(item));
//     }
//   }

//   async function deleteCourse(id) {
//     await fetch(`${endpoint}/${id}`, {
//       method: "DELETE",
//     });
//   }

//   async function addNewCourse({ image, ...items }) {
//     await fetch(endpoint, {
//       method: "POST",
//       body: JSON.stringify({ image, ...items }),
//       headers: {
//         "Content-type": "application/json; charset=UTF-8",
//       },
//     });
//   }

//   async function updateCourse({ id, ...course }) {
//     await fetch(`${endpoint}/${id}`, {
//       method: "PUT",
//       body: JSON.stringify({ ...course }),
//       headers: {
//         "Content-type": "application/json; charset=UTF-8",
//       },
//     });
//   }

//   formPost.addEventListener("submit", async function (e) {
//     e.preventDefault();
//     const courses = {
//       image: this.elements["image"].value,
//       title: this.elements["title"].value,
//       author: this.elements["author"].value,
//       rating: this.elements["rating"].value,
//       price: this.elements["price"].value,
//       bestSeller: this.elements["bestSeller"].checked,
//       buyAmount: this.elements["buyAmount"].value,
//     };
//     updateId
//       ? await updateCourse({ id: updateId, ...courses })
//       : await addNewCourse(courses);
//     formPost.reset();
//     updateId = null;
//     formSubmit.textContent = "Add course";
//     getHadleCourses();
//   });

//   courseList.addEventListener("click", async function (e) {
//     if (e.target.matches(".course-remove")) {
//       const id = e.target.dataset.id;
//       await deleteCourse(id);
//       const course = e.target.parentNode.parentNode;
//       course.parentNode.removeChild(course);
//     } else if (e.target.matches(".course-edit")) {
//       const id = e.target.dataset.id;
//       const data = await getCourse(id);
//       formPost.elements["image"].value = data.image;
//       formPost.elements["title"].value = data.title;
//       formPost.elements["author"].value = data.author;
//       formPost.elements["rating"].value = data.rating;
//       formPost.elements["price"].value = data.price;
//       formPost.elements["bestSeller"].checked = data.bestSeller;
//       formPost.elements["buyAmount"].value = data.buyAmount;

//       formSubmit.textContent = "Uppdate course";
//       updateId = id;
//     }
//   });

//   function renderCourses(item) {
//     const template = `
//     <div class="course-item">
//       <div class="course-image">
//         <img src="${item.image}" alt="" />
//         <button class="course-edit" data-id="${
//           item.id
//         }"><i class="fa fa-pencil"></i></button>
//         <button class="course-remove" data-id="${
//           item.id
//         }"><i class="fa fa-times"></i></button>
//       </div>
//       <div class="course-content">
//         <h3 class="course-title">${item.title}</h3>
//         <div class="course-author">${item.author}</div>
//         <div class="course-meta">
//           <div class="course-rating">${item.rating}</div>
//           <div class="course-enroll">${item.price}</div>
//         </div>
//         ${
//           item.bestSeller
//             ? '<div class="course-best-seller">Best seller</div>'
//             : ""
//         }
//         <div class="course-buyAmount">$ ${item.buyAmount}</div>
//       </div>
//     </div>`;
//     courseList.insertAdjacentHTML("beforeend", template);
//   }

//   searchCourses.addEventListener(
//     "keyup",
//     debounceFn(async function (e) {
//       const value = e.target.value.trim();
//       if (value !== "") {
//         const part = `${endpoint}?title_like=${value}`;
//         await getHadleCourses(part);
//       }
//     }, 500)
//   );
// });
