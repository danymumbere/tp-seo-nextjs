const coursList = [
  {
    id: "01",
    icone: "|🎨|",
    titre: "Design de marque",
    description: "Crée une identité distinctive qui résonne avec votre audience et reste à part sur le marché.",
  },
  {
    id: "02",
    icone: "|💻|",
    titre: "Développement web",
    description: "Construis rapidement, des sites web scallables qui chargent vite, engagent les visiteurs et les change en clients.",
  },
  {
    id: "03",
    icone: "|📷|",
    titre: "Photographie",
    description: "Capture des visuels clairs qui racontent l'histoire de ton identité et supporte le marketing de tes produits.",
  },
  {
    id: "04",
    icone: "|📢|",
    titre: "Marketing digital",
    description: "Campagnes stratégiques qui atteignent votre audience cible et apportent une croissance mesurable.",
  },
];

const statsList = [
  { chiffre: "500+", label: "Projets réalisés" },
  { chiffre: "98%", label: "de satisfaction client" },
  { chiffre: "+12", label: "années d'expérience" },
  { chiffre: "50+", label: "Membres de l'équipe" },
];

export default function Home() {
  return (
    <>
      <header className="site-header">
        <div className="container navigation">
          <a href="#accueil" className="logo" aria-label="Deep Training">
            <span className="logo-icon"></span>
            <span className="logo-text">DEEP TRAINING</span>
          </a>
          <nav className="nav-links" aria-label="Navigation principale">
            <a href="#accueil">Accueil</a>
            <a href="#work">Work</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="hero" id="accueil">
          <div className="container hero-grid">
            <div className="hero-content">
              <h1>Pour votre formation.</h1>
              <p className="hero-description">
                Pour votre formation, ici vous pouvez transformer un titre de cours en une formation complète
              </p>
              <div className="hero-actions">
                <a href="https://danymak.infinityfree.io/app/" className="button button-primary">
                  Accéder À L&apos;application
                </a>
                <a href="https://danymak.infinityfree.io/app/" className="button button-outline">
                  Voir Les Cours Disponibles
                </a>
              </div>
              <div className="hero-secondary-action">
                <a href="https://resources-aime.netlify.app/" className="button button-dark">
                  Produit Similaire
                </a>
              </div>
            </div>

            <div className="hero-visual">
              <div className="preview-cards">
                <div className="preview-card card-1">
                  <span>Identité de marque</span>
                </div>
                <div className="preview-card card-2 active">
                  <span>Web Design</span>
                </div>
                <div className="preview-card card-3">
                  <span>Photographie</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Courses Section */}
        <section className="section courses-section" id="work">
          <div className="container">
            <div className="section-heading text-center">
              <h2>Quelques idées de titres de cours</h2>
              <p>Pour te permettre d&apos;avoir tout le bagage technique dont tu as besoin pour transformer tes projets en réalité.</p>
            </div>
            <div className="courses-grid">
              {coursList.map((cours) => (
                <div className="course-card" key={cours.id}>
                  <div className="course-icon">{cours.icone}</div>
                  <h3>{cours.titre}</h3>
                  <p>{cours.description}</p>
                  <a href="#contact" className="course-link">
                    Learn more →
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="section stats-section">
          <div className="container">
            <h2 className="stats-title">Nous visons:</h2>
            <div className="stats-grid">
              {statsList.map((stat, index) => (
                <div className="stat-item" key={index}>
                  <div className="stat-number">{stat.chiffre}</div>
                  <div className="stat-label">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="cta-section" id="contact">
          <div className="container cta-box">
            <h2>Commençons ensemble</h2>
            <p>Prêt à te transformer d&apos;apprenti à expérimenté ?</p>
            <div className="cta-actions">
              <a href="https://danymak.infinityfree.io/app/" className="button button-dark-outline">
                Voir Les Cours Disponibles
              </a>
              <a href="https://danymak.infinityfree.io/app/" className="button button-light">
                Accéder À L&apos;application
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-inner">
          <p>© 2026 Default. All rights reserved.</p>
          <div className="footer-links">
            <a href="#accueil">Accueil</a>
            <a href="#work">Work</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </footer>
    </>
  );
}