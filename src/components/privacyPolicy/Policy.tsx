
const Policy =() =>{
  const sections = [
    {
      title: "Information We Collect",
      content: [
        "Personal information such as your name, email address, phone number, shipping address, and billing address.",
        "Payment information processed securely through trusted third-party payment providers.",
        "Technical information including your IP address, browser type, device information, and usage data.",
      ],
    },
    {
      title: "How We Use Your Information",
      content: [
        "To process and fulfill your orders.",
        "To provide customer support and respond to inquiries.",
        "To send transactional emails, order confirmations, and shipping updates.",
        "To improve our website, services, and shopping experience.",
        "To send promotional communications when you have opted in.",
      ],
    },
    {
      title: "Cookies and Tracking Technologies",
      content: [
        "We use cookies and similar technologies to enhance your browsing experience, analyze traffic, and personalize content.",
      ],
    },
    {
      title: "Third-Party Services",
      content: [
        "We may share your information with payment processors, shipping providers, analytics services, and marketing platforms solely to operate our business effectively.",
      ],
    },
    {
      title: "Your Rights",
      content: [
        "You may request access to, correction of, or deletion of your personal information at any time.",
        "You can unsubscribe from marketing emails using the link provided in every email.",
      ],
    },
    {
      title: "Data Security",
      content: [
        "We implement industry-standard security measures to protect your personal information against unauthorized access, disclosure, or misuse.",
      ],
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
            Privacy Policy
          </h1>

          <p className="text-lg text-gray-600">Last updated: April 27, 2026</p>
        </div>

        <div className="space-y-10">
          {sections.map((section) => (
            <section
              key={section.title}
              className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-5">
                {section.title}
              </h2>

              <ul className="space-y-4">
                {section.content.map((item, index) => (
                  <li
                    key={index}
                    className="text-gray-600 leading-relaxed flex gap-3"
                  >
                    <span className="text-indigo-600 mt-1">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      </div>
    </main>
  );
}
export default Policy