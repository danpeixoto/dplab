function selectElement(e) {
  return document.querySelector(e);
}

function selectAllElement(e) {
  return document.querySelectorAll(e);
}

const priceTypes = selectAllElement('.pricing__types > span');
const plans = selectAllElement('.plan');
const questions = selectAllElement('.question');

function handleSwitchToggle() {
  priceTypes.forEach((type) => type.classList.toggle('pricing__type--active'));

  plans.forEach((plan) => {
    plan.classList.toggle('plan--best');
    const planPrice1 = plan.querySelector('.plan__price:nth-child(2)');
    const planPrice2 = plan.querySelector('.plan__price:nth-child(3)');
    planPrice1.classList.toggle('plan__price--hidden');
    planPrice2.classList.toggle('plan__price--hidden');
  });
}

function handleQuestionToggle(e) {
  const question = e.srcElement;
  question.classList.toggle('question--active');
}

questions.forEach((question) => {
  question.addEventListener('click', handleQuestionToggle);
});
