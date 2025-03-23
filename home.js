
const users = [
  {
    id:0,
    name: "Alice Johnson",
    description: "Frontend Developer",
    avatar: "https://randomuser.me/api/portraits/women/1.jpg",
    role: "Admin"
    ,price: 100 
    },
  {
    id:1,
    name: "Michael Smith",
    description: "Backend Engineer",
    avatar: "https://randomuser.me/api/portraits/men/2.jpg",
    role: "User"
    ,price: 200 
    },
  {
    id:2,
    name: "Emma Williams",
    description: "UI/UX Designer",
    avatar: "https://randomuser.me/api/portraits/women/3.jpg",
    role: "Moderator"
    ,price: 100 
    },
  { id:3,
    name: "Daniel Brown",
    description: "Full Stack Developer",
    avatar: "https://randomuser.me/api/portraits/men/4.jpg",
    role: "User"
    ,price: 100 
    },
  { id:4,
    name: "Sophia Martinez",
    description: "Product Manager",
    avatar: "https://randomuser.me/api/portraits/women/5.jpg",
    role: "Admin"
    ,price: 500 
    },
  { id:5,
    name: "Liam Garcia",
    description: "Cloud Engineer",
    avatar: "https://randomuser.me/api/portraits/men/6.jpg",
    role: "User"
    ,price: 100 
    },
  { id:6,
    name: "Olivia Anderson",
    description: "Security Analyst",
    avatar: "https://randomuser.me/api/portraits/women/7.jpg",
    role: "Moderator"
    ,price: 400 
    },
  { id:7,
    name: "James Taylor",
    description: "Machine Learning Engineer",
    avatar: "https://randomuser.me/api/portraits/men/8.jpg",
    role: "User"
    ,price: 700 
    },
  { id:8,
    name: "Isabella Thomas",
    description: "Data Scientist",
    avatar: "https://randomuser.me/api/portraits/women/9.jpg",
    role: "Admin"
    ,price: 800 
    },
  { id:9,
    name: "Ethan White",
    description: "DevOps Engineer",
    avatar: "https://randomuser.me/api/portraits/men/10.jpg",
    role: "User"
    ,price: 100 
    },
];
//Получаем элементы из документа index.html
const signInEl = document.querySelector('#sign-in');
const notifications = document.querySelector(".notifications"),
  buttons = document.querySelectorAll(".buttons .btn")

const toastDetails = {
  timer: 5000,
  success: {
    icon: "fa-circle-check",
    text: "Hello World: This is a success toast.",
  },
  error: {
    icon: "fa-circle-xmark",
    text: "Hello World: This is an error toast.",
  },
  warning: {
    icon: "fa-triangle-exclamation",
    text: "Hello World: This is a warning toast.",
  },
  info: {
    icon: "fa-circle-info",
    text: "Hello World: This is an information toast.",
  },
  random: {
    icon: "fa-solid fa-star",
    text: "Hello World: This is a random toast.",
  },
}
// Добавляю слушатель событий для формы входа
// signInEl.addEventListener('submit',  (event) => {
//     event.preventDefault()
  
//     // Получаю данные из формы
//     const formData = new FormData(signInEl);
//     const newUser = Object.fromEntries(formData);
  
//     // Сохраняю нового пользователя в localStorage
//     localStorage.setItem('activeUser', JSON.stringify(newUser));
  
//     // Переходим на страницу home.html
//     window.location.href = 'home.html';
//   })
const removeToast = (toast) => {
  toast.classList.add("hide")
  if (toast.timeoutId) clearTimeout(toast.timeoutId)
  setTimeout(() => toast.remove(), 500)
}

const createToast = (id) => {
  const { icon, text } = toastDetails[id]
  const toast = document.createElement("li")
  toast.className = `toast ${id}`
  toast.innerHTML = `<div class="column">
                         <i class="fa-solid ${icon}"></i>
                         <span>${text}</span>
                      </div>
                      <i class="fa-solid fa-xmark" onclick="removeToast(this.parentElement)"></i>`
  notifications.appendChild(toast) 
  toast.timeoutId = setTimeout(() => removeToast(toast), toastDetails.timer)
}

buttons.forEach((btn) => {
  btn.addEventListener("click", () => createToast(btn.id))
})
const container = document.getElementById("users-container");


const displayUsers = (filteredUsers) => {
console.log(filteredUsers);
  container.innerHTML = ""; // Clear current users
  filteredUsers.forEach((user) => {
    const userDiv = document.createElement("div");
    userDiv.classList.add("user-card");

    userDiv.innerHTML = `
      <img src="${user.avatar}" alt="${user.name}">
      <h2>${user.name}</h2>
      <p>${user.description}</p>
      <span class="role ">${user.role}</span>
      <button data-id="${user.id}">Delete</button>
    `;
    
    container.appendChild(userDiv);
  });
};

 displayUsers(users);
 
