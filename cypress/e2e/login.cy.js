describe('Проверка авторизации', function () {

    it('Верный логин и верный пароль', function () {
       cy.visit('https://login.qa.studio/'); // Зашли на сайт
       cy.get('#mail').type('german@dolnikov.ru'); // Ввели верный логин
       cy.get('#pass').type('iLoveqastudio1'); // Ввели верный пароль
       cy.get('#loginButton').click(); // Нажали войти
       cy.get('#messageHeader').should('be.visible'); // Текст виден
       cy.get('#messageHeader').contains('Авторизация прошла успешно'); // Проверка, что после авторизации виден текст
       cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть крестик и он видел пользователю 
    })

      it('Восстановление пароля', function () {
        cy.visit('https://login.qa.studio/'); // Зашли на сайт
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // Проверили цвет кнопки восстановления пароля
        cy.get('#forgotEmailButton').click(); // Нажали на кнопку восстановления пароля
        cy.get('#mailForgot').type('german@dolnikov.ru'); // Ввели логин 
        cy.get('#restoreEmailButton').click(); // Нажали на кнопку получения кода
        cy.get('#messageHeader').should('be.visible'); // Текст виден
        cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail'); //  Проверка, что после отправки кода виден текст
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть крестик и он видел пользователю 
    })

      it('Верный логин и неверный пароль', function () {
        cy.visit('https://login.qa.studio/'); // Зашли на сайт
        cy.get('#mail').type('german@dolnikov.ru'); // Ввели верный логин 
        cy.get('#pass').type('iLoveqastudio7'); //Ввели неверный пароль
        cy.get('#loginButton').click(); // Нажали войти
        cy.get('#messageHeader').should('be.visible'); // Текст виден пользователю 
        cy.get('#messageHeader').contains('Такого логина или пароля нет'); // Проверили, что после авторизации виден текст 
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть крестик и он виден пользователю
    })

      it('Неверный логин и верный пароль', function () {
        cy.visit('https://login.qa.studio/'); // Зашли на сайт
        cy.get('#mail').type('boris@dolnikov.ru'); // Ввели неверный логин 
        cy.get('#pass').type('iLoveqastudio1'); //Ввели верный пароль
        cy.get('#loginButton').click(); // Нажали войти
        cy.get('#messageHeader').should('be.visible'); // Текст виден пользователю
        cy.get('#messageHeader').contains('Такого логина или пароля нет'); // Проверили, что после авторизации виден текст  
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть крестик и он виден пользователю
    })

      it('Валидация на наличие @', function () {
        cy.visit('https://login.qa.studio/'); // Зашли на сайт
        cy.get('#mail').type('germandolnikov.ru'); // Ввели логин без @
        cy.get('#pass').type('iLoveqastudio1'); // Ввели верный пароль
        cy.get('#loginButton').click(); // Нажали войти
        cy.get('#messageHeader').should('be.visible'); // Текст виден пользователю 
        cy.get('#messageHeader').contains('Нужно исправить проблему валидации'); // Проверили, что виден текст ошибки
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть крестик и он виден пользователю
   })
      it('Приведение логина к строчным буквам', function () {
        cy.visit('https://login.qa.studio/'); // Зашли на сайт
        cy.get('#mail').type('GerMan@Dolnikov.ru'); // Ввели логин с разным регистром
        cy.get('#pass').type('iLoveqastudio1'); // Ввели верный пароль
        cy.get('#loginButton').click(); // Нажали войти
        cy.get('#messageHeader').should('be.visible'); // Текст виден
        cy.get('#messageHeader').contains('Авторизация прошла успешно'); // Проверка, что после авторизации виден текст
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть крестик и он видел пользователю 
    })
})
