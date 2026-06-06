# API Series — SPA con Angular 17

Aplicación de página única (**SPA**) desarrollada con **Angular 17** que consume una API
de series y muestra su información. Realizada como examen del segundo trimestre de la
asignatura DWEC (Desarrollo Web en Entorno Cliente), del ciclo de Desarrollo de
Aplicaciones Web (DAW).

> Proyecto de aprendizaje. Lo mantengo público como muestra de mi trabajo con Angular y
> el consumo de APIs REST desde el frontend.

## Qué hace

Una SPA que se conecta a una **API de series** mediante peticiones HTTP, recupera los
datos y los presenta al usuario a través de varias páginas, con navegación entre ellas
sin recargar el navegador.

## Qué demuestra

- Desarrollo de una **SPA con Angular 17** y **TypeScript**.
- **Consumo de una API REST** desde servicios Angular (peticiones HTTP).
- **Modelado de los datos** de la API mediante interfaces/modelos.
- **Enrutado** entre páginas (`app.routes.ts`).
- Arquitectura separada por responsabilidades (servicios, modelos, páginas y layout).
- Flujo de **integración/despliegue con GitHub Actions** (`.github/workflows`).

## Estructura del proyecto

| Carpeta / archivo | Responsabilidad |
|-------------------|-----------------|
| `services/` | Conexión con la API (peticiones HTTP para obtener las series) |
| `models/` | Modelos/interfaces que describen los datos de la API |
| `pages/` | Vistas o pantallas de la aplicación |
| `layout/` | Estructura común de la interfaz (cabecera, navegación, etc.) |
| `app.routes.ts` | Definición de las rutas y la navegación |
| `app.config.ts` | Configuración de la aplicación |
| `app.ts` / `app.html` / `app.css` | Componente raíz de la aplicación |

## Tecnologías

- Angular 17
- TypeScript
- HTML5 y CSS3
- Angular CLI
- GitHub Actions (CI/CD)

## Requisitos

- [Node.js](https://nodejs.org/) (versión LTS recomendada)
- Angular CLI: `npm install -g @angular/cli`


---

Autor: **Aitor Serrano** · [github.com/Aitorser](https://github.com/Aitorser)
