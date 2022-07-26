import throttle from 'lodash.throttle';
//*******************Get refs on Element********************************* */
const refs = {
  formEl: document.querySelector('.feedback-form'),
  messageEl: document.querySelector('textarea'),
  emailEl: document.querySelector('input'),
};
//*******************Create object data********************************* */
const STORAGE_KEY = 'feedback-form-state';
const formData = localStorage.getItem(STORAGE_KEY)
  ? JSON.parse(localStorage.getItem(STORAGE_KEY))
  : {};

getlocalStorageData();
//*******************Add listeners********************************* */
refs.emailEl.addEventListener('input', throttle(getInputValues, 500));
refs.messageEl.addEventListener('input', throttle(getInputValues, 500));
refs.formEl.addEventListener('submit', onFormSubmit);
//*******************Get input values and added to formData ********************************* */
function getInputValues(evt) {
  formData[evt.target.name] = evt.target.value;
  // console.log(evt);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function onFormSubmit(evt) {
  evt.preventDefault();
  console.log(evt.target.email.value);
  if (evt.target.email.value === '' || evt.target.message.value === '') {
    alert('You must fill in all  of fields!');
  }
  evt.target.reset();
  localStorage.removeItem(STORAGE_KEY);
}
//*******************Checking local storage ********************************* */
function getlocalStorageData(evt) {
  const savedDatalocalStorage = localStorage.getItem(STORAGE_KEY);
  const parcedSavedData = JSON.parse(savedDatalocalStorage);
  // console.log(parcedSavedData['email']);
  if (!parcedSavedData) {
    return;
  }
  refs.emailEl.value = parcedSavedData['email'] || '';
  refs.messageEl.value = parcedSavedData['message'] || '';
}
