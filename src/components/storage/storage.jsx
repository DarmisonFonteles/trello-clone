// const { formData, updateFormData } = useFormContext();

//   // Função para atualizar o estado do formulário com base nos dados do localStorage
//   useEffect(() => {
//     const storedFormData = localStorage.getItem('formData');
//     if (storedFormData) {
//       updateFormData(JSON.parse(storedFormData));
//     }
//   }, []); // Este efeito só será executado uma vez, quando o componente for montado

//   // Função para lidar com a alteração de um campo e atualizar o localStorage
//   const handleInputChange = (fieldName, value) => {
//     updateFormData(fieldName, value);
//     localStorage.setItem('formData', JSON.stringify({ ...formData, [fieldName]: value }));
//   };