// members.js

const teamMembers = [
	{
		name: "Dr. Ifeanyi Gordian Nweke",
		role: "Chairman",
		degrees: "PhD; Fss. MBA",
		image: "https://placehold.co/160x160/f8f9fa/a3a3a3?text=Ifeanyi+Nweke",
		description: `Gordian is a Financial Services Consultant and Real Estate Expert, having performed leading roles in several Global banks in Nigeria. He is a passionate minister and witness for the LORD Jesus among business Executives and Entrepreneurs. Gordian is an author of several magnificent books, impacting lives across the Globe. His books can be freely accessed online via gordiannweke.org. Gordian lives with his wife and children in Canada.`,
		links: {
			linkedin: "#",
			mail: "#",
		},
	},
	{
		name: "Chiedu Samuel Okonta",
		role: "Managing Director/CEO",
		degrees: "MBA/LBS; FCA, B.SC/Upper",
		image: "images/chiedu-okonta.jpg",
		description: `Chiedu has excellent business and financial analytical skills, a highly intuitive, strategic and result oriented leader, with	experience and expertise in boosting enterprise value. Developing and leading teams with highest professional	standards to boost wealth creation, having performed several leading roles in UBA Plc across Africa; Chiedu brings his experience to bear in this venture. He has authored two books (Keys to Sustainable SMEs and Stamp Out Fraud in Your System). Chiedu is an FCA with MBA from Pan Atlantic University/Lagos Business School, Lagos. He is happily married to his wife and has four children.`,
		links: {
			linkedin: "#",
			mail: "#",
		},
	},
	{
		name: "Mac Onojake & Co",
		role: "Lead Partner",
		degrees: "MBA, FCA, FCTI",
		image: "images/mac-onojake.jpeg",
		description: `Has varied expertise in Audit, Tax and General Consulting services. He has, as the leading Partner, supervised the annual audits of global companies and provided tax advisory services to several global institutions. His wealth of experience brings great value to this Board.`,
		links: {
			linkedin: "#",
			mail: "#",
		},
	},
	{
		name: "Jude Ike",
		role: "Strategy and Financial Adviser",
		degrees: "MBA",
		image: "images/jude-ike.jpeg",
		description: `Jude has led a distinguished professional career in management and business advisory services. He has over 20 years of professional experience straddled between local and international consulting practices. He has worked in leading consulting practices in Deloitte, Index Consulting and Allen Professional Services. Where he served wide spectrum of industries; including Corporate, Private and Government entities. Jude is the founder and Lead Partner of Allen Professional Services, a strategy, financial modelling, and business process improvement consulting firm based in Lagos Nigeria. Jude is an award-winning mathematician, a data scientist, and a trained Chemical Engineer. He possesses a master's degree in business administration (MBA). He is an alumnus of the Pan Atlantic University (Lagos Business School).`,
		links: {
			linkedin: "#",
			mail: "#",
		},
	},
	{
		name: "Ebubechukwu Favour",
		role: "Communication & Marketing",
		degrees: "",
		image: "images/favour-ebube.jpeg",
		description: `Ebube is an ORU trained Communication expert, drives strategic marketing initiatives to elevate our real estate ventures. Her role focuses on developing innovative campaigns, analyzing marketing trends, and create compelling narratives that highlight the unique value of our investment opportunities. By leveraging data-driven insights and creative strategies, she ensures our offerings stand out in a competitive market, attracting discerning investors, and achieve optimal visibility.`,
		links: {
			linkedin: "#",
			mail: "#",
		},
	},
	{
		name: "Otufale Oluwakayode A. Esq.",
		role: "Legal Adviser/Coy Sec",
		degrees: "",
		image: "https://placehold.co/160x160/f8f9fa/a3a3a3?text=Otufale+Kayode",
		description: `Kayode is the Principal Associate at Kayode Otufale & Associates. He was called to the Nigerian Bar as a Solicitor and Advocate of the Supreme Court of Nigeria in May, 2008. He practiced law with the Law firm of Messrs Dele Adesina & Co from 2008 to 2015 when he commenced his private practice. He is seasoned in Corporate and Commercial law and Real Estate. Kayode demonstrates high level legal understanding, reasoning, and analysis.`,
		links: {
			linkedin: "#",
			mail: "#",
		},
	},
	{
		name: "Oloyede Emmanuel Ogunsalu",
		role: "Head - Digital Marketing",
		degrees: "",
		image: "images/oloye-emmanuel.jpeg",
		description: `Oloyede is an Information Technology enthusiast with First Class Degree in Business Management from Ghana Technology University College, a Digital Marketing Certification from Google; as well as an Oracle Certified Associate from Oracle University USA.`,
		links: {
			linkedin: "#",
			mail: "#",
		},
	},

	// Add more team members here
];

function renderTeamMembers(containerId) {
	const container = document.getElementById(containerId);
	if (!container) return;

	container.innerHTML = teamMembers
		.map((member, index) => {
			const isEven = index % 2 === 0;

			return `
			<div
				class="grid md:grid-cols-2 gap-10 items-center"
				
			>
				<!-- IMAGE -->
				<div class="aspect-square relative overflow-hidden rounded-xl ${
					isEven ? "" : "md:order-last"
				}">
					<img
						src="${member.image}"
						alt="${member.name}"
						class="absolute inset-0 h-full w-full object-cover"
					/>
				</div>

				<!-- TEXT -->
				<div class="space-y-4">
					<div class="space-y-2">
						<div
							class="inline-block rounded-lg bg-primary-100 dark:bg-primary-900/30 px-3 py-1 text-sm font-medium text-primary dark:text-primary-300"
						>
							${member.role}
						</div>
						<h2 class="text-3xl font-bold dark:text-white">
							${member.name}
						</h2>
						<p class="text-xl text-gray-500 dark:text-gray-400">
							${member.degrees}
						</p>
					</div>
					<p class="text-gray-500 dark:text-gray-300">
						${member.description}
					</p>
					<div class="flex space-x-4 mt-4">
						<a href="${
							member.links.linkedin
						}" class="text-gray-500 dark:text-gray-400 hover:text-primary">
							<i data-lucide="linkedin" class="h-5 w-5"></i>
						</a>
						<a href="${
							member.links.mail
						}" class="text-gray-500 dark:text-gray-400 hover:text-primary">
							<i data-lucide="mail" class="h-5 w-5"></i>
						</a>
					</div>
				</div>
			</div>`;
		})
		.join("");
}

// Run when DOM is ready
document.addEventListener("DOMContentLoaded", () => {
	renderTeamMembers("team-container");
});
