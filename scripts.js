const projectsData = [
    {
        id: 4,
        title: "Pentest Automatisé Hybride",
        icon: "fa-shield-alt",
        image: "Medias/pentest.png",
        tags: ["RL", "LLaMA/Groq", "Flask", "Gymnasium"],
        shortDesc: "Système de pentesting autonome combinant un modèle de langage (LLM) pour la stratégie et le Reinforcement Learning (RL) pour l'exploration.",
        fullDesc: `
            <p>Un agent intelligent capable d'effectuer des audits de sécurité de manière autonome en combinant le raisonnement d'un LLM et l'exploration de l'Apprentissage par Renforcement.</p>
            <h3>🧠 L'approche Hybride :</h3>
            <ul>
                <li><strong>LLM (Groq/LLaMA) :</strong> Gère 90% de la prise de décision stratégique pour choisir les vecteurs d'attaque.</li>
                <li><strong>RL (Gymnasium) :</strong> Gère 10% de l'exploration pour découvrir de nouvelles vulnérabilités (exploitation Nmap/Curl sur cible DVWA Dockerisée).</li>
                <li><strong>Résultats :</strong> Taux de réussite de 100% sur la cible DVWA avec compréhension logique des séquences d'attaque par le LLM.</li>
            </ul>
        `,
        github: "https://github.com/oumniya03/pentest-hybrid-llm-rl"
    },
    {
        id: 2,
        title: "Système de Recommandation E-commerce (MLOps)",
        icon: "fa-shopping-cart",
        image: "Medias/ecommerce.jpg",
        tags: ["MLflow", "Kubernetes", "CI/CD", "FastAPI"],
        shortDesc: "Pipeline DevOps/MLOps complet pour un modèle SVD de recommandation. CI/CD automatisé, orchestration K8s et monitoring.",
        fullDesc: `
            <p>Ce projet vise à construire et déployer un système de recommandation de produits e-commerce en appliquant les meilleures pratiques industrielles du DevOps et du MLOps.</p>
            <h3>🏗️ Architecture & Implémentation :</h3>
            <ul>
                <li><strong>Machine Learning :</strong> Filtrage Collaboratif basé sur SVD (Singular Value Decomposition) sur le dataset Amazon Reviews.</li>
                <li><strong>CI/CD :</strong> GitHub Actions pour le linting, tests unitaires, build Docker, et déploiement automatisé (Staging/Prod) avec rollback.</li>
                <li><strong>Orchestration (K8s) :</strong> Auto-Scaling (HPA) et déploiement Canary pour tester les nouvelles versions.</li>
                <li><strong>Observabilité :</strong> Monitoring avec Prometheus et Grafana. Tracking des modèles via MLflow.</li>
            </ul>
        `,
        github: "https://github.com/oumniya03/project1-ecommerce-recommendation"
    },
    {
        id: 1,
        title: "RAG Q&A Chatbot",
        icon: "fa-comments",
        image: "Medias/rag.png",
        tags: ["FastAPI", "Next.js", "Docker", "LangChain", "LLaMA"],
        shortDesc: "Application Full-stack RAG pour interroger des PDF. Pipeline complet : LangChain, FAISS, LLM (Groq API). Containerisée avec Docker.",
        fullDesc: `
            <p>Une application complète Retrieval-Augmented Generation (RAG) capable de répondre aux questions basées sur des documents PDF uploadés.</p>
            <h3>✨ Fonctionnalités clés :</h3>
            <ul>
                <li><strong>Ingestion de documents :</strong> Upload via interface utilisateur UI.</li>
                <li><strong>Pipeline RAG Avancé :</strong> Chunking avec RecursiveCharacterTextSplitter, Embeddings HuggingFace (all-MiniLM-L6-v2), et stockage FAISS.</li>
                <li><strong>Intégration LLM :</strong> Alimenté par Llama-3-70b via Groq API pour une inférence ultra-rapide.</li>
                <li><strong>Dockerisé :</strong> Environnement entièrement conteneurisé géré par script Shell.</li>
            </ul>
        `,
        github: "https://github.com/oumniya03/Projet-rag"
    },
    {
        id: 5,
        title: "Prédiction CTR Multimodale",
        icon: "fa-bullseye",
        image: "Medias/ctr.png",
        tags: ["PyTorch", "CLIP", "Attention"],
        shortDesc: "Solution de compétition. Modèle d'optimisation en cascade utilisant CLIP (Texte+Image) couplé à une architecture Attention + DNN. AUC : 0.7752.",
        fullDesc: `
            <p>Développement d'un modèle pour la compétition de Prédiction du Taux de Clics Multimodaux (CTR) basée sur le dataset MicroLens-1M.</p>
            <h3>🎯 Stratégie en Cascade :</h3>
            <ul>
                <li><strong>Extraction Multimodale :</strong> Utilisation de CLIP (Vision Transformer) pour fusionner les embeddings Texte et Image des articles/vidéos.</li>
                <li><strong>Modèle CTR :</strong> Architecture avec Multi-head Attention sur l'historique utilisateur couplée à un Deep Neural Network.</li>
                <li><strong>Performance :</strong> Score AUC de 0.7752 en validation.</li>
            </ul>
        `,
        github: "https://github.com/oumniya03/Projet_competition"
    },
    {
        id: 9,
        title: "Student Management App",
        icon: "fa-users",
        image: "Medias/gestion_etud.png",
        tags: ["React", "Express", "Docker", "MongoDB"],
        shortDesc: "Application Full Stack de gestion académique avec authentification JWT et importation/exportation de données XML validées XSD.",
        fullDesc: `
            <p>Une application de gestion des étudiants avec architecture 3-tiers conteneurisée.</p>
            <h3>🚀 Fonctionnalités :</h3>
            <ul>
                <li><strong>Stack Technique :</strong> Frontend React (servi par Nginx), Backend Node.js/Express, Base de données MongoDB.</li>
                <li><strong>Manipulation de données :</strong> Opérations CRUD complètes et import/export via des fichiers XML avec validation stricte par schéma XSD.</li>
                <li><strong>Sécurité :</strong> Authentification par token JWT.</li>
                <li><strong>Infrastructure :</strong> Application entièrement dockerisée via Docker Compose pour un déploiement fluide.</li>
            </ul>
        `,
        github: "https://github.com/oumniya03/student-management-app"
    },
    {
        id: 6,
        title: "Prédiction Efficacité Énergétique",
        icon: "fa-bolt",
        image: "Medias/pred_batiments.png",
        tags: ["Scikit-learn", "ELM", "Data Science"],
        shortDesc: "Prédiction des charges de chauffage/refroidissement de bâtiments. Étude comparative entre architecture ELM et Backpropagation classique.",
        fullDesc: `
            <p>Projet académique visant à prédire la charge de chauffage et de refroidissement des bâtiments résidentiels à partir de leurs caractéristiques architecturales.</p>
            <h3>📊 Méthodologie et Modèles :</h3>
            <ul>
                <li><strong>Approches testées :</strong> Extreme Learning Machine (ELM) contre réseaux de neurones classiques par Backpropagation (MLPRegressor).</li>
                <li><strong>Optimisation :</strong> Recherche par grille sur les couches cachées et fonctions d'activation (ReLU, tanh, sigmoid).</li>
                <li><strong>Conclusion :</strong> Bien que la Backpropagation offre la meilleure précision (R² = 0.99), l'ELM s'est révélé être une alternative très rapide avec des prédictions visuellement fluides.</li>
            </ul>
        `,
        github: "https://github.com/oumniya03/Prediction-of-Energy-Efficiency-of-Buildings"
    },
    {
        id: 7,
        title: "Classification Déchets IoT (Edge AI)",
        icon: "fa-recycle",
        image: "Medias/dechets.png",
        tags: ["Edge Impulse", "ESP32-CAM", "Arduino"],
        shortDesc: "Système de tri automatique avec une caméra ESP32-CAM. Déploiement d'un modèle de classification visuelle sur microcontrôleur.",
        fullDesc: `
            <p>Solution innovante pour automatiser le tri sélectif des déchets grâce à l'IoT et au Machine Learning embarqué (Edge AI).</p>
            <h3>🏗️ Fonctionnement :</h3>
            <ul>
                <li><strong>Matériel :</strong> Microcontrôleur ESP32-CAM pour capturer les images en temps réel.</li>
                <li><strong>Modèle :</strong> Modèle de Computer Vision entraîné via la plateforme Edge Impulse et exporté sous forme de librairie C++.</li>
                <li><strong>Inférence locale :</strong> Le modèle classifie l'objet (Verre, Carton, Papier) localement, sans cloud, et déclenche l'allumage d'une LED spécifique simulant un tri mécanique.</li>
            </ul>
        `,
        github: "https://github.com/oumniya03/Waste_Classification"
    },
    {
        id: 8,
        title: "Image Processing App",
        icon: "fa-image",
        image: "Medias/traitement_img.png",
        tags: ["OpenCV", "SciPy", "Tkinter", "Python"],
        shortDesc: "Laboratoire interactif d'analyse visuelle en Python. Intègre +20 algorithmes : débruitage, détection de contours, filtrage fréquentiel.",
        fullDesc: `
            <p>Application de bureau avec interface graphique Tkinter pour appliquer et visualiser en temps réel des algorithmes de traitement d'images.</p>
            <h3>✨ Algorithmes implémentés :</h3>
            <ul>
                <li><strong>Filtrage Spatial :</strong> Moyenneur, Gaussien, Médian, Conique, Pyramidal.</li>
                <li><strong>Contours & Morphologie :</strong> Sobel, Prewitt, Canny, Érosion, Dilatation, Top Hat.</li>
                <li><strong>Filtrage Fréquentiel :</strong> Transformée de Fourier, filtres Idéal et Butterworth, filtrage Homomorphique.</li>
                <li><strong>Détection de points d'intérêt :</strong> Détecteurs de Harris et SUSAN.</li>
            </ul>
        `,
        github: "https://github.com/oumniya03/image_processing"
    },
    {
        id: 3,
        title: "See For Me (PFE - Image Captioning)",
        icon: "fa-eye",
        image: "Medias/see_for_me.png",
        tags: ["PyTorch", "VGG-16", "LSTM", "Android"],
        shortDesc: "Application mobile Android pour assister les malvoyants. Combine Vision par ordinateur et NLP pour analyser et décrire vocalement l'environnement.",
        fullDesc: `
            <p>Mon Projet de Fin d'Études visant à développer une application mobile Android destinée à aider les personnes aveugles ou malvoyantes.</p>
            <h3>🛠️ Architecture Encoder-Decoder :</h3>
            <ul>
                <li><strong>Encodeur (Vision) :</strong> VGG-16 utilisé via Transfer Learning pour extraire les caractéristiques visuelles.</li>
                <li><strong>Décodeur (Texte) :</strong> Un réseau récurrent LSTM génère la phrase descriptive mot par mot.</li>
                <li><strong>Text-to-Speech :</strong> Conversion de la description texte générée en voix.</li>
                <li><strong>Performances :</strong> Le modèle a surpassé DenseNet-201 lors de l'étude (Accuracy: 70.17%). Entraîné sur le dataset Flickr8k.</li>
            </ul>
        `,
        github: "https://github.com/oumniya03/SeeForMe-Image-Captioning"
    }
];

const elaviExpData = {
    id: "elavi",
    title: "Ingénieure IA - Stage PFE (Belgian Law Brain)",
    icon: "fa-briefcase",
    image: "Medias/logo_blb.png",
    tags: ["Claude Opus 4.7", "n8n", "Qdrant", "FastAPI", "Playwright", "Supabase"],
    shortDesc: "Conception et déploiement d'un conseiller juridique de première ligne (Agentic RAG) intégré à la plateforme Flugia.",
    fullDesc: `
        <p>Conception et déploiement d'un conseiller juridique de première ligne (Agentic RAG) pour la plateforme Flugia, visant à simplifier l'accès au droit belge pour les PME.</p>

        <h3>🚀 Points clés & Réalisations :</h3>

        <ul>
            <li><strong>Orchestration multi-sources :</strong> Développement d'un agent autonome (Claude Opus 4.7, n8n) pilotant 9 outils dynamiques (recherche vectorielle sur Qdrant, scraping de jurisprudence en temps réel via FastAPI/Playwright, veille automatisée).</li>
            <li><strong>Fiabilité & Sécurité :</strong> Prévention stricte des hallucinations et intégration native de la conformité au règlement européen (AI Act) grâce à un prompt système avancé structuré en 7 blocs de sécurité.</li>
            <li><strong>Évaluation scientifique :</strong> Mesure rigoureuse des performances via des métriques IR et le framework RAGAS, démontrant la supériorité de l'approche agentique et prouvant une exactitude documentaire de plus de 73%.</li>
            <li><strong>Déploiement :</strong> Intégration complète avec persistance des profils et des conversations (Supabase) et hébergement cloud de l'API (Vercel/Railway).</li>
        </ul>
    `,
    github: "https://github.com/oumniya03/Belgian-Law-Brain-Agentic-RAG.git"
};

