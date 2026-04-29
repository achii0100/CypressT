describe('Registration Case', () => {
  it('Registration', () => {
    cy.visit('http://automationexercise.com');
    cy.contains("Home").should("be.visible");
    cy.get('[href="/login"]').click();
    cy.contains("New User Signup!").should("be.visible");
    cy.get('[data-qa="signup-name"]').type("testu1");
    cy.get('[data-qa="signup-email"]').type("testu123+4@gmail.com");
    cy.get('[data-qa="signup-button"]').click();
    cy.contains("Enter Account Information").should("be.visible");
    cy.get('#id_gender1').click();
    cy.get('[data-qa="password"]').type("test555");
    cy.get('[data-qa="days"]').select(4);
    cy.get('[data-qa="months"]').select(5);
    cy.get('[data-qa="years"]').select("1995");
    cy.get('[name="newsletter"]').click();
    cy.get('[name="optin"]').click();
    cy.get('[data-qa="first_name"]').type("testerus");
    cy.get('[data-qa="last_name"]').type("testeres");
    cy.get('[data-qa="company"]').type("ttest");
    cy.get('[data-qa="address"]').type("btest");
    cy.get('[data-qa="address2"]').type("ctest");
    cy.get('[data-qa="country"]').select("Israel");
    cy.get('[data-qa="state"]').type("Jerusalem ");
    cy.get('[data-qa="city"]').type("Tel Aviv-Yafo");
    cy.get('[data-qa="zipcode"]').type("5557");
    cy.get('[data-qa="mobile_number"]').type("5735009712");
    cy.get('[data-qa="create-account"]').click();
    cy.contains("Account Created!").should("be.visible");
    cy.get('[data-qa="continue-button"]').click();
    cy.contains("Logged in as testu1").should("be.visible");
    cy.get('[href="/delete_account"]').click();
    cy.contains("Account Deleted!").should("be.visible");
    cy.get('[data-qa="continue-button"]').click();
  })
})