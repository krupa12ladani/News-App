let key = "8a0511bcd9d14f4ea48ffc4acae749b4";
let cardData = document.querySelector(".cardData");

const getData = async () => {
  console.log("Inside Fun");
  const query = document.getElementById("inputData").value;
  let res = await fetch(
    `https://newsapi.org/v2/everything?q=${
      query || "india"
    }&apiKey=${key}&pageSize=100`
  );
  let jsonData = await res.json();

  console.log(jsonData);

  cardData.innerHTML = "";
  jsonData.articles.forEach(function (article) {
    let divs = document.createElement("div");
    divs.classList.add("card");
    divs.innerHTML = `<img src="${article.urlToImage}
    " alt="" />
  <h3>${article.title}</h3>
  <p>${article.description}</p>`;
    cardData.appendChild(divs);
  });
};

getData();