// Génération dynamique des cartes de projets
const container = document.getElementById('projects-container');
let html = '';

projectsData.forEach(p => {
    const tagsHtml = p.tags.map(t => `<span class="tech-tag">${t}</span>`).join('');
    let imageHtml = '';
    if (p.image) {
        const imgSrc = encodeURI(p.image);
        imageHtml = `<img src="${imgSrc}" alt="${p.title}" loading="lazy">`;
    } else {
        imageHtml = `<i class="fas ${p.icon} main-icon"></i>`;
    }

    html += `
        <div class="project-card fade-in-section" data-id="${p.id}">
            <div class="project-image">
                ${imageHtml}
                <div class="project-overlay">
                    <div class="project-links">
                        <a href="${p.github}" target="_blank" class="project-link" title="Code Source"><i class="fab fa-github"></i></a>
                        <a href="#" class="project-link more-btn" title="Détails" data-id="${p.id}"><i class="fas fa-plus"></i></a>
                    </div>
                </div>
            </div>
            <div class="project-content">
                <h3>${p.title}</h3>
                <p>${p.shortDesc}</p>
                <div class="project-tech">
                    ${tagsHtml}
                </div>
            </div>
        </div>
    `;
});
container.innerHTML = html;

// Gestion de la Modal
const modal = document.getElementById('project-modal');
const closeBtn = document.querySelector('.close-modal');

