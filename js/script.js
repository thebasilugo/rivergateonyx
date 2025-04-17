// Main JavaScript for Rivergate Onyx Investment Ltd Website

document.addEventListener("DOMContentLoaded", () => {
  // Initialize icons
  if (typeof lucide !== "undefined") {
    lucide.createIcons()
  } else if (window.lucide) {
    window.lucide.createIcons()
  } else {
    console.warn("Lucide is not defined. Ensure it is properly imported.")
  }

  // Initialize AOS animations
  if (typeof AOS !== "undefined") {
    AOS.init({
      once: false,
      mirror: true,
      duration: 1000,
      offset: 50,
    })
  } else if (window.AOS) {
    window.AOS.init({
      once: false,
      mirror: true,
      duration: 1000,
      offset: 50,
    })
  } else {
    console.warn("AOS is not defined. Ensure it is properly imported.")
  }

  // Remove preloader when page is loaded
  const preloader = document.getElementById("preloader")
  if (preloader) {
    setTimeout(() => {
      preloader.style.opacity = "0"
      setTimeout(() => {
        preloader.style.display = "none"
      }, 500)
    }, 500)
  }

  // Dark mode toggle
  const darkModeToggle = document.getElementById("darkModeToggle")

  if (darkModeToggle) {
    // Check for saved theme preference or use the system preference
    const savedTheme =
      localStorage.getItem("theme") || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light")

    // Apply the saved theme
    if (savedTheme === "dark") {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }

    darkModeToggle.addEventListener("click", () => {
      if (document.documentElement.classList.contains("dark")) {
        document.documentElement.classList.remove("dark")
        localStorage.setItem("theme", "light")
      } else {
        document.documentElement.classList.add("dark")
        localStorage.setItem("theme", "dark")
      }
    })
  }

  // Scroll to top button
  const scrollToTopButton = document.getElementById("scrollToTop")

  if (scrollToTopButton) {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        scrollToTopButton.style.display = "block"
      } else {
        scrollToTopButton.style.display = "none"
      }
    })

    scrollToTopButton.addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      })
    })
  }

  // Set current year in footer
  const currentYearElement = document.getElementById("current-year")
  if (currentYearElement) {
    currentYearElement.textContent = new Date().getFullYear()
  }

  // FAQ functionality
  initFAQ()

  // Contact form validation
  initContactForm()
})

/**
 * Initialize FAQ functionality
 */
