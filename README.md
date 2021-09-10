## ** Si van a descargar/clonar el proyecto, no olviden primero ejecutar **

# 1era parte de la clase

## Intro

CSR → Client Side render (el cliente renderiza la app)
SSR → Server Side render (el servidor renderiza la app)
→ Ventajas:
→ SEO → (Muy bien solucionado con Next JS!!!)
→ Proteccion de datos

## Instalacion de react a través de create-react-app

Dos maneras: 1) npm install -g create-react-app
→ create-react-app <el-nombre-de-mi-proyecto> 2) npx create-react-app <el-nombre-de-mi-proyecto>
_Opcion FS_ 3) npx create-fullstack-react-app <el-nombre-de-mi-proyecto> (Lean)

CRA (create react app) → Construye de forma automatizada una SPA con React integrado y otras cosas más.
→ Ya viene con:
→ Babel(compilador de ES6+ a ES5 -)
→ Webpack (module bundler)

SPA - Single Page Application, index.html y div#root
Modularizacion inicial, App.js e index.js y package.json (para ver que dependencias vienen instaladas y los SCRIPTS).

2da parte de la clase
Introduccion a Class based components y Functional based components → Seguimos con Functional y en la prox vemos Class

Que es JSX?
→ Diferencia entre componente(JSX) y funcion(JS)
JSX: retorna (return) un MARCADO ("HTML", que en realidad se llama JSX al combinar JS y HTML)
funcion normal: retorna un valor (sea un boolean, una string, un number, una array, un object)

React permite la Composicion (creacion de Componentes que se montan y desmontan)
→ Reusabilidad, Nesting (padre→ hijos), Configuracion

Integrar Bootstrap → con CDN en /public/index.html
