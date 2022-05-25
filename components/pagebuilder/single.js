export default function SingleColumn({ sectiondata }) {
  return (
    <section className="section--single">
      <div className="content--single container">
        <div dangerouslySetInnerHTML={{ __html: sectiondata.content }}></div>
      </div>
    </section>
  );
}
