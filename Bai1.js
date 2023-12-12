const number1 = document.querySelector("#number1");
const number2 = document.querySelector("#number2");
const number3 = document.querySelector("#number3");
const number4 = document.querySelector("#number4");
const number5 = document.querySelector("#number5");
const input = document.querySelector("#input");
const output = document.querySelector("#output");

btnSubmit.addEventListener("click", (e) => {
  e.preventDefault();
  const numberLocal = JSON.parse(localStorage.getItem("numbers")) || [];

  const newNumber = {
    number1: number1.value,
    number2: number2.value,
    number3: number3.value,
    number4: number4.value,
    number5: number5.value,
  };

  // Lấy ra giá trị lớn nhất trong mảng
  const values = Object.values(newNumber);
  const max = Math.max(...values);

  //push vao mang
  numberLocal.push(newNumber);
  numberLocal.push(max);

  localStorage.setItem("numbers", JSON.stringify(numberLocal));
  rendedata();
});
function rendedata() {
  const numberLocal = JSON.parse(localStorage.getItem("numbers")) || [];
  const trHtml = numberLocal
    .map((u, i) => {
      return `
      <tr>
        <td>${u.number1} ${u.number2} ${u.number3} ${u.number4} ${u.number5}</td>
      </tr>
    `;
    })
    .join("");

  tbody.innerHTML = trHtml;
}
rendedata();