function openModal(data) {
    document.getElementById('modal-title').innerText = data.title;
    document.getElementById('modal-tags').innerHTML = data.tags.map(t => `<span class="tech-tag">${t}</span>`).join('');
    document.getElementById('modal-description').innerHTML = data.fullDesc;
    document.getElementById('modal-github-link').href = data.github;

    // modal image handling
    const modalImage = document.getElementById('modal-image');
    const modalImageImg = document.getElementById('modal-image-img');
    const modalCaption = document.getElementById('modal-image-caption');

    if (data.image) {
        const src = encodeURI(data.image);
        modalImageImg.src = src;
        modalImageImg.alt = data.title;
        modalCaption.innerText = data.imageCaption || data.title;
        modalImage.style.display = 'block';
    } else {
        modalImageImg.src = '';
        modalCaption.innerText = '';
        modalImage.style.display = 'none';
    }

    // clicking the modal image opens the lightbox
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    modalImageImg.onclick = () => {
        if (modalImageImg.src) {
            lightboxImg.src = modalImageImg.src;
            lightbox.style.display = 'flex';
            document.body.style.overflow = 'hidden';
        }
    };

    lightbox.onclick = () => {
        lightbox.style.display = 'none';
        lightboxImg.src = '';
    };

    modal.classList.add('active');
    document.body.style.overflow = 'hidden'; // bloque le scroll de la page
}

document.querySelectorAll('.more-btn').forEach(btn => {
    btn.addEventListener('click', function(e) {
        e.preventDefault();
        const id = parseInt(this.getAttribute('data-id'));
        const project = projectsData.find(p => p.id === id);
        openModal(project);
    });
});

document.querySelectorAll('.more-btn-exp').forEach(btn => {
    btn.addEventListener('click', function(e) {
        e.preventDefault();
        const expId = this.getAttribute('data-exp-id');
        if (expId === 'elavi') {
            openModal(elaviExpData);
        }
    });
});

closeBtn.addEventListener('click', () => {
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    if (lightbox) { lightbox.style.display = 'none'; lightboxImg.src = ''; }
});

modal.addEventListener('click', (e) => {
    if(e.target === modal) {
        modal.classList.remove('active');
        document.body.style.overflow = 'auto';
        const lightbox = document.getElementById('lightbox');
        const lightboxImg = document.getElementById('lightbox-img');
        if (lightbox) { lightbox.style.display = 'none'; lightboxImg.src = ''; }
    }
});

// Observer pour les animations
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.fade-in-section').forEach((el) => {
    observer.observe(el);
});

// Navbar blur effect on scroll
window.addEventListener('scroll', () => {
    const nav = document.getElementById('navbar');
    if (window.scrollY > 50) {
        nav.classList.add('shadow-lg');
        nav.style.background = 'rgba(15, 23, 42, 0.9)';
    } else {
        nav.classList.remove('shadow-lg');
        nav.style.background = 'rgba(30, 41, 59, 0.7)';
    }
});

// Typewriter animation for hero subtitle
const typewriterTexts = ["Data Scientist", "AI Engineer", "ML Engineer","Data Engineer","Data Analyst","AI Researcher"];
const typewriterElement = document.getElementById('typewriter-text');
let typewriterIndex = 0;
let typewriterOffset = 0;
let typewriterDeleting = false;
const typewriterTypingSpeed = 100;
const typewriterPauseSpeed = 1200;

function runTypewriter() {
    if (!typewriterElement) return;
    const currentText = typewriterTexts[typewriterIndex];
    if (typewriterDeleting) {
        typewriterOffset -= 1;
        typewriterElement.textContent = currentText.substring(0, typewriterOffset);
        if (typewriterOffset === 0) {
            typewriterDeleting = false;
            typewriterIndex = (typewriterIndex + 1) % typewriterTexts.length;
            setTimeout(runTypewriter, typewriterTypingSpeed);
            return;
        }
        setTimeout(runTypewriter, typewriterTypingSpeed / 2);
    } else {
        typewriterOffset += 1;
        typewriterElement.textContent = currentText.substring(0, typewriterOffset);
        if (typewriterOffset === currentText.length) {
            typewriterDeleting = true;
            setTimeout(runTypewriter, typewriterPauseSpeed);
            return;
        }
        setTimeout(runTypewriter, typewriterTypingSpeed);
    }
}

setTimeout(runTypewriter, 500);
// Gestion du formulaire de contact (envoi en arrière-plan sans recharger la page)
const contactForm = document.querySelector('#contact form');

if (contactForm) {
    contactForm.addEventListener('submit', async function(e) {
        e.preventDefault(); // Empêche la redirection vers la page Formspree
        
        const form = e.target;
        const data = new FormData(form);
        const button = form.querySelector('button[type="submit"]');
        const originalText = button.innerHTML;
        
        // Change le texte du bouton pour montrer que ça charge
        button.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Envoi en cours...';
        button.disabled = true;
        
        try {
            const response = await fetch(form.action, {
                method: form.method,
                body: data,
                headers: {
                    'Accept': 'application/json'
                }
            });
            
            if (response.ok) {
                // Succès : on met le bouton en vert
                button.innerHTML = '<i class="fas fa-check"></i> Message envoyé !';
                button.classList.replace('bg-sky-500', 'bg-green-500');
                button.classList.replace('hover:bg-sky-600', 'hover:bg-green-600');
                form.reset(); // Vide les champs du formulaire
                
                // Remet le bouton à son état normal après 4 secondes
                setTimeout(() => {
                    button.innerHTML = originalText;
                    button.classList.replace('bg-green-500', 'bg-sky-500');
                    button.classList.replace('hover:bg-green-600', 'hover:bg-sky-600');
                    button.disabled = false;
                }, 4000);
            } else {
                // Erreur côté serveur
                button.innerHTML = '<i class="fas fa-exclamation-triangle"></i> Erreur lors de l\'envoi';
                button.disabled = false;
            }
        } catch (error) {
            // Erreur de connexion
            button.innerHTML = '<i class="fas fa-wifi"></i> Erreur réseau';
            button.disabled = false;
        }
    });
}

