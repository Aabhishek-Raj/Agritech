# ✅ AgriTrade Project To-Do (MERN + GraphQL)

## 🔐 1. Authentication Setup

- [ ] Install backend dependencies:  
  `bcryptjs`, `jsonwebtoken`, `graphql`, `apollo-server-express`, `express`, `mongoose`, `cors`, `dotenv`

- [ ] Create User model with roles: `SELLER`, `BUYER`

- [ ] Define GraphQL types and resolvers for:  
  - `signup(email, password, role)`  
  - `login(email, password)`

- [ ] Create React login/signup pages

- [ ] Store JWT in localStorage

- [ ] Set up Apollo Client with auth middleware


## 📦 2. Product Listing & Management

### 🛠️ Backend

- **Create `Product` model** with the following fields:
  - `name`
  - `price`
  - `quantity`
  - `type` (`RETAIL` / `WHOLESALE`)
  - `category`
  - `seller`
  - `available`

- **GraphQL Operations**:
  - `addProduct`
  - `editProduct`
  - `deleteProduct`
  - `products(type: RETAIL/WHOLESALE)`

### 💻 Frontend

- [ ] Product listing page with type/category filters
- [ ] Seller dashboard:
  - [ ] Add product
  - [ ] Edit product
  - [ ] Delete product


## 🛒 3. Retail Ordering

### 🛠️ Backend

- [ ] Create `Order` model with required fields
- [ ] Define GraphQL operations:
  - `createOrder`
  - `ordersByUser`
  - `ordersBySeller`

### 💻 Frontend

- [ ] Implement “Buy Now” feature
- [ ] Build order history pages for:
  - Buyers
  - Sellers


## 💬 4. Wholesale Bargaining

### 🛠️ Backend

- [ ] Create `Bargain` model with `offers` subdocument
- [ ] Define GraphQL operations:
  - `startBargain`
  - `makeOffer`
  - `acceptOffer`
  - `rejectOffer`
- [ ] Set up GraphQL Subscriptions for real-time offers

### 💻 Frontend

- [ ] Build bargaining chat UI with offer history
- [ ] Create accept/reject interface for sellers


## 🔔 5. Notifications (Optional)

### 🛠️ Backend

- [ ] Implement GraphQL subscriptions:
  - `onNewOffer`
  - `onOrderUpdate`

### 💻 Frontend

- [ ] Show real-time toast notifications using Apollo Client

---

## 🧾 6. Order & Delivery Management

### 🛠️ Backend

- [ ] Extend `Order` model to include `deliveryStatus`

### 💻 Frontend

- [ ] Order tracking interface for buyers
- [ ] Delivery status update interface for sellers


## 🧼 7. Admin Panel (Optional)

### 🛠️ Backend / Frontend

- [ ] Create admin dashboard to monitor:
  - Users
  - Products
  - Transactions
- [ ] Implement dispute resolution and flag misuse features

---

## 📈 Future Enhancements

- [ ] Add payment gateway integration (Stripe or Razorpay)
- [ ] Develop mobile app using React Native
- [ ] Implement geo-based product/location filtering
- [ ] Add reviews and ratings system
- [ ] Build AI-powered price suggestion engine
