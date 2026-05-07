let user

describe('reg-logIn', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  before(() => {
    cy.fixture('userData').then((info) => {
      const random = Date.now();
      user = {
        name: info.name + random,
        email: info.email + random + '@gmail.com',
        pass: info.pass + random
      }
    })
  })
  it('Reg', () => {
    cy.fixture('infoIn').then((det)=>{

    cy.contains("Home").should("be.visible");
    cy.get('[href="/login"]').click();
    cy.contains("New User Signup!").should("be.visible");
    cy.get('[data-qa="signup-name"]').type(user.name);
    cy.get('[data-qa="signup-email"]').type(user.email);
    cy.get('[data-qa="signup-button"]').click();
    cy.contains("Enter Account Information").should("be.visible");
    cy.get('#id_gender1').click();
    cy.get('[data-qa="password"]').type(user.pass);
    cy.get('[data-qa="days"]').select(4);
    cy.get('[data-qa="months"]').select(5);
    cy.get('[data-qa="years"]').select("1995");
    cy.get('[name="newsletter"]').click();
    cy.get('[name="optin"]').click();
    cy.get('[data-qa="country"]').select("Israel");
    cy.regDet(det)
    cy.get('[data-qa="create-account"]').click();
    cy.contains("Account Created!").should("be.visible");
    })
  })


  it('corLogin', () => {
    cy.contains("Home").should("be.visible");
    cy.logIn(user.email, user.pass);
    cy.contains('Logged in as ' + user.name).should("be.visible");
    cy.get('[href="/delete_account"]').click();
    cy.contains("Account Deleted!").should("be.visible");
    cy.get('[data-qa="continue-button"]').click();
    cy.contains("Home").should("be.visible");
  })


  it('incLogin', () => {
    cy.contains("Home").should("be.visible");
    cy.logIn(user.email, user.pass);
    cy.contains('Your email or password is incorrect!').should("be.visible");
  })
})