type MenuItem = {
  name: string;
  price: string;
  desc: string;
  img: string;
};

const iceCreamMenu: MenuItem[] = [
  {
    name: "Vanilla Ice Cream",
    price: "Rp 8.000",
    desc: "Smooth and delicious Vanilla Cone ice cream",
    img: "https://mixue.asia/wp-content/uploads/2023/05/vanila-ice-cream-mixue-287x300.jpg",
  },
  {
    name: "Strawberry Ice Cream",
    price: "Rp 8.000",
    desc: "Smooth and delicious Strawberry Cone ice cream",
    img: "https://mixue.asia/wp-content/uploads/2023/05/strawberry-ice-cream-mixue-300x226.jpg",
  },
  {
    name: "Oreo Sundae",
    price: "Rp 16.000",
    desc: "Crunchy Ice Cream with Chocolate and Oreo Toppings",
    img: "https://mixue.asia/wp-content/uploads/2023/01/Oreo-Sundae.jpg",
  },
  {
    name: "Mango Sundae",
    price: "Rp 16.000",
    desc: "Vanilla Ice Cream with Real Mango Slices Topping",
    img: "https://mixue.asia/wp-content/uploads/2023/01/Mango-Sundae.jpg",
  },
  {
    name: "Boba Sundae",
    price: "Rp 16.000",
    desc: "Ice Cream with Brown Sugar Syrup Sauce and Chewy Boba Topping",
    img: "https://mixue.asia/wp-content/uploads/2023/01/Boba-Sundae.jpg",
  },
  {
    name: "Strawberry Smoothies with Ice Cream",
    price: "Rp 16.000",
    desc: "Fresh strawberries combined with vanilla ice cream",
    img: "https://mixue.asia/wp-content/uploads/2023/01/Strawberry-Smoothies-With-Ice-Cream.jpg",
  },
];

const fruitTeaMenu: MenuItem[] = [
  {
    name: "Peach Tea Earl Grey",
    price: "Rp 16.000",
    desc: "Combining fresh peach slices with yellow peach jelly and Earl Grey Tea",
    img: "https://mixue.asia/wp-content/uploads/2023/01/Peach-Tea-Mixue.jpg",
  },
  {
    name: "Passion Fruit Jasmine Tea",
    price: "Rp 20.000",
    desc: "Jasmine Tea infused with authentic Passion Fruit seeds combined with chewy coconut jelly and bouncy boba",
    img: "https://mixue.asia/wp-content/uploads/2023/01/Passion-fruit-Jasmine-Tea.jpg",
  },
  {
    name: "Lemon Jasmine Tea",
    price: "Rp 12.000",
    desc: "Jasmine Tea blended with refreshing natural lemon juice",
    img: "https://mixue.asia/wp-content/uploads/2023/01/Lemon-Jasmine-Tea.jpg",
  },
  {
    name: "Hawaiian Fruit Tea",
    price: "Rp 22.000",
    desc: "A refreshing beverage with passion fruit pearls, sweet mango toppings, and chewy yellow peach jelly",
    img: "https://mixue.asia/wp-content/uploads/2023/01/Hawaian-fruit-Tea.jpg",
  },
  {
    name: "Kiwi Fruit Tea",
    price: "Rp 15.000",
    desc: "Slices of authentic kiwi combined with refreshing and delightful coconut jelly",
    img: "https://mixue.asia/wp-content/uploads/2023/05/kiwi-fruit-tea-mixue-300x300.jpg",
  },
  {
    name: "Fresh Squeezed Lemonade",
    price: "Rp 10.000",
    desc: "Original Refreshing Lemon Juice",
    img: "https://mixue.asia/wp-content/uploads/2023/01/Fresh-Squeezed-Lemonade.jpg",
  },
];

