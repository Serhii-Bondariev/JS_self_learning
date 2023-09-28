// URL запиту до API
const apiUrl =
  "https://drinkify.b.goit.study/api/v1/ingredients/64aebb7f82d96cc69e0eb4a5";

// Заголовок запиту
const headers = {
  Accept: "application/json",
};

// Виконуємо GET-запит за допомогою fetch
fetch(apiUrl, { method: "GET", headers: headers })
  .then((response) => {
    // Перевіряємо статус відповіді
    if (response.status === 200) {
      // Парсимо JSON-відповідь
      return response.json();
    } else {
      // Обробка помилки, наприклад, виведення повідомлення про помилку
      throw new Error("Не вдалося отримати дані про інгредієнт");
    }
  })
  .then((data) => {
    // Отримані дані доступні в змінній `data`
    console.log("Дані про інгредієнт:", data);
    // Тут ви можете виконати додаткову обробку даних
  })
  .catch((error) => {
    // Обробка помилок
    console.error("Помилка:", error);
  });
