import React, { createContext, useContext, useState } from 'react';
import { InicialColumns } from '../components/itemstatus/variables';

const FormContext = createContext();

export const useFormContext = () => useContext(FormContext);

const FormProvider = ({ children }) => {
  const [formData, setFormData] = useState(
    InicialColumns
  );

  const updateFormData = (value) => {

    formData[0].items = [value]

    setFormData(    
      formData
      
    );
  };

  return (
    <FormContext.Provider value={{ formData, updateFormData }}>
      {children}
    </FormContext.Provider>
  );
};

export default FormProvider;
