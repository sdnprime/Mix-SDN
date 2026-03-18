// Dados padrão de produtos
const DEFAULT_PRODUCTS = [
  {
    id: "1",
    name: "ÁGUA DE COCO KERO COCO 200ML",
    category: "Bebidas",
    price: 5.59,
    image:
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663104223350/LzWXktRP6jVCNSYJrQ75bH/agua-coco-YxSw5tdiCvvWUfst6WkH3G.webp",
    description: "Água de coco natural e refrescante",
    nutritionalInfo: {
      Calorias: "45 kcal",
      Proteina: "0.5g",
      Carboidratos: "10g",
      Gorduras: "0g",
      Fibra: "0g",
      Sódio: "250mg",
    },
  },
  {
    id: "2",
    name: "ÁGUA CRYSTAL COM GÁS 500ML",
    category: "Bebidas",
    price: 3.99,
    image:
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663104223350/LzWXktRP6jVCNSYJrQ75bH/agua-mineral-33dqQZgCkHP4JZWT3UnPjG.webp",
    description: "Água mineral com gás",
    nutritionalInfo: {
      Calorias: "0 kcal",
      Proteina: "0g",
      Carboidratos: "0g",
      Gorduras: "0g",
      Fibra: "0g",
      Sódio: "50mg",
    },
  },
  {
    id: "3",
    name: "ÁGUA CRYSTAL SEM GÁS 500ML",
    category: "Bebidas",
    price: 3.99,
    image:
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663104223350/LzWXktRP6jVCNSYJrQ75bH/agua-mineral-33dqQZgCkHP4JZWT3UnPjG.webp",
    description: "Água mineral pura",
    nutritionalInfo: {
      Calorias: "0 kcal",
      Proteina: "0g",
      Carboidratos: "0g",
      Gorduras: "0g",
      Fibra: "0g",
      Sódio: "50mg",
    },
  },
  {
    id: "4",
    name: "BALA MORANGO HALLS 28G",
    category: "Doces",
    price: 2.99,
    image:
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663104223350/LzWXktRP6jVCNSYJrQ75bH/bala-skittles-gQASyatBfnKCFBe5mbJoMm.webp",
    description: "Bala de morango refrescante",
    nutritionalInfo: {
      Calorias: "100 kcal",
      Proteina: "0g",
      Carboidratos: "25g",
      Gorduras: "0g",
      Fibra: "0g",
      Sódio: "20mg",
    },
  },
  {
    id: "5",
    name: "BALA SKITTLES 38G",
    category: "Doces",
    price: 5.99,
    image:
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663104223350/LzWXktRP6jVCNSYJrQ75bH/bala-skittles-gQASyatBfnKCFBe5mbJoMm.webp",
    description: "Balas coloridas e saborosas",
    nutritionalInfo: {
      Calorias: "150 kcal",
      Proteina: "0g",
      Carboidratos: "35g",
      Gorduras: "0g",
      Fibra: "0g",
      Sódio: "10mg",
    },
  },
  {
    id: "6",
    name: "CHOCOLATE KINDER BUENO 43G",
    category: "Doces",
    price: 11.99,
    image:
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663104223350/LzWXktRP6jVCNSYJrQ75bH/chocolate-kinder-XTYTZzStRbA2zSxi5otgyd.webp",
    description: "Chocolate com wafer crocante",
    nutritionalInfo: {
      Calorias: "210 kcal",
      Proteina: "3g",
      Carboidratos: "21g",
      Gorduras: "12g",
      Fibra: "0.5g",
      Sódio: "30mg",
    },
  },
  {
    id: "7",
    name: "REFRIGERANTE COCA COLA ZERO 350ML",
    category: "Bebidas",
    price: 6.99,
    image:
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663104223350/LzWXktRP6jVCNSYJrQ75bH/refrigerante-cola-MCZDWEvsRy9Fs77QV5dBoy.webp",
    description: "Refrigerante sem açúcar",
    nutritionalInfo: {
      Calorias: "0 kcal",
      Proteina: "0g",
      Carboidratos: "0g",
      Gorduras: "0g",
      Fibra: "0g",
      Sódio: "80mg",
    },
  },
  {
    id: "8",
    name: "BISCOITO TRAKINAS MORANGO 126G",
    category: "Doces",
    price: 5.99,
    image:
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663104223350/LzWXktRP6jVCNSYJrQ75bH/bala-skittles-gQASyatBfnKCFBe5mbJoMm.webp",
    description: "Biscoito crocante de morango",
    nutritionalInfo: {
      Calorias: "480 kcal",
      Proteina: "7g",
      Carboidratos: "60g",
      Gorduras: "22g",
      Fibra: "1g",
      Sódio: "400mg",
    },
  },
  {
    id: "9",
    name: "TORCIDA PIMENTA MEXICANA 35G",
    category: "Salgados",
    price: 5.99,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwTN_qrnE2XiTJ7epsZnut2lwcjyV5brlOrw&s",
    description: "Salgadinho Torcida sabor pimenta mexicana",
    nutritionalInfo: {
      Calorias: "480 kcal",
      Proteina: "7g",
      Carboidratos: "60g",
      Gorduras: "22g",
      Fibra: "1g",
      Sódio: "400mg",
    },
  },
  {
    id: "10",
    name: "FANTA GUARANÁ 350ML",
    category: "Bebidas",
    price: 6.5,
    image:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fgkpb.com.br%2Fwp-content%2Fuploads%2F2017%2F06%2Fnova-fanta-guarana-coca-cola-lata-sabor-tradicional.jpg&f=1&nofb=1&ipt=779ee95aff2ae110316d381307142444c84718fb75bd5d15d34a8db0cffcf32b",
    description: "Fanta Guaraná",
    nutritionalInfo: {
      ValorEnergético: "141 kcal",
      Carboidratos: "36g",
      AçúcaresTotais: "36g",
      AçúcaresAdicionados: "36g",
      Sódio: "27mg",
    },
  },
];

