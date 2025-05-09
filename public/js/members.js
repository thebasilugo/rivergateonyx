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
		name: "Chuks Ugwunwa Esq.",
		role: "Legal Adviser/Coy Sec",
		degrees: "",
		image: "images/chuks-ugwunwa.jpeg",
		description: `Legal practitioner with sound academic foundation in law, holding both a Bachelor of Laws (LL.B) degree and a Barrister at Law (B.L) . Under Ekwuogo & Co Legal Practitioners , with speciality in civil, corporate, and real estate law. We offer clients excellent professional legal services based on our deep understanding of the legal and regulatory frameworks that govern these sectors. Holding a high standard of legal and regulatory compliance without compromising clients' interest in all cases`,
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
	// {
	// 	name: "Basil Ugochukwu",
	// 	role: "Web Developer",
	// 	degrees: "BSc",
	// 	image: "https://placehold.co/160x160/f8f9fa/a3a3a3?text=Basil+Ugochukwu",
	// 	description: `Basil is a passionate Front-end Developer with a strong foundation in building responsive and performant web applications using React, Next.js, TypeScript, and TailwindCSS. With hands-on experience developing client-facing solutions for startups and organizations, he has successfully delivered production-grade projects including e-commerce platforms, streaming apps, and logistics systems. Basil is also an educator and content creator, having tutored students in web development and volunteered as a media lead in community initiatives. He holds a BSc. in Computer Science from Landmark University, where he also co-authored a cybersecurity research paper published in IEEE Xplore. Basil blends design sensitivity with technical expertise to build scalable digital experiences.`,
	// 	links: {
	// 		linkedin: "https://linkedin.com/in/thebasilugo",
	// 		mail: "mailto:basilugo2@gmail.com",
	// 	},
	// },
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
