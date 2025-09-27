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
        
        // Параллакс эффект для плавающих элементов
        document.addEventListener('mousemove', (e) => {
            const floatingElements = document.querySelectorAll('.floating-element');
            const x = e.clientX / window.innerWidth;
            const y = e.clientY / window.innerHeight;
            
            floatingElements.forEach((element, index) => {
                const speed = (index + 1) * 0.5;
                const xMove = x * speed * 50;
                const yMove = y * speed * 50;
                
                element.style.transform = `translate(${xMove}px, ${yMove}px)`;
            });
        });
        
        // Анимация тимлайна при прокрутке
        const timelineItems = document.querySelectorAll('.timeline-item');
        
        const timelineAnimation = () => {
            timelineItems.forEach(item => {
                const itemTop = item.getBoundingClientRect().top;
                const windowHeight = window.innerHeight;
                
                if (itemTop < windowHeight - 100) {
                    item.style.opacity = '1';
                    item.style.transform = 'translateX(0)';
                }
            });
        };
        
        // Изначально скрываем элементы тимлайна
        timelineItems.forEach(item => {
            item.style.opacity = '0';
            item.style.transition = 'opacity 0.8s, transform 0.8s';
            
            if (item.classList.contains('timeline-item:nth-child(odd)')) {
                item.style.transform = 'translateX(-50px)';
            } else {
                item.style.transform = 'translateX(50px)';
            }
        });
        
        window.addEventListener('scroll', timelineAnimation);
        window.addEventListener('load', timelineAnimation);