// Estado da aplicação
let products = [];
let currentProduct = null;
let editingProductId = null;
let currentCategory = "all";
let searchQuery = "";

// Elementos do DOM
const productsContainer = document.getElementById("productsContainer");
const searchInput = document.getElementById("searchInput");
const categoryBtns = document.querySelectorAll(".category-btn");
const addProductBtn = document.getElementById("addProductBtn");
const productModal = document.getElementById("productModal");
const formModal = document.getElementById("formModal");
const productForm = document.getElementById("productForm");
const formTabs = document.querySelectorAll(".form-tab");
const formTabContents = document.querySelectorAll(".form-tab-content");

// Inicializar aplicação
function init() {
  loadProducts();
  renderProducts();
  setupEventListeners();
}

// Carregar produtos do localStorage ou usar padrão
function loadProducts() {
  const saved = localStorage.getItem("products");
  products = saved
    ? JSON.parse(saved)
    : JSON.parse(JSON.stringify(DEFAULT_PRODUCTS));
}

// Salvar produtos no localStorage
function saveProducts() {
  localStorage.setItem("products", JSON.stringify(products));
}

// Renderizar produtos
function renderProducts() {
  const filtered = filterProducts();
  productsContainer.innerHTML = "";

  if (filtered.length === 0) {
    productsContainer.innerHTML =
      '<p style="grid-column: 1/-1; text-align: center; padding: 2rem; color: #6b7280;">Nenhum produto encontrado</p>';
    return;
  }

  filtered.forEach((product) => {
    const card = createProductCard(product);
    productsContainer.appendChild(card);
  });
}

// Filtrar produtos
function filterProducts() {
  // Pré-processa a busca: remove espaços, acentos e passa para minúsculo
  const normalizedSearch = searchQuery
    .trim()
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");

  return products.filter((product) => {
    const matchCategory =
      currentCategory === "all" || product.category === currentCategory;

    // Função auxiliar para normalizar os campos do produto
    const prepareText = (text) =>
      (text || "")
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "");

    const productName = prepareText(product.name);
    const productCategory = prepareText(product.category);

    const matchSearch =
      productName.includes(normalizedSearch) ||
      productCategory.includes(normalizedSearch);

    return matchCategory && matchSearch;
  });
}

