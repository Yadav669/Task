
function handleBlock(e) {
    const accordionContent = e.target.closest('.accordion-tab').querySelector('.acc-content');
    const buttonIcon = e.target.closest('.btn-arrow');
    
    if (accordionContent.style.display === 'none') {
        accordionContent.style.display = 'block';
        buttonIcon.innerHTML = '<i class="fa-solid fa-angle-up"></i>';
    } else {
        accordionContent.style.display = 'none';
        buttonIcon.innerHTML = '<i class="fa-solid fa-angle-down"></i>';
    }
}