const sections = [...document.querySelectorAll('.docs-content [id]')];
const links = [...document.querySelectorAll('.docs-sidebar a')];

if (sections.length && links.length) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      links.forEach((link) => link.classList.toggle('active', link.hash === `#${entry.target.id}`));
    });
  }, { rootMargin: '-20% 0px -70% 0px' });

  sections.forEach((section) => observer.observe(section));
}
