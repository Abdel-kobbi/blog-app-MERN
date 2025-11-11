# 📝 Blog App Backend (Express + MongoDB + Mongoose)

## 📖 Description
Une application backend simple pour un blog, utilisant **Express.js** et **MongoDB (Mongoose)**.  
Elle permet la **création**, **lecture**, **mise à jour**, et **suppression** (CRUD) des articles de blog.  
L’application intègre une **authentification par token (JWT)** stockée dans une **session**, ainsi que des **middlewares** pour la sécurité, la validation et la journalisation.

---

## 🚀 Fonctionnalités

- 🔐 Authentification par email et mot de passe  
- 🧠 Gestion des tokens JWT stockés en session  
- 📰 CRUD complet des posts de blog  
- 🕵️‍♂️ Middleware de validation et de gestion des erreurs  
- 📅 Timestamps automatiques (createdAt, updatedAt) avec Mongoose  
- 🔍 Requêtes avancées : filtrage et pagination  

---

## 🛠️ Technologies Utilisées

- Node.js  
- Express.js  
- MongoDB  
- Mongoose  
- express-session  
- JSON Web Token (JWT)  
- bcrypt  

---

## ⚙️ Installation

1. **Cloner le projet**
   ```bash
   git clone https://github.com/ton-nom/blog-app.git
   cd blog-app
    ```
2. **Installer les dépendances**
   ```bash
    npm install
    ```
3. **Configurer MongoDB**
   
- Crée une base de données dans MongoDB Atlas ou en local (ex: blogDB)

- Copie la chaîne de connexion dans ton fichier .env :
  ```
  MONGO_URI=mongodb://localhost:27017/blogDB

  JWT_SECRET=jwtSecret

  SESSION_SECRET=secretKey

4. 🧰 Scripts NPM

| Commande      | Description                                      |
| ------------- | ------------------------------------------------ |
| `npm run dev` | Lance le serveur en mode développement (nodemon) |

