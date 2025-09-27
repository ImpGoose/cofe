    // Анимация появления элементов при прокрутке
        const scrollRevealElements = document.querySelectorAll('.scroll-reveal');
        
        const scrollReveal = () => {
            scrollRevealElements.forEach(element => {
                const elementTop = element.getBoundingClientRect().top;
                const windowHeight = window.innerHeight;
                
                if (elementTop < windowHeight - 100) {
                    element.classList.add('active');
                }
            });
        };
        
        window.addEventListener('scroll', scrollReveal);
        window.addEventListener('load', scrollReveal);
        
        // Анимация появления контактных элементов
        const contactItems = document.querySelectorAll('.contact-item');
        
        const contactAnimation = () => {
            contactItems.forEach((item, index) => {
                const itemTop = item.getBoundingClientRect().top;
                const windowHeight = window.innerHeight;
                
                if (itemTop < windowHeight - 100) {
                    setTimeout(() => {
                        item.classList.add('active');
                    }, index * 200);
                }
            });
        };
        
        window.addEventListener('scroll', contactAnimation);
        window.addEventListener('load', contactAnimation);
        
        // Интерактивная карта
        const mapPlaceholder = document.querySelector('.map-placeholder');
        
        mapPlaceholder.addEventListener('click', function() {
            this.innerHTML = `
                <div class="map-icon">🗺️</div>
                <h3>Центральная кофейня</h3>
                <p>ул. Кофейная, 15, Москва</p>
                <p>Карта загружена</p>
                <div style="width: 100%; height: 70%; background: linear-gradient(45deg, #1a3b6b, #0a192f); border-radius: 5px; margin-top: 1rem; display: flex; align-items: center; justify-content: center;">
                    <div style="text-align: center;">
                        <div style="font-size: 2rem; margin-bottom: 0.5rem;">📍</div>
                        <p>Интерактивная карта</p>
                    </div>
                </div>
            `;
        });
        
        // FAQ аккордеон
        const faqItems = document.querySelectorAll('.faq-item');
        
        faqItems.forEach(item => {
            const question = item.querySelector('.faq-question');
            
            question.addEventListener('click', () => {
                // Закрываем все открытые элементы
                faqItems.forEach(otherItem => {
                    if (otherItem !== item && otherItem.classList.contains('active')) {
                        otherItem.classList.remove('active');
                    }
                });
                
                // Открываем/закрываем текущий элемент
                item.classList.toggle('active');
            });
        });
        
        // Анимация пульсирующих точек
        const pulseDots = document.querySelectorAll('.pulse-dot');
        
        pulseDots.forEach(dot => {
            dot.addEventListener('mouseover', function() {
                this.style.transform = 'scale(1.5)';
            });
            
            dot.addEventListener('mouseout', function() {
                this.style.transform = 'scale(1)';
            });
        });
        
        // Обработка формы
        const contactForm = document.querySelector('.contact-form');
        
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Простая валидация
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
            
            if (name && email && message) {
                alert('Спасибо! Ваше сообщение отправлено. Мы свяжемся с вами в ближайшее время.');
                contactForm.reset();
            } else {
                alert('Пожалуйста, заполните все обязательные поля.');
            }
        });