export default function SingleColumn({ sectiondata }) {
  return (
    <div className="section--single">
      <section className="content--single container">
        <div dangerouslySetInnerHTML={{ __html: sectiondata.content }}></div>
      </section>
    </div>
  );
}
