const summaryList = document.querySelector(".summary__list");

const renderSummaryItems = (data) => {
  const items = data
    .map((el) => {
      const { category, score, icon } = el;

      return `<li class="summary__item ${category.toLowerCase()}">
    <div class="summary__category-wrapper">
      <img src="${icon}" alt="${category} icon">
      <p class="summary__category">${category}</p>
    </div>
    <p class="summary__score-wrapper">
    <span class="summary__score">${score}</span
    >
    / 100
    </p>
    </li>`;
    })
    .join("");

  summaryList.innerHTML = items;
};

const getDataAsync = async () => {
  try {
    const response = await fetch("../../data.json");
    const data = await response.json();

    if (data === null) {
      console.log("Something went wrong prease reload page");
      return;
    }

    renderSummaryItems(data);
  } catch (err) {
    console.log(err);
  }
};
getDataAsync();
