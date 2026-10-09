// ==========================================
// Programa Hola Mundo en JavaScript (Node.js)
// Tarea DevOps - Integración Continua con GitHub Actions
// ==========================================

function main() {
  const mensaje = "¡Hola, Mundo desde JavaScript (Node.js)! 🚀";
  const fecha = new Date().toISOString();
  
  console.log("==========================================");
  console.log(mensaje);
  console.log(`Fecha de ejecución: ${fecha}`);
  console.log("Entorno de ejecución: GitHub Actions CI");
  console.log("==========================================");
}

main();
