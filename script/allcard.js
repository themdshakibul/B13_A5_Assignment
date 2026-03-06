// const getIssues = () => {
//   fetch("https://phi-lab-server.vercel.app/api/v1/lab/issues")
//     .then((res) => res.json())
//     .then((data) => {
//       console.log(data.data);
//     });
// };

// document.getElementById("openBtn").addEventListener("click", function (issues) {
//   issues.forEach((issue) => {
//     console.log(issue);
//   });
// });

let allIssues = [];

const getIssues = () => {
  fetch("https://phi-lab-server.vercel.app/api/v1/lab/issues")
    .then((res) => res.json())
    .then((data) => {
      allIssues = data.data;
      console.log(allIssues);
    });
};

getIssues();

document.getElementById("openBtn").addEventListener("click", function () {
  const openIssues = allIssues.filter((issue) => issue.status === "open");

  openIssues.forEach((issue) => {
    console.log(issue);
  });
});