const milkTeaMenu: MenuItem[] = [
  {
    name: "Pearl Milk Tea",
    price: "Rp 19.000",
    desc: "Chewy Boba Topping Milk Tea",
    img: "https://mixue.asia/wp-content/uploads/2023/01/Pear-Milk-Tea-1.jpg",
  },
  {
    name: "Brown Sugar Pearl Milk Tea",
    price: "Rp 19.000",
    desc: "Milk tea complemented with brown sugar and chewy boba toppings",
    img: "https://mixue.asia/wp-content/uploads/2023/01/Brown-Sugar-Pearl-Milk-Tea-1.jpg",
  },
  {
    name: "Red Bean Milk Tea",
    price: "Rp 19.000",
    desc: "Milk Tea with Red Bean Topping",
    img: "https://mixue.asia/wp-content/uploads/2023/01/Read-Bean-Milk-Tea.jpg",
  },
  {
    name: "Coconut Jelly Milk Tea",
    price: "Rp 19.000",
    desc: "Smooth Milk Tea with Soft Coconut Jelly Topping",
    img: "https://mixue.asia/wp-content/uploads/2023/01/Coconut-Jelly-Milk-Tea.jpg",
  },
  {
    name: "Oats Milk Tea",
    price: "Rp 19.000",
    desc: "Crispy Oats Topping Milk Tea",
    img: "https://mixue.asia/wp-content/uploads/2023/01/Oats-Milk-Tea.jpg",
  },
  {
    name: "Supreme Mixed Milk Tea",
    price: "Rp 22.000",
    desc: "Milk Tea with Extra Toppings: Pearl, Coconut Jelly, Oats, and Brown Sugar Jelly",
    img: "https://mixue.asia/wp-content/uploads/2023/01/Supreme-Mixed-Milk-Tea.jpg",
  },
];

const freshTeaMenu: MenuItem[] = [
  {
    name: "Original Jasmine Tea",
    price: "Rp 10.000",
    desc: "Fresh Jasmine Tea",
    img: "https://mixue.asia/wp-content/uploads/2023/01/Original-Jasmine-Tea.jpg",
  },
  {
    name: "Original Earl Grey Tea",
    price: "Rp 10.000",
    desc: "Fresh Black Tea",
    img: "https://mixue.asia/wp-content/uploads/2023/01/Original-Earl-Grey-Tea.jpg",
  },
  {
    name: "Jasmine Tea With 2 Toppings",
    price: "Rp 13.000",
    desc: "Jasmine Tea with Chewy Boba Topping and Coconut Jelly",
    img: "https://mixue.asia/wp-content/uploads/2023/01/Jasmine-Tea-With-2-Toppings.jpg",
  },
  {
    name: "Earl Grey Tea With 2 Toppings",
    price: "Rp 13.000",
    desc: "Earl Grey Tea with chewy boba and coconut jelly topping",
    img: "https://mixue.asia/wp-content/uploads/2023/01/Early-Grey-Tea-with-2-Toppings.jpg",
  },
];

const navLinks = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Menu", href: "#menu" },
  { label: "Franchise", href: "#franchise" },
];



function IconInstagram() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-5 h-5"
      aria-hidden="true"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
    </svg>
  );
}

function IconTiktok() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-5 h-5"
      aria-hidden="true"
    >
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.76a4.85 4.85 0 0 1-1.01-.07z" />
    </svg>
  );
}

function IconLocation() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-5 h-5"
      aria-hidden="true"
    >
      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
      <circle cx="12" cy="9" r="2.5" />
    </svg>
  );
}



function MenuCard({ item }: { item: MenuItem }) {
  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col">
      <div className="relative h-48 bg-gray-100">
        {}
        <img
          src={item.img}
          alt={item.name}
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>
      <div className="p-4 flex flex-col flex-1">
        <h4 className="font-semibold text-gray-900 text-sm leading-snug">{item.name}</h4>
        <p className="text-xs text-gray-500 mt-1 flex-1">{item.desc}</p>
        <span className="mt-3 inline-block text-sm font-bold text-red-600">{item.price}</span>
      </div>
    </div>
  );
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-2">
      {children}
    </h2>
  );
}

