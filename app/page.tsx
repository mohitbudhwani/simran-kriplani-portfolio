const publications = [
  ["2025","Original research","Enhancing Bond Strength and Sealing Ability: Nanoparticle Incorporation in 5th Generation Adhesive Systems","Journal of Datta Meghe Institute of Medical Sciences University"],
  ["2024","Research protocol","Comparative Evaluation of Graphene Oxide and Hydroxyapatite Nanoparticles on Micro Tensile Bond Strength","F1000Research"],
  ["2024","Case report","Clinical Chronicles: A Case Report on Pink Tooth of Mummery","Iranian Endodontic Journal"],
  ["2024","Case series","Non-surgical Management of Periapical Lesions with Newer Modalities","Cureus"],
  ["2024","Case report","Surgical Management of Radicular Cyst with Advanced Platelet-Rich Fibrin and Bone Graft","Cureus"],
];
const Arrow=()=> <span aria-hidden="true">↗</span>;
export default function Home(){
return <main>
  <header className="header">
    <a className="brand" href="#top"><span>SK</span><b>Dr. Simran Kriplani</b></a>
    <nav>{["Profile","Research","Peer review","Recognition","Experience","Gallery"].map(x=><a key={x} href={"#"+x.toLowerCase().replace(" ","-")}>{x}</a>)}</nav>
    <a className="connect" href="#contact">Connect <Arrow/></a>
  </header>

  <section className="hero" id="top">
    <div className="heroCopy">
      <p className="eyebrow"><i/> Endodontist · Researcher · Academic Educator</p>
      <h1>Science in service of <em>better care.</em></h1>
      <p className="intro">Dr. Simran Kriplani advances evidence-based endodontics through clinical research, dental biomaterials, and the education of future clinicians.</p>
      <div className="actions"><a className="button" href="#research">Explore research <Arrow/></a><a className="underlink" href="#profile">Professional profile ↓</a></div>
      <div className="metrics">{[["16","Published articles"],["45","Citations"],["7","First-author works"],["9","Completed reviews"]].map(x=><div key={x[1]}><b>{x[0]}</b><span>{x[1]}</span></div>)}</div>
      <small className="note">Citation metrics verified July 2026</small>
    </div>
    <div className="portrait" aria-label="Professional portrait placeholder"><div className="rings"/><strong>SK</strong><div className="portraitNote"><span>Portrait forthcoming</span><small>Professional headshot placeholder</small></div></div>
  </section>

  <section className="profile section" id="profile">
    <div className="side"><p className="index">01 — Profile</p><span>Professional focus</span></div>
    <div><h2>Preserving natural teeth through biologically informed, minimally invasive treatment.</h2><div className="columns"><p>An MDS-qualified endodontist and Senior Lecturer in Conservative Dentistry and Endodontics at Datta Meghe Institute of Higher Education and Research, Dr. Kriplani works at the intersection of clinical care, scholarship, and professional education.</p><p>Her interests span vital-pulp therapy, regenerative endodontics, dental biomaterials, endodontic surgery, and adhesive dentistry—united by a commitment to rigorous evidence and patient-centered outcomes.</p></div></div>
  </section>
  <section className="expertise">{["Vital-pulp therapy","Regenerative endodontics","Dental biomaterials","Endodontic surgery","Minimally invasive dentistry"].map((x,i)=><div key={x}><span>0{i+1}</span><b>{x}</b></div>)}</section>

  <section className="section" id="research">
    <div className="heading"><div><p className="index">02 — Research</p><h2>Selected scholarship</h2></div><p>Research grounded in clinical questions, material science, and conservative approaches to complex endodontic care.</p></div>
    <div className="feature">
      <div className="visual"><i className="dot a"/><i className="dot b"/><i className="dot c"/><span>Featured theme</span><strong>Biomaterials<br/>× Adhesion</strong></div>
      <div className="featureCopy"><p className="eyebrow">Nanoparticle-modified adhesive systems</p><h3>Exploring how material innovation can improve bond strength and sealing ability.</h3><p>This body of work examines graphene oxide and hydroxyapatite nanoparticles within fifth-generation adhesive systems, connecting laboratory evaluation with clinically relevant restorative outcomes.</p><a className="underlink" href="#publications">View publication record <Arrow/></a></div>
    </div>
    <div className="pubs" id="publications"><div className="pubHead"><span>Year / type</span><span>Publication</span><span>Role</span></div>{publications.map(p=><article key={p[2]}><div><b>{p[0]}</b><small>{p[1]}</small></div><div><h3>{p[2]}</h3><p>{p[3]}</p></div><div><span>First author</span><Arrow/></div></article>)}</div>
    <a className="outline" href="#contact">Request complete publication list <Arrow/></a>
  </section>

  <section className="dark section" id="peer-review">
    <div className="heading light"><div><p className="index">03 — Peer review</p><h2>Contributing to scholarly quality.</h2></div><p>Completed evaluations of clinical and biomedical manuscripts in dentistry and allied health fields.</p></div>
    <div className="review"><div className="reviewNumber"><b>9</b><span>Completed journal reviews</span><small>Verified through editorial acknowledgments and reviewer certificates</small></div><div className="reviewCopy"><h3>Areas of evaluation</h3><ul><li>Clinical endodontics and periapical pathology</li><li>Restorative and conservative dentistry</li><li>Biomedical case reports and clinical research</li></ul><p>Public records exclude confidential manuscript details, author identities, and review commentary.</p></div></div>
  </section>

  <section className="section" id="recognition">
    <div className="heading"><div><p className="index">04 — Recognition</p><h2>Academic distinction & scientific exchange</h2></div><p>Selected achievements presented with their exact level and context.</p></div>
    <div className="recognition">
      <article className="award"><span>Featured recognition · 2026</span><div>PFA</div><h3>Student of the Year Award<br/><em>Postgraduate Category</em></h3><p>Pierre Fauchard Academy — Awards & Convocation 2026</p></article>
      <div className="recognitionList">{[
        ["Academic excellence","MDS Gold Medal","First rank in the final MDS examination"],
        ["National conference · 2024","39th IACDE National Conference","Scientific presentation and conference recognition · Mumbai"],
        ["International conference · 2024","IFEA World Endodontic Congress","Scientific presentation · Glasgow, Scotland"],
        ["Scientific exchange","ISDR / IADR & NIDACON","Research presentations at national scientific forums"],
      ].map(x=><article key={x[1]}><span>{x[0]}</span><h3>{x[1]}</h3><p>{x[2]}</p></article>)}</div>
    </div>
  </section>

  <section className="section experience" id="experience">
    <div className="heading"><div><p className="index">05 — Experience</p><h2>Educator. Clinician. Mentor.</h2></div><p>Academic practice shaped by careful supervision, research engagement, and clear clinical reasoning.</p></div>
    <div className="career"><div className="careerTitle"><span>Current appointment</span><h3>Senior Lecturer</h3><p>Department of Conservative Dentistry and Endodontics</p><b>Datta Meghe Institute of Higher Education and Research</b></div><div className="duties">{[["01","Clinical education","Supervising undergraduate clinical training and reinforcing evidence-based decision-making."],["02","Research mentorship","Supporting scholarly writing, presentations, and clinically relevant inquiry."],["03","Academic evaluation","Contributing to practical examinations, viva assessment, and scientific activities."]].map(x=><div key={x[0]}><span>{x[0]}</span><h4>{x[1]}</h4><p>{x[2]}</p></div>)}</div></div>
  </section>

  <section className="community"><div><p className="index">06 — Community</p><h2>Care beyond the clinic.</h2><p>Oral-health screening, education, mobile dental services, and initiatives focused on expanding access to preventive care.</p></div><div>{["Oral-health camps","Mobile dental services","Tobacco awareness","Rotaract service","COVID-19 duty"].map(x=><span key={x}>{x}</span>)}</div></section>

  <section className="section" id="gallery">
    <div className="heading"><div><p className="index">07 — Gallery</p><h2>A record of work in action.</h2></div><p>Conference, presentation, teaching, recognition, and community photographs will be curated here.</p></div>
    <div className="gallery"><div className="tile t1"><span>Conferences</span></div><div className="tile t2"><span>Scientific presentations</span></div><div className="tile t3"><span>Academic life</span></div><div className="coming"><i>+</i><h3>Gallery coming soon</h3><p>A curated visual archive is being prepared.</p></div></div>
  </section>

  <section className="contact" id="contact"><p className="index">08 — Contact</p><h2>Interested in research, education, or scientific collaboration?</h2><p>Professional contact details and scholarly profiles will be added shortly.</p><div><a className="button white" href="mailto:placeholder@example.com">Contact placeholder <Arrow/></a><a className="underlink lightLink" href="#top">Back to top ↑</a></div></section>
  <footer><div className="brand"><span>SK</span><b>Dr. Simran Kriplani</b></div><p>Endodontist · Researcher · Academic Educator</p><small>© 2026 Dr. Simran Kriplani</small></footer>
</main>}
