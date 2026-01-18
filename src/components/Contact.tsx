import { Mail, MessageCircle, Send } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { useState } from "react";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('/send_email.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const result = await response.json();
      alert(result.message);
      if (result.status === 'success') {
        setFormData({ name: "", email: "", company: "", message: "" });
      }
    } catch (error) {
      alert('An error occurred while sending the message.');
    }
  };

  return (
    <section id="contact" className="relative py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-6 bg-gradient-to-br from-white to-blue-200 bg-clip-text text-transparent">
            Get in touch
          </h2>
          <p className="text-xl text-white/60 max-w-2xl mx-auto">
            Book your 10-minute fit call or send us a message. We'll respond within 24 hours.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact methods */}
          <div className="space-y-6">
            <div className="p-8 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10">
              <h3 className="mb-6 text-white">Quick Contact</h3>
              
              <div className="space-y-4">
                <a
                  href="https://wa.me/1234567890"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-green-400/30 transition-all group"
                >
                  <div className="w-12 h-12 rounded-xl bg-green-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <MessageCircle className="w-6 h-6 text-green-400" />
                  </div>
                  <div>
                    <div className="text-sm text-white">WhatsApp</div>
                    <div className="text-xs text-white/50">Instant response during business hours</div>
                  </div>
                </a>
                
                <a
                  href="mailto:info@safenscale.com"
                  className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-blue-400/30 transition-all group"
                >
                  <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Mail className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <div className="text-sm text-white">Email</div>
                    <div className="text-xs text-white/50">info@safenscale.com</div>
                  </div>
                </a>
              </div>
            </div>
            
            <div className="p-6 rounded-2xl bg-blue-500/10 backdrop-blur-xl border border-blue-400/30">
              <p className="text-sm text-blue-200">
                <span className="text-blue-400">⚡</span> Average response time: 2 hours during business hours
              </p>
            </div>
          </div>
          
          {/* Contact form */}
          <div className="p-8 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10">
            <h3 className="mb-6 text-white">Send us a message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Input
                  type="text"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="bg-white/5 border-white/10 text-white placeholder:text-white/40 focus:border-blue-400/50"
                />
              </div>
              
              <div>
                <Input
                  type="email"
                  placeholder="Email address"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="bg-white/5 border-white/10 text-white placeholder:text-white/40 focus:border-blue-400/50"
                />
              </div>
              
              <div>
                <Input
                  type="text"
                  placeholder="Company name"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  className="bg-white/5 border-white/10 text-white placeholder:text-white/40 focus:border-blue-400/50"
                />
              </div>
              
              <div>
                <Textarea
                  placeholder="Tell us about your fraud detection needs..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  rows={4}
                  className="bg-white/5 border-white/10 text-white placeholder:text-white/40 focus:border-blue-400/50 resize-none"
                />
              </div>
              
              <Button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-xl group"
              >
                <Send className="w-4 h-4 mr-2" />
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
