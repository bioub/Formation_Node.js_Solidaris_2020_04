import { Controller } from '@nestjs/common';

@Controller('users')
export class UsersController {
    // Exercice

    // Injecter UserService ici
    // puis créer 5 routes en appelant les méthodes du services :

    // GET /users
    // Retourne la liste des contacts
    // Status 200

    // POST /users
    // Ajoute un nouveau contact
    // Status 201

    // GET /users/:id
    // Retourne le détails d'un contact
    // Status 200 ou 404 si pas de contact correspondant

    // DELETE /users/:id
    // Supprime le contact
    // Status 200 ou 404 si pas de contact correspondant

    // PUT /users/:id
    // Remplace le contact
    // Status 200 ou 404 si pas de contact correspondant
}
