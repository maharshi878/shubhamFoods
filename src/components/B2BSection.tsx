import React, { useEffect, useRef, useState } from 'react';
import ScrollReveal from './ScrollReveal';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useLanguage } from '@/contexts/LanguageContext';
import emailjs from '@emailjs/browser';
import { createPortal } from 'react-dom';

type InquiryType = 'consumer' | 'bulk';

const B2BSection: React.FC = () => {
  const [inquiryType, setInquiryType] = useState<'consumer' | 'bulk'>('consumer');
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [businessType, setBusinessType] = useState('distributor');
  const [businessDropdownOpen, setBusinessDropdownOpen] = useState(false);
  const businessButtonRef = useRef<HTMLButtonElement>(null);
  const [businessDropdownPos, setBusinessDropdownPos] = useState({ top: 0, left: 0, width: 0 });
  const [contactName, setContactName] = useState('');
  const [contactPhone, setContactPhone] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [location, setLocation] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [products, setProducts] = useState('');
  const [quantity, setQuantity] = useState('');
  const [message, setMessage] = useState('');
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState('');
  const [lastSubmitTime, setLastSubmitTime] = useState(0);
  const { t } = useLanguage();

  const options = [
    { value: 'consumer', label: 'Consumer' },
    { value: 'bulk', label: 'Bulk / B2B' },
  ];
  const businessOptions = [
    { value: 'distributor', label: 'Distributor' },
    { value: 'exporter', label: 'Exporter' },
    { value: 'horeca', label: 'Horeca' },
    { value: 'retail', label: 'Retail' },
    { value: 'other', label: 'Other' },
  ];

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target.closest('[data-dropdown]')) {
        setDropdownOpen(false);
        setBusinessDropdownOpen(false);
      }
    };
    document.addEventListener('click', handler);
    return () => document.removeEventListener('click', handler);
  }, []);

  const handleSubmit = async () => {
    const now = Date.now();
    if (sending) return;
    if (now - lastSubmitTime < 15000) {
      setError("Please wait a few seconds before sending another enquiry.");
      return;
    }
    setLastSubmitTime(now);
    const honeypot = (document.querySelector('[name="website"]') as HTMLInputElement)?.value;
    if (honeypot) return;
    if (!contactName || !contactPhone) {
      setError('Please fill in your name and contact number.');
      return;
    }
    if (!/^[0-9+\-\s]{8,15}$/.test(contactPhone)) {
      setError('Please enter a valid phone number.');
      return;
    }
    if (message.trim().length < 10) {
      setError('Please write a short message about your enquiry.');
      return;
    }
    setSending(true);
    setError('');
    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          inquiry_type: inquiryType === 'bulk' ? 'Bulk / B2B' : 'Consumer',
          contact_name: contactName,
          contact_phone: contactPhone,
          contact_email: contactEmail,
          location: location,
          company_name: companyName || 'N/A',
          business_type: businessType,
          products: products || 'N/A',
          quantity: quantity || 'N/A',
          message: message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );
      setSent(true);
      setContactName('');
      setContactPhone('');
      setContactEmail('');
      setLocation('');
      setCompanyName('');
      setProducts('');
      setQuantity('');
      setMessage('');
    } catch (err) {
      setError('Something went wrong. Please try calling us directly.');
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="bulk-enquiry" className="py-24 relative">
      <div className="pointer-events-none absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-primary/5 to-transparent" />
      <div className="container px-6 relative z-10">
        <div className="max-w-6xl mx-auto relative z-30 isolate">
          <div className="text-center mb-14">
            <ScrollReveal>
              <span className="badge-research mb-6 inline-block">{t('b2b.badge')}</span>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <h2 className="section-title mb-6">{t('b2b.title')}</h2>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <p className="section-subtitle mx-auto">
                {t('b2b.subtitle')}
              </p>
            </ScrollReveal>
          </div>

          <div className="glass-card relative z-20 p-7 md:p-10 overflow-visible">
            <div className="space-y-6">
              <input
                type="text"
                name="website"
                style={{ display: "none" }}
                tabIndex={-1}
                autoComplete="off"
              />
              <div>
                <label htmlFor="inquiryType" className="pointer-events-none text-sm font-medium text-foreground mb-2 block">
                  {t('b2b.inquiryType')}
                </label>
                <div className="relative z-[9999]" data-dropdown>
                  <button
                    type="button"
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                    className="flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground"
                  >
                    {options.find(o => o.value === inquiryType)?.label}
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`transition-transform duration-200 ${dropdownOpen ? 'rotate-180' : ''}`}><path d="m6 9 6 6 6-6"/></svg>
                  </button>
                  {dropdownOpen && (
                    <div className="absolute top-full left-0 right-0 mt-1 rounded-md border border-input bg-background z-[10000] shadow-xl">
                      {options.map(opt => (
                        <button
                          key={opt.value}
                          type="button"
                          onClick={() => { setInquiryType(opt.value as 'consumer' | 'bulk'); setDropdownOpen(false); }}
                          className={`w-full text-left px-3 py-2 text-sm hover:bg-primary/10 transition-colors duration-150 ${inquiryType === opt.value ? 'text-primary' : 'text-foreground'}`}
                        >
                          {opt.label}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>

                <div className="grid md:grid-cols-2 gap-5">
                  <div className="relative z-50">
                    <label htmlFor="contactName" className="pointer-events-none text-sm font-medium text-foreground mb-2 block">
                      {t('b2b.contactName')}
                    </label>
                    <Input
                      id="contactName"
                      name="contactName"
                      placeholder={t('b2b.contactName.placeholder')}
                      className="relative z-50"
                      value={contactName}
                      onChange={(e) => setContactName(e.target.value)}
                    />
                  </div>
                  <div className="relative z-50">
                    <label htmlFor="contactPhone" className="pointer-events-none text-sm font-medium text-foreground mb-2 block">
                      {t('b2b.contactNumber')}
                    </label>
                    <Input
                      id="contactPhone"
                      name="contactPhone"
                      placeholder={t('b2b.contactNumber.placeholder')}
                      className="relative z-50"
                      value={contactPhone}
                      onChange={(e) => setContactPhone(e.target.value)}
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-5">
                  <div className="relative z-50">
                    <label htmlFor="contactEmail" className="pointer-events-none text-sm font-medium text-foreground mb-2 block">
                      {t('b2b.email')}
                    </label>
                    <Input
                      id="contactEmail"
                      name="contactEmail"
                      type="email"
                      placeholder={t('b2b.email.placeholder')}
                      className="relative z-50"
                      value={contactEmail}
                      onChange={(e) => setContactEmail(e.target.value)}
                    />
                  </div>
                  <div className="relative z-50">
                    <label htmlFor="location" className="pointer-events-none text-sm font-medium text-foreground mb-2 block">
                      {t('b2b.location')}
                    </label>
                    <Input
                      id="location"
                      name="location"
                      placeholder={t('b2b.location.placeholder')}
                      className="relative z-50"
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                    />
                  </div>
                </div>

                {inquiryType === 'bulk' && (
                  <div className="relative z-[10000] space-y-6 rounded-xl border border-border/40 bg-secondary/20 p-5 overflow-visible">
                    <div className="grid md:grid-cols-2 gap-5">
                      <div className="relative z-50">
                        <label htmlFor="companyName" className="pointer-events-none text-sm font-medium text-foreground mb-2 block">
                          {t('b2b.companyName')}
                        </label>
                        <Input
                          id="companyName"
                          name="companyName"
                          placeholder={t('b2b.companyName.placeholder')}
                          className="relative z-50"
                          value={companyName}
                          onChange={(e) => setCompanyName(e.target.value)}
                        />
                      </div>
                      <div className="relative z-50">
                        <label htmlFor="businessType" className="pointer-events-none text-sm font-medium text-foreground mb-2 block">
                          {t('b2b.businessType')}
                        </label>
                        <div className="relative z-[10000]" data-dropdown>
                          <button
                            ref={businessButtonRef}
                            type="button"
                            onClick={() => {
                              if (businessButtonRef.current) {
                                const rect = businessButtonRef.current.getBoundingClientRect();
                                setBusinessDropdownPos({
                                  top: rect.bottom + window.scrollY + 4,
                                  left: rect.left + window.scrollX,
                                  width: rect.width,
                                });
                              }
                              setBusinessDropdownOpen(!businessDropdownOpen);
                            }}
                            className="flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground"
                          >
                            {businessOptions.find(o => o.value === businessType)?.label}
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`transition-transform duration-200 ${businessDropdownOpen ? 'rotate-180' : ''}`}><path d="m6 9 6 6 6-6"/></svg>
                          </button>
                          {businessDropdownOpen && createPortal(
                            <div
                              data-dropdown
                              style={{
                                position: 'absolute',
                                top: businessDropdownPos.top,
                                left: businessDropdownPos.left,
                                width: businessDropdownPos.width,
                                zIndex: 999999,
                              }}
                              className="rounded-md border border-input bg-background shadow-xl"
                            >
                              {businessOptions.map(opt => (
                                <button
                                  key={opt.value}
                                  type="button"
                                  onClick={() => { setBusinessType(opt.value); setBusinessDropdownOpen(false); }}
                                  className={`w-full text-left px-3 py-2 text-sm hover:bg-primary/10 transition-colors duration-150 ${businessType === opt.value ? 'text-primary' : 'text-foreground'}`}
                                >
                                  {opt.label}
                                </button>
                              ))}
                            </div>,
                            document.body
                          )}
                        </div>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-5">
                      <div className="relative z-50">
                        <label htmlFor="productsOfInterest" className="pointer-events-none text-sm font-medium text-foreground mb-2 block">
                          {t('b2b.products')}
                        </label>
                        <Input
                          id="productsOfInterest"
                          name="productsOfInterest"
                          placeholder={t('b2b.products.placeholder')}
                          className="relative z-50"
                          value={products}
                          onChange={(e) => setProducts(e.target.value)}
                        />
                      </div>
                      <div className="relative z-50">
                        <label htmlFor="monthlyQuantity" className="pointer-events-none text-sm font-medium text-foreground mb-2 block">
                          {t('b2b.quantity')}
                        </label>
                        <Input
                          id="monthlyQuantity"
                          name="monthlyQuantity"
                          placeholder={t('b2b.quantity.placeholder')}
                          className="relative z-50"
                          value={quantity}
                          onChange={(e) => setQuantity(e.target.value)}
                        />
                      </div>
                    </div>
                  </div>
                )}

                <div className="relative z-50">
                  <label htmlFor="message" className="pointer-events-none text-sm font-medium text-foreground mb-2 block">
                    {t('b2b.message')}
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    className="relative z-50 min-h-[120px]"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder={
                      inquiryType === 'bulk'
                        ? t('b2b.message.bulk.placeholder')
                        : t('b2b.message.consumer.placeholder')
                    }
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="button"
                    onClick={handleSubmit}
                    disabled={sending || sent}
                    className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground rounded-full font-medium text-base transition-all duration-300 hover:shadow-[0_0_40px_hsl(38_90%_50%/0.4)] disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {sent ? 'Enquiry Sent ✓' : sending ? 'Sending...' : 'Send Enquiry'}
                  </button>
                  <a
                    href="https://wa.me/919173891552"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block mt-4 text-sm text-primary hover:underline"
                  >
                    Prefer WhatsApp? Chat with us instantly →
                  </a>
                  {error && (
                    <p className="text-sm text-red-400 mt-2">{error}</p>
                  )}
                  {sent && (
                    <p className="text-sm text-primary mt-2">
                      Thank you — we'll be in touch shortly.
                    </p>
                  )}
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default B2BSection;
