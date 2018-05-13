
(function(){
  const input = document.getElementById('name').focus();
})()

const jobRole = () => {
  const select = document.getElementById('title');
  select.addEventListener('change', function(e){
    if(e.target.value === 'other'){
      select.insertAdjacentHTML('afterend', '<input type="text" placeholder="Your Job Role"></input>')
    } else {
      const fieldset = document.querySelector('fieldset');
      fieldset.removeChild(fieldset.lastChild)
    }
  })
}
jobRole();

const tShirt = () => {
  const tDesign = document.getElementById('design');
  const color = [...document.getElementById('color').querySelectorAll('option')];
  tDesign.addEventListener('change', function(e){
    const theme = e.target.value;
    color.forEach((c,i))
  })
}
tShirt()
