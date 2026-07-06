const body = document.body;
const header = document.querySelector(".site-header");
const navToggle = document.querySelector(".nav-toggle");
const nav = document.querySelector(".site-nav");

const siteContacts = {
  email: "info@moorswildsafaris.com",
  phones: [
    {
      country: "Zambia",
      display: "+260 963 518 843",
      tel: "+260963518843",
      telHref: "tel:+260963518843",
      whatsapp: "https://wa.me/260963518843",
      primary: true,
    },
    {
      country: "Zambia",
      display: "+260 973 254 974",
      tel: "+260973254974",
      telHref: "tel:+260973254974",
      whatsapp: "https://wa.me/260973254974",
      primary: false,
    },
  ],
};

window.MOORS_CONTACTS = siteContacts;

const renderContactLists = () => {
  document.querySelectorAll("[data-contact-list]").forEach((container) => {
    container.textContent = "";
    siteContacts.phones.forEach((phone) => {
      const item = document.createElement("div");
      item.className = "contact-number";

      const label = document.createElement("strong");
      label.textContent = `${phone.country}: ${phone.display}`;

      const actions = document.createElement("div");
      actions.className = "contact-number-actions";

      const callLink = document.createElement("a");
      callLink.href = phone.telHref;
      callLink.textContent = "Call";

      const whatsappLink = document.createElement("a");
      whatsappLink.className = "whatsapp-link";
      whatsappLink.href = phone.whatsapp;
      whatsappLink.textContent = phone.primary ? "Primary WhatsApp" : "WhatsApp";
      whatsappLink.target = "_blank";
      whatsappLink.rel = "noopener";

      actions.append(callLink, whatsappLink);
      item.append(label, actions);
      container.append(item);
    });
  });
};

renderContactLists();

if (navToggle && nav) {
  navToggle.addEventListener("click", () => {
    const isOpen = body.classList.toggle("nav-open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });

  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      body.classList.remove("nav-open");
      navToggle.setAttribute("aria-expanded", "false");
    });
  });
}

const setHeaderState = () => {
  if (!header || body.classList.contains("interior")) return;
  header.classList.toggle("is-solid", window.scrollY > 24);
};

setHeaderState();
window.addEventListener("scroll", setHeaderState, { passive: true });

const revealItems = document.querySelectorAll("[data-reveal]");

if ("IntersectionObserver" in window) {
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );

  revealItems.forEach((item) => revealObserver.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add("is-visible"));
}

document.querySelectorAll("img[data-fallback]").forEach((image) => {
  image.addEventListener("error", () => {
    if (image.dataset.fallbackApplied === "true") return;
    image.dataset.fallbackApplied = "true";
    image.src = image.dataset.fallback;
  });
});

const filterButtons = document.querySelectorAll("[data-filter]");
const galleryCards = document.querySelectorAll("[data-category]");

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const filter = button.dataset.filter;
    filterButtons.forEach((item) => item.classList.remove("is-active"));
    button.classList.add("is-active");
    galleryCards.forEach((card) => {
      const show = filter === "all" || card.dataset.category === filter;
      card.classList.toggle("is-hidden", !show);
    });
  });
});

const lightbox = document.querySelector(".lightbox");
const lightboxImage = document.querySelector(".lightbox img");
const lightboxText = document.querySelector(".lightbox-text");
const lightboxClose = document.querySelector(".lightbox-close");

const closeLightbox = () => {
  if (!lightbox) return;
  lightbox.classList.remove("is-open");
  lightbox.setAttribute("aria-hidden", "true");
};

document.querySelectorAll("[data-lightbox]").forEach((trigger) => {
  trigger.addEventListener("click", (event) => {
    event.preventDefault();
    if (!lightbox || !lightboxImage || !lightboxText) return;
    lightboxImage.src = trigger.dataset.full || trigger.querySelector("img")?.src || "";
    lightboxImage.alt = trigger.dataset.alt || trigger.querySelector("img")?.alt || "";
    lightboxText.textContent = trigger.dataset.caption || "";
    lightbox.classList.add("is-open");
    lightbox.setAttribute("aria-hidden", "false");
    lightboxClose?.focus();
  });
});

lightboxClose?.addEventListener("click", closeLightbox);
lightbox?.addEventListener("click", (event) => {
  if (event.target === lightbox) closeLightbox();
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeLightbox();
});

const inquiryForm = document.querySelector("[data-inquiry-form]");

if (inquiryForm) {
  inquiryForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const message = inquiryForm.querySelector(".form-message");
    const formData = new FormData(inquiryForm);
    const name = String(formData.get("name") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const travelWindow = String(formData.get("travel-window") || "").trim();
    const note = String(formData.get("message") || "").trim();
    const interests = formData.getAll("interests").join(", ");

    if (!name || !email || !travelWindow || !note) {
      if (message) message.textContent = "Please complete the required fields.";
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      if (message) message.textContent = "Please enter a valid email address.";
      return;
    }

    const subject = encodeURIComponent(`Safari inquiry from ${name}`);
    const bodyText = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nTravel window: ${travelWindow}\nGroup size: ${formData.get("group-size") || ""}\nInterests: ${interests || "Not specified"}\n\nMessage:\n${note}`
    );

    if (message) message.textContent = "Opening your email client with the inquiry details.";
    window.location.href = `mailto:info@moorswildsafaris.com?subject=${subject}&body=${bodyText}`;
  });
}
