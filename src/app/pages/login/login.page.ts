import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

interface LoginResponse {
  success: boolean;
  message: string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  usuario = {
    username: '',
    password: '',
  };

  error: string | null = null; // Variable para almacenar el mensaje de error

  constructor(private router: Router, private http: HttpClient) {}

  authenticate() {
    this.error = null; // Reiniciar el mensaje de error antes de hacer la solicitud

    const data = {
      username: this.usuario.username,
      password: this.usuario.password,
    };

    this.http.post<LoginResponse>('http://localhost:3004/login', data).subscribe(
      (response) => {
        console.log('Respuesta del servidor:', response);
        if (response.success) {
          console.log('Inicio de sesión con éxito');
          // Aquí puedes redirigir al usuario a la página de inicio de sesión exitosa o mostrar un mensaje.
          this.router.navigate(['/plantas']);
        } else {
          console.log('Usuario y/o contraseña incorrecta');
          this.error = 'Usuario y/o contraseña incorrecta'; // Establecer el mensaje de error en caso de error de autenticación
        }
      },
      (error) => {
        console.error('Error en la solicitud:', error);
        this.error = 'Error en la solicitud, por favor inténtalo de nuevo.'; // Establecer el mensaje de error en caso de error de la solicitud
      }
    );
  }
}
