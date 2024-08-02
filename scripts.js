let sections = documentation.querySelectorAll('section');
let navLinks = documentation.querySelectorAll('header nav a');

window.onscroll =() => {
    sections.foreach(sec => {
      let top = window.scrollY;
      let offset = sec.offsetTop -150;
      let height = sec.offsetHeight;
      let class_ = sec.getAttribute('class');

      if(top >= offset & top < offset + height){
        navLinks.foreach(link =>{          
            navLinks.classList.remove('active');
            document.querySelector('header nav a[href*= '+ class_ + ']').classList.add('active');
        });

      };
    });
};