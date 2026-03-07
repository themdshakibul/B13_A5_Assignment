const cardContainer = document.getElementById("cardContainer");
const loadingSpiner = document.getElementById("loadingSpiner");
const issuesItems = document.getElementById("issuesItems");

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
  hiddenLoading();
  displayLoadCard(data.data);
}

function displayLoadCard(issues) {
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
        <div class="card card-body space-y-5">
            <!-- img and btn -->
            <div class="flex items-center justify-between">
              <img 
                  src="./assets/${issue.status === "open" ? "../assets/Open-Status.png" : "../assets/Closed- Status .png"}" 
                  alt="${issue.status}" 
                  class="w-12"
                />
              <button class="btn rounded-full text-xl px-10 uppercase ${priorityColor}">
                ${issue.priority}
              </button>
            </div>
            <!-- card title -->
            <h2 class="font-semibold text-2xl">
              ${issue.title}
            </h2>
            <p class="text-gray-500 text-xl line-clamp-2 overflow-hidden">
              ${issue.description}
            </p>

            <!-- button badge -->
            <div class="flex w-fit flex-wrap gap-2">
              <button class="btn text-sm px-3 border uppercase rounded-full flex items-center gap-1
                ${issue.labels[0] === "bug" ? "bg-red-200 text-red-600 border-red-500" : "bg-green-200 text-green-600 border-green-500"}">
                <img src="${issue.labels[0] === "bug" ? "../assets/bug.png" : "../assets/Vector.png"}">
                ${issue.labels[0] || "No Bug"}
              </button>
              <button class="btn text-sm px-3 bg-[#FFF8DB] text-[#F59E0B] border border-[#F59E0B] uppercase rounded-full "><img src="../assets/help.png" alt=""> ${issue.labels[1] || "Help Wanted"}</button>
            </div>
          </div>
          <hr class="text-gray-400" />
          <div class="text-gray-500 card card-body">
            <p>${issue.assignee}</p>
            <p>${new Date(issue.createdAt).toLocaleDateString()}</p>
        </div>
    `;
    cardContainer.appendChild(card);
  });
}
loadCard();
