// app/terms-of-use/page.tsx

const TermsAndCondition =()=> {
  const sections = [
    {
      title: "Acceptance of Terms",
      content:
        "By accessing and using our website, you agree to comply with these Terms of Use and all applicable laws and regulations.",
    },
    {
      title: "Eligibility",
      content:
        "You must be at least 18 years old or have parental consent to use our services and make purchases.",
    },
    {
      title: "Account Responsibility",
      content:
        "You are responsible for maintaining the confidentiality of your account credentials and for all activities under your account.",
    },
    {
      title: "Orders and Payments",
      content:
        "We reserve the right to refuse, cancel, or limit any order. Prices and product availability are subject to change without notice.",
    },
    {
      title: "Shipping and Delivery",
      content:
        "Delivery times are estimates only and may vary depending on your location and external factors beyond our control.",
    },
    {
      title: "Returns and Refunds",
      content:
        "Returns and refunds are governed by our Return Policy. Please review it before making a purchase.",
    },
    {
      title: "Intellectual Property",
      content:
        "All content on this website, including text, images, logos, and designs, is our exclusive property and may not be used without written permission.",
    },
    {
      title: "Prohibited Conduct",
      content:
        "You may not use our website for fraudulent activities, unauthorized access, data scraping, or any unlawful purpose.",
    },
    {
      title: "Limitation of Liability",
      content:
        "We are not liable for indirect, incidental, or consequential damages arising from your use of our website or products.",
    },
    {
      title: "Changes to Terms",
      content:
        "We may update these Terms of Use at any time. Continued use of the website constitutes acceptance of the revised terms.",
    },
  ];

  return (
    <main className="min-h-screen bg-gray-50 py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="mb-16 text-center">
          <span className="inline-block px-4 py-2 rounded-full bg-indigo-100 text-indigo-700 text-sm font-medium mb-6">
            Legal
          </span>

          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Terms of Use
          </h1>

          <p className="text-lg text-gray-600">Last updated: April 27, 2026</p>
        </div>

        <div className="space-y-8">
          {sections.map((section, index) => (
            <section
              key={section.title}
              className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8"
            >
              <div className="flex items-start gap-5">
                <div className="flex items-center justify-center w-12 h-12 rounded-2xl bg-indigo-600 text-white font-bold text-lg shrink-0">
                  {index + 1}
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    {section.title}
                  </h2>

                  <p className="text-gray-600 leading-relaxed">
                    {section.content}
                  </p>
                </div>
              </div>
            </section>
          ))}
        </div>
      </div>
    </main>
  );
}
 export default TermsAndCondition;