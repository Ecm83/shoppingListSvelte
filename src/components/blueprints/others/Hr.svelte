<hr>

<style>

  hr {
    border: none;
    margin-top: 2rem;
    height: .5rem;
    background: linear-gradient(90deg, #ff7f00, #ffcc00, #ff7f00); /* Tonos naranjas */
    background-size: 200% 100%; /* Tamaño del gradiente (200% para que sea más largo) */
    animation: neon 5s linear infinite; /* Duración de la animación de 5 segundos */
  }
  
  @keyframes neon {
    0% {
      background-position: 200% 0; /* Inicia completamente a la derecha */
    }
    100% {
      background-position: -200% 0; /* Termina completamente a la izquierda */
    }
  }
</style>