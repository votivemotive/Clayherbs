let slides1 = document.querySelectorAll(".slide");
let dots = document.querySelectorAll(".dot");
var currentIndex = 0;

function showSlide(index) {
  slides.forEach(slide => slide.classList.remove("active"));
  dots.forEach(dot => dot.classList.remove("active"));

  slides[index].classList.add("active");
  dots[index].classList.add("active");

  currentIndex = index;
}

<script>
  const sizeFilter = document.getElementById("sizeFilter");
  const priceFilter = document.getElementById("priceFilter");
  const productCards = document.querySelectorAll(".product-card");

  function filterProducts() {
    const selectedSize = sizeFilter.value;
    const selectedPrice = priceFilter.value;

    productCards.forEach(card => {
      const size = card.dataset.size;
      const price = parseInt(card.dataset.price);

      // Size filter logic
      const matchesSize = (selectedSize === "all" || size === selectedSize);

      // Price filter logic
      let matchesPrice = false;
      switch (selectedPrice) {
        case "all": matchesPrice = true; break;
        case "under-500": matchesPrice = price < 500; break;
        case "500-2000": matchesPrice = price >= 500 && price <= 2000; break;
        case "2000-5000": matchesPrice = price > 2000 && price <= 5000; break;
        case "above-5000": matchesPrice = price > 5000; break;
      }

      // Show/hide cards
      if (matchesSize && matchesPrice) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  }

  sizeFilter.addEventListener("change", filterProducts);
  priceFilter.addEventListener("change", filterProducts);
</script>
