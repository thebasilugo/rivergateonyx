/**
 * Navbar and Footer Management for Rivergate Onyx Investment
 * This script handles the dynamic population of navigation elements,
 * services dropdown, footer content, and modal functionality across all pages.
 */

document.addEventListener("DOMContentLoaded", () => {
	// Company information configuration - centralized data
	const COMPANY_INFO = {
		name: "RIVERGATE ONYX INVESTMENT [ROI] LTD",
		address:
			"No 23B. Ondo Close, Crystal Estate, Behind Durba hotel, Amuwo LGA, Lagos, Nigeria",
		email: "rivergateonyxltd@gmail.com",
		phones: [
			{ number: "+234 907 910 3248", href: "tel:+2349079103248" },
			{ number: "+234 813 999 3322", href: "tel:+2348139993322" },
		],
		social: [
			{ name: "facebook", url: "#" },
			{ name: "twitter", url: "#" },
			{ name: "linkedin", url: "#" },
			{ name: "instagram", url: "#" },
		],
		website: {
			name: "www.chiedurivergate.com",
			url: "https://www.chiedurivergate.com",
		},
	};

	// Pages that are ready (not showing coming soon modal)
	const ACTIVE_PAGES = [
		{ name: "Home", url: "index.html" },
		{ name: "About", url: "about.html" },
		{ name: "Services", url: "services.html", isDropdown: false },
		{ name: "Team", url: "team.html" },
		{ name: "FAQ", url: "faq.html" },
		{ name: "Contact", url: "contact.html" },
	];

	// Service dropdown items
	const SERVICE_ITEMS = [
		{
			name: "Consulting Services",
			url: "consulting-services.html",
			comingSoon: true,
		},
		{
			name: "Real Estate Marketing",
			url: "real-estate-marketing.html",
			comingSoon: true,
		},
		{
			name: "Real Estate Management",
			url: "real-estate-management.html",
			comingSoon: true,
		},
		{ name: "All Services", url: "services.html", comingSoon: false },
	];

	// Coming soon pages
	// commenting them out to hide the pages
	const COMING_SOON_PAGES = [
		// { name: "Properties", url: "#" },
		// { name: "Blog", url: "#" },
		// { name: "Careers", url: "#" },
		{ name: "", url: "#" },
	];

	// Footer links that are coming soon
	const FOOTER_COMING_SOON = [
		{ name: "Privacy Policy", url: "#" },
		{ name: "Terms of Service", url: "#" },
	];

	// Get current page URL to highlight active nav item
	const currentPage = window.location.pathname.split("/").pop() || "index.html";

	// Create and insert the modal HTML if it doesn't already exist
	if (!document.getElementById("coming-soon-modal")) {
		createComingSoonModal();
	}

	// Populate desktop navbar if it's empty
	const desktopNav = document.querySelector("header nav.hidden.md\\:flex");
	if (desktopNav && desktopNav.children.length === 0) {
		populateDesktopNavbar();
	}

	// Populate mobile navbar if it's empty
	const mobileMenuContent = document.querySelector("#mobile-menu .space-y-1");
	if (mobileMenuContent && mobileMenuContent.children.length === 0) {
		populateMobileNavbar();
	}

	// Update company information everywhere
	updateCompanyInfo();

	// Populate footer links and information
	populateFooter();

	// Initialize modal functionality
	initializeModal();

	// Initialize mobile menu functionality
	initializeMobileMenu();

	/**
	 * Creates and inserts the coming soon modal HTML
	 */
	function createComingSoonModal() {
		const modalHTML = `
        <div id="coming-soon-modal" class="fixed inset-0 z-50 hidden flex items-center justify-center bg-black bg-opacity-50 cursor-none">
            <div class="bg-white dark:bg-gray-800 rounded-lg p-8 max-w-md w-full mx-4 shadow-xl transform transition-all">
                <div class="flex justify-between items-center mb-4">
                    <h3 class="text-xl font-bold dark:text-white">Coming Soon</h3>
                    <button id="close-modal" class="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200">
                        <i data-lucide="x" class="h-6 w-6"></i>
                    </button>
                </div>
                <div class="mb-6">
                    <p class="text-gray-600 dark:text-gray-300 mb-4">This page is currently under development and will be available soon.</p>
                    <p class="text-gray-600 dark:text-gray-300">Thank you for your patience!</p>
                </div>
                <div class="flex justify-end">
                    <button id="close-modal-btn" class="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-white shadow transition-colors hover:bg-primary-600">
                        Close
                    </button>
                </div>
            </div>
        </div>`;

		document.body.insertAdjacentHTML("afterbegin", modalHTML);
	}

	/**
	 * Updates all instances of the company information to ensure consistency
	 */
	function updateCompanyInfo() {
		// Update in header
		const logoTexts = document.querySelectorAll(
			"header .flex.items-center.gap-2 span.hidden.font-bold, header .flex.items-center.gap-2 span.font-bold"
		);
		logoTexts.forEach((logoText) => {
			if (logoText) {
				logoText.textContent = COMPANY_INFO.name;
			}
		});

		// Update in footer
		const footerCompanyNames = document.querySelectorAll(
			"footer .flex.items-center.gap-2 span.font-bold"
		);
		footerCompanyNames.forEach((footerCompanyName) => {
			if (footerCompanyName) {
				footerCompanyName.textContent = COMPANY_INFO.name;
			}
		});

		// Update in page titles if needed
		const titleElements = document.querySelectorAll("h1, h2");
		titleElements.forEach((titleElement) => {
			if (titleElement.textContent.includes("Rivergate Onyx Investments")) {
				titleElement.textContent = titleElement.textContent.replace(
					"Rivergate Onyx Investments",
					COMPANY_INFO.name
				);
			}
		});
	}

	/**
	 * Populates the desktop navbar with links
	 */
	function populateDesktopNavbar() {
		const desktopNav = document.querySelector("header nav.hidden.md\\:flex");
		if (!desktopNav) return;

		// Clear existing content
		desktopNav.innerHTML = "";

		// Add regular pages
		ACTIVE_PAGES.forEach((page) => {
			const isActive = currentPage === page.url;

			if (!page.isDropdown) {
				desktopNav.appendChild(createNavLink(page, isActive));
			} else {
				// Add services dropdown
				desktopNav.appendChild(createServicesDropdown(isActive));
			}
		});

		// Add coming soon pages
		COMING_SOON_PAGES.forEach((page) => {
			desktopNav.appendChild(createComingSoonLink(page));
		});
	}

	/**
	 * Populates the mobile navbar with links
	 */
	function populateMobileNavbar() {
		const mobileMenu = document.getElementById("mobile-menu");
		if (!mobileMenu) return;

		const mobileMenuContent = mobileMenu.querySelector(".space-y-1");
		if (!mobileMenuContent) return;

		// Clear existing content
		mobileMenuContent.innerHTML = "";

		// Add regular pages
		ACTIVE_PAGES.forEach((page) => {
			const isActive = currentPage === page.url;

			if (!page.isDropdown) {
				mobileMenuContent.appendChild(createMobileNavLink(page, isActive));
			} else {
				// Add services dropdown for mobile
				mobileMenuContent.appendChild(createMobileServicesDropdown());
			}
		});

		// Add coming soon pages
		COMING_SOON_PAGES.forEach((page) => {
			mobileMenuContent.appendChild(createMobileComingSoonLink(page));
		});

		// Add Get Started button
		const getStartedBtn = document.createElement("a");
		getStartedBtn.href = "contact.html";
		getStartedBtn.className =
			"inline-flex w-full items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-white shadow transition-colors hover:bg-primary-600 mt-3";
		getStartedBtn.textContent = "Get Started";
		mobileMenuContent.appendChild(getStartedBtn);
	}

	/**
	 * Populates the footer with links and company information
	 */
	function populateFooter() {
		// Update company info in footer
		updateFooterCompanyInfo();

		// Update footer links for pages section
		populateFooterPages();

		// Update footer links for services section
		// populateFooterServices();

		// Update footer copyright section
		populateFooterCopyright();
	}

	/**
	 * Updates company information in the footer
	 */
	function updateFooterCompanyInfo() {
		const footerCompanyInfo = document.querySelector(
			"footer .flex.flex-col.gap-4.md\\:w-4\\/5"
		);
		if (!footerCompanyInfo) return;

		// Update company name
		const companyNameElement = footerCompanyInfo.querySelector(
			".flex.items-center.gap-2 span.font-bold"
		);
		if (companyNameElement) {
			companyNameElement.textContent = COMPANY_INFO.name;
		}

		// Update address
		const addressElement = footerCompanyInfo.querySelector(
			".flex.items-center.gap-2:nth-of-type(2) span"
		);
		if (addressElement) {
			addressElement.textContent = COMPANY_INFO.address;
		}

		// Update email
		const emailLinkElement = footerCompanyInfo.querySelector(
			".flex.items-center.gap-2:nth-of-type(3) a"
		);
		if (emailLinkElement) {
			emailLinkElement.href = `mailto:${COMPANY_INFO.email}`;
			emailLinkElement.textContent = COMPANY_INFO.email;
		}

		// Update phone numbers
		const phoneContainer = footerCompanyInfo.querySelector(
			".flex.items-center.gap-2:nth-of-type(4)"
		);
		if (phoneContainer) {
			// Clear existing phone numbers
			phoneContainer.innerHTML = '<i data-lucide="phone" class="h-4 w-4"></i>';

			// Add phone numbers
			COMPANY_INFO.phones.forEach((phone, index) => {
				const phoneLink = document.createElement("a");
				phoneLink.href = phone.href;
				phoneLink.className = "hover:underline hover:text-primary";
				phoneLink.textContent = phone.number;

				phoneContainer.appendChild(phoneLink);

				// Add separator if not the last phone
				if (index < COMPANY_INFO.phones.length - 1) {
					const separator = document.createElement("span");
					separator.textContent = "/";
					phoneContainer.appendChild(separator);
				}
			});
		}

		// Update social links
		const socialContainer = footerCompanyInfo.querySelector(
			".flex.space-x-4.mt-2"
		);
		if (socialContainer) {
			// Clear existing social links
			socialContainer.innerHTML = "";

			// Add social links
			COMPANY_INFO.social.forEach((social) => {
				const socialLink = document.createElement("a");
				socialLink.href = social.url;
				socialLink.className =
					"text-gray-500 dark:text-gray-400 hover:text-primary";
				socialLink.innerHTML = `<i data-lucide="${social.name}" class="h-5 w-5"></i>`;

				socialContainer.appendChild(socialLink);
			});
		}
	}

	/**
	 * Populates the pages section in the footer
	 */
	function populateFooterPages() {
		const pagesSection = document.querySelector(
			"footer .grid .flex.flex-col.gap-2:first-child"
		);
		if (!pagesSection) return;

		// Keep the heading
		const heading = pagesSection.querySelector("h3");
		pagesSection.innerHTML = "";
		pagesSection.appendChild(heading);

		// Add active pages
		ACTIVE_PAGES.forEach((page) => {
			if (page.isDropdown) return; // Skip dropdown parent items
			pagesSection.appendChild(createFooterLink(page));
		});

		// Add coming soon pages
		COMING_SOON_PAGES.forEach((page) => {
			pagesSection.appendChild(createFooterComingSoonLink(page));
		});
	}

	/**
	 * Populates the services section in the footer
	 */
	function populateFooterServices() {
		// Find the services section - it might be commented out in the HTML
		let servicesSection = document.querySelector(
			"footer .grid .flex.flex-col.gap-2:nth-child(2)"
		);

		// If it doesn't exist or is commented out, create it
		if (!servicesSection || servicesSection.classList.contains("col-span-2")) {
			// Get the parent grid container
			const gridContainer = document.querySelector("footer .grid");
			if (!gridContainer) return;

			// Create the services section
			servicesSection = document.createElement("div");
			servicesSection.className = "flex flex-col gap-2";

			// Create the heading
			const heading = document.createElement("h3");
			heading.className = "font-semibold text-sm dark:text-white";
			heading.textContent = "Services";
			servicesSection.appendChild(heading);

			// Insert it as the second child
			const firstChild = gridContainer.querySelector(
				".flex.flex-col.gap-2:first-child"
			);
			if (firstChild) {
				gridContainer.insertBefore(servicesSection, firstChild.nextSibling);
			} else {
				gridContainer.appendChild(servicesSection);
			}

			// Adjust the connect section to be the third column
			const connectSection = document.querySelector(
				"footer .grid .flex.flex-col.gap-2.col-span-2"
			);
			if (connectSection) {
				connectSection.className = "flex flex-col gap-2";
			}
		} else {
			// Clear existing content except heading
			const heading = servicesSection.querySelector("h3");
			servicesSection.innerHTML = "";
			servicesSection.appendChild(heading);
		}

		// Add service items
		SERVICE_ITEMS.forEach((service) => {
			if (service.comingSoon) {
				servicesSection.appendChild(createFooterComingSoonLink(service));
			} else {
				servicesSection.appendChild(createFooterLink(service));
			}
		});
	}

	/**
	 * Populates the copyright section in the footer
	 */
	function populateFooterCopyright() {
		// Update current year
		const currentYearElement = document.getElementById("current-year");
		if (currentYearElement) {
			currentYearElement.textContent = new Date().getFullYear();
		}

		// Update footer policy links
		const copyrightSection = document.querySelector(
			"footer .container.mx-auto.mt-8 .flex.gap-4"
		);
		if (copyrightSection && copyrightSection.children.length === 0) {
			// Add coming soon footer links
			FOOTER_COMING_SOON.forEach((link) => {
				copyrightSection.appendChild(createFooterComingSoonLink(link));
			});
		}
	}

	/**
	 * Creates a navigation link for the desktop navbar
	 */
	function createNavLink(page, isActive) {
		const link = document.createElement("a");
		link.href = page.url;
		link.textContent = page.name;

		if (isActive) {
			link.className =
				"transition-colors hover:text-primary text-gray-900 dark:text-white font-medium";
		} else {
			link.className =
				"transition-colors hover:text-primary text-gray-500 dark:text-gray-300";
		}

		return link;
	}

	/**
	 * Creates a coming soon link for the desktop navbar
	 */
	function createComingSoonLink(page) {
		const link = document.createElement("a");
		link.href = "#";
		link.className =
			"coming-soon-link transition-colors hover:text-primary text-gray-500 dark:text-gray-300";
		link.textContent = page.name;
		return link;
	}

	/**
	 * Creates the services dropdown for the desktop navbar
	 */
	function createServicesDropdown(isActive) {
		const container = document.createElement("div");
		container.className = "relative group";

		const button = document.createElement("button");
		if (isActive) {
			button.className =
				"flex items-center gap-1 transition-colors hover:text-primary text-gray-900 dark:text-white font-medium";
		} else {
			button.className =
				"flex items-center gap-1 transition-colors hover:text-primary text-gray-500 dark:text-gray-300";
		}
		button.innerHTML = `
            Services
            <i data-lucide="chevron-down" class="h-4 w-4 transition-transform duration-200 group-hover:rotate-180"></i>
        `;

		const dropdown = document.createElement("div");
		dropdown.className =
			"absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white dark:bg-gray-800 ring-1 ring-black ring-opacity-5 hidden group-hover:block transition-all duration-300 z-50";

		const dropdownInner = document.createElement("div");
		dropdownInner.className = "py-1";

		SERVICE_ITEMS.forEach((service) => {
			const serviceLink = document.createElement("a");
			serviceLink.href = service.url;
			serviceLink.className =
				"block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700";
			serviceLink.textContent = service.name;

			if (service.comingSoon) {
				serviceLink.classList.add("coming-soon-link");
			}

			dropdownInner.appendChild(serviceLink);
		});

		dropdown.appendChild(dropdownInner);
		container.appendChild(button);
		container.appendChild(dropdown);

		return container;
	}

	/**
	 * Creates a navigation link for the mobile navbar
	 */
	function createMobileNavLink(page, isActive) {
		const link = document.createElement("a");
		link.href = page.url;

		if (isActive) {
			link.className =
				"block py-2 text-base font-medium text-gray-900 dark:text-white hover:text-primary dark:hover:text-primary";
		} else {
			link.className =
				"block py-2 text-base text-gray-500 dark:text-gray-300 hover:text-primary dark:hover:text-primary";
		}

		link.textContent = page.name;
		return link;
	}

	/**
	 * Creates a coming soon link for the mobile navbar
	 */
	function createMobileComingSoonLink(page) {
		const link = document.createElement("a");
		link.href = "#";
		link.className =
			"coming-soon-link block py-2 text-base text-gray-500 dark:text-gray-300 cursor-not-allowed pointer-events-none";
		link.textContent = page.name;
		return link;
	}

	/**
	 * Creates the services dropdown for the mobile navbar
	 */
	function createMobileServicesDropdown() {
		const container = document.createElement("div");
		container.className = "py-2";

		const button = document.createElement("button");
		button.id = "mobile-services-dropdown";
		button.className =
			"flex items-center justify-between w-full text-base text-gray-500 dark:text-gray-300";
		button.innerHTML = `
            Services
            <i data-lucide="chevron-down" class="h-4 w-4 transition-transform duration-200"></i>
        `;

		const dropdown = document.createElement("div");
		dropdown.id = "mobile-services-menu";
		dropdown.className = "hidden pl-4 mt-2 space-y-2";

		SERVICE_ITEMS.forEach((service) => {
			const serviceLink = document.createElement("a");
			serviceLink.href = service.url;
			serviceLink.className =
				"block py-2 text-sm text-gray-500 dark:text-gray-300";
			serviceLink.textContent = service.name;

			if (service.comingSoon) {
				serviceLink.classList.add("coming-soon-link");
			}

			dropdown.appendChild(serviceLink);
		});

		container.appendChild(button);
		container.appendChild(dropdown);

		return container;
	}

	/**
	 * Creates a footer link
	 */
	function createFooterLink(page) {
		const link = document.createElement("a");
		link.href = page.url;
		link.className =
			"text-sm text-gray-500 dark:text-gray-400 hover:text-primary hover:underline";
		link.textContent = page.name;
		return link;
	}

	/**
	 * Creates a coming soon footer link
	 */
	function createFooterComingSoonLink(page) {
		const link = document.createElement("a");
		link.href = "#";
		link.className =
			"coming-soon-link text-sm text-gray-500 dark:text-gray-400 hover:text-primary hover:underline";
		link.textContent = page.name;
		return link;
	}

	/**
	 * Initializes the coming soon modal functionality
	 */
	function initializeModal() {
		const comingSoonLinks = document.querySelectorAll(".coming-soon-link");
		const comingSoonModal = document.getElementById("coming-soon-modal");
		const closeModalBtn = document.getElementById("close-modal-btn");
		const closeModalX = document.getElementById("close-modal");

		if (!comingSoonModal || !closeModalBtn || !closeModalX) return;

		comingSoonLinks.forEach((link) => {
			link.addEventListener("click", (e) => {
				e.preventDefault();
				comingSoonModal.classList.remove("hidden");
			});
		});

		closeModalBtn.addEventListener("click", () => {
			comingSoonModal.classList.add("hidden");
		});

		closeModalX.addEventListener("click", () => {
			comingSoonModal.classList.add("hidden");
		});

		// Close modal when clicking outside
		comingSoonModal.addEventListener("click", (e) => {
			if (e.target === comingSoonModal) {
				comingSoonModal.classList.add("hidden");
			}
		});

		// Close modal with Escape key
		document.addEventListener("keydown", (e) => {
			if (e.key === "Escape" && !comingSoonModal.classList.contains("hidden")) {
				comingSoonModal.classList.add("hidden");
			}
		});
	}

	/**
	 * Initializes mobile menu functionality
	 */
	function initializeMobileMenu() {
		const mobileMenuButton = document.getElementById("mobile-menu-button");
		const mobileMenu = document.getElementById("mobile-menu");
		const mobileServicesDropdown = document.getElementById(
			"mobile-services-dropdown"
		);
		const mobileServicesMenu = document.getElementById("mobile-services-menu");

		if (mobileMenuButton && mobileMenu) {
			mobileMenuButton.addEventListener("click", () => {
				mobileMenu.classList.toggle("hidden");
			});
		}

		if (mobileServicesDropdown && mobileServicesMenu) {
			mobileServicesDropdown.addEventListener("click", () => {
				mobileServicesMenu.classList.toggle("hidden");
				const icon = mobileServicesDropdown.querySelector("i");
				if (icon) {
					icon.classList.toggle("rotate-180");
				}
			});
		}
	}

	// Initialize Lucide icons after DOM manipulation
	let lucide;
	if (typeof lucide !== "undefined") {
		lucide.createIcons();
	} else if (window.lucide) {
		window.lucide.createIcons();
	} else {
		console.warn(
			"Lucide icons not initialized. Ensure lucide-static is properly included."
		);
	}
});
