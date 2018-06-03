
(function(){
  const input = document.querySelector('#name').focus();
})()

const jobRole = () => {
  const select = document.getElementById('title');
  const fieldset = document.querySelector('fieldset');
  const input = document.getElementById('other-title');
  input.style.display = 'none';

  select.addEventListener('change', function(){
    if(select.value === 'other'){
      input.style.display = 'block'
    }
    else {
      input.style.display = 'none'
    }
  })
}
jobRole();

const tShirt = () => {
  const tDesign = document.getElementById('design');
  const container = document.getElementById('colors-js-puns');
  const color = document.getElementById('color');
  let arr = [...color.querySelectorAll('option')];
  container.style.display = 'none';


  tDesign.addEventListener('change', function(e){
    const theme = e.target.value;
    while(color.length){
      color.remove(0)
    }

    switch(theme){
      case 'js puns':
        arr.map((c,i) => {
          let colorValue = document.createElement('option');
          colorValue.text = c.value;

          if(i < 3) color.add(colorValue);
        });
        container.style.display = 'block'
      break;

      case 'heart js':
        arr.map((c,i) => {
          let colorValue = document.createElement('option');
          colorValue.text = c.value;

          if(i > 2) color.add(colorValue)
        });
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
  const email = document.getElementById('mail');
  const shirtInfo = document.getElementById('design');
  const labels = document.querySelectorAll('label');
  const legends = document.querySelectorAll('legend');
  const fieldCheck = document.querySelector('fieldset.activities');
  const checkBox = [...document.querySelector('fieldset.activities').querySelectorAll('input')];
  const selectPayment = document.getElementById('payment');
  const cardNumber = document.getElementById('cc-num');
  const zipCode = document.getElementById('zip');
  const cvv = document.getElementById('cvv');
  const button = document.querySelector('button');
  let error = document.createElement('p');
  let tShirtError = error.cloneNode(true);
  let emailError = tShirtError.cloneNode(true);
  labels[1].appendChild(emailError);
  emailError.style.color = 'red';
  tShirtError.style.color = 'red';
  error.style.color = 'red';
  let checkValue = [];
  let state;


    const errorMessage = (a, b) => {
      if(a){
      b.style.border = '3px solid red';
      b.placeholder = 'this field is required';
    } else {
      b.style.border = '2px solid #c1deeb';
      b.placeholder = '';
      }
    }

    const nameCheck = () => {
      if(name.value === ''){
        errorMessage(true, name);
        return false
      }
      else {
      errorMessage(false, name);
      return true
    }
  }

    const emailCheck = () => {
      const value = email.value;

      if(value === ''){
          emailError.innerHTML = 'there seems to be no text in the email field';
          errorMessage(true, email);
          return false
        }
      else if(value.search(/\S+@\S+\.\S+/) == -1){
          emailError.innerHTML = 'awesome im reading some text but email is not complete yet';
          errorMessage(true, email);
          return false
        }
      else {
        emailError.innerHTML = '';
        errorMessage(false, email);
        return true
      }
    }

  mail.addEventListener('keyup', emailCheck);

    const shirtCheck = () => {
        if(shirtInfo.selectedIndex === 0){
          legends[1].appendChild(tShirtError);
          tShirtError.innerHTML = 'please select a design';
          return false
    }
      else {
        tShirtError.innerHTML = '';
        return true
    }
  }

    const activityCheck = () => {
      for(let i = 0; i < checkBox.length; i++){
        if(!checkBox[i].checked){
          legends[2].appendChild(error);
          error.innerHTML = 'please pick atleast one from this section';
          }
          else if(checkBox[i].checked == true){
            return error.innerHTML = '';
          }
        }
      }

      const activityValidation = (fn) => {
        fn();
        return (error.innerHTML === '') ? true : false;
      }

      const cardNumberCheck = () => {
        const digits = cardNumber.value.length;
        const digitCheck = isNaN(cardNumber.value);

        if(selectPayment.value === 'credit card'){
          if((digits > 12 && digits < 17) && (digitCheck === false)){
            cardNumber.setAttribute('required', false);
            cardNumber.style.border = '2px solid #c1deeb';
            return true
          }
          else{
            cardNumber.setAttribute('required',true)
            cardNumber.style.border = '2px solid red';
          }
        }
      }

      const zipCodeCheck = () => {
        const digitCheck = isNaN(zipCode.value);

        if((zipCode.value.length === 5) && (digitCheck === false)){
          zipCode.style.border = '2px solid #c1deeb';
          return true
        }
        else {
          zipCode.style.border = '2px solid red';
          return false
        }
      }

      const cvvCheck = () => {
        const digitCheck = isNaN(cvv.value);

        if((cvv.value.length === 3) && (digitCheck === false)){
          cvv.style.border = '2px solid #c1deeb';
          return true
        }
        else {
          cvv.style.border = '2px solid red';
          return false
        }
      }

      const checkSelectedPayment = () => {
        if(selectPayment.value === 'select_method'){
          selectPayment.style.border = '2px solid red';
          return false
        } else {
          selectPayment.style.border = '1px solid rgb(166, 166, 166)';
          return true
        }
      }

    let splicedArray = () => {

        checkValue.push(
        nameCheck(),
        emailCheck(),
        shirtCheck(),
        activityValidation(activityCheck),
        checkSelectedPayment(),
        cardNumberCheck(),
        zipCodeCheck(),
        cvvCheck()
        );

        if(selectPayment.value === 'select_method'){
          checkValue.splice(5,8)
        } else {
          checkValue.splice(4);
          checkValue.push(
            cardNumberCheck(),
            zipCodeCheck(),
            cvvCheck()
          )
        }

        if((selectPayment.value === 'bitcoin') || (selectPayment.value === 'paypal')){
            checkValue.splice(4,7);
            checkValue.push(true)
        }

      return function(){
        while(checkValue.length){
          checkValue.splice(0,7)
        }
      }
    }

    const truth = (arr) => {
      return arr === true;
    }


  button.addEventListener('click', function(e){
    splicedArray();
    state = checkValue.every(truth);
    splicedArray()();
    if(state === false){
      e.preventDefault();
    } else {
      return true;
    }
  })
}
validation();