// Criar card de produto
function createProductCard(product) {
  const card = document.createElement("div");
  card.className = "product-card";

  const nutrition = product.nutritionalInfo;

  // 1. Criamos as linhas da tabela dinamicamente
  // Usamos Object.entries para pegar tanto a CHAVE (key) quanto o VALOR (value)
  const nutritionRows = Object.entries(nutrition)
    .map(([key, value]) => {
      // Opcional: Capitalizar a primeira letra da chave para ficar bonito na tela
      const label = key.charAt(0).toUpperCase() + key.slice(1);
      return `<tr><td>${label}</td><td>${value}</td></tr>`;
    })
    .join(""); // Junta o array de strings em uma única string HTML

  card.innerHTML = `
    <div class="card-inner">
        <div class="card-front">
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}" onerror="this.src='data:image/svg+xml,...'">
            </div>
            <div class="product-info">
                <h3 class="product-name">${product.name}</h3>
                <p class="product-category">${product.category}</p>
                <div class="product-footer">
                    <span class="product-price">R$ ${product.price.toFixed(2).replace(".", ",")}</span>
                </div>
            </div>
        </div>

        <div class="card-back">
            <h4>Tabela Nutricional</h4>
            <table class="nutrition-table">
                ${nutritionRows} 
            </table>
        </div>
    </div>
  `;

  return card;
}

// Abrir modal de detalhes do produto
function openProductModal(product) {
  currentProduct = product;
  document.getElementById("modalImage").src = product.image;
  document.getElementById("modalTitle").textContent = product.name;
  document.getElementById("modalCategory").textContent =
    `Categoria: ${product.category}`;
  document.getElementById("modalPrice").textContent =
    `R$ ${product.price.toFixed(2)}`;
  document.getElementById("modalDescription").textContent = product.description;

  // Preencher informações nutricionais
  document.getElementById("modalCalories").textContent =
    product.nutritionalInfo.calories;
  document.getElementById("modalProtein").textContent =
    product.nutritionalInfo.protein;
  document.getElementById("modalCarbs").textContent =
    product.nutritionalInfo.carbs;
  document.getElementById("modalFat").textContent = product.nutritionalInfo.fat;
  document.getElementById("modalFiber").textContent =
    product.nutritionalInfo.fiber;
  document.getElementById("modalSodium").textContent =
    product.nutritionalInfo.sodium;

  productModal.classList.add("active");
}

// Fechar modal de detalhes
function closeProductModal() {
  productModal.classList.remove("active");
  currentProduct = null;
}

// Abrir modal de formulário para novo produto
function openFormModal(product = null) {
  editingProductId = product ? product.id : null;
  document.getElementById("formTitle").textContent = product
    ? "Editar Produto"
    : "Novo Produto";
  document.querySelector(".btn-submit").textContent = product
    ? "Salvar Alterações"
    : "Adicionar Produto";

  if (product) {
    document.getElementById("productName").value = product.name;
    document.getElementById("productCategory").value = product.category;
    document.getElementById("productPrice").value = product.price;
    document.getElementById("productImage").value = product.image;
    document.getElementById("productDescription").value = product.description;
    document.getElementById("productCalories").value =
      product.nutritionalInfo.calories;
    document.getElementById("productProtein").value =
      product.nutritionalInfo.protein;
    document.getElementById("productCarbs").value =
      product.nutritionalInfo.carbs;
    document.getElementById("productFat").value = product.nutritionalInfo.fat;
    document.getElementById("productFiber").value =
      product.nutritionalInfo.fiber;
    document.getElementById("productSodium").value =
      product.nutritionalInfo.sodium;
  } else {
    productForm.reset();
  }

  // Ativar primeira aba
  formTabs.forEach((tab) => tab.classList.remove("active"));
  formTabContents.forEach((content) => content.classList.remove("active"));
  formTabs[0].classList.add("active");
  formTabContents[0].classList.add("active");

  formModal.classList.add("active");
}

