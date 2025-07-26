// Header scroll effect
window.addEventListener("scroll", function() {//كيعني: كل ما تحركتي فالصفحة، هاد الفونكسيون غادي تخدم
  const header = document.getElementById("header");//كيلقا العنصر لي عندو id "heade
  header.classList.toggle("scrolled", window.scrollY > 0);
});
//Ila window.scrollY > 0 (ya3ni lpage msrollya lta7t), kaydir "scrolled" class.
// Ila window.scrollY == 0 (ya3ni luser mazal fo9), kayhiyd class.
// Menu filtering functionality




document.addEventListener('DOMContentLoaded', function() {//Hna kat2oul l-browser: "mlli kolchi f HTML ykoun loaded, bda l-code.

    const categoryBtns = document.querySelectorAll('.category-btn');// Katkhzen kul button dial filtre (ex: ‘All’, ‘Drinks’...) f variable,
                                                                    
                                                                    //  u kol menu item f variable akhor.
    const menuItems = document.querySelectorAll('.menu-item');
    
    categoryBtns.forEach(btn => {//Katdir l-code mlli user yklik 3la chi button
        btn.addEventListener('click', function() {//Katdir l-code mlli user yklik 3la chi button


            // Remove active class from all buttons
            categoryBtns.forEach(b => b.classList.remove('active'));//Kat7id class active mn kulchi w katdirha ghir f button li clicked — bash ybda styled
            // Add active class to clicked button
            this.classList.add('active');//Kat7id class active mn kulchi w katdirha ghir f button li clicked — bash ybda styled

            
            const category = this.getAttribute('data-category');//Kat9ra chi data-category, li kayn f attribute f HTML (ex: data-category="tea"
            
            // Filter menu items
            menuItems.forEach(item => {//Katdoz 3la menu item wa7ed wa7ed
                if (category === 'all' || item.getAttribute('data-category') === category) {// Ila l-category clicked = “all” bghiti kolshi yban.


                    item.style.display = 'block';//Kat9oul l-browser: "bayen had l-item" — b display: block
                    item.style.animation = 'fadeIn 0.5s ease';//Kat3ti style mratab style zwin w mareteb
                } else {
                    item.style.display = 'none';//Mlli l-item ma kayamchich l-category, ytkhba — b display: none.

                }
            });
        });
    });
});
/*
// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {//Katjib kol <a> li kaydir lien l-section f nafs page (ex: #contact, #menu...) — hadchi huwa internal anchor.
    //xre7 liya had code ster bster

anchor.addEventListener('click', function (e) {  // Mlli user yklik 3la chi lien f navbar (ex: "Menu"), tkhddem l-function

e.preventDefault();//Katpreventi browser ydir jump direct l-section — hadchi bash ndir scroll mratab b JavaScript.

const target = document.querySelector(this.getAttribute('href'));// Mlli lien clicked = #menu, katjib .getAttribute('href') → #menu → katl9a section dyal id="menu".

if (target) {
target.scrollIntoView({
behavior: 'smooth',
block: 'start'
});// Katdir scroll smooth, w l-section ybda mn foq (block: start) — zwin f experience dial user.
}
});
});*/


// Contact form handling
document.querySelector('.contact-form form').addEventListener('submit', function(e) {//Hna katsddi l-event dial submit mlli l-user yklik "Send Message"
    
    e.preventDefault();// Katstopi l-form bash ma ytsiftech l-data b default, bach ndir validation awlaniya

    // Get form data
    const formData = new FormData(this);
    const name = this.querySelector('input[type="text"]').value;// Katjib smiya, email, sujet, w message mn l-form
    const email = this.querySelector('input[type="email"]').value;
    const subject = this.querySelector('input[placeholder="Subject"]').value;
    const message = this.querySelector('textarea').value;
    
    // Simple validation
    if (!name || !email || !subject || !message) {//Ila chi khana khawya → kat3ti alert w katstopi l-submit
        alert('Please fill in all fields');
        return;
    }
    
    // Simulate form submission
    alert('Thank you for your message! We\'ll get back to you soon.'); // Kat3ti l-user confirmation, w katn9i l-form b .reset() — kolchi ykhdem clean

    this.reset();
});


