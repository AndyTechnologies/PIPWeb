export const languages = {
    en: 'English',
    es: 'Español',
  };
  
  export const defaultLang = 'es';
  
  export const showDefaultLang = false;

  export const ui = {
    en: {
      'meta.title': 'Picture in Piture Web',
      'meta.desc': 'Watching YouTube videos in Picture in Picture (PIP) mode for free has never been easier! With PIPWeb, you have everything you need for your convenience!',
      'index.search-input.placeholder': 'The URL of the YouTube video...',
      'pip.no-avaiable': 'Your browser does not support the `Picture In Picture API`',
      
      'error.message.2': 'The request contains an invalid parameter value (video ID that does not contain 11 characters, or contains invalid characters, such as exclamation marks or asterisks)',
      'error.message.5': 'The requested content cannot be played in an HTML5 player, or another HTML5 player-related error occurred.',
      'error.message.100': 'The requested video was not found. This occurs if a video has been deleted (for any reason) or marked as private.',
      'error.message.101_150': 'The owner of the requested video does not allow it to be played in embedded players.',
      'error.unknown': 'Unknown Error',
      'warn.auto-play': 'Autoplay of the video has been blocked.',
      'warn.popup': 'Error trying to create a popup window.',
    },
    es: {
      'meta.title': 'Imagen dentro de Imagen (PIP) Web',
      'meta.desc': 'Ver vídeos de Youtube en modo Picture in Picture (PIP) de forma gratuita nunca fue tan fácil y sencillo! Con PIPWeb tienes todo lo que necesitas para tu comodidad!',
      'index.search-input.placeholder': 'La URL del vídeo de youtube...',
      'pip.no-avaiable': 'Tú navegador no soporta la `Picture In Picture API`',
      
      'error.message.2': 'La solicitud contiene un valor de parámetro no válido (ID de video que no contiene 11 caracteres, o que contiene caracteres no válidos, como signos de exclamación o asteriscos)',
      'error.message.5': 'El contenido solicitado no se puede reproducir en un reproductor HTML5, o se produjo otro error relacionado con el reproductor HTML5.',
      'error.message.100': 'No se encontró el video solicitado. Esto sucede si se eliminó un video (por cualquier motivo) o si se marcó como privado.',
      'error.message.101_150': 'El propietario del video solicitado no permite su reproducción en reproductores insertados.',
      'error.unknown': 'Error desconocido',
      'warn.auto-play': 'La reproducción automática del video ha sido bloqueada.',
      'warn.popup': 'Error al intentar crear una ventana emergente.',
    },
  } as const;