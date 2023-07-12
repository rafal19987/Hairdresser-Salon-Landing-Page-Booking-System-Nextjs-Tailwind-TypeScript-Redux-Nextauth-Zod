export type THomePageContentProps = {
  primaryHeader: string;
  secondaryHeader: string;
  primaryAddress: string;
  secondaryAddress: string;
  phoneNumber: string;
};

export type TContactPageContentProps = {
  pageHeadline: string;
  address: {
    placeScreen: string;
    street: string;
    zipCode: string;
  };
  openHoursHeadline: string;
  openHours: {
    workingWeek: string;
    weekend: string;
  };
  employeesHeadline: string;
  emplyees: {
    firstEmployee: TEmployeeInfo;
    secondEmployee: TEmployeeInfo;
  };
  inquiryHeadline: string;
  contactForm: {
    name: TContactFormField;
    phoneNumber: TContactFormField;
    message: TContactFormField;
    sendBtnDescription: string;
  };
};

type TEmployeeInfo = {
  photo: string;
  name: string;
  phoneNumber: string;
};

type TContactFormField = {
  label: string;
  placeholder: string;
};
