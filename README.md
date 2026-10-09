# Proyecto CI/CD: Hola Mundo con GitHub Actions y Notificaciones en Ntfy

Este proyecto implementa un flujo de Integración Continua (CI) utilizando **GitHub Actions**. Al subir código a la rama `main`, se ejecuta un programa "Hola Mundo" en JavaScript (Node.js) y se envía automáticamente una alerta/notificación al canal público de [ntfy.sh/devops-itla](https://ntfy.sh/devops-itla).

---

## 📁 Estructura del Proyecto

```text
ci-hola-mundo/
├── .github/
│   └── workflows/
│       └── alerta.yml      # Workflow de GitHub Actions
├── index.js                # Programa Hola Mundo en JavaScript
├── package.json            # Metadatos del proyecto y scripts
├── .gitignore              # Archivos ignorados por Git
└── README.md               # Instrucciones del proyecto
```

---

## 🚀 Requisitos Cumplidos

1. **Programa Hola Mundo en JavaScript (`index.js`)**:
   - Programa funcional en Node.js que imprime un mensaje de bienvenida y detalles del entorno de ejecución.
2. **Flujo de GitHub Actions (`.github/workflows/alerta.yml`)**:
   - Se activa con cada evento `push` hacia la rama `main`.
   - Incluye soporte para ejecución manual (`workflow_dispatch`).
   - Descarga el código y ejecuta `node index.js`.
   - Envía una petición `POST` vía `curl` al canal `ntfy.sh/devops-itla` con título, etiquetas y detalles del commit.

---

## 🛠️ Pasos para Subir a GitHub

Abre tu terminal en la carpeta de este proyecto (`ci-hola-mundo`) y ejecuta los siguientes comandos:

```bash
cd /Users/isaaccabrerasilverio/Repositories/ci-hola-mundo

# 1. Inicializar el repositorio Git local
git init

# 2. Agregar los archivos al área de preparación
git add .

# 3. Realizar el primer commit
git commit -m "feat: primer commit con hola mundo y workflow alerta.yml"

# 4. Asegurarse de que la rama principal se llame main
git branch -M main

# 5. Vincular con tu repositorio remoto de GitHub (reemplaza con tu URL)
git remote add origin https://github.com/TU_USUARIO/TU_REPOSITORIO.git

# 6. Subir a la rama main
git push -u origin main
```

---

## 🔔 Verificación de la Notificación

Una vez que realices el `git push origin main`:

1. Ve a la pestaña **Actions** en tu repositorio de GitHub para ver la ejecución del workflow **Alerta CI - Hola Mundo**.
2. Entra en tu navegador a: [https://ntfy.sh/devops-itla](https://ntfy.sh/devops-itla)
3. Verás la notificación en tiempo real con el título, emoji y el hash del commit.
