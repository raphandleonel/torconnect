export default function Advantages() {
  const advantages = [
    {
      title: 'Privacy and Anonymity',
      description: 'Preserve your identity while browsing or conducting transactions.',
      icon: '/images/icons/privacy-icon.png',
    },
    {
      title: 'Access to Information',
      description: 'Explore uncensored content unavailable on the surface web.',
      icon: '/images/icons/information-icon.png',
    },
    {
      title: 'Secure Transactions',
      description: 'Cryptocurrency-powered marketplaces ensure secure payments.',
      icon: '/images/icons/secure-icon.png',
    },
  ];

  return (
    <section
      className="relative rounded-[20px] bg-gradient-to-r from-indigo-900 via-purple-900 to-blue-900 shadow-[0_0_20px_0_rgba(0,0,0,0.5)] py-16 px-6"
    >
      <div className="absolute inset-0 bg-[rgba(255,255,255,0.05)] rounded-[20px] blur-xl" />
      <div className="relative max-w-[1170px] mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-white mb-8">
          Advantages of the Dark Web
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {advantages.map((advantage, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center bg-[rgba(255,255,255,0.1)] rounded-lg shadow-lg p-6 transition-transform duration-300 hover:scale-105"
            >
              <img
                src={advantage.icon}
                alt={advantage.title}
                className="w-16 h-16 mb-4"
              />
              <h3 className="font-bold text-lg text-white mb-2">
                {advantage.title}
              </h3>
              <p className="text-gray-300">{advantage.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