function MenuCategory({
  id,
  title,
  subtitle,
  items,
}: {
  id: string;
  title: string;
  subtitle: string;
  items: MenuItem[];
}) {
  return (
    <div id={id} className="mb-16">
      <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mb-1">{title}</h3>
      <p className="text-gray-500 text-sm mb-6">{subtitle}</p>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
        {items.map((item) => (
          <MenuCard key={item.name} item={item} />
        ))}
      </div>
    </div>
  );
}



export default function Home() {
  return (
    <>
      {/* Navbar */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-gray-100 shadow-sm">
        <nav className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            {}
            <img
              src="https://mixue.asia/wp-content/uploads/2023/01/maskot-mixue-150x150.png"
              alt="Mixue Mascot"
              className="h-9 w-9 object-contain"
            />
            <span className="text-xl font-bold text-red-600 tracking-tight">MIXUE</span>
          </div>

          {/* Desktop nav */}
          <ul className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="text-sm font-medium text-gray-600 hover:text-red-600 transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <a
            id="nav-find-outlet"
            href="https://mixue.asia/outlets/"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex bg-red-600 text-white text-sm font-semibold px-4 py-2 rounded-full hover:bg-red-700 transition-colors"
          >
            Find Outlet
          </a>

          {/* Mobile menu */}
          <div className="md:hidden">
            <details className="relative">
              <summary className="cursor-pointer list-none p-2 rounded-lg border border-gray-200">
                <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </summary>
              <ul className="absolute right-0 mt-2 w-48 bg-white border border-gray-100 rounded-xl shadow-lg py-2 z-50">
                {navLinks.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="block px-4 py-2 text-sm text-gray-700 hover:bg-red-50 hover:text-red-600">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </details>
          </div>
        </nav>
      </header>

      <main>
        {/* Hero */}
        <section
          id="hero"
          className="min-h-screen pt-16 flex items-center justify-center bg-gradient-to-br from-red-50 via-white to-orange-50 px-4"
        >
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 items-center gap-10 py-20">
            <div>
              {}
              <img
                src="https://mixue.asia/wp-content/uploads/2023/01/mixue-logo-1024x536.jpg"
                alt="Mixue Logo"
                className="w-full max-w-sm mx-auto md:mx-0 rounded-2xl shadow-lg"
              />
            </div>
            <div className="text-center md:text-left">
              <span className="inline-block bg-red-100 text-red-600 text-xs font-semibold px-3 py-1 rounded-full mb-4 uppercase tracking-wide">
                Ice Cream &amp; Tea
              </span>
              <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-4">
                Share Sweetness &amp;<br />
                <span className="text-red-600">Spread Happiness</span>
              </h1>
              <p className="text-gray-500 text-base md:text-lg mb-8">
                Enjoy premium ice cream and tea at affordable prices. Over 20 menu options
                available across Indonesia.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
                <a
                  id="hero-see-menu"
                  href="#menu"
                  className="bg-red-600 text-white font-semibold px-6 py-3 rounded-full hover:bg-red-700 transition-colors text-center"
                >
                  See Our Menu
                </a>
                <a
                  id="hero-about"
                  href="#about"
                  className="border border-gray-300 text-gray-700 font-semibold px-6 py-3 rounded-full hover:border-red-600 hover:text-red-600 transition-colors text-center"
                >
                  Our Story
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="bg-red-600 py-10 px-4">
          <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { value: "21,000+", label: "Outlets Worldwide" },
              { value: "1997", label: "Founded" },
              { value: "4", label: "Signature Menus" },
              { value: "MUI", label: "Halal Certified" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="text-3xl font-extrabold text-white">{stat.value}</p>
                <p className="text-red-100 text-sm mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* About */}
        <section id="about" className="py-20 px-4 bg-white">
          <div className="max-w-5xl mx-auto">
            <SectionTitle>Our Story</SectionTitle>
            <p className="text-center text-gray-500 mb-12 max-w-xl mx-auto">
              From a small ice stall in China to a global phenomenon.
            </p>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  In June 1997, Zhang Hongchao, a student at Henan University of Finance and
                  Economics, opened a shaved ice stall in Zhengzhou, Henan with a loan from his
                  grandmother.
                </p>
                <p>
                  In 1999, he opened a second stall named <strong>Mixue Bingcheng</strong> (蜜雪冰城),
                  meaning &ldquo;sweet snow palace.&rdquo; He focused on affordable ice cream and
                  started franchising in 2008.
                </p>
                <p>
                  The name <em>Mixue</em> comes from Mandarin, where <em>Mi</em> means honey and{" "}
                  <em>Xue</em> means snow, giving the brand the meaning{" "}
                  <strong>&ldquo;sweet snow like honey&rdquo;</strong>. Today, Mixue has over
                  21,000 outlets worldwide, surpassing Burger King and Domino&apos;s Pizza.
                </p>
              </div>
              <div className="flex justify-center">
                {}
                <img
                  src="https://mixue.asia/wp-content/uploads/2023/01/maskot-mixue.png"
                  alt="Mixue Snow King Mascot"
                  className="w-56 md:w-72 drop-shadow-xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Halal Certification */}
        <section id="halal" className="py-14 px-4 bg-orange-50">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Halal Certified</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Mixue Indonesia&apos;s products have been certified halal by{" "}
              <strong>LPPOM MUI</strong>. All ingredients are halal-sourced, free from forbidden
              substances, and manufactured under strict supervision, so you can enjoy every sip
              and bite with full confidence.
            </p>
          </div>
        </section>

        {/* Menu */}
        <section id="menu" className="py-20 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <SectionTitle>Our Menu</SectionTitle>
            <p className="text-center text-gray-500 mb-12 max-w-lg mx-auto">
              4 signature categories: fresh ice cream, real fruit tea, milk tea, and fresh tea.
            </p>

            {/* Category anchors */}
            <div className="flex flex-wrap justify-center gap-2 mb-12">
              {[
                { label: "Fresh Ice Cream", href: "#menu-ice-cream" },
                { label: "Real Fruit Tea", href: "#menu-fruit-tea" },
                { label: "Milk Tea", href: "#menu-milk-tea" },
                { label: "Fresh Tea", href: "#menu-fresh-tea" },
              ].map((tab) => (
                <a
                  key={tab.label}
                  href={tab.href}
                  className="text-sm font-medium px-4 py-2 rounded-full border border-red-200 text-red-600 hover:bg-red-600 hover:text-white transition-colors"
                >
                  {tab.label}
                </a>
              ))}
            </div>

            <MenuCategory
              id="menu-ice-cream"
              title="Fresh Ice Cream"
              subtitle="Soft-serve and sundae ice cream in various delicious flavors"
              items={iceCreamMenu}
            />
            <MenuCategory
              id="menu-fruit-tea"
              title="Real Fruit Tea"
              subtitle="Refreshing teas infused with real fresh fruits"
              items={fruitTeaMenu}
            />
            <MenuCategory
              id="menu-milk-tea"
              title="Milk Tea"
              subtitle="Creamy milk tea with a variety of toppings"
              items={milkTeaMenu}
            />
            <MenuCategory
              id="menu-fresh-tea"
              title="Fresh Tea"
              subtitle="Pure brewed teas, jasmine and earl grey"
              items={freshTeaMenu}
            />
          </div>
        </section>

        {/* Franchise */}
        <section id="franchise" className="py-20 px-4 bg-red-600 text-white">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-2">Own a Mixue Franchise</h2>
            <p className="text-center text-red-200 mb-12 max-w-xl mx-auto">
              Join the world&apos;s fastest-growing ice cream &amp; tea franchise network.
            </p>

            <div className="grid md:grid-cols-2 gap-10">
              {/* Costs */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <h3 className="text-lg font-semibold mb-4">Estimated Costs</h3>
                <div className="space-y-3 text-sm text-red-100">
                  {[
                    ["Deposit", "IDR 40 million"],
                    ["Management Fee / Year", "IDR 18, 24 million"],
                    ["Machinery & Equipment", "~IDR 183 million"],
                    ["First Batch Raw Materials", "~IDR 130 million"],
                    ["Training Fee", "IDR 3 million"],
                  ].map(([label, value]) => (
                    <div key={label} className="flex justify-between border-b border-white/10 pb-2">
                      <span>{label}</span>
                      <span className="font-semibold text-white">{value}</span>
                    </div>
                  ))}
                </div>
                <p className="text-xs text-red-200 mt-4">
                  * Rent and employee salaries are not included. Prices may vary.
                </p>
              </div>

              {/* Steps */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <h3 className="text-lg font-semibold mb-4">How to Register</h3>
                <ol className="space-y-3 text-sm text-red-100">
                  {[
                    "Consult via WhatsApp: 0819-9360-6666",
                    "Fill out the registration form",
                    "Mixue management contacts you for evaluation",
                    "Location feasibility survey is conducted",
                    "Sign a contract with Mixue",
                    "Receive shop decoration assistance",
                    "Employee SOP training",
                    "Open your new Mixue outlet",
                  ].map((step, idx) => (
                    <li key={idx} className="flex gap-3">
                      <span className="flex-shrink-0 w-6 h-6 rounded-full bg-white/20 text-white text-xs font-bold flex items-center justify-center">
                        {idx + 1}
                      </span>
                      <span>{step}</span>
                    </li>
                  ))}
                </ol>
              </div>
            </div>

            <div className="text-center mt-10">
              <a
                id="franchise-contact"
                href="https://mixue.asia/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex bg-white text-red-600 font-semibold px-8 py-3 rounded-full hover:bg-red-50 transition-colors"
              >
                Learn More on Official Site
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Top row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-8 border-b border-gray-800">
            {/* Brand */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                {}
                <img
                  src="https://mixue.asia/wp-content/uploads/2023/01/maskot-mixue-150x150.png"
                  alt="Mixue Mascot"
                  className="h-9 w-9 object-contain opacity-80"
                />
                <span className="text-white font-bold text-base">MIXUE</span>
              </div>
              <p className="text-sm leading-relaxed">
                Ice Cream &amp; Tea
                <br />
                Share Sweetness &amp; Spread Happiness
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-white text-sm font-semibold mb-3 uppercase tracking-wide">
                Quick Links
              </h3>
              <ul className="space-y-2 text-sm">
                {[
                  { label: "Home", href: "#hero" },
                  { label: "Our Story", href: "#about" },
                  { label: "Menu", href: "#menu" },
                  { label: "Franchise", href: "#franchise" },
                  { label: "Find Outlet", href: "https://mixue.asia/outlets/" },
                ].map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="hover:text-white transition-colors"
                      {...(link.href.startsWith("http")
                        ? { target: "_blank", rel: "noopener noreferrer" }
                        : {})}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact & Social */}
            <div>
              <h3 className="text-white text-sm font-semibold mb-3 uppercase tracking-wide">
                Follow Us
              </h3>
              <div className="flex items-center gap-3 mb-4">
                <a
                  id="social-instagram"
                  href="https://www.instagram.com/mixueindonesia"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Mixue on Instagram"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <IconInstagram />
                </a>
                <a
                  id="social-tiktok"
                  href="https://www.tiktok.com/@mixueindonesia"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Mixue on TikTok"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <IconTiktok />
                </a>
                <a
                  id="social-outlets"
                  href="https://mixue.asia/outlets/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Find a Mixue Outlet"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <IconLocation />
                </a>
              </div>
              <p className="text-sm">
                Official website:{" "}
                <a
                  href="https://mixue.asia"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors underline underline-offset-2"
                >
                  mixue.asia
                </a>
              </p>
            </div>
          </div>

          {/* Bottom row */}
          <div className="pt-6 text-center text-xs text-gray-500">
            &copy; {new Date().getFullYear()} &nbsp;Mixue Ice Cream &amp; Tea. All rights reserved.
          </div>
        </div>
      </footer>
    </>
  );
}