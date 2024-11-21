# Breaking Bad Emotion Analyzer 🧪💬

Este proyecto utiliza el modelo [SamLowe/roberta-base-go_emotions](https://huggingface.co/SamLowe/roberta-base-go_emotions) para analizar emociones en citas de la serie *Breaking Bad*. La aplicación consume dos APIs: una para obtener citas aleatorias y otra para analizar las emociones asociadas a cada cita.

---

## 🚀 Funcionalidades

- Obtiene citas aleatorias de *Breaking Bad*.
- Analiza las emociones principales asociadas a cada cita utilizando el modelo **GoEmotions**.
- Muestra las citas junto con los 5 principales *tags* emocionales y sus respectivos autores.
- Interfaz amigable con los *tags* estilizados como botones.

---

## 🛠️ Tecnologías utilizadas

- **Frontend**: React (Vite)
- **Estilizado**: CSS
- **APIs**:
  - Citas: [Breaking Bad Quotes API](https://api.breakingbadquotes.xyz/v1/quotes/)
  - Emociones: [GoEmotions en Hugging Face](https://huggingface.co/SamLowe/roberta-base-go_emotions)

---

## 📋 Uso

1. Abre la aplicación en tu navegador en la URL proporcionada (por defecto, `http://localhost:5173`).
2. La página mostrará una lista de citas de *Breaking Bad*.
3. Cada cita incluirá:
   - El nombre del autor.
   - La frase de la cita.
   - Los 5 principales *tags* emocionales asociados.

---
