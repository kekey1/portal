/**
 * This file uses the Page Object pattern to define the main page for tests
 * https://docs.google.com/presentation/d/1B6manhG0zEXkC-H-tPo2vwU06JhL8w9-XCF9oehXzAQ
 */

'use strict';

var MainPage = function () {
    function MainPage () {
        this.nav = {root: element(by.tagName('header'))};
        this.nav.logoutButton = this.nav.root.element(by.tagName('button'));

        this.acfEntry = {root: element(by.css('.acf-entry'))};
        this.acfEntry.acfSelectEl = this.acfEntry.root.element(by.id('selectAcf'));
        this.acfEntry.acfSelectOptions = this.acfEntry.acfSelectEl.all(by.tagName('option'));
        this.acfEntry.acfNewEl = this.acfEntry.root.element(by.id('newAcf'));
        this.acfEntry.acfNewChk = this.acfEntry.root.element(by.id('addNewAcf'));
        this.acfEntry.acfSubmitBtn = this.acfEntry.root.element(by.id('acfSubmit'));

        this.patientSearch = {root: element(by.css('.patient-search'))};
        this.patientSearch.firstNameEl = this.patientSearch.root.element(by.id('firstName'));
        this.patientSearch.submitBtnEl = this.patientSearch.root.element(by.tagName('button'));

        this.patientReview = {root: element(by.css('.patient-review'))};
        this.patientReview.showDetailsA = this.patientReview.root.all(by.tagName('tfoot')).first().element(by.tagName('a'));
        this.patientReview.queries = this.patientReview.root.all(by.repeater('query in vm.patientQueries'));
        this.patientReview.patientResults = this.patientReview.queries.first().all(by.repeater('patient in query.results'));

        this.acfPatientList = {root: element(by.css('.acf-patient-list'))};
        this.acfPatientList.patients = this.acfPatientList.root.all(by.repeater('patient in vm.patients'));
        this.acfPatientList.showDocumentsA = this.acfPatientList.patients.all(by.tagName('a')).first();
        this.acfPatientList.documents = this.acfPatientList.root.all(by.repeater('doc in patient.documents'));

        this.documentReview = {root: element(by.css('.document-review'))};
        this.documentReview.document = this.documentReview.root.element(by.tagName('pre'));
        this.documentReview.close = this.documentReview.root.element(by.tagName('button'));

        this.organizationStatus = {root: element(by.css('.organization-status'))};
        this.organizationStatus.organizations = this.organizationStatus.root.all(by.repeater('org in vm.organizations'));
    }

    MainPage.prototype.visitPage = function () {
        browser.get('/');
    }

    return MainPage
}()

module.exports = new MainPage();
