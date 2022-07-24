import throttle from 'lodash.throttle';
//*******************Get refs on Element********************************* */
const refs = {
  formEl: document.querySelector('.feedback-form'),
  messageEl: document.querySelector('textarea'),
  emailEl: document.querySelector('input'),
};
//*******************Create object data********************************* */
const formData = {};
const STORAGE_KEY = 'feedback-form-state';
getlocalStorageData();
//*******************Add listeners********************************* */
refs.emailEl.addEventListener('input', throttle(getInputValues, 500));

refs.messageEl.addEventListener('input', throttle(getInputValues, 500));
refs.formEl.addEventListener('submit', onFormSubmit);
//*******************Get input values and added to formData ********************************* */
function getInputValues(evt) {
  formData[evt.target.name] = evt.target.value;
  console.log(evt);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}
function onFormSubmit(evt) {
  evt.preventDefault();
  evt.target.reset();
  localStorage.removeItem(STORAGE_KEY);
}
//*******************Checking local storage ********************************* */
function getlocalStorageData(evt) {
  const savedDatalocalStorage = localStorage.getItem(STORAGE_KEY);
  //   console.log(savedDatalocalStorage);
  const parcedSavedData = JSON.parse(savedDatalocalStorage);
  //   console.log(parcedSavedData);
  if (savedDatalocalStorage) {
    refs.emailEl.value = parcedSavedData.email;
  }
  if (savedDatalocalStorage) {
    refs.messageEl.value = parcedSavedData.message;
  }
}
