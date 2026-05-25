import React, { useState } from 'react';
import useIntersectionObserver from '../hooks/useIntersectionObserver';
import Button from '../components/Button';
import Card from '../components/Card';
import Modal from '../components/Modal';
import Form, { FormInput, FormTextArea } from '../components/Form';
import ResumeSection from '../components/ResumeSection';
import aboutImage from '../assets/about.png';

/**
 * Core portfolio page container.
 * Combines layout regions, interactive states, custom observers, and premium bento structures.
 */
const Home = () => {
  // Activate Intersection Observer Hook for dynamic scroll entries
  useIntersectionObserver();

  // Contact Form States
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [formErrors, setFormErrors] = useState({});
  const [isSubmitModalOpen, setIsSubmitModalOpen] = useState(false);

  // Form Validation
  const validateForm = () => {
    const errors = {};
    if (!formData.name.trim()) errors.name = 'Name is required';
    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Please provide a valid email address';
    }
    if (!formData.message.trim()) errors.message = 'Message is required';
    return errors;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear validation error when typing
    if (formErrors[name]) {
      setFormErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    // Success - Open premium confirmation modal
    setIsSubmitModalOpen(true);
    setFormData({ name: '', email: '', message: '' });
  };

  // Static Data Arrays
  const techStack = [
    { name: 'React', delay: 100 },
    { name: 'Django', delay: 200 },
    { name: 'JavaScript', delay: 300 },
    { name: 'Python', delay: 400 },
    { name: 'PostgreSQL', delay: 500 },
    { name: 'REST API', delay: 600 },
  ];

  const experience = [
    {
      title: 'Freelance Projects',
      description: 'Building client-specific web solutions from scratch.',
      period: 'PRESENT',
      delay: 0,
      active: true,
    },
    {
      title: 'Self-Learning & Development',
      description: 'Mastering React, Django, and modern architectural patterns.',
      period: '2023 - 2024',
      delay: 100,
      active: false,
    },
    {
      title: 'Building Real-World Apps',
      description: 'Developing full-stack prototypes to solve niche problems.',
      period: '2023',
      delay: 200,
      active: false,
    },
    {
      title: 'Skill Accumulation',
      description: 'Foundational computer science concepts and language proficiency.',
      period: 'INITIATION',
      delay: 300,
      active: false,
    },
  ];

  const benefits = [
    { icon: 'code', title: 'Clean Code', desc: 'Focusing on readability, modularity, and long-term maintainability of every codebase.', delay: 0 },
    { icon: 'devices', title: 'Responsive Design', desc: 'Ensuring seamless experiences across all screen sizes from mobile to ultra-wide desktop.', delay: 100 },
    { icon: 'layers', title: 'Full Stack', desc: 'Bridging the gap between creative frontend design and powerful backend infrastructure.', delay: 200 },
    { icon: 'api', title: 'API Integration', desc: 'Expertly connecting diverse services and databases through efficient RESTful APIs.', delay: 300 },
    { icon: 'bolt', title: 'Fast Learning', desc: 'Rapidly adapting to new frameworks and tools to stay at the forefront of technology.', delay: 400 },
    { icon: 'psychology', title: 'Problem Solving', desc: 'Approaching technical hurdles with analytical thinking and creative engineering.', delay: 500 },
  ];

  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-featured digital storefront with complex inventory management.',
      tags: ['REACT', 'DJANGO'],
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCWfHXwtOBFk76PCGrDHtUdGP3T9n7GvjF3vrVAFmBvheS9KihdIwW5fI69AI3xf41KBMrjnMpRrUigDO1-gtCAPrEUZRRuC8jojozySyyTkvWL05FURQdo_wQsRTABiFLp7sI0NhIlqh3GC1e5KrUPAqu3kn1UmWkZYONfMJEk5SHyTLhZx1c-WYTI9tP8W_062hmZAoRonbGoWPsYQLyiHEglQ7MNUiR6voLjxX4MYYnmZoUbZTs5V2YHSouqsi6qy4Eb-CHHsKW_',
      delay: 0,
    },
    {
      title: 'Business Landing Website',
      description: 'High-performance corporate presence focusing on conversion optimization.',
      tags: ['REACT', 'TAILWIND'],
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDnNPbrmf4N_xVbe8zH7MKvQgHgWXV71kmNVV6R-qe4uRLWcKznvJKzenofdVRMfYfYT1nWS1ve7GBqpVerURj2XDXEMd5l3P4r9Cg9TZWsime9SrKDN9XyjU_eU7F2Ak9gZkG4FSWwmpSKHPvEWS7YXJYWfkzcfE7bAZlk2T0uCoI7SPnGUEcQXxyonHQpO0RyG4UZEmPji4sJGK9eh6ht_BApxod86E16-Ot9qZwC17OyjTFGCmKGC_HTBjdIn7n9Yn4KIB6krJwC',
      delay: 150,
    },
    {
      title: 'Portfolio & Service Site',
      description: 'A dynamic portfolio engine built to showcase creative work.',
      tags: ['DJANGO', 'POSTGRES'],
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCH4TPuJYaJ9Kx_npfb9vrFjKQC7XC0WoduEjRABAboYf1cqKRjABgU5_poY2N5V7-yYYKprkDFdpznnWOp3IawakW07elymbrsQe8gshNmGnII0UDXuGnebPCcE64c4wnQQYWXnaH2AhBVUMMd96jOHEPr9y2EKnOoKJXn-drKiS-edUVBzSAurZeyrvP7xSYSrmXZCkHU2DQEYL679pZ5_HsxHKtGmf2TRdyZGa1sEa0GFAliaS4sbU6GUZyNbl2Vl6qKReEMyDUB',
      delay: 300,
    },
  ];

  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="min-h-[550px] flex flex-col justify-center items-center text-center px-gutter py-16">
        <h1 className="font-headline-xl text-headline-xl mb-6 tracking-tighter reveal active">
          SARANYA S.
        </h1>
        <p 
          className="text-label-md font-label-md text-outline tracking-widest mb-4 reveal active" 
          style={{ transitionDelay: '200ms' }}
        >
          FULL STACK DEVELOPER
        </p>
        <p 
          className="max-w-2xl font-body-lg text-body-lg text-on-surface-variant mb-12 reveal active" 
          style={{ transitionDelay: '400ms' }}
        >
          Building scalable web applications with modern frontend and backend technologies. Focused on performance, architecture, and user-centric design.
        </p>
        <div 
          className="flex flex-col sm:flex-row gap-6 reveal active" 
          style={{ transitionDelay: '600ms' }}
        >
          <Button variant="heroPrimary" href="#work">
            View Projects 
            <span className="material-symbols-outlined text-sm">arrow_forward</span>
          </Button>
          <Button variant="glass" href="#contact">
            Contact Me
          </Button>
        </div>
      </section>

      {/* Tech Stack Badges */}
      <section className="max-w-container-max mx-auto px-gutter mb-24 reveal">
        <div className="flex flex-wrap justify-center gap-4">
          {techStack.map((tech, idx) => (
            <div 
              key={idx}
              className="bg-surface-container-high border border-outline-variant/20 px-6 py-3 rounded-full font-label-md text-label-md text-on-surface flex items-center gap-2 stagger-item" 
              style={{ animationDelay: `${tech.delay}ms` }}
            >
              <span className="w-2 h-2 rounded-full bg-primary" /> 
              {tech.name}
            </div>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section className="py-section-padding px-gutter bg-surface-container-lowest" id="about">
        <div className="max-w-container-max mx-auto grid md:grid-cols-2 gap-20 items-center">
          <div className="reveal">
            <h2 className="font-headline-lg text-headline-lg mb-8 text-left">About Me</h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant mb-6 text-left">
              I am a passionate Full Stack Developer embarking on a professional journey to build digital experiences that matter. My focus lies at the intersection of aesthetic frontend interfaces and robust backend systems.
            </p>
            <p className="font-body-lg text-body-lg text-on-surface-variant mb-8 text-left">
              As a fresher freelancer, I bring a learning mindset and a deep commitment to writing clean, maintainable code. I thrive in solving complex problems and continuously expanding my technical repertoire.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <Card className="p-6">
                <h4 className="text-headline-md font-headline-md mb-2 text-left">Learning</h4>
                <p className="text-on-surface-variant text-body-md font-body-md text-left">
                  Always evolving with modern web standards.
                </p>
              </Card>
              <Card className="p-6">
                <h4 className="text-headline-md font-headline-md mb-2 text-left">Precision</h4>
                <p className="text-on-surface-variant text-body-md font-body-md text-left">
                  Meticulous attention to UI and UX details.
                </p>
              </Card>
            </div>
          </div>
          
          <div className="relative reveal">
            <div className="aspect-square bg-surface-container-high rounded-2xl overflow-hidden group">
              <img 
                className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700" 
                alt="A professional, artistic portrait" 
                src={aboutImage}
              />
            </div>
            <Card className="absolute -bottom-10 -left-10 px-6 py-5 rounded-xl w-[280px]">
              <p className="text-headline-md font-headline-md mb-1 text-left">Freelance</p>
              <p className="text-on-surface-variant text-label-md font-label-md text-left leading-[1.6]">
                Open for collaboration on<br />innovative web projects.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Experience Timeline */}
      <section className="py-section-padding px-gutter" id="experience">
        <div className="max-w-container-max mx-auto">
          <div className="mb-16 reveal text-left">
            <p className="text-label-md font-label-md text-outline tracking-widest mb-2">JOURNEY</p>
            <h2 className="font-headline-lg text-headline-lg">Freelance &amp; Learning</h2>
          </div>
          
          <div className="space-y-12">
            {experience.map((exp, idx) => (
              <div 
                key={idx}
                className="relative pl-12 border-l border-outline-variant/20 reveal"
                style={{ transitionDelay: `${exp.delay}ms` }}
              >
                <div 
                  className={`absolute left-[-5px] top-0 w-[9px] h-[9px] rounded-full ${
                    exp.active ? 'bg-primary' : 'bg-primary/40'
                  }`} 
                />
                <div className="flex flex-col md:flex-row md:justify-between gap-4 text-left">
                  <div>
                    <h3 className="font-headline-md text-headline-md">{exp.title}</h3>
                    <p className="text-on-surface-variant text-body-md font-body-md">
                      {exp.description}
                    </p>
                  </div>
                  <span className="text-label-md font-label-md text-outline">{exp.period}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Hire Me (Bento Style) */}
      <section className="py-section-padding px-gutter bg-surface-container-lowest">
        <div className="max-w-container-max mx-auto">
          <div className="mb-16 text-center reveal">
            <h2 className="font-headline-lg text-headline-lg">Why Hire Me</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {benefits.map((benefit, idx) => (
              <Card 
                key={idx} 
                className="p-card-padding rounded-2xl text-left" 
                reveal 
                revealDelay={benefit.delay}
              >
                <span className="material-symbols-outlined text-4xl mb-6">{benefit.icon}</span>
                <h4 className="font-headline-md text-headline-md mb-4">{benefit.title}</h4>
                <p className="text-on-surface-variant text-body-md">{benefit.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-section-padding px-gutter" id="work">
        <div className="max-w-container-max mx-auto">
          <div className="flex justify-between items-end mb-16 reveal text-left">
            <div>
              <p className="text-label-md font-label-md text-outline tracking-widest mb-2">SELECTED WORKS</p>
              <h2 className="font-headline-lg text-headline-lg">Crafting Digital Solutions</h2>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, idx) => (
              <Card 
                key={idx}
                noBackdrop
                className="group flex flex-col p-4 rounded-3xl"
                reveal
                revealDelay={project.delay}
              >
                <div className="aspect-[4/5] bg-surface-container-high rounded-2xl overflow-hidden border border-outline-variant/20 mb-6 transition-transform duration-500 group-hover:scale-[1.02]">
                  <img 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" 
                    alt={project.title} 
                    src={project.img}
                  />
                </div>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIdx) => (
                    <span 
                      key={tagIdx}
                      className="bg-surface-container-highest/50 px-3 py-1 rounded-full text-[12px] font-label-md text-outline"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <h3 className="font-headline-md text-headline-md mb-2 group-hover:text-primary transition-colors text-left">
                  {project.title}
                </h3>
                <p className="text-on-surface-variant text-body-md font-body-md mb-6 text-left">
                  {project.description}
                </p>
                <a 
                  className="mt-auto flex items-center gap-2 text-label-md font-label-md hover:underline underline-offset-8 transition-all text-left" 
                  href="#"
                >
                  VIEW CASE STUDY 
                  <span className="material-symbols-outlined text-sm">north_east</span>
                </a>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Resume Section */}
      <ResumeSection />

      {/* Contact Section */}
      <section className="py-section-padding px-gutter" id="contact">
        <div className="max-w-container-max mx-auto">
          <div className="grid lg:grid-cols-2 gap-20">
            <div className="reveal text-left">
              <h2 className="font-headline-lg text-headline-lg mb-8">Let's build something exceptional.</h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-12">
                I'm currently looking for new opportunities and collaborations. Feel free to reach out.
              </p>
              
              <div className="space-y-8">
                <a className="flex items-center gap-6 group" href="mailto:saranya.s@example.com">
                  <div className="w-16 h-16 rounded-full border border-outline-variant/20 flex items-center justify-center group-hover:border-primary group-hover:bg-primary/5 transition-all">
                    <span className="material-symbols-outlined">mail</span>
                  </div>
                  <div>
                    <p className="text-label-md font-label-md text-outline">EMAIL</p>
                    <p className="text-headline-md font-headline-md group-hover:text-primary transition-colors">
                      saranya.s@example.com
                    </p>
                  </div>
                </a>
                
                <div className="flex items-center gap-4">
                  <Button variant="icon" href="#" aria-label="GitHub">
                    GH
                  </Button>
                  <Button variant="icon" href="#" aria-label="LinkedIn">
                    LI
                  </Button>
                  <Button variant="icon" href="#" aria-label="Twitter">
                    TW
                  </Button>
                </div>
              </div>
            </div>
            
            <Card className="p-10 rounded-2xl reveal">
              <Form onSubmit={handleFormSubmit}>
                <FormInput
                  label="Name"
                  id="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  error={formErrors.name}
                  placeholder="Your Name"
                />
                
                <FormInput
                  label="Email"
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  error={formErrors.email}
                  placeholder="email@address.com"
                />
                
                <FormTextArea
                  label="Message"
                  id="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  error={formErrors.message}
                  placeholder="How can I help?"
                  rows={4}
                />
                
                <Button variant="submit" type="submit">
                  SEND MESSAGE
                </Button>
              </Form>
            </Card>
          </div>
        </div>
      </section>

      {/* Success Modal */}
      <Modal 
        isOpen={isSubmitModalOpen} 
        onClose={() => setIsSubmitModalOpen(false)}
        title="Message Sent Successfully!"
      >
        <div className="space-y-4 text-left">
          <p className="text-body-md text-on-surface">
            Thank you for reaching out! Your message has been received, and I will get back to you as soon as possible.
          </p>
          <div className="pt-4 flex justify-end">
            <Button variant="primary" onClick={() => setIsSubmitModalOpen(false)}>
              Close
            </Button>
          </div>
        </div>
      </Modal>
    </main>
  );
};

export default Home;