function initFAQ() {
  // Check if we're on the FAQ page
  const faqContent = document.getElementById("faq-content")
  if (!faqContent) return

  // FAQ Data
  const faqData = [
    // General category
    {
      category: "general",
      title: "General Information",
      items: [
        {
          question: "How long has Rivergate Onyx Investment Ltd been in operation?",
          answer:
            "The company was registered with Corporate Affairs Commissions on February 1st, 2007, and commenced silent operations from 2008, which became a full operation since May 2022.",
        },
        {
          question: "Does Rivergate Onyx Investment Ltd have well structured Board and Management team?",
          answer:
            "Absolutely. The company's Board is made up of professionals with unbroken records of impeccable integrity for decades. The Board members are drawn from diverse professional backgrounds, which facilitates cross fertilisation of ideas.",
        },
        {
          question: "Can I trust Rivergate Onyx Investment Ltd?",
          answer:
            "Very clearly, Rivergate Onyx Investment Ltd foundation is integrity, excellence, and speed. Both our services and management can be trusted <strong>100%</strong>. Because everyone is held responsible for his/her actions, while the company accepts full responsibility to ensure the right service is delivered to our customers.",
        },
      ],
    },
    // Consulting category
    {
      category: "consulting",
      title: "Consulting Services",
      items: [
        {
          question: "What value do we expect from Rivergate Onyx Investment Ltd consultancy services?",
          answer:
            "Every client seeking for our consultancy services is sure to significantly regic its business annual revenues and return on investments. While real estate sales can attract great gains in both property appreciation and increased rent.",
        },
        {
          question: "Who benefits from Rivergate Onyx Investment Ltd Consulting services?",
          answer:
            "Many people stand to benefit from our consulting services to our clients. Including: <ul class='list-disc mt-2 space-y-1 pl-6'><li>The company, as the causes of inefficiencies are identified and corrected, thereby making the company to produce better and more gains.</li><li>The staff, management, owners and the Govt and public.</li></ul><p class='mt-2'>All are happy. As our work brings about overall improvement that increases profitability that benefits all.</p>",
        },
        {
          question: "For consulting services, what are the controls to ensure agreed expectations are achieved?",
          answer:
            "The major control to ensure the agreed expectations for each consulting services, is the mutual cooperation between our client and Rivergate Onyx Investment Ltd to implement every recommended improvement required.",
        },
      ],
    },
    // Real Estate category
    {
      category: "real-estate",
      title: "Real Estate",
      items: [
        {
          question: "How secured are the properties sold by Rivergate Onyx Investment Ltd?",
          answer:
            "As a company, we don't just sell any kind of property! We must know the Developer and the quality of their delivery. We also go extra mile to independently validate the property title documents as authentic, before devoting our time and the resources in its marketing.",
        },
        {
          question: "How good is the structural integrity of the properties sold?",
          answer: "We sell only properties built by tested and trusted Developers.",
        },
        {
          question: "How reliable are the title documents of the properties sold by Rivergate Onyx Investment Ltd?",
          answer:
            "We go extra mile to conduct independent verification of the title documents before marketing the property.",
        },
        {
          question: "What is the major attraction for patronising Rivergate Onyx Investment Ltd?",
          answer:
            "Most especially the impressive revenue and profitability achievement is the key attraction to our services.",
        },
        {
          question: "For real estate sales, what are the controls to ensure seamless and secured transactions?",
          answer:
            "As a company rule, all sales proceeds from real estate sales are paid direct into the account of the property owner, mostly, the Developer. Our company is only entitled to the agreed sales commission which is payable to Rivergate Onyx Investment Ltd account upon successful execution of the property documentation and hand over.",
        },
      ],
    },
    // International Business category
    {
      category: "international",
      title: "International Business",
      items: [
        {
          question: "Does Rivergate Onyx Investment Ltd handle contracts from outside Nigeria?",
          answer:
            "Yes. We do. As a matter of fact, some of our Board members, staff and followers are resident outside Nigeria. We receive consultancy requests; as well as demand for Nigerian properties from abroad.",
        },
        {
          question: "How does Rivergate Onyx Investment Ltd handle foreign transactions?",
          answer:
            "Foreign requests for our Financial and Mgt Consulting services from abroad are subjected to the same high standard of speed, excellence and integrity. In addition, the bill is usually denominated in foreign currency. While demand for Nigerian properties from abroad are subjected to the high standard of speed, excellence and integrity, but the settlement is usually denominated in Naira, since the properties are built locally.",
        },
        {
          question: "Have there been failed or poorly executed contracts?",
          answer:
            "No! We have not had any of such. But in case it happens, which we don't expect, in line with our company's standard of integrity, the Client is fully reimbursed to its original position.",
        },
      ],
    },
  ]

  const categoryButtons = document.querySelectorAll(".faq-category-btn")

  // Generate FAQ HTML for a specific category
  function generateFAQContent(category) {
    // Clear existing content
    faqContent.innerHTML = ""

    // Find the selected category data
    const categoryData = faqData.find((item) => item.category === category)

    if (!categoryData) return

    // Create section element
    const section = document.createElement("section")
    section.id = categoryData.category
    section.className = "mb-16"

    // Add section title
    const title = document.createElement("h2")
    title.className = "text-2xl font-bold mb-8 pb-2 border-b dark:border-gray-700 dark:text-white"
    title.textContent = categoryData.title
    section.appendChild(title)

    // Create container for FAQ items
    const itemsContainer = document.createElement("div")
    itemsContainer.className = "space-y-6"

    // Add FAQ items
    categoryData.items.forEach((item, index) => {
      const faqItem = document.createElement("div")
      faqItem.className =
        "faq-item rounded-lg border dark:border-gray-700 bg-white dark:bg-gray-800 overflow-hidden transition-all duration-300"

      const question = document.createElement("button")
      question.className =
        "faq-question flex cursor-pointer items-center justify-between w-full p-6 text-left text-lg font-bold focus:outline-none dark:text-white"
      question.setAttribute("aria-expanded", "false")
      question.setAttribute("aria-controls", `faq-answer-${category}-${index}`)

      const questionText = document.createElement("span")
      questionText.textContent = item.question
      question.appendChild(questionText)

      const icon = document.createElement("span")
      icon.className = "faq-icon flex-shrink-0 ml-4 text-primary transition-transform duration-300"
      icon.innerHTML = `
               <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                   <polyline points="6 9 12 15 18 9"></polyline>
               </svg>
           `
      question.appendChild(icon)

      const answer = document.createElement("div")
      answer.id = `faq-answer-${category}-${index}`
      answer.className = "faq-answer px-6 pb-6 text-gray-500 dark:text-gray-300"
      answer.setAttribute("aria-hidden", "true")
      answer.innerHTML = item.answer

      faqItem.appendChild(question)
      faqItem.appendChild(answer)
      itemsContainer.appendChild(faqItem)

      // Add event listener to toggle answer
      question.addEventListener("click", () => {
        const expanded = question.getAttribute("aria-expanded") === "true"
        question.setAttribute("aria-expanded", !expanded)
        answer.setAttribute("aria-hidden", expanded)

        if (expanded) {
          answer.classList.remove("show")
          icon.classList.remove("rotate")
        } else {
          answer.classList.add("show")
          icon.classList.add("rotate")
        }
      })
    })

    section.appendChild(itemsContainer)
    faqContent.appendChild(section)

    // Open the first FAQ item by default
    const firstQuestion = faqContent.querySelector(".faq-question")
    if (firstQuestion) {
      firstQuestion.click()
    }
  }

  // Set active category
  function setActiveCategory(category) {
    // Update category buttons
    categoryButtons.forEach((button) => {
      if (button.dataset.category === category) {
        button.classList.remove(
          "bg-white",
          "dark:bg-gray-800",
          "text-gray-900",
          "dark:text-gray-200",
          "border",
          "border-gray-200",
          "dark:border-gray-700",
          "hover:bg-gray-100",
          "dark:hover:bg-gray-700",
        )
        button.classList.add("bg-primary", "text-white", "hover:bg-primary-600")
      } else {
        button.classList.remove("bg-primary", "text-white", "hover:bg-primary-600")
        button.classList.add(
          "bg-white",
          "dark:bg-gray-800",
          "text-gray-900",
          "dark:text-gray-200",
          "border",
          "border-gray-200",
          "dark:border-gray-700",
          "hover:bg-gray-100",
          "dark:hover:bg-gray-700",
        )
      }
    })

    // Generate content for the selected category
    generateFAQContent(category)
  }

  // Add event listeners to category buttons
  categoryButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const category = button.dataset.category
      setActiveCategory(category)
    })
  })

  // Initialize with the first category (general)
  if (categoryButtons.length > 0) {
    setActiveCategory("general")
  }
}

/**
 * Initialize contact form validation
 */
function initContactForm() {
  const contactForm = document.getElementById("contact-form")
  if (!contactForm) return

  const nameInput = document.getElementById("name")
  const emailInput = document.getElementById("email")
  const phoneInput = document.getElementById("phone")
  const messageInput = document.getElementById("message")
  const submitButton = document.getElementById("submit-button")
  const formSuccess = document.getElementById("form-success")

  contactForm.addEventListener("submit", (e) => {
    e.preventDefault()

    // Reset previous errors
    document.querySelectorAll(".error-message").forEach((el) => el.remove())
    document.querySelectorAll(".form-input").forEach((el) => el.classList.remove("error"))

    let isValid = true

    // Validate name
    if (!nameInput.value.trim()) {
      showError(nameInput, "Please enter your name")
      isValid = false
    }

    // Validate email
    if (!emailInput.value.trim()) {
      showError(emailInput, "Please enter your email")
      isValid = false
    } else if (!isValidEmail(emailInput.value.trim())) {
      showError(emailInput, "Please enter a valid email address")
      isValid = false
    }

    // Validate message
    if (!messageInput.value.trim()) {
      showError(messageInput, "Please enter your message")
      isValid = false
    }

    if (isValid) {
      // Simulate form submission
      submitButton.disabled = true
      submitButton.innerHTML = `
               <svg class="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                   <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                   <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
               </svg>
               Sending...
           `

      setTimeout(() => {
        contactForm.reset()
        contactForm.classList.add("hidden")
        formSuccess.classList.remove("hidden")
        formSuccess.classList.add("animate-fade-in")
      }, 1500)
    }
  })

  function showError(input, message) {
    input.classList.add("error")
    const errorMessage = document.createElement("p")
    errorMessage.className = "error-message"
    errorMessage.textContent = message
    input.parentNode.appendChild(errorMessage)
  }

  function isValidEmail(email) {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return re.test(email)
  }
}
