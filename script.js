// Temporizador Regressivo de 24 horas (reinicia diariamente)
function initCountdown() {
    function updateCountdown() {
        const now = new Date();
        const tomorrow = new Date(now);
        tomorrow.setDate(tomorrow.getDate() + 1);
        tomorrow.setHours(0, 0, 0, 0);
        
        const diff = tomorrow - now;
        
        const hours = Math.floor(diff / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);
        
        // Atualiza temporizador principal (hero)
        const hoursEl = document.getElementById('hours');
        const minutesEl = document.getElementById('minutes');
        const secondsEl = document.getElementById('seconds');
        
        if (hoursEl) hoursEl.textContent = String(hours).padStart(2, '0');
        if (minutesEl) minutesEl.textContent = String(minutes).padStart(2, '0');
        if (secondsEl) secondsEl.textContent = String(seconds).padStart(2, '0');
        
        // Atualiza temporizador da oferta
        const offerHoursEl = document.getElementById('offer-hours');
        const offerMinutesEl = document.getElementById('offer-minutes');
        const offerSecondsEl = document.getElementById('offer-seconds');
        
        if (offerHoursEl) offerHoursEl.textContent = String(hours).padStart(2, '0');
        if (offerMinutesEl) offerMinutesEl.textContent = String(minutes).padStart(2, '0');
        if (offerSecondsEl) offerSecondsEl.textContent = String(seconds).padStart(2, '0');
    }
    
    updateCountdown();
    setInterval(updateCountdown, 1000);
}

// Scroll Suave para Âncoras
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            
            // Ignora links vazios ou apenas "#"
            if (href === '#' || !href) {
                e.preventDefault();
                return;
            }
            
            const target = document.querySelector(href);
            
            if (target) {
                e.preventDefault();
                
                const headerOffset = 80;
                const elementPosition = target.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Animações ao Rolar a Página (Fade In)
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Para de observar após o elemento ser visível
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Observa todos os elementos com classe fade-in
    document.querySelectorAll('.fade-in').forEach(el => {
        observer.observe(el);
    });
}

// FAQ Accordion
function initFAQ() {
    const faqQuestions = document.querySelectorAll('.faq-question');
    
    faqQuestions.forEach(question => {
        question.addEventListener('click', () => {
            const faqItem = question.closest('.faq-item');
            const isActive = faqItem.classList.contains('active');
            
            // Fecha todas as outras
            document.querySelectorAll('.faq-item').forEach(item => {
                item.classList.remove('active');
            });
            
            // Abre/fecha a atual
            if (!isActive) {
                faqItem.classList.add('active');
            }
        });
    });
}

// Adiciona animação de pulso ao botão de compra quando próximo do final da oferta
function initUrgencyAnimation() {
    setInterval(() => {
        const now = new Date();
        const tomorrow = new Date(now);
        tomorrow.setDate(tomorrow.getDate() + 1);
        tomorrow.setHours(0, 0, 0, 0);
        
        const diff = tomorrow - now;
        const hoursLeft = Math.floor(diff / (1000 * 60 * 60));
        
        const buyButton = document.querySelector('.btn-buy');
        
        if (hoursLeft < 3 && buyButton) {
            buyButton.style.animation = 'pulse 1.5s infinite';
        }
    }, 60000); // Verifica a cada minuto
}

// Inicialização
document.addEventListener('DOMContentLoaded', () => {
    initCountdown();
    initSmoothScroll();
    initScrollAnimations();
    initFAQ();
    initUrgencyAnimation();
    
    console.log('🙏 Devocional Infantil - Site carregado com sucesso!');
});

// Adiciona classe ao scroll para efeitos adicionais
let lastScroll = 0;
window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    // Pode adicionar efeitos adicionais aqui se necessário
    
    lastScroll = currentScroll;
});
