//Nama          : Irfan Thalib A
//No Absen/NIM  : 11/1941720039
//Kelas         : TI-3A
//Test Case     : Mengisi nama dengan huruf saja
/// <reference types="cypress"/>

describe('Insert Name with words', () => {
    it('Visits saucedemo', () => {
      //masuk ke alamat web sauce demo
      cy.visit('https://www.saucedemo.com/')
        //akses ke class username
        cy.get('#user-name.input_error.form_input')
        //menulis suername
        .type('standard_user')
         //akses ke class password
        cy.get('#password.input_error.form_input')
        //metulis password
        .type('secret_sauce')
        //klik tombol login
        cy.contains('Login').click()
        //klik tombol cart
        cy.get('.shopping_cart_link').click()
        //klik tombol checkout
        cy.contains('Checkout').click()
        //akses class first name
        cy.get('#first-name.input_error.form_input')
        //menulis pada first name
        .type('wawan')
        //akses ke class last name
        cy.get('#last-name.input_error.form_input')
        //metulis pada last name
        .type('setiawan')
        //akses class zip code
        cy.get('#postal-code.input_error.form_input')
        //metulis pada class zip code
        .type('11234')
        //klik tombol continue
        cy.contains('Continue').click()
    })
  })