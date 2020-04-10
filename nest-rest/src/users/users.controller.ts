import { Controller, Get, Post, HttpCode, Body, Param, Res, NotFoundException, Delete, Put } from '@nestjs/common';
import { UserService } from './user.service';
import { UserDto } from './user.model';
import { Response } from 'express';

@Controller('users')
export class UsersController {
  // Exercice

  // Injecter UserService ici
  // puis créer 5 routes en appelant les méthodes du services :
  constructor(private readonly userService: UserService) {}

  // GET /users
  // Retourne la liste des contacts
  // Status 200
  @Get()
  list() {
    return this.userService.find();
  }

  // POST /users
  // Ajoute un nouveau contact
  // Status 201
  @Post()
  @HttpCode(201)
  create(@Body() body: UserDto) {
    return this.userService.create(body);
  }

  // GET /users/:id
  // Retourne le détails d'un contact
  // Status 200 ou 404 si pas de contact correspondant
  @Get(':id')
  async show(@Param('id') id: string) {
    // Keep thin controllers and fat models
    // SOLID :
    // S -> Single Responsability
    const user = await this.userService.findById(id);

    if (!user) {
      throw new NotFoundException('User not found');
    }

    return user;
  }

  // DELETE /users/:id
  // Supprime le contact
  // Status 200 ou 404 si pas de contact correspondant
  @Delete(':id')
  async delete(@Param('id') id: string) {
    const user = await this.userService.findByIdAndDelete(id);

    if (!user) {
      throw new NotFoundException('User not found');
    }

    return user;
  }

  // PUT /users/:id
  // Remplace le contact
  // Status 200 ou 404 si pas de contact correspondant
  @Put(':id')
  async replace(@Param('id') id: string, @Body() body: UserDto) {
    const user = await this.userService.findByIdAndUpdate(id, body);

    if (!user) {
      throw new NotFoundException('User not found');
    }

    return user;
  }
}


// userService.create
// create try {}
// main() try{ create } catch(err){ return {error: 'NotFound} }
