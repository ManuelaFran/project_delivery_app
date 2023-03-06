// storageKey -> Chave do armazenamento local que você deseja salvar o objeto
// objectToSave -> Objeto que você deseja salvar no armazenamento local
const saveLocalStorage = (storageKey, objectToSave) => {
  const newObject = JSON.stringify(objectToSave);
  if (localStorage.getItem(storageKey) === null) {
    // Se a chave não existir, crie um objeto
    localStorage.setItem(storageKey, newObject);
  } else {
    // Se a chave existir, crie um novo objeto
    localStorage.setItem(storageKey, newObject);
  }
};

export default saveLocalStorage;
