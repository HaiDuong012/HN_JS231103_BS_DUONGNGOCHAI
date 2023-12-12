const cardNumberInput = document.querySelector("#cardNumber");
const expiryDateInput = document.querySelector("#expiryDate");
const cvvInput = document.querySelector("#cvv");
const saveSubmitinput = document.querySelector("#saveSubmit");

saveSubmitinput.addEventListener("click", (e) => {
  e.preventDefault();

  const userLocal = JSON.parse(localStorage.getItem("users")) || [];

  const newUser = {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrQtN5HYJ1nquwrxfitaN3hL5pQVZE_wMerw&usqp=CAU",

    cardNumber: cardNumberInput.value,
    expiryDate: expiryDateInput.value,
    cvv: cvvInput.value,
    Action:
      "<button>View</button> <button>Edit</button> <button>Delete</button>",
  };

  userLocal.push(newUser);

  localStorage.setItem("users", JSON.stringify(userLocal));
  rendedata();
});

function rendedata() {
  const userLocal = JSON.parse(localStorage.getItem("users")) || [];
  const trHtmls = userLocal.map((u, i) => {
    return `
          <tr>  
            <td>${i + 1}</td>
            <td><img width="150px" height="100px" src=${u.image} /></td> 
            <td>${u.cardNumber}</td>
            
            <td>${u.expiryDate}</td>
            <td>${u.cvv}</td>
            <td>${u.Action}</td>
          </tr>
      `;
  });
  const trHtml = trHtmls.join("");

  tbody1.innerHTML = trHtml;
}
rendedata();
{
}