// Fechar modal de formulário
function closeFormModal() {
  formModal.classList.remove("active");
  editingProductId = null;
  productForm.reset();
}

// Deletar produto
function deleteProduct() {
  if (!currentProduct) return;

  if (confirm(`Tem certeza que deseja deletar "${currentProduct.name}"?`)) {
    products = products.filter((p) => p.id !== currentProduct.id);
    saveProducts();
    closeProductModal();
    renderProducts();
  }
}

// Configurar event listeners
function setupEventListeners() {
  // Botão adicionar produto
  addProductBtn.addEventListener("click", () => openFormModal());

  // Busca
  searchInput.addEventListener("input", (e) => {
    searchQuery = e.target.value;
    renderProducts();
  });

  // Filtro de categorias
  categoryBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      categoryBtns.forEach((b) => b.classList.remove("active"));
      e.target.classList.add("active");
      currentCategory = e.target.dataset.category;
      renderProducts();
    });
  });

  // Modal de detalhes
  document
    .getElementById("modalCloseBtn")
    .addEventListener("click", closeProductModal);
  document
    .getElementById("closeModalBtn")
    .addEventListener("click", closeProductModal);
  document.getElementById("editProductBtn").addEventListener("click", () => {
    closeProductModal();
    openFormModal(currentProduct);
  });
  document
    .getElementById("deleteProductBtn")
    .addEventListener("click", deleteProduct);

  // Modal de formulário
  document
    .getElementById("formCloseBtn")
    .addEventListener("click", closeFormModal);
  document
    .getElementById("formCancelBtn")
    .addEventListener("click", closeFormModal);

  // Abas do formulário
  formTabs.forEach((tab, index) => {
    tab.addEventListener("click", () => {
      formTabs.forEach((t) => t.classList.remove("active"));
      formTabContents.forEach((c) => c.classList.remove("active"));
      tab.classList.add("active");
      formTabContents[index].classList.add("active");
    });
  });

  // Envio do formulário
  productForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const formData = {
      name: document.getElementById("productName").value,
      category: document.getElementById("productCategory").value,
      price: parseFloat(document.getElementById("productPrice").value),
      image:
        document.getElementById("productImage").value ||
        "https://via.placeholder.com/200",
      description: document.getElementById("productDescription").value,
      nutritionalInfo: {
        calories: document.getElementById("productCalories").value,
        protein: document.getElementById("productProtein").value,
        carbs: document.getElementById("productCarbs").value,
        fat: document.getElementById("productFat").value,
        fiber: document.getElementById("productFiber").value,
        sodium: document.getElementById("productSodium").value,
      },
    };

    if (editingProductId) {
      // Editar produto existente
      const product = products.find((p) => p.id === editingProductId);
      if (product) {
        Object.assign(product, formData);
      }
    } else {
      // Adicionar novo produto
      const newProduct = {
        id: Date.now().toString(),
        ...formData,
      };
      products.push(newProduct);
    }

    saveProducts();
    closeFormModal();
    renderProducts();
  });

  // Fechar modais ao clicar fora
  productModal.addEventListener("click", (e) => {
    if (e.target === productModal) closeProductModal();
  });

  formModal.addEventListener("click", (e) => {
    if (e.target === formModal) closeFormModal();
  });
}

// Iniciar aplicação quando o DOM estiver pronto
document.addEventListener("DOMContentLoaded", init);

productsContainer.addEventListener("click", function (e) {
  // Encontra o card que foi clicado
  const card = e.target.closest(".product-card");

  if (!card) return;

  // Se clicar em algum botão ou link dentro do card, não faz o flip
  if (e.target.closest(".btn-action, button, a")) return;

  // Remove o flip de outros cards (opcional, para fechar os outros ao abrir um novo)
  document.querySelectorAll(".product-card").forEach((c) => {
    if (c !== card) c.classList.remove("is-flipped");
  });

  // Alterna a classe no card clicado
  card.classList.toggle("is-flipped");
});
