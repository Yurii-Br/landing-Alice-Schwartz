
const MODALWINDOW = document.getElementById("modal");
const BUTTONOPEN = document.getElementById("openModal");
const BUTTONCLOSE = document.getElementById("close");
const BODY = document.body;

BUTTONOPEN.addEventListener("click", function() {
  MODALWINDOW.classList.remove('isHiden');
  MODALWINDOW.classList.add('Hiden');
  BODY.classList.add('noScroll');
});

BUTTONCLOSE.addEventListener("click", function() {
  MODALWINDOW.classList.add('isHiden');
  MODALWINDOW.classList.remove('Hiden');
  BODY.classList.remove('noScroll');
});

  
  // Обработка отправки формы
  document.getElementById("myForm").addEventListener("submit", function(e) {
    e.preventDefault(); // Предотвращаем отправку формы
  
    // Получение значений полей формы
    let name = document.getElementById("name").value;
    let phone = document.getElementById("phone").value;
    let maill = document.getElementById("mail").value;
    let comment = document.getElementById("comment").value;
    
  
    // Вывод значений в консоль (вместо этого можно добавить код для обработки данных)
    console.log("Имя:", name);
    console.log("Номер телефона:", phone);
    console.log("Електронная почта" ,maill)
    console.log("Комментарий:", comment);
   
  
    // Закрытие модального окна
    document.getElementById("modal").classList.add('isHiden');
  });
  