export default {
    namespaced: true,
    state: {
        techTeam: [
            {
                name: "Rajesh Sharma",
                post: "Head of Production",
                value: "Leads the production strategy, oversees manufacturing processes, and ensures the company maintains high standards of quality and efficiency in grease production. Coordinates with the R&D and operations teams to implement innovative production techniques."
            },
            {
                name: "Anil Mehta",
                post: "Production Manager",
                value: "Manages the day-to-day operations on the production floor, ensuring that manufacturing processes are followed correctly. Responsible for managing resources, overseeing the production team, and ensuring that production goals are met efficiently."
            },
            {
                name: "Ravi Verma",
                post: "Quality Assurance Manager",
                value: "Oversees product quality by implementing and monitoring quality assurance processes. Ensures that the grease products meet regulatory standards and customer specifications, conducting tests and inspections to maintain quality consistency."
            },
            {
                name: "Amit Bhardwaj",
                post: "Maintenance Engineer",
                value: "Responsible for maintaining and troubleshooting production equipment to ensure minimal downtime. Works on preventive maintenance schedules and ensures machinery operates at optimal performance to support continuous production."
            },
            {
                name: "Suresh Yadav",
                post: "Production Supervisor",
                value: "Supervises the production staff and ensures smooth workflow on the production floor. Monitors production schedules, ensures safety protocols are followed, and handles workforce allocation and management."
            },
            {
                name: "Vijay Patil",
                post: "Process Engineer",
                value: "Designs, develops, and optimizes manufacturing processes. Focuses on improving the efficiency of grease production, reducing waste, and implementing new technologies to streamline operations."
            },
            {
                name: "Rakesh Gupta",
                post: "Packaging Supervisor",
                value: "Supervises the packaging team, ensuring that finished grease products are packed according to specifications. Ensures the packaging process meets both quality and safety standards, managing the packaging line efficiently."
            },
            {
                name: "Harjeet Singh",
                post: "Supply Chain Coordinator",
                value: "Coordinates with suppliers and logistics teams to ensure that raw materials and finished goods are delivered on time. Oversees inventory management and liaises between production, warehousing, and distribution departments."
            },
            {
                name: "Manoj Deshmukh",
                post: "Logistics Manager",
                value: "Manages the logistics and distribution of grease products, ensuring timely delivery to customers. Responsible for transportation planning, managing warehouse operations, and optimizing the supply chain for cost-efficiency."
            }
        ],
        marketingTeam: [
            {
                name: "Aman Sharma",
                post: "Chief Marketing Officer",
                value: "Develops and oversees the overall marketing strategy, aligns marketing initiatives with company goals, and leads the marketing team."
            },
            {
                name: "Bhawna Rawat",
                post: "Digital Marketing Specialist",
                value: "Implements and manages online marketing campaigns, analyzes digital traffic, and optimizes online presence to enhance engagement and conversions."
            },
            {
                name: "Garima Bhardwaj",
                post: "Content Marketing Manager",
                value: "Creates and manages content strategy across all platforms. Oversees the creation of blogs, whitepapers, case studies, and other marketing materials."
            },
            {
                name: "Manjesh Kumar Singh",
                post: "Brand Manager",
                value: "Develops and maintains the company's brand identity. Ensures brand consistency across all marketing channels and initiatives."
            },
        ],
        managementTeam: [
            {
                name: "Anusha Tyagi",
                post: "Manger",
                value: "Provides overall leadership and strategic direction for the company. Makes high-level decisions and is responsible for the company's success."
            },
            {
                name: "Kaushubh Sharma",
                post: "Accounts Manager",
                value: "Manages the company's financial operations, including budgeting, financial planning, and reporting. Ensures financial health and compliance."
            },
            {
                name: "Swati Srivastava",
                post: "HR Manager",
                value: "Oversees day-to-day operations, ensures efficient processes, and manages resource allocation across departments."
            },
            {
                name: "Saurabh Singh",
                post: "Admin Manager",
                value: "Leads the technology strategy, oversees software development and IT infrastructure, and ensures the company stays at the forefront of technological innovation."
            },
        ],
    },
    getters: {
        getTechTeam: state => state.techTeam,
        getMarketingTeam: state => state.marketingTeam,
        getManagementTeam: state => state.managementTeam,
    },
    mutations: {},
    actions: {},
}