function AboutPage() {
  return (
    <div className="container mx-auto p-6">
      <div className="card bg-base-100 shadow-xl">
        <div className="card-body">
          <h1 className="text-2xl font-bold">About</h1>
          <p>
            This is a graduation project to build an AI-powered image description app.
            Our team uses advanced computer vision and NLP models to generate accurate
            descriptions of uploaded images.
          </p>
          <p>Tech stack: React, Django, DaisyUI, and [Your AI Model].</p>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;