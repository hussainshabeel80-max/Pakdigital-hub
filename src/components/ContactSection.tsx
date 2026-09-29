import React, { useState } from 'react';
import { AGENCY_CONFIG } from '../data/agencyData';
import { Phone, Mail, MessageSquare, Facebook, Send, CheckCircle2, AlertCircle } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    businessName: '',
    email: '',
    phone: '',
    service: 'SEO',
    message: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const servicesList = [
    'SEO',
    'Google Business Profile',
    'Meta Ads',
    'Google Ads',
    'Amazon Services',
    'Other'
  ];

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = 'Full name is required';
    if (!formData.businessName.trim()) newErrors.businessName = 'Business name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Enter a valid email address';
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone / WhatsApp number is required';
    } else if (formData.phone.replace(/[^0-9]/g, '').length < 8) {
      newErrors.phone = 'Enter a valid phone number';
    }
    return newErrors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setIsSubmitting(true);

    // Prepare WhatsApp message payload for immediate follow-up
    const summaryText = `*New Consultation Request - PakDigital Hub*\n\n*Name:* ${formData.name}\n*Business:* ${formData.businessName}\n*Email:* ${formData.email}\n*Phone:* ${formData.phone}\n*Service Interested In:* ${formData.service}\n*Message:* ${formData.message || 'N/A'}`;
    
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);

      // Trigger WhatsApp window with the pre-filled inquiry
      const encoded = encodeURIComponent(summaryText);
      window.open(`https://wa.me/${AGENCY_CONFIG.whatsappNumber}?text=${encoded}`, '_blank', 'noopener,noreferrer');
    }, 600);
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-[#080B11] relative border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Contact Direct Info */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-amber-400">
                <span>Direct Inquiry</span>
              </div>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight">
                Let&apos;s Talk About Your Growth
              </h2>
              <p className="text-base text-slate-400 leading-relaxed">
                Connect with our strategists to discuss how we can increase your online discoverability and generate consistent commercial inquiries.
              </p>
            </div>

            {/* Contact Channels */}
            <div className="space-y-4">
              {/* WhatsApp & Phone */}
              <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 flex items-start gap-4">
                <div className="p-2.5 rounded-lg bg-emerald-500/10 text-emerald-400 shrink-0">
                  <MessageSquare className="w-5 h-5 fill-current" />
                </div>
                <div>
                  <span className="text-xs text-slate-400 block font-medium">WhatsApp / Phone</span>
                  <a
                    href={`https://wa.me/${AGENCY_CONFIG.whatsappNumber}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-base font-bold text-white hover:text-amber-400 transition-colors block"
                  >
                    {AGENCY_CONFIG.phone}
                  </a>
                  <span className="text-[11px] text-emerald-400">Available for fast response</span>
                </div>
              </div>

              {/* Email */}
              <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 flex items-start gap-4">
                <div className="p-2.5 rounded-lg bg-amber-500/10 text-amber-400 shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-slate-400 block font-medium">Official Email</span>
                  <a
                    href={`mailto:${AGENCY_CONFIG.email}`}
                    className="text-sm sm:text-base font-bold text-white hover:text-amber-400 transition-colors break-all"
                  >
                    {AGENCY_CONFIG.email}
                  </a>
                  <span className="text-[11px] text-slate-400 block">Proposals & formal RFPs</span>
                </div>
              </div>

              {/* Facebook Profile */}
              <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 flex items-start gap-4">
                <div className="p-2.5 rounded-lg bg-blue-500/10 text-blue-400 shrink-0">
                  <Facebook className="w-5 h-5 fill-current" />
                </div>
                <div>
                  <span className="text-xs text-slate-400 block font-medium">Facebook Page</span>
                  <a
                    href={AGENCY_CONFIG.facebookUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm sm:text-base font-bold text-white hover:text-amber-400 transition-colors"
                  >
                    PakDigital Hub
                  </a>
                  <span className="text-[11px] text-slate-400 block">Follow our updates & campaigns</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl p-6 sm:p-8 lg:p-10 bg-slate-900/80 border border-slate-800 shadow-xl">
              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto border border-emerald-500/40">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="font-display text-2xl font-bold text-white">
                    Consultation Request Prepared!
                  </h3>
                  <p className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                    Thank you, <strong className="text-white">{formData.name}</strong>. Your inquiry has been forwarded to our WhatsApp strategy queue. We will review your business requirements and connect shortly.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: '',
                        businessName: '',
                        email: '',
                        phone: '',
                        service: 'SEO',
                        message: ''
                      });
                    }}
                    className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-lg transition-colors"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <h3 className="font-display text-xl font-bold text-white mb-2">
                    Request a Free Consultation
                  </h3>
                  <p className="text-xs text-slate-400 mb-6">
                    Fill in your details below and we will prepare an initial assessment for your business.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Name */}
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Ahmad Khan"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className={`w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-amber-400 transition-colors ${
                          errors.name ? 'border-rose-500' : 'border-slate-800'
                        }`}
                      />
                      {errors.name && (
                        <span className="text-[11px] text-rose-400 flex items-center gap-1 mt-1">
                          <AlertCircle className="w-3 h-3" />
                          <span>{errors.name}</span>
                        </span>
                      )}
                    </div>

                    {/* Business Name */}
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                        Business Name *
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Apex Builders / Skyline Clinic"
                        value={formData.businessName}
                        onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                        className={`w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-amber-400 transition-colors ${
                          errors.businessName ? 'border-rose-500' : 'border-slate-800'
                        }`}
                      />
                      {errors.businessName && (
                        <span className="text-[11px] text-rose-400 flex items-center gap-1 mt-1">
                          <AlertCircle className="w-3 h-3" />
                          <span>{errors.businessName}</span>
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Email */}
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        placeholder="e.g. contact@business.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className={`w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-amber-400 transition-colors ${
                          errors.email ? 'border-rose-500' : 'border-slate-800'
                        }`}
                      />
                      {errors.email && (
                        <span className="text-[11px] text-rose-400 flex items-center gap-1 mt-1">
                          <AlertCircle className="w-3 h-3" />
                          <span>{errors.email}</span>
                        </span>
                      )}
                    </div>

                    {/* Phone */}
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                        Phone / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        placeholder="e.g. +92 300 1234567"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className={`w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-amber-400 transition-colors ${
                          errors.phone ? 'border-rose-500' : 'border-slate-800'
                        }`}
                      />
                      {errors.phone && (
                        <span className="text-[11px] text-rose-400 flex items-center gap-1 mt-1">
                          <AlertCircle className="w-3 h-3" />
                          <span>{errors.phone}</span>
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Service Dropdown */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Service Interested In
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white focus:outline-none focus:ring-1 focus:ring-amber-400 transition-colors"
                    >
                      {servicesList.map((srv) => (
                        <option key={srv} value={srv}>
                          {srv}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Project Details or Specific Goals (Optional)
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Tell us about your target market, current website/profiles, or challenges..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-amber-400 transition-colors"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-3.5 px-6 rounded-xl font-bold text-sm text-slate-950 bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 hover:shadow-[0_0_20px_rgba(245,158,11,0.4)] active:scale-[0.99] transition-all flex items-center justify-center gap-2 disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <span>Processing Request...</span>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>Request a Consultation</span>
                        </>
                      )}
                    </button>
                    <p className="text-[11px] text-slate-500 text-center mt-2">
                      Submitting prepares a direct WhatsApp inquiry with our strategy team.
                    </p>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
