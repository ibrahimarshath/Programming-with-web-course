const discountInput = document.getElementById("discount");
const applyDiscountBtn = document.querySelectorAll(".btn")[1]; 
const discountPriceEl = document.querySelector(".discount-price");
const addToCartBtn = document.querySelectorAll(".btn")[0]; 
const cardContainer = document.querySelector(".card-container");

const originalPrice = 540;
let currentPrice = 219;

// Apply Discount functionality
applyDiscountBtn.addEventListener("click", () => {
  const discount = parseFloat(discountInput.value);

  if (!isNaN(discount) && discount >= 0 && discount <= 100) {
    // Calculate new price based on original price
    currentPrice = originalPrice - (originalPrice * discount / 100);
    discountPriceEl.textContent = `$${currentPrice.toFixed(0)}`;

    // Challenge 2: background color change
    if (discount >= 50) {
      cardContainer.style.backgroundColor = "lightyellow";
    } else {
      cardContainer.style.backgroundColor = "rgb(215, 226, 225)";
    }

    // Show success message
    applyDiscountBtn.textContent = "Applied!";
    applyDiscountBtn.style.backgroundColor = "gray";

    setTimeout(() => {
      applyDiscountBtn.textContent = "Apply Discount";
      applyDiscountBtn.style.backgroundColor = "#2fcd96";
    }, 1500);
  } else {
    alert("Please enter a valid discount (0–100).");
  }
});

// Add to Cart functionality
addToCartBtn.addEventListener("click", () => {
  addToCartBtn.textContent = "Added!";
  addToCartBtn.style.backgroundColor = "gray";

  setTimeout(() => {
    addToCartBtn.textContent = "Add to Cart";
    addToCartBtn.style.backgroundColor = "#2fcd96";
  }, 1500);
});

// Clear input on focus
discountInput.addEventListener("focus", () => {
  discountInput.value = "";
});