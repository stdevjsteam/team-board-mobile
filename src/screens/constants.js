export const Splash = 'Splash';
export const Registration = 'Registration';
export const ProfileCreation = 'ProfileCreation';
export const News = 'News';
export const Events = 'Events';
export const Benefits = 'Benefits';
export const SingleNews = 'SingleNews';
export const MedicalInsurance = 'MedicalInsurance';
export const Sport = 'Sport';
export const PartnerCompanies = 'PartnerCompanies';
export const SingleEvent = 'SingleEvent';
export const EmployeeDirectory = 'EmployeeDirectory';

export const screens = {
  [Splash]: () => require('./Splash').default,
  [Registration]: () => require('./Registration/screens/Activation').default,
  [ProfileCreation]: () => require('./Registration/screens/ProfileCreation').default,
  [News]: () => require('./News').default,
  [Events]: () => require('./Events').default,
  [Benefits]: () => require('./Benefits').default,
  [SingleNews]: () => require('./News/SingleNews').default,
  [MedicalInsurance]: () => require('./Benefits/screens/MedicalInsurance').default,
  [Sport]: () => require('./Benefits/screens/Sport').default,
  [PartnerCompanies]: () => require('./Benefits/screens/PartnerCompanies').default,
  [SingleEvent]: () => require('./Events/SingleEvent').default,
  [EmployeeDirectory]: () => require('./EmployeeDirectory').default,
} 