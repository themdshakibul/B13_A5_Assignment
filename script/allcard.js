const cardContainer = document.getElementById("cardContainer");
const loadingSpiner = document.getElementById("loadingSpiner");
const issuesItems = document.getElementById("issuesItems");

// all btn
const allBtn = document.getElementById("allBtn");
const openBtn = document.getElementById("openBtn");
const closedBtn = document.getElementById("closedBtn");

// kard store korbo
let allIssues = [];

const catagoryModal = document.getElementById("catagoryModal");

function filterIssues(status) {
  showLoading();

  setTimeout(() => {
    if (status === "all") {
      displayLoadCard(allIssues);
    } else {
      const filtered = allIssues.filter((issue) => issue.status === status);
      displayLoadCard(filtered);
    }
    hiddenLoading();
  }, 200);
}

allBtn.addEventListener("click", () => filterIssues("all"));
openBtn.addEventListener("click", () => filterIssues("open"));
closedBtn.addEventListener("click", () => filterIssues("closed"));

// showLoading
function showLoading() {
  loadingSpiner.classList.remove("hidden");
  loadingSpiner.classList.add("flex");
  cardContainer.innerHTML = "";
}

// hidden Loading
function hiddenLoading() {
  loadingSpiner.classList.add("hidden");
  loadingSpiner.classList.remove("flex");
}

async function loadCard() {
  showLoading();
  const res = await fetch(
    "https://phi-lab-server.vercel.app/api/v1/lab/issues",
  );
  const data = await res.json();
  allIssues = data.data;
  hiddenLoading();
  displayLoadCard(allIssues);
}

function displayLoadCard(issues) {
  cardContainer.innerHTML = "";

  // issues count
  issuesItems.innerText = issues.length;

  issues.forEach((issue) => {
    // priority btn color
    const priorityColor =
      issue.priority === "high"
        ? "bg-[#FEECEC] text-[#EF4444]"
        : issue.priority === "medium"
          ? "bg-[#FFF6D1] text-[#F59E0B]"
          : "bg-[#EEEFF2] text-[#9CA3AF]";

    // card border color
    const borderColor =
      issue.status === "open" ? "border-green-500" : "border-fuchsia-500";

    const card = document.createElement("div");
    card.className = `card shadow-2xl border-t-4 ${borderColor}`;
    card.innerHTML = `
        <div class="p-5 space-y-5" onclick="openCardModal(${issue.id})">
            <!-- img and btn -->
            <div class="flex items-center justify-between gap-4">
              <img 
                  src="${issue.status === "open" ? "./assets/Open-Status.png" : "./assets/Closed-Status.png"}" 
                  alt="${issue.status}" 
                  class="w-12"
                />
              <button class="btn rounded-full text-xl px-5 uppercase ${priorityColor}">
                ${issue.priority}
              </button>
            </div>
            <!-- card title -->
            <h2 class="font-semibold text-xl md:text-2xl">
              ${issue.title}
            </h2>
            <div class="text-gray-500 text-xl line-clamp-2">
              ${issue.description}
            </div>

            <!-- button badge -->
            <div class="flex w-fit gap-3">
              <button class="btn text-[10px] px-5 border uppercase rounded-full flex items-center
                ${issue.labels[0] === "bug" ? "bg-red-200 text-red-600 border-red-500" : "bg-green-200 text-green-600 border-green-500"}">
                <img src="${issue.labels[0] === "bug" ? "./assets/bug.png" : "./assets/Vector.png"}">
                ${issue.labels[0] || "No Bug"}
              </button>
              <button class="btn text-[10px] px-3 bg-[#FFF8DB] text-[#F59E0B] border border-[#F59E0B] uppercase rounded-full "><img src="./assets/help.png" alt=""> ${issue.labels[1] || "Help Wanted"}</button>
            </div>
          </div>
          <hr class="text-gray-400" />
          <div class="text-gray-500 text-sm p-5">
            <p>${issue.author}</p>
            <p>${new Date(issue.updatedAt).toLocaleDateString()}</p>
          </div>
    `;
    cardContainer.appendChild(card);
  });
}

const openCardModal = async (id) => {
  const url = `https://phi-lab-server.vercel.app/api/v1/lab/issue/${id}`;

  const res = await fetch(url);
  const data = await res.json();
  displsyModal(data.data);
};

// displsyModal shaow
const displsyModal = (items) => {
  const priorityColor =
    items.priority === "high"
      ? "bg-[#FEECEC] text-[#EF4444]"
      : items.priority === "medium"
        ? "bg-[#FFF6D1] text-[#F59E0B]"
        : "bg-[#EEEFF2] text-[#9CA3AF]";

  const card = document.getElementById("detailsCards");
  card.innerHTML = `
    <div class="space-y-5">
      <h2 class="font-bold text-2xl">${items.title}</h2>
      <div class="flex items-center gap-5">
        <button class="btn rounded-full px-5 ${
          items.status === "open" ? "bg-green-500" : "bg-fuchsia-500"
        } text-white">
          ${items.status === "open" ? "Open" : "Closed"}
        </button>
        <div class="flex items-center gap-3 text-[16px] font-medium">
          <p>${items.author}</p>
          <p>${new Date(items.updatedAt).toLocaleDateString()}</p>
        </div>
      </div>
      <div class="flex gap-3 items-center">
        <button class="btn text-[10px] px-5 border uppercase rounded-full flex items-center
          ${items.labels[0] === "bug" ? "bg-red-200 text-red-600 border-red-500" : "bg-green-200 text-green-600 border-green-500"}">
          <img src="${items.labels[0] === "bug" ? "./assets/bug.png" : "./assets/Vector.png"}">
          ${items.labels[0] || "No Bug"}
              </button>
          <button class="btn text-[10px] px-5 bg-[#FFF8DB] text-[#F59E0B] border border-[#F59E0B] uppercase rounded-full "><img src="./assets/help.png" alt=""> ${items.labels[1] || "Help Wanted"}</button>
      </div>
      <p class="text-xl">
        ${items.description}
      </p>
      <div class="grid grid-cols-2">
        <div class="space-y-2 text-left">
          <h2 class="text-xl" >Assignee:</h2>
          <h1 class="text-xl font-semibold">${items.assignee}</h1>
        </div>
        <div class="space-y-2 text-left">
          <div class="text-xl">Priority:</div>
            <button class="btn text-sm rounded-full px-5 uppercase ${priorityColor}">
              ${items.priority}
            </button>
        </div>
      </div>
    </div>
  `;
  document.getElementById("cardModal").showModal();
};

// search
document.getElementById("btnSearch").addEventListener("click", () => {
  const inputSearch = document.getElementById("inputSearch");
  const searchValue = inputSearch.value.trim().toLowerCase();

  fetch(
    `https://phi-lab-server.vercel.app/api/v1/lab/issues/search?q=${searchValue}`,
  )
    .then((res) => res.json())
    .then((data) => {
      const allCards = data.data;
      const filterCards = allCards.filter((card) =>
        card.title.toLowerCase().includes(searchValue),
      );
      displayLoadCard(filterCards);
    });
});

loadCard();
