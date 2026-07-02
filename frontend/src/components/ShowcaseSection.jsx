function ShowcaseSection({ children, title }) {
  const titleId = `${title.toLowerCase().replaceAll(' ', '-')}-title`;

  return (
    <section className="showcase-section" aria-labelledby={titleId}>
      <h2 id={titleId}>{title}</h2>
      {children}
    </section>
  );
}

export default ShowcaseSection;
