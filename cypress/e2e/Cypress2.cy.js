describe('registrationEdit', () => {
  it('Reg', () => {
    cy.visit('https://automationteststore.com')
    cy.contains("Login or register").should("be.visible");
    cy.contains("Login or register").click();
    cy.get('[title="Continue"]').click();
    cy.get('[id="AccountFrm_firstname"]').type("Achii");
    cy.get('[id="AccountFrm_lastname"]').type("Tsiklauri");
    cy.get('[id="AccountFrm_email"]').type("achii0100@gmail.com");
    cy.get('[id="AccountFrm_fax"]').type(4545);
    cy.get('[id="AccountFrm_telephone"]').type(5558899112);
    cy.get('[id="AccountFrm_company"]').type("testpany");
    cy.get('[id="AccountFrm_address_1"]').type("street-test1");
    cy.get('[id="AccountFrm_address_2"]').type("street-test2");
    cy.get('[id="AccountFrm_city"]').type("texico");
    cy.get('[id="AccountFrm_country_id"]').select("Georgia");
    cy.get('[id="AccountFrm_zone_id"]').select("Tbilisi");
    cy.get('[id="AccountFrm_postcode"]').type(5556);
    cy.get('[id="AccountFrm_loginname"]').type("test6");
    cy.get('[id="AccountFrm_password"]').type("test7");
    cy.get('[id="AccountFrm_confirm"]').type("test7");
    cy.get('#AccountFrm_newsletter1').click();
    cy.get('[name="agree"]').click();
    cy.contains('Continue').click();
  })

  it('Login', () => {
    cy.visit('https://automationteststore.com')
    cy.contains("Login or register").should("be.visible");
    cy.contains("Login or register").click();
    cy.logIn("test6","test7")
    cy.contains("My Account").should("be.visible");
  })


  it('Edit Address', () => {
  cy.visit('https://automationteststore.com');
  cy.contains("Login or register").click();
  cy.logIn("test6","test7");
  cy.contains('My Account').should('be.visible');
  cy.get('#maincontainer').contains('Edit account details').click();
  cy.get('#maincontainer').contains('Manage Address Book').click();
  cy.get('[title="Edit"]').click();
  cy.get('[id="AddressFrm_address_1"]').clear();
  cy.get('[id="AddressFrm_address_1"]').type("test4");
  cy.get('[title="Continue"]').click();
  cy.contains('Your address has been successfully updated').should('be.visible');
  });

it('Edit Password', () => {
  cy.visit('https://automationteststore.com');
  cy.contains("Login or register").click();
  cy.logIn("test6","test7");
  cy.contains('My Account').should('be.visible');
  cy.get('#maincontainer').contains('Edit account details').click();
  cy.get('#maincontainer').contains('Change password').click();
  cy.get('[id="PasswordFrm_current_password"]').type("test7");
  cy.get('[id="PasswordFrm_password"]').type("test7");
  cy.get('[id="PasswordFrm_confirm"]').type("test7");
  cy.get('[title="Continue"]').click();
  cy.contains('Success: Your password has been successfully updated.').should('be.visible');
  });
})