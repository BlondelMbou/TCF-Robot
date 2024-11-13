class FormPage {
  e = {
    emailInput: () => cy.get("#email"),
    avatarInput: () => cy.get('input[name="kyc[avatar]"]'),
    nameInput: () => cy.get("#name"),
    firstnameInput: () => cy.get("#firstname"),
    passwordInput: () => cy.get("#password"),
    birthdateInput: () => cy.get("#birthdate"),
    birthPlaceSelect: () => cy.get('select[name="utilisateur[birthPlace]"]'),
    sexeSelect: () => cy.get('select[name="utilisateur[sexe]"]'),

    typeDocumentSelect : () => cy.get('select[name="utilisateur[document]"]'), // Replace with correct selector
  numeroDocumentInput : () => cy.get('input[name="utilisateur[numeroDocument]"]'), // Replace with correct selector

    nationaliteSelect: () => cy.get('select[name="utilisateur[nationalite]"]'),
    phoneNumberInput: () => cy.get("#phoneNumber"),
    langueUsuelleSelect: () =>
      cy.get('select[name="utilisateur[langueUsuelle]"]'),
    faceAvantInput: () => cy.get('input[name="kyc[frontSidePhoto]"]'),
    faceArriereInput: () => cy.get('input[name="kyc[backSidePhoto]"]'),
    motifInscriptionSelect : () => cy.get('select[name="motifQualification"]'),
    submitButton: () => cy.get('button[type="submit"]'),
    
  };

  visit() {
    cy.visit("http://127.0.0.1:5500/index%20copy.html");
  }

  fillEmail(email) {
    this.e.emailInput().type(email);
  }

  uploadAvatar(photo) {
    this.e.avatarInput().attachFile(photo);
  }

  fillName(name) {
    this.e.nameInput().clear().type(name);
  }

  fillFirstname(firstname) {
    this.e.firstnameInput().clear().type(firstname);
  }

  fillPassword(password) {
    this.e.passwordInput().clear().type(password);
  }

  fillBirthdate(birthdate) {
    this.e.birthdateInput().type(birthdate);
  }

  selectBirthPlace(birthPlace) {
    this.e.birthPlaceSelect().select(birthPlace);
  }

  selectSexe(sexe) {
    this.e.sexeSelect().select(sexe);
  }

  selectNationalite(nationalite) {
    this.e.nationaliteSelect().select(nationalite);
  }

  fillPhoneNumber(phoneNumber) {
    this.e.phoneNumberInput().clear().type(phoneNumber);
  }

  selectLangueUsuelle(langueUsuelle) {
    this.e.langueUsuelleSelect().select(langueUsuelle);
  }

  uploadReco(reco) {
    this.e.faceAvantInput().attachFile(reco);
    
  }

  uploadVerso(verso) {
    this.e.faceArriereInput().attachFile(verso);
  }

  selectMotifInscription() {
    this.e.motifInscriptionSelect().select("F");
  }

  selectTypeDocument() {
    this.e.typeDocumentSelect().select("cni");
  }

  fillNumeroDocument(numero) {
    this.e.numeroDocumentInput().clear().type(numero);
  }

  submitForm() {
    this.e.submitButton().click();
  }
}

export default new FormPage();
