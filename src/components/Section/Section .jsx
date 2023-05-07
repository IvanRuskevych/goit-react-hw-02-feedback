function Section({ titleText = '', children }) {
  return (
    <section className="section">
      <h2 className="title">{titleText}</h2>
      {children}
    </section>
  );
}

export default Section;
