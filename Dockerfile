# Étape 1: Image de construction de l'application
FROM node:23.6.1-alpine3.20 AS build

# Répertoire de travail
WORKDIR /app

# Copie des fichiers de dépendances
COPY package*.json ./

# Installation des dépendances
RUN npm install

# Copie des fichiers source du projet
COPY . .
# Construction de l'application avec Vite
RUN npm run build

# Étape 2: Serveur pour servir l'application en production
FROM nginx:stable-alpine


# Copie les fichiers construits dans le conteneur Nginx
COPY --from=build /app/dist /usr/share/nginx/html

# Copier le fichier de configuration Nginx personnalisé 
COPY nginx.conf /etc/nginx/nginx.conf

# Exposition du port
EXPOSE 80

# Lancer le serveur Nginx
CMD ["nginx", "-g", "daemon off;"]