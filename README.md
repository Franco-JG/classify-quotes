# Breaking Bad Emotion Analyzer 🧪💬

Este proyecto utiliza el modelo [SamLowe/roberta-base-go_emotions](https://huggingface.co/SamLowe/roberta-base-go_emotions) para analizar emociones en citas de la serie *Breaking Bad*. La aplicación consume dos APIs: una para obtener citas aleatorias y otra para analizar las emociones asociadas a cada cita.

---

## 🚀 Funcionalidades

- Obtiene citas aleatorias de *Breaking Bad*.
- Analiza las emociones principales asociadas a cada cita utilizando el modelo base de *RoBERTa*.
- Muestra las citas junto con los 5 principales *tags* emocionales y sus respectivos autores.
- Interfaz amigable con los *tags* estilizados como botones.

---

Puede consultar el despliegue en: [Netlify](https://classify-quotes.netlify.app/)

![quotes](https://github.com/user-attachments/assets/554a2e55-93ec-4733-9171-34f114469b62)


---

## 🛠️ Tecnologías utilizadas

- **Frontend**: React (Vite)
- **Estilizado**: CSS
- **APIs**:
  - Citas: [Breaking Bad Quotes API](https://api.breakingbadquotes.xyz/v1/quotes/)
  - Modelo: [roberta-base-go_emotions en Hugging Face](https://huggingface.co/SamLowe/roberta-base-go_emotions)

---

## ⚙️ Configuración del entorno

1. **Clona el repositorio**:
   ```bash
   git clone <url-del-repo>
   ```

2. **Instala las dependencias**:
   ```bash
   bun install
   ```

3. **Configura la API Key de Hugging Face**:
   - Crea un archivo `.env` en la raíz del proyecto.
   - Agrega tu clave de API de Hugging Face:
     ```plaintext
     VITE_API_KEY=tu_clave_api
     ```

4. **Ejecuta el servidor de desarrollo**:
   ```bash
   bun dev
   ```

---

## 📋 Uso

1. Abre la aplicación en tu navegador en la URL proporcionada (por defecto, `http://localhost:5173`).
2. La página mostrará una lista de citas de *Breaking Bad*.
3. Cada cita incluirá:
   - El nombre del autor.
   - La frase de la cita.
   - Los 5 principales *tags* emocionales asociados con su respectivo *score*.

---
