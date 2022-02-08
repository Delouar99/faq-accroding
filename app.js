
const haq_header = document.querySelectorAll('.haq-header');

haq_header.forEach(item => {
item.addEventListener('click', function (){
    item.classList.toggle('active');

   haq_header.forEach(item => {
    if(item != this){
      item.classList.remove('active');
      item.nextElementSibling.style.height = '0px'
    }

   });
  
  if(item.classList.contains('active')){
    item.nextElementSibling.style.height =  item.nextElementSibling.scrollHeight + 'px';
  }else{
    item.nextElementSibling.style.height = '0px'
  }
})
});