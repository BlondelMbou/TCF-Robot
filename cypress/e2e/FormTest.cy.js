/// <reference types="cypress" />

import FormPage from '../pages/FormPage';
import 'cypress-file-upload';

describe('Form Automation with Cypress and POM', function() {  
  beforeEach(() => {
    cy.fixture('userData').as('userData');
    FormPage.visit();
  });
    
 

  it('should fill and submit the form', () => { 
    cy.get('@userData').then((data) => {
      console.log(data);
      FormPage.fillEmail(data.email);
      FormPage.uploadAvatar(data.photo);
      FormPage.fillName(data.name);
      FormPage.fillFirstname(data.firstname);
      FormPage.fillPassword(data.password);
      FormPage.fillBirthdate(data.birthdate);
      FormPage.selectBirthPlace(data.birthPlace);
      FormPage.selectSexe(data.sexe);
      FormPage.selectMotifInscription(data.motifInscription);
      FormPage.selectTypeDocument(data.typeDocument);
      FormPage.fillNumeroDocument(data.numeroDocument);
      FormPage.selectNationalite(data.nationalite);
      FormPage.fillPhoneNumber(data.phoneNumber);
      FormPage.selectLangueUsuelle(data.langueUsuelle);
      FormPage.uploadReco(data.recto);
      FormPage.uploadVerso(data.verso);
     FormPage.submitForm();
  });
    
  });
});