//7ta hadi back-end,hada mosa3ada ia bax l futur mli ntawer livel dyali
// Mobile menu toggle (for future implementation)
document.querySelector('.mobile-menu-toggle').addEventListener('click', function() {//Katmsk l-button dial menu (kayn f smartphones), w katsdd l-click
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('mobile-active');
    /* Kat9lbi 3la .nav-links (li fihom l-links dial navigation), w katdir toggle l-class mobile-active.
 Toggle kaykhdem b style:
- If mobile-active machi kayn → kaytzad
- If kayn → kayt7yed
*/
});



// Intersection Observer for animations
const observerOptions = {//Hna kaynin 2 options kif kayt7dd l-observer kifach ydetect l-elements f view dyal user.
    threshold: 0.1,//Kat3ni l-element ybda kayban 10% f screen → observer kaydetectiha. – Ila bghiti l-element ybda yban ghir shwia w t3ti l-effect, 0.1 kaykhdem mzyan

    rootMargin: '0px 0px -50px 0px'
    /*Kat3ti margin f dakshi li katdetecti observer. – -50px mn ta7t kay3ni: "tsnnah l-element y9rb l-view 50px mn ta7t bach tkhdem animation".
         B had settings:
         Katban effect mlli l-element ykoun qrib yban.
         Kat7ssn UX b smooth entry.
*/
};

const observer = new IntersectionObserver(function(entries) {//Kaytsna l-elements ybanu f viewport (scroll dyal l-user) باش ydir l-animation.


    entries.forEach(entry => {//Kaymchi entry b entry, ychecki واش l-element "intersected" (ban f screen)

        if (entry.isIntersecting) {// Mlli l-element ybda yban
            entry.target.style.opacity = '1';//yban clairement.
            entry.target.style.transform = 'translateY(0)';//ykhdem l-effect dyal tl3a smoothly (slide-in mn ta7t)
        }
    });
}, observerOptions);

// Observe elements for animation
document.querySelectorAll('.stat-item, .menu-item, .testimonial, .feature').forEach(el => {//Kaymchi yselecti kolchi l-elements li kayn fi feature...

    el.style.opacity = '0';//L-element invisible b l-default → katkhdem l-entry animation smoothly mlli ybda yban.
    el.style.transform = 'translateY(30px)';// Kat7dd l-position default b 30px l-ta7t → mlli yban kaytl3 b slide-in

    el.style.transition = 'all 0.6s ease';
    /*Smooth move → katkhdem animation b z-rushing effect:
    - all → 3la kolchi
    - 0.6s → duration
    - ease → natural entry
    */
    observer.observe(el);//Kaydkhl had l-element f l-watchlist dial IntersectionObserver → ready f waqt l-scroll

});
/*✨ Fhem l-idea:
🔧 Kattsayb <style> tag b JavaScript
🧵 Katktb fih keyframes + styles dial .mobile-active
🧲 Katsayb kolshi dynamically f waqt l-execution
🖼️ Katdir animation smooth (fade + slide) f elements li kaybanin
📱 Katstylé menu li kayban f smartphone
*/
// Add CSS animation keyframes
const style = document.createElement('style');//Kaytsayb tag dyal <style> b JavaScript — kaymchi yb9a dynamic f page


style.textContent = `
    @keyframes fadeIn {
        from {
            opacity: 0;
            transform: translateY(20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    .mobile-active {
        display: flex !important;
        flex-direction: column;
        position: absolute;
        top: 100%;
        left: 0;
        right: 0;
        background: white;
        box-shadow: 0 4px 20px rgba(0,0,0,0.1);
        padding: 20px;
        gap: 10px;
    }
`;
document.head.appendChild(style);//Kayzid l-style tag f <head> dial HTML → styles ytkhdmo direct f runtime


