# 📚 Documentation API - Fullstack App

## 🔗 URL de Base
`http://localhost:5000/api`

## 🚀 Endpoints Disponibles

### 1. Obtenir Tous les Utilisateurs
- **Méthode**: `GET /users`
- **Description**: Récupère la liste de tous les utilisateurs enregistrés
- **Réponse (200 OK)**:
```json
[
  {
    "id": 1,
    "name": "Jean Dupont",
    "email": "jean@exemple.com",
    "created_at": "2025-04-15T10:30:00.000Z"
  }
]
```

### 2. Créer un Utilisateur
- **Méthode**: `POST /users`
- **Corps de la Requête**:
```json
{
  "name": "Nouvel Utilisateur",
  "email": "nouveau@exemple.com"
}
```
- **Réponse (201 Créé)**:
```json
{
  "id": 2,
  "name": "Nouvel Utilisateur",
  "email": "nouveau@exemple.com"
}
```

### 3. Mettre à Jour un Utilisateur
- **Méthode**: `PUT /users/:id`
- **Paramètres**:
  - `id` (requis) - ID de l'utilisateur à modifier
- **Corps de la Requête**:
```json
{
  "name": "Nom Modifié",
  "email": "modifie@exemple.com"
}
```
- **Réponse (200 OK)**:
```json
{
  "message": "Utilisateur mis à jour avec succès"
}
```

### 4. Supprimer un Utilisateur
- **Méthode**: `DELETE /users/:id`
- **Paramètres**:
  - `id` (requis) - ID de l'utilisateur à supprimer
- **Réponse (204 Pas de Contenu)**:
  *(Pas de corps de réponse)*

## 🛠️ Comment Tester

### Avec cURL
```bash
# Obtenir tous les utilisateurs
curl http://localhost:5000/api/users

# Créer un utilisateur
curl -X POST -H "Content-Type: application/json" \
-d '{"name":"Test","email":"test@mail.com"}' \
http://localhost:5000/api/users
```

## 🗄️ Structure de la Base de Données
```sql
CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL UNIQUE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

## ⚠️ Réponses d'Erreur

| Code | Message                  | Description                     |
|------|--------------------------|---------------------------------|
| 400  | "Email déjà existant"    | Email dupliqué                  |
| 404  | "Utilisateur non trouvé" | ID utilisateur invalide         |
| 500  | "Erreur serveur"         | Problème côté serveur           |

