const productList = [
  "NESTLE LACTOGEN 1 200GM",
  "NESTLE LACTOGEN 1 800G",
  "NESTLE LACTOGEN 122G",
  "NESTLE LACTOGEN 2 200G",
  "NESTLE LACTOGEN 2 400G",
  "NESTLE LACTOGEN 2 800G",
  "NESTLE LACTOGEN RECOVER 200GM",
  "NESTLE LACTOGEN RECOVER 200GM NESTLE LACTOGROW 3 200G",
  "NESTLE LACTOGROW 3 200G",
  "NESTLE LACTOGROW 3 800G",
  "NESTLE LION CHOCOLATE 42GM",
  "NESTLE LION PEANUT MCB 40G",
  "MORINAGA BF GROW 3 300G SOFT PACK",
  "MORINAGA BF GROW 3 600G SOFT PACK",
  "MORINAGA BF GROW 3 900G SOFT PACK",
  "MORINAGA BF MAMA 200GM",
  "MORINAGA BF-1 200GM",
  "MORINAGA BF-1 300GM",
  "MORINAGA BF-1 400G",
  "MORINAGA BF-1 600GM",
  "MORINAGA BF-1 900G",
  "MORINAGA BF-1 900GM",
  "MORINAGA BF-2 300GM",
  "MORINAGA BF-2 400G",
  "MORINAGA BF-2 600GM",
  "MORINAGA BF-2 900G",
  "MORINAGA BF-2 900GM",
  "MORINAGA BF-3 300G",
  "MORINAGA BF-3 400G",
  "MORINAGA BF-3 900G",
  "MORINAGA BF-P 400G",
  "MORINAGA CHIL-SCHOOL 300G",
  "MORINAGA NL 33 350GM",
  "NESTLE NAN 1 400G",
  "NESTLE NAN 1 HA 400GM",
  "NESTLE NAN 2 400G",
  "NESTLE NAN 2 400G OPTIPRO",
  "NESTLE NAN 3 300GM",
  "NESTLE NAN AL 110 400G",
  "NESTLE NAN OPTIPRO 1 350GM",
  "NESTLE NAN OPTIPRO 1 600GM",
  "NESTLE NANGROW OPTIPRO 3 400GM",
  "NESTLE NANGROW OPTIPRO 300GM",
  "NESTLE NESCAFE 100GM MUG PACK",
  "NESTLE NESCAFE 240ML TIN",
  "NESTLE NESCAFE 3 IN 1 25G",
  "NESTLE NESCAFE 3 IN 1 25G BOX",
  "NESTLE NESCAFE 3 IN 1 SACHET PK",
  "NESTLE NESCAFE CHILLED MOCHA 200ML",
  "NESTLE NESCAFE CHOCO HAZELNUT ICE 25GM",
  "NESTLE NESCAFE CLASSIC 200G IMPORTED",
  "NESTLE NESCAFE CLASSIC 50GM",
  "NESTLE NESCAFE GOLD CAPPUCCINO 20.5G",
  "NESTLE NESCAFE VANILLA WAFER ICE 25GM",
  "NESTLE NESCAFE W.CHOC MOCHA 220ML",
  "NESTLE NESFRUTA APPLE 1000ML",
  "NESTLE NESFRUTA APPLE 200ML",
  "NESTLE NESFRUTA APPLE 200ML NP",
  "NESTLE NESFRUTA GUAVA 200ML",
  "NESTLE NESFRUTA LEMO PANI 1LTR",
  "NESTLE NESFRUTA MANGO 1000ML",
  "NESTLE NESFRUTA MANGO 200ML",
  "NESTLE NESQUIK 300G",
  "NESTLE NESQUIK 460G",
  "NESTLE NESQUIK BANANA 300G",
  "NESTLE NESQUIK POUCH 200G",
  "NESTLE NESQUIK STRAWBERRY 500G",
  "NESTLE NESVITA 1000ML",
  "NESTLE NESVITA 200ML",
  "NESTLE NESVITA YOGURT 400G",
  "NESTLE NIDO 1 PLUS 1KG",
  "NESTLE NIDO 1+ 1800G",
  "NESTLE NIDO 1+ 180G",
  "NESTLE NIDO 1+ 900GM",
  "NESTLE NIDO 130G",
  "NESTLE NIDO 1800G",
  "NESTLE NIDO 1PLUS 375GM",
  "NESTLE NIDO 2500G",
  "NESTLE NIDO 3+ 1800G",
  "NESTLE NIDO 3+ 800G",
  "NESTLE NIDO 3+ 900GM",
  "NESTLE NIDO 390G",
  "NESTLE NIDO 3PLUS 375GM",
  "NESTLE NIDO 3PLUS 400GM",
  "NESTLE NIDO 400G",
  "NESTLE NIDO 910G",
  "NESTLE NIDO 910G BEN10",
  "NESTLE NIDO 910G MILO PROMO",
  "NESTLE NIDO FORTI GROW 1KG",
  "NESTLE NIDO FORTI GROW 25GM",
  "NESTLE NIDO FORTI GROW 390GM",
  "NESTLE NIDO FORTI GROW 990GM",
  "NESTLE NIDO FORTY GROW SCHOOL AGE 650GM",
  "NESTLE NIDO GROWING UP FORMULA 1PLUS",
  "NESTLE NIDO GRW UP 3+ 150GM",
  "NESTLE NIDO ONE PLUS 1800G",
  "NESTLE CERELAC 3 FRUITS 100GM",
  "NESTLE CERELAC 3 FRUITS 175GM",
  "NESTLE CERELAC 3 FRUITS 25GM",
  "NESTLE CERELAC 3 FRUITS 350GM",
  "NESTLE CERELAC 3 WHEAT 25 GM",
  "NESTLE CERELAC APPLE STRAWBERRY 175GM",
  "NESTLE CERELAC APPLE WHEAT 25GM",
  "NESTLE CERELAC BANANA 175G",
  "NESTLE CERELAC CHAUNSA 175G",
  "NESTLE CERELAC NATURE DATES 175GM",
  "NESTLE CERELAC NATURE DATES 350GM",
  "NESTLE CERELAC NATURE MNGO PINAPLE STRWBRY 175GM",
  "NESTLE CERELAC NATURE OATS, RICE,175GM",
  "NESTLE CERELAC NATURE PALMOLEIN DATE 350GM",
  "NESTLE CERELAC NATURE POMEGRANATE 175GM",
  "NESTLE CERELAC NATURE POMEGRANATE 350GM",
  "NESTLE CERELAC NAURE \"S POMEGRANATE",
  "NESTLE CERELAC RED 175G",
  "NESTLE CERELAC RED FRUITS 175GM",
  "NESTLE CERELAC RICE 175GM PROMO",
  "NESTLE CERELAC RICE 25GM",
  "NESTLE CERELAC WHEAT 175GM",
  "NESTLE CERELAC WHEAT 25 GM",
  "NESTLE CERELAC WHEAT 350GM",
  "NESTLE CERELAC WHEAT N APPLE 175GM",
  "NESTLE CERELAC YELLOW 175G",
  "NESTLE CERELAC YELLOW FRUITS 175GM",
  "NESTLE CEREVITA 350G",
  "NESTLE CHILLED HAZELNUT 220ML",
  "NESTLE CORN FLAKES 150G",
  "NESTLE CORN FLAKES 275G",
  "NESTLE CRELAC 3-FRUIT 25G",
  "NESTLE BUNYAD 130G",
  "NESTLE BUNYAD 260G",
  "NESTLE BUNYAD 26G",
  "NESTLE BUNYAD 900GM",
  "NESTLE BUNYAD 910GM CP",
  "NESTLE BUNYAD DRNK PORRIDGE 32GM",
  "NESTLE BUNYAD PROMO PACK",
  "PEDIASURE CHOCOLATE 400G",
  "PEDIASURE CHOCOLATE 850GM",
  "PEDIASURE STRAWBERRY 400G",
  "PEDIASURE STRW 850GM",
  "PEDIASURE VANILLA 200GM",
  "PEDIASURE VANILLA 400G",
  "PEDIASURE VANILLA 850GM",
  "ENSURE CHOCOLATE 400G",
  "ENSURE SOFT PACK 200GM",
  "ENSURE STRAWBERRY 400G",
  "ENSURE VANILLA 400G",
  "ENSURE VANILLA 850GM",
  "GLUCERNA CHOCOLATE FLVR 400GM",
  "GLUCERNA VANILLA FLVR 400GM",
  "MELJI BIG 400G",
  "MELJI BIG 900G",
  "MELJI BIG SOFT PACK 200G",
  "MELJI FM-T 200G",
  "MELJI FM-T 400G",
  "MELJI FM-T 900G",
  "MELJI FU 400G",
  "MELJI FU 900G",
  "MEDJI LACTOLESS 350G",
  "MELJI MAMILAC VANILLA 180G",
  "MEDJI MAMILAC VANILLA 350G",
  "MELJI PRE 400G",
  "COW AND GATE 1 200G",
  "COW AND GATE 2 400GM",
  "COW AND GATE 4",
  "COW AND GATE 4 400G",
  "COW AND GATE ALMIRON 200G",
  "COW AND GATE ALMIRON 400G",
  "COW AND GATE BLUE 1 400G",
  "COW AND GATE BLUE 2 400G",
  "COW AND GATE BLUE 3 400G",
  "COW GATE 1 400GM",
];

const billItems = new Map();

const searchInput = document.getElementById("productSearch");
const suggestions = document.getElementById("suggestions");
const billRows = document.getElementById("billRows");
const grandTotalEl = document.getElementById("grandTotal");
const emptyState = document.getElementById("emptyState");

const formatCurrency = (value) =>
  `PKR ${new Intl.NumberFormat("en-PK").format(value)}`;

const renderDate = () => {
  const now = new Date();
  const formatted = now.toLocaleDateString("en-PK", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
  document.getElementById("todayDate").textContent = formatted;
};

const updateTotals = () => {
  let total = 0;
  billItems.forEach((item) => {
    total += item.price * item.quantity;
  });
  grandTotalEl.textContent = formatCurrency(total);
};

const renderBill = () => {
  billRows.innerHTML = "";
  billItems.forEach((item, name) => {
    const row = document.createElement("div");
    row.className = "bill-row";

    const itemName = document.createElement("span");
    itemName.textContent = name;

    const priceInput = document.createElement("input");
    priceInput.type = "number";
    priceInput.min = "0";
    priceInput.value = item.price;
    priceInput.className = "price-input";
    priceInput.addEventListener("input", () => {
      item.price = Number(priceInput.value);
      lineTotal.textContent = formatCurrency(item.price * item.quantity);
      updateTotals();
    });

    const qtyControl = document.createElement("div");
    qtyControl.className = "qty-control";

    const minusBtn = document.createElement("button");
    minusBtn.type = "button";
    minusBtn.textContent = "−";
    minusBtn.addEventListener("click", () => {
      if (item.quantity > 1) {
        item.quantity -= 1;
      }
      qtyText.textContent = item.quantity;
      lineTotal.textContent = formatCurrency(item.price * item.quantity);
      updateTotals();
    });

    const qtyText = document.createElement("span");
    qtyText.textContent = item.quantity;

    const plusBtn = document.createElement("button");
    plusBtn.type = "button";
    plusBtn.textContent = "+";
    plusBtn.addEventListener("click", () => {
      item.quantity += 1;
      qtyText.textContent = item.quantity;
      lineTotal.textContent = formatCurrency(item.price * item.quantity);
      updateTotals();
    });

    qtyControl.append(minusBtn, qtyText, plusBtn);

    const lineTotal = document.createElement("span");
    lineTotal.textContent = formatCurrency(item.price * item.quantity);

    const removeBtn = document.createElement("button");
    removeBtn.className = "remove-btn";
    removeBtn.type = "button";
    removeBtn.textContent = "Remove";
    removeBtn.addEventListener("click", () => {
      billItems.delete(name);
      renderBill();
    });

    row.append(itemName, priceInput, qtyControl, lineTotal, removeBtn);
    billRows.appendChild(row);
  });

  emptyState.style.display = billItems.size ? "none" : "block";
  updateTotals();
};

const showSuggestions = (matches) => {
  suggestions.innerHTML = "";
  if (!matches.length) {
    suggestions.style.display = "none";
    return;
  }

  matches.slice(0, 8).forEach((item) => {
    const option = document.createElement("div");
    option.className = "suggestion-item";
    option.textContent = item;
    option.tabIndex = 0;
    option.addEventListener("click", () => {
      addItemToBill(item);
    });
    option.addEventListener("keydown", (event) => {
      if (event.key === "Enter") {
        addItemToBill(item);
      }
    });
    suggestions.appendChild(option);
  });
  suggestions.style.display = "block";
};

const addItemToBill = (name) => {
  const existing = billItems.get(name);
  if (existing) {
    existing.quantity += 1;
  } else {
    billItems.set(name, { quantity: 1, price: 0 });
  }
  renderBill();
  searchInput.value = "";
  suggestions.style.display = "none";
  searchInput.focus();
};

searchInput.addEventListener("input", () => {
  const value = searchInput.value.trim().toLowerCase();
  if (!value) {
    suggestions.style.display = "none";
    return;
  }
  const matches = productList.filter((product) =>
    product.toLowerCase().includes(value)
  );
  showSuggestions(matches);
});

searchInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    const value = searchInput.value.trim().toLowerCase();
    if (!value) {
      return;
    }
    const match = productList.find((product) =>
      product.toLowerCase().includes(value)
    );
    if (match) {
      addItemToBill(match);
    }
  }
});

document.addEventListener("click", (event) => {
  if (!event.target.closest(".search-area")) {
    suggestions.style.display = "none";
  }
});

const shareBtn = document.getElementById("shareBtn");
shareBtn.addEventListener("click", () => {
  if (!billItems.size) {
    alert("Please add items before sharing.");
    return;
  }
  let message = "Haq's International Bill%0A%0A";
  billItems.forEach((item, name) => {
    const lineTotal = item.price * item.quantity;
    message += `${name} x${item.quantity} - PKR ${lineTotal}%0A`;
  });
  const total = grandTotalEl.textContent.replace("PKR ", "");
  message += `%0AGrand Total: PKR ${total}`;
  const url = `https://wa.me/923135964444?text=${message}`;
  window.open(url, "_blank");
});

const printBtn = document.getElementById("printBtn");
printBtn.addEventListener("click", () => window.print());

renderDate();
renderBill();
