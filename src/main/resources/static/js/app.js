// Portfolio JavaScript - Dark Theme
document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            console.log('Navigation clicked:', targetId, 'Target section:', targetSection);
            
            if (targetSection) {
                // Use scrollIntoView with CSS scroll-margin-top for proper offset
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                
                console.log('Scrolling to section:', targetId);
            } else {
                console.error('Target section not found:', targetId);
            }
        });
    });

    // Add scroll effect to header
    window.addEventListener('scroll', function() {
        const header = document.querySelector('header');
        if (window.scrollY > 100) {
            header.style.backgroundColor = 'rgba(26, 26, 26, 0.95)';
            header.style.backdropFilter = 'blur(10px)';
        } else {
            header.style.backgroundColor = '#1a1a1a';
            header.style.backdropFilter = 'none';
        }
    });

    // Animate project cards on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);






    // Add click animation to arrow button
    const arrowButton = document.querySelector('.arrow-button');
    if (arrowButton) {
        arrowButton.addEventListener('click', function() {
            this.style.animation = 'bounce 0.6s ease';
            setTimeout(() => {
                this.style.animation = 'float 3s ease-in-out infinite';
            }, 600);
            
            // Scroll to articles section
            const articlesSection = document.querySelector('#projects');
            if (articlesSection) {
                articlesSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    }


    // Articles Pagination System
    const initArticlesPagination = () => {
        const paginationDots = document.querySelectorAll('.pagination-dot');
        const paginationArrow = document.querySelector('.pagination-arrow');
        const articlesTrack = document.getElementById('articlesTrack');
        
        if (!paginationDots.length || !articlesTrack) {
            console.log('Articles pagination elements not found');
            return;
        }
        
        let currentPage = 1;
        const articlesPerPage = 4;
        const allArticles = Array.from(articlesTrack.querySelectorAll('.article-card'));
        const totalPages = Math.ceil(allArticles.length / articlesPerPage);
        
        console.log('Articles pagination initialized - Articles:', allArticles.length, 'Pages:', totalPages);
        
        function updateArticlesDisplay() {
            allArticles.forEach(article => {
                article.style.display = 'none';
            });
            
            const startIndex = (currentPage - 1) * articlesPerPage;
            const endIndex = Math.min(startIndex + articlesPerPage, allArticles.length);
            
            for (let i = startIndex; i < endIndex; i++) {
                if (allArticles[i]) {
                    allArticles[i].style.display = 'flex';
                }
            }
            
            paginationDots.forEach((dot, index) => {
                const pageNumber = index + 1;
                dot.classList.toggle('active', pageNumber === currentPage);
            });
        }
        
        paginationDots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                const pageNumber = index + 1;
                if (pageNumber !== currentPage) {
                    currentPage = pageNumber;
                    updateArticlesDisplay();
                }
            });
        });
        
        if (paginationArrow) {
            paginationArrow.addEventListener('click', () => {
                if (currentPage < totalPages) {
                    currentPage++;
                } else {
                    currentPage = 1;
                }
                updateArticlesDisplay();
            });
        }
        
        updateArticlesDisplay();
    };
    
    // Initialize articles pagination
    initArticlesPagination();

    // Work Section Interactions
    const initWorkSection = () => {
        const workEntries = document.querySelectorAll('.work-entry');
        
        console.log('Work entries found:', workEntries.length);
        
        workEntries.forEach((entry, index) => {
            entry.addEventListener('click', function() {
                console.log('Work entry clicked:', index);
                
                // Remove active class from all entries
                workEntries.forEach(e => e.classList.remove('active'));
                
                // Add active class to clicked entry
                this.classList.add('active');
                
                console.log('Active class added to entry:', index);
            });
            
            // Hover effects removed - only click effects remain
        });
    };
    
    // Initialize work section
    initWorkSection();

    // Mobile menu functionality
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mobileNavLinks = document.getElementById('navLinks');
    
    console.log('Mobile menu elements:', { mobileMenuBtn, mobileNavLinks });
    
    if (mobileMenuBtn && mobileNavLinks) {
        console.log('Mobile menu initialized successfully');
        
        // Store scroll position for iOS
        let scrollPosition = 0;
        
        // Add both click and touchstart events for better iOS compatibility
        const handleMenuToggle = function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            console.log('Mobile menu button clicked/touched');
            
            this.classList.toggle('active');
            mobileNavLinks.classList.toggle('active');
            
            const isActive = mobileNavLinks.classList.contains('active');
            
            if (isActive) {
                // Store current scroll position
                scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
                
                // Apply the specific styles you requested
                document.body.style.position = 'fixed';
                document.body.style.top = '0px';
                document.body.style.width = '100%';
                document.body.style.overflow = 'hidden';
                document.body.style.touchAction = 'none';
                
                // Add class to body for additional iOS fixes
                document.body.classList.add('menu-open');
            } else {
                // Restore scroll position
                document.body.style.position = '';
                document.body.style.top = '';
                document.body.style.width = '';
                document.body.style.overflow = '';
                document.body.style.touchAction = '';
                
                // Remove class from body
                document.body.classList.remove('menu-open');
                
                // Restore scroll position with a small delay for iOS
                setTimeout(() => {
                    window.scrollTo(0, scrollPosition);
                }, 10);
            }
            
            console.log('Menu state:', isActive ? 'opened' : 'closed');
        };
        
        mobileMenuBtn.addEventListener('click', handleMenuToggle);
        mobileMenuBtn.addEventListener('touchstart', handleMenuToggle);
        
        // Function to close menu and restore scroll
        function closeMenu() {
            mobileMenuBtn.classList.remove('active');
            mobileNavLinks.classList.remove('active');
            
            // Restore body styles
            document.body.style.position = '';
            document.body.style.top = '';
            document.body.style.width = '';
            document.body.style.overflow = '';
            document.body.style.touchAction = '';
            
            // Remove class from body
            document.body.classList.remove('menu-open');
            
            // Restore scroll position
            window.scrollTo(0, scrollPosition);
        }
        
        // Close menu when clicking on nav links and handle navigation
        mobileNavLinks.addEventListener('click', function(e) {
            if (e.target.tagName === 'A') {
                console.log('Mobile nav link clicked, closing menu');
                
                // Get the target section
                const targetId = e.target.getAttribute('href');
                const targetSection = document.querySelector(targetId);
                
                // Close the menu first
                closeMenu();
                
                // Then scroll to the section after a short delay
                if (targetSection) {
                    setTimeout(() => {
                        targetSection.scrollIntoView({
                            behavior: 'smooth',
                            block: 'start'
                        });
                    }, 300); // Wait for menu close animation
                }
            }
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', function(e) {
            if (mobileNavLinks.classList.contains('active') && 
                !mobileNavLinks.contains(e.target) && 
                !mobileMenuBtn.contains(e.target)) {
                console.log('Clicked outside, closing menu');
                closeMenu();
            }
        });
        
        // Close menu on escape key
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && mobileNavLinks.classList.contains('active')) {
                console.log('Escape key pressed, closing menu');
                closeMenu();
            }
        });
    } else {
        console.error('Mobile menu elements not found:', { mobileMenuBtn, mobileNavLinks });
    }
    
});
