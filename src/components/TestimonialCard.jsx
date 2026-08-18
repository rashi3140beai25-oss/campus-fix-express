function TestimonialCard({ testimonial }) {
  return (
    <blockquote className="card card-hover" style={{ margin: 0 }}>
      <p style={{ fontSize: "15.5px" }}>“{testimonial.text}”</p>
      <footer className="small muted">
        <b style={{ color: "var(--ink)" }}>{testimonial.name}</b> — {testimonial.course}
      </footer>
    </blockquote>
  );
}

export default TestimonialCard;
