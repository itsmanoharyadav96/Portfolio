// Portfolio JavaScript - Dark Theme
document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const headerHeight = 80; // Height of fixed header
                const targetPosition = targetSection.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
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


    // Language selector functionality
    const languageSelector = document.querySelector('.language-selector');
    if (languageSelector) {
        languageSelector.addEventListener('click', function() {
            // Toggle between languages
            const en = this.querySelector('.en');
            const ge = this.querySelector('.ge');
            
            if (en.style.fontWeight === 'bold') {
                en.style.fontWeight = 'normal';
                en.style.color = '#aaaaaa';
                ge.style.fontWeight = 'bold';
                ge.style.color = '#ffffff';
            } else {
                en.style.fontWeight = 'bold';
                en.style.color = '#ffffff';
                ge.style.fontWeight = 'normal';
                ge.style.color = '#aaaaaa';
            }
        });
    }

    // Social links hover effects
    const socialLinks = document.querySelectorAll('.social-link');
    socialLinks.forEach(link => {
        link.addEventListener('mouseenter', function() {
            this.style.backgroundColor = '#333333';
            this.style.transform = 'translateY(-2px)';
        });
        
        link.addEventListener('mouseleave', function() {
            this.style.backgroundColor = 'transparent';
            this.style.transform = 'translateY(0)';
        });
    });


    // Enhanced typing effect for hero title
    const titleLine1 = document.querySelector('.title-line-1');
    const titleLine2 = document.querySelector('.title-line-2');
    
    if (titleLine1 && titleLine2) {
        const text1 = titleLine1.textContent;
        const text2 = titleLine2.textContent;
        
        titleLine1.textContent = '';
        titleLine2.textContent = '';
        
        let i = 0;
        const typeWriter1 = () => {
            if (i < text1.length) {
                titleLine1.textContent += text1.charAt(i);
                i++;
                setTimeout(typeWriter1, 80);
            } else {
                // Start typing second line after a pause
                setTimeout(() => {
                    let j = 0;
                    const typeWriter2 = () => {
                        if (j < text2.length) {
                            titleLine2.textContent += text2.charAt(j);
                            j++;
                            setTimeout(typeWriter2, 80);
                        }
                    };
                    typeWriter2();
                }, 500);
            }
        };
        
        setTimeout(typeWriter1, 1500);
    }


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

    // Parallax effect for hero section
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const hero = document.querySelector('.hero');
        if (hero) {
            hero.style.transform = `translateY(${scrolled * 0.5}px)`;
        }
    });

    // Add smooth transitions to all interactive elements
    const interactiveElements = document.querySelectorAll('a, button, .social-link');
    interactiveElements.forEach(element => {
        element.style.transition = 'all 0.3s ease';
    });

    // Articles Pagination System
    const initArticlesPagination = () => {
        const paginationDots = document.querySelectorAll('.pagination-dot');
        const paginationArrow = document.querySelector('.pagination-arrow');
        const articlesGrid = document.querySelector('.articles-grid');
        
        if (!paginationDots.length || !articlesGrid) {
            console.log('Articles pagination elements not found');
            return;
        }
        
        let currentPage = 1;
        const articlesPerPage = 4;
        const allArticles = Array.from(articlesGrid.querySelectorAll('.article-card'));
        const totalPages = Math.ceil(allArticles.length / articlesPerPage);
        
        console.log('Articles pagination initialized - Articles:', allArticles.length, 'Pages:', totalPages);
        
        function updateArticlesDisplay() {
            // Hide all articles
            allArticles.forEach(article => {
                article.style.display = 'none';
            });
            
            // Show articles for current page
            const startIndex = (currentPage - 1) * articlesPerPage;
            const endIndex = Math.min(startIndex + articlesPerPage, allArticles.length);
            
            for (let i = startIndex; i < endIndex; i++) {
                if (allArticles[i]) {
                    allArticles[i].style.display = 'block';
                }
            }
            
            // Update pagination dots
            paginationDots.forEach((dot, index) => {
                const pageNumber = index + 1;
                dot.classList.toggle('active', pageNumber === currentPage);
            });
        }
        
        // Event listeners for pagination dots
        paginationDots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                const pageNumber = index + 1;
                if (pageNumber !== currentPage) {
                    currentPage = pageNumber;
                    updateArticlesDisplay();
                }
            });
        });
        
        // Event listener for arrow (next page)
        if (paginationArrow) {
            paginationArrow.addEventListener('click', () => {
                if (currentPage < totalPages) {
                    currentPage++;
                    updateArticlesDisplay();
                }
            });
        }
        
        // Initialize display
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
        
        // Close menu when clicking on nav links
        mobileNavLinks.addEventListener('click', function(e) {
            if (e.target.tagName === 'A') {
                console.log('Nav link clicked, closing menu');
                closeMenu();
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

// Utility function for smooth animations
function animateElement(element, animation) {
    element.style.animation = animation;
}

// Add CSS animations dynamically
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    @keyframes slideInLeft {
        from {
            opacity: 0;
            transform: translateX(-30px);
        }
        to {
            opacity: 1;
            transform: translateX(0);
        }
    }
    
    @keyframes slideInRight {
        from {
            opacity: 0;
            transform: translateX(30px);
        }
        to {
            opacity: 1;
            transform: translateX(0);
        }
    }
`;
document.head.appendChild(style);

// Project Details Popup Functionality - Universal Container
document.addEventListener('DOMContentLoaded', function() {
    const popup = document.getElementById('projectPopup');
    const popupClose = document.getElementById('popupClose');
    
    // Project data for all projects
    const projectsData = {
        gostat: {
             "title": "Portfolio Websites",
    "overview": "A high-end, fully responsive portfolio website solution crafted to impress international clients. Designed with elegant UI/UX principles, it showcases projects, skills, and achievements in a way that drives trust and conversion. Perfect for freelancers, agencies, and businesses looking to make a global impact with their digital presence.",
    "technologies": [
        "Spring Boot", "Thymeleaf", "MySQL", "TailwindCSS",
        "JavaScript", "AWS", "Docker", "CI/CD"
    ],
    "features": [
        "Modern, mobile-first responsive design",
        "Dynamic project and content management via admin panel",
        "SEO-optimized architecture for global visibility",
        "Secure contact forms with email integration",
        "Multi-language support for international reach",
        "High-speed performance with caching strategies",
        "Cloud-hosted and scalable deployment",
        "Custom animations and micro-interactions",
        "Role-based admin authentication system",
        "Fully documented and maintainable codebase"
    ],
    "architecture": "Built on a layered Spring Boot architecture with clear separation of controller, service, and repository. The backend handles secure CRUD operations while the frontend delivers a seamless, responsive user experience using Thymeleaf and TailwindCSS. Deployed on AWS with Docker and CI/CD pipelines for reliability.",
    "challenges": "The primary challenge was to create a website that is both visually striking and technically robust. Solutions involved implementing responsive design principles, integrating SEO strategies, and optimizing database queries for lightning-fast load times. A secure authentication system and email-based communication were also added to meet enterprise-level requirements.",
    "githubUrl": "https://github.com/yourusername/portfolio-websites",
    "demoUrl": "https://your-portfolio-demo.com"
        },
        kanaMaster: {
            "title": "E-Commerce Websites",
            "overview": "A modern, scalable, and feature-rich E-Commerce platform designed to deliver a seamless online shopping experience for global businesses. Built with Java, React, and Spring Boot, it combines powerful backend performance with an intuitive frontend interface. The system is engineered for high availability, scalability, and security, making it suitable for startups as well as enterprise-level clients.",
            "technologies": [
                "Java", "React", "Tailwind", "SpringBoot", "MySQL", "GitHub",
                "Jenkins", "Docker", "Kubernetes", "Maven", "Gradle"
            ],
            "features": [
                "Full-stack e-commerce solution with modern UI/UX",
                "Secure payment processing and order management",
                "Inventory management and product catalog",
                "User authentication and role-based access control",
                "Responsive design for all devices",
                "Real-time notifications and updates",
                "Advanced search and filtering capabilities",
                "Admin dashboard for business management",
                "Scalable microservices architecture",
                "CI/CD pipeline with automated testing"
            ],
            "architecture": "Built using a microservices architecture with Spring Boot backend services, React frontend, and MySQL database. The system uses Docker for containerization and Kubernetes for orchestration, ensuring high availability and scalability. Jenkins handles the CI/CD pipeline for automated deployment.",
            "challenges": "The main challenges included handling high traffic loads, ensuring data consistency across microservices, and implementing secure payment processing. Solutions involved implementing caching strategies, using event-driven architecture for data synchronization, and integrating with secure payment gateways with proper encryption.",
            "githubUrl": "https://github.com/yourusername/ecommerce-platform",
            "demoUrl": "https://your-ecommerce-demo.com"
        },
        animeSentry: {
            "title": "Anime Sentry",
            "overview": "Anime Sentry is a comprehensive anime tracking and management application that allows users to discover, track, and manage their favorite anime series. Built with modern web technologies, it provides a seamless experience for anime enthusiasts to stay updated with their watchlists, discover new series, and connect with the anime community.",
            "technologies": [
                "React", "Node.js", "Express", "MongoDB", "JavaScript",
                "CSS3", "HTML5", "REST API", "JWT", "Bcrypt"
            ],
            "features": [
                "Anime discovery and search functionality",
                "Personal watchlist management",
                "Episode tracking and progress monitoring",
                "User authentication and profile management",
                "Rating and review system",
                "Community features and social interactions",
                "Responsive design for all devices",
                "Real-time notifications for new episodes",
                "Advanced filtering and sorting options",
                "Integration with popular anime databases"
            ],
            "architecture": "Built with a modern MERN stack (MongoDB, Express, React, Node.js) architecture. The backend provides RESTful APIs for data management, while the frontend delivers an intuitive user interface. The application uses JWT for secure authentication and MongoDB for flexible data storage. The system is designed for scalability and performance.",
            "challenges": "The main challenges included integrating with external anime APIs, managing large datasets efficiently, and creating an intuitive user interface for complex anime data. Solutions involved implementing efficient caching strategies, optimizing database queries, and creating a responsive design that works across all devices. User experience was prioritized through careful UI/UX design and performance optimization.",
            "githubUrl": "https://github.com/yourusername/anime-sentry",
            "demoUrl": "https://anime-sentry-demo.com"
        }
    };
    
    // Function to populate popup with project data
    function populatePopup(projectData) {
        document.getElementById('popupTitle').textContent = projectData.title;
        document.getElementById('popupOverview').textContent = projectData.overview;
        document.getElementById('popupArchitecture').textContent = projectData.architecture;
        document.getElementById('popupChallenges').textContent = projectData.challenges;
        
        // Populate technologies
        const techContainer = document.getElementById('popupTechnologies');
        techContainer.innerHTML = '';
        projectData.technologies.forEach(tech => {
            const techTag = document.createElement('span');
            techTag.className = 'tech-tag';
            techTag.textContent = tech;
            techContainer.appendChild(techTag);
        });
        
        // Populate features
        const featuresContainer = document.getElementById('popupFeatures');
        featuresContainer.innerHTML = '';
        projectData.features.forEach(feature => {
            const featureItem = document.createElement('div');
            featureItem.className = 'feature-item';
            featureItem.textContent = feature;
            featuresContainer.appendChild(featureItem);
        });
        
        // Update button URLs
        const popupGithubBtn = document.getElementById('popupGithubBtn');
        const popupExternalBtn = document.getElementById('popupExternalBtn');
        
        if (popupGithubBtn) {
            popupGithubBtn.onclick = function() {
                window.open(projectData.githubUrl, '_blank');
            };
        }
        
        if (popupExternalBtn) {
            popupExternalBtn.onclick = function() {
                window.open(projectData.demoUrl, '_blank');
            };
        }
    }
    
    // Function to show popup with specific project data
    function showPopup(projectKey) {
        const projectData = projectsData[projectKey];
        if (projectData) {
            populatePopup(projectData);
            popup.classList.add('show');
            document.body.style.overflow = 'hidden'; // Prevent background scrolling
        }
    }
    
    // Function to hide popup
    function hidePopup() {
        popup.classList.remove('show');
        document.body.style.overflow = 'auto'; // Restore scrolling
    }
    
    // Event listeners for all project detail buttons
    const projectButtons = {
        'gostatDetailsBtn': 'gostat',
        'kanaMasterDetailsBtn': 'kanaMaster',
        'animeSentryDetailsBtn': 'animeSentry'
    };
    
    Object.keys(projectButtons).forEach(buttonId => {
        const button = document.getElementById(buttonId);
        if (button) {
            button.addEventListener('click', function(e) {
                e.preventDefault();
                showPopup(projectButtons[buttonId]);
            });
        }
    });
    
    // Close popup event listeners
    if (popupClose) {
        popupClose.addEventListener('click', hidePopup);
    }
    
    // Close popup when clicking outside the content
    if (popup) {
        popup.addEventListener('click', function(e) {
            if (e.target === popup) {
                hidePopup();
            }
        });
    }
    
    // Close popup with Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && popup.classList.contains('show')) {
            hidePopup();
        }
    });
});

// Article Documentation Popup Functionality
document.addEventListener('DOMContentLoaded', function() {
    const articlePopup = document.getElementById('articlePopup');
    const articlePopupClose = document.getElementById('articlePopupClose');
    
    // Article data
    const articleData = {
        title: "The Simplest Example: Kafka + Golang",
        category: "Technical Guide",
        date: "December 2024",
        overview: "This comprehensive guide demonstrates how to implement a microservice architecture using Apache Kafka, Golang, and Docker. We'll build a simple but production-ready system that showcases event-driven architecture principles.",
        githubUrl: "https://github.com/yourusername/kafka-golang-example"
    };
    
    // Article buttons functionality removed
    
    // Testimonial Popup Functionality
    const testimonialPopup = document.getElementById('testimonialPopup');
    const testimonialPopupClose = document.getElementById('testimonialPopupClose');
    
    // Testimonial data
    const testimonialData = {
        name: "Bhupendar Yadav..",
        date: "14 June, 2024",
        text: "Bhupender is a skilled programmer with a deep passion for coding and software development. His technical expertise and problem-solving abilities make him an outstanding professional in his field."
    };
    
    // Function to show testimonial popup
    function showTestimonialPopup() {
        document.getElementById('testimonialName').textContent = testimonialData.name;
        document.getElementById('testimonialDate').textContent = testimonialData.date;
        document.getElementById('testimonialText').textContent = testimonialData.text;
        
        testimonialPopup.classList.add('show');
        document.body.style.overflow = 'hidden';
    }
    
    // Function to hide testimonial popup
    function hideTestimonialPopup() {
        testimonialPopup.classList.remove('show');
        document.body.style.overflow = 'auto';
    }
    
    // Event listeners for external buttons (excluding specific buttons)
    const externalButtons = document.querySelectorAll('.action-btn.external-btn');
    externalButtons.forEach(button => {
        // Skip buttons that already have their own functionality
        const excludedIds = ['heroExternalBtn', 'gostatDetailsBtn', 'kanaMasterDetailsBtn', 'animeSentryDetailsBtn'];
        
        if (excludedIds.includes(button.id)) {
            return; // Skip this button
        }
        
            button.addEventListener('click', function(e) {
                e.preventDefault();
            showTestimonialPopup();
        });
    });
    
    // Close testimonial popup event listeners
    if (testimonialPopupClose) {
        testimonialPopupClose.addEventListener('click', hideTestimonialPopup);
    }
    
    // Close testimonial popup when clicking outside
    if (testimonialPopup) {
        testimonialPopup.addEventListener('click', function(e) {
            if (e.target === testimonialPopup) {
                hideTestimonialPopup();
            }
        });
    }
    
    // Close testimonial popup with Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && testimonialPopup.classList.contains('show')) {
            hideTestimonialPopup();
        }
    });
    
    // Article action buttons functionality
    const articleShareBtn = document.getElementById('articleShareBtn');
    const articleBookmarkBtn = document.getElementById('articleBookmarkBtn');
    const articleGithubBtn = document.getElementById('articleGithubBtn');
    
    if (articleShareBtn) {
        articleShareBtn.addEventListener('click', function() {
            if (navigator.share) {
                navigator.share({
                    title: articleData.title,
                    text: articleData.overview,
                    url: window.location.href
                });
            } else {
                // Fallback: copy to clipboard
                navigator.clipboard.writeText(window.location.href).then(() => {
                    alert('Article link copied to clipboard!');
                });
            }
        });
    }
    
    if (articleBookmarkBtn) {
        articleBookmarkBtn.addEventListener('click', function() {
            // Toggle bookmark state
            this.classList.toggle('bookmarked');
            if (this.classList.contains('bookmarked')) {
                this.innerHTML = `
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z"/>
                    </svg>
                    Bookmarked
                `;
            } else {
                this.innerHTML = `
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z"/>
                    </svg>
                    Bookmark
                `;
            }
        });
    }
    
    if (articleGithubBtn) {
        articleGithubBtn.addEventListener('click', function() {
            window.open(articleData.githubUrl, '_blank');
        });
    }
    
    // Smooth scrolling for table of contents links
    const tocLinks = document.querySelectorAll('.article-toc a');
    tocLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});
