
(function(){
  const input = document.getElementById('name').focus();
})()

const jobRole = () => {
  const select = document.getElementById('title');
  const fieldset = document.querySelector('fieldset');
  let input;
  select.addEventListener('change', function(e){
    let result = e.target.value;
    input = fieldset.querySelectorAll('input').length;
    if(result === 'other'){
      return select.insertAdjacentHTML('afterend', '<input type="text" id="other-title" placeholder="Your Job Role"></input>')
    }
    if(result !== 'other' && input > 2){
      return fieldset.removeChild(fieldset.lastChild)
    }
  })
}
jobRole();

const tShirt = () => {
  const tDesign = document.getElementById('design');
  const color = document.getElementById('color');
  const container = document.getElementById('colors-js-puns');
  let arr = [...color.querySelectorAll('option')];
  container.style.display = 'none';

  tDesign.addEventListener('change', function(e){
    const theme = e.target.value;
    while(color.length){
      color.remove(0)
    }
    switch(theme){
      case 'js puns':
        arr.forEach((c,i) => {if(i < 3) color.add(c)});
        container.style.display = 'block'
      break;
      case 'heart js':
        arr.forEach((c,i) => {if(i > 2) color.add(c)});
        container.style.display = 'block'
      break;
      default:
        container.style.display = 'none'
    }
  })
}
tShirt()

const activities = () => {
  const act = document.querySelector('fieldset.activities');
  const label = [...act.querySelectorAll('label')];
  const text = document.createElement('p');
  act.appendChild(text);
  let total = 0;
    const scheduleCheck = (a, check) => {
      if(check){
        label[a].childNodes[0].setAttribute('disabled', 'disabled');
        label[a].style.textDecoration = 'line-through'
    } else if(!check){
      label[a].childNodes[0].removeAttribute('disabled');
      label[a].style.textDecoration = 'none'
    }
}
  act.addEventListener('change', function(e){
    const checkBoxValue = e.target;
    const courseCost = parseInt(checkBoxValue.parentNode.textContent.match(/(\d{3})/g));
    const appointmentTime = parseInt(checkBoxValue.parentNode.textContent.match(/\d{1}/g));
    const workShops = checkBoxValue.name;
     if(checkBoxValue.checked){
      total = total + courseCost;
    }
    else {
      total = total - courseCost;
    }
    label.forEach((c,i) => {
      if(c.childNodes[0].checked && i === 1){scheduleCheck(3,true)} else if(!c.childNodes[0].checked && i === 1){scheduleCheck(3,false)};
      if(c.childNodes[0].checked && i === 2){scheduleCheck(4,true)} else if(!c.childNodes[0].checked && i === 2){scheduleCheck(4,false)};
      if(c.childNodes[0].checked && i === 3){scheduleCheck(1,true)} else if(!c.childNodes[0].checked && i === 3){scheduleCheck(1,false)};
      if(c.childNodes[0].checked && i === 4){scheduleCheck(2,true)} else if(!c.childNodes[0].checked && i === 4){scheduleCheck(2,false)};
    })
    const price = (total !== 0) ? `Total: $${total}` : '';
    text.innerHTML = price;
  })
}
activities();

const paymentInfo = () => {
  const field = document.querySelectorAll('fieldset')[3];
  const payment = document.getElementById('payment');
  const creditCard = document.getElementById('credit-card');
  const paragraphs = field.querySelectorAll('div');
  paragraphs.forEach(c => c.style.display = 'none')
  payment.addEventListener('change', function(e){
    const paymentType = e.target.value;
    paragraphs.forEach((c,i) => {
      c.style.display = 'none';
      if(paymentType === 'credit card'){(i < 4) ? c.style.display = 'block' : c.style.display = 'none'};
      if(paymentType === 'paypal'){(i === 4) ? c.style.display = 'block' : c.style.display = 'none'};
      if(paymentType === 'bitcoin'){(i === 5) ? c.style.display = 'block' : c.style.display = 'none'}
    })
  }
)}
paymentInfo()

const validation = () => {
  const name = document.getElementById('name');
  const email = document.getElementById('mail').value;
  const checkbox = document.querySelector('fieldset.activities').querySelectorAll('input');
  const cardNumber = document.getElementById('cc-num').value;
  const zipCode = document.getElementById('zip').value;
  const cvv = document.getElementById('cvv').value;
  const errorMessage = (input) => {
    input.style.border = '3px solid red'
    input.placeholder = 'this field is required'
  }
}
validation()
