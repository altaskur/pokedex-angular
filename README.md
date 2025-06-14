# 📘 Pokédex Angular

Este proyecto es una Pokédex desarrollada con [Angular](https://angular.io/) (v19.2.5) como práctica de diseño,
estructura de componentes y despliegue en GitHub Pages.

🔗 **Ver app en producción**:
👉 [https://altaskur.live/pokedex-angular/](https://altaskur.live/pokedex-angular/)



---

## Funcionabilidades

al mantener unos segundos el botón de encendido, se emitira un sonido, ademas de que cambia el brillo de la pantalla
la luz principal se iluminara al son de sonido, y las luces de estado pasarán de rojo -> amarillo -> verde mientras
tarde en ejecutarse este estado.

una vez se encienda miraremos si el navegador tiene guardado algun pokemon, sino los descargará y los mostrará.

---

## 🚀 Cómo iniciar en local

Lanza el servidor de desarrollo con:

```bash
ng serve
```

Abre tu navegador en `http://localhost:4200/`. La aplicación se recargará automáticamente al modificar cualquier archivo
fuente.

---

## ⚙️ Comandos útiles

### 🛠️ Generar un nuevo componente

```bash
ng generate component nombre-del-componente
```

Puedes ver todas las opciones disponibles con:

```bash
ng generate --help
```

### 🧱 Build para producción

```bash
ng build --configuration production --base-href "/pokedex-angular/"
```

Los archivos generados se guardarán en `dist/pokedex/browser`, listos para ser desplegados en GitHub Pages.

---

## ✅ Tests

### Ejecutar tests unitarios (Karma):

```bash
ng test
```

### Ejecutar tests end-to-end (e2e):

```bash
ng e2e
```

> Angular no incluye framework de e2e por defecto. Puedes integrar uno como [Cypress](https://www.cypress.io/)
> o [Playwright](https://playwright.dev/) según tus necesidades.

---

## 📚 Recursos adicionales

* [Documentación oficial de Angular CLI](https://angular.dev/tools/cli)
* [Guía rápida de Angular en español](https://angular.lat/start)
