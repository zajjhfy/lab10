function showTable(tableId) {
    // Скрываем обе таблицы
    document.getElementById("usersTable").style.display = "none";
    document.getElementById("lessonsTable").style.display = "none";
  
    // Отображаем выбранную таблицу
    document.getElementById(tableId).style.display = "table";
  }
  