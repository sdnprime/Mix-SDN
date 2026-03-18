# Mix Snacks - Catálogo de Produtos

Página estática de catálogo de produtos desenvolvida com **HTML, CSS e JavaScript vanilla**.

## 📋 Funcionalidades

- **Visualização de Produtos**: Grid responsivo com cards mostrando imagem, nome, categoria e preço
- **Detalhes do Produto**: Modal com informações completas incluindo tabela nutricional
- **Busca em Tempo Real**: Pesquise por nome ou categoria
- **Filtro por Categoria**: Abas para filtrar produtos por categoria
- **Gerenciamento de Produtos**:
  - ✅ Adicionar novos produtos
  - ✅ Editar produtos existentes
  - ✅ Deletar produtos
- **Persistência de Dados**: Produtos salvos em localStorage
- **Design Responsivo**: Funciona em mobile, tablet e desktop

## 🎨 Design

- Paleta de cores profissional (azul #1e3a8a, laranja #f97316)
- Interface moderna com transições suaves
- Tipografia clara e legível
- Imagens de produtos de alta qualidade

## 📁 Estrutura de Arquivos

```
catalogo-mix-snacks-html/
├── index.html          # Estrutura HTML
├── styles.css          # Estilos CSS
├── script.js           # Lógica JavaScript
└── README.md           # Este arquivo
```

## 🚀 Como Usar

### Opção 1: Abrir diretamente no navegador

1. Abra o arquivo `index.html` no seu navegador

### Opção 2: Usar um servidor local

```bash
# Python 3
python3 -m http.server 8000

# Node.js (com http-server)
npx http-server

# PHP
php -S localhost:8000
```

Acesse `http://localhost:8000` no navegador.

## 📦 Produtos Padrão

A página vem com 8 produtos pré-carregados:

- Água de Coco Kero Coco 200ml
- Água Crystal com Gás 500ml
- Água Crystal sem Gás 500ml
- Bala Morango Halls 28g
- Bala Skittles 38g
- Chocolate Kinder Bueno 43g
- Refrigerante Coca Cola Zero 350ml
- Biscoito Trakinas Morango 126g

## 💾 Armazenamento de Dados

Os produtos são salvos automaticamente no **localStorage** do navegador. Seus dados persistem mesmo após fechar e reabrir a página.

Para limpar os dados:

```javascript
localStorage.removeItem("products");
```

## 🎯 Recursos Principais

### Modal de Detalhes

Clique em qualquer produto para ver:

- Imagem ampliada
- Descrição completa
- Preço
- Informações nutricionais (calorias, proteína, carboidratos, gordura, fibra, sódio)
- Botões para editar ou deletar

### Painel de Administração

Adicione novos produtos com:

- Nome, categoria, preço
- URL da imagem
- Descrição
- Dados nutricionais completos

### Busca e Filtros

- Digite na barra de pesquisa para filtrar por nome ou categoria
- Use as abas para filtrar por categoria específica
- Combine busca e filtros para resultados precisos

## 🔧 Personalização

### Alterar Cores

Edite as variáveis CSS em `styles.css`:

```css
:root {
  --primary-color: #1e3a8a; /* Azul principal */
  --secondary-color: #f97316; /* Laranja destaque */
  --text-dark: #1f2937; /* Texto escuro */
  --text-light: #6b7280; /* Texto claro */
  --border-color: #e5e7eb; /* Bordas */
  --bg-light: #f9fafb; /* Fundo claro */
}
```

### Adicionar Categorias

Edite o array de categorias em `script.js` ou adicione diretamente no HTML.

## 📱 Responsividade

A página é totalmente responsiva com breakpoints em:

- **Desktop**: 1280px+
- **Tablet**: 768px - 1279px
- **Mobile**: até 767px

## ⚡ Performance

- Sem dependências externas (vanilla JavaScript)
- Carregamento rápido
- Otimizado para navegadores modernos
- Imagens otimizadas em WebP

## 🌐 Compatibilidade

Funciona em todos os navegadores modernos:

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Opera 76+

## 📝 Licença

Livre para uso comercial e pessoal.

---

**Desenvolvido com HTML, CSS e JavaScript vanilla** ✨
