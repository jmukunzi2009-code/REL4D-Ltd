// Modal Content Data
      const modalData = {
        about: {
          title: "About REL4D Hub Ltd",
          image:
            "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
          content: `
                    <div class="modal-section">
                        <h3>Company Overview</h3>
                        <p>Research and Learning for Development Hub-REL4D Hub Ltd is a registered consultancy firm (TIN: 121718400) based in Kigali, Rwanda, specializing in conducting research, evaluations, and supporting learning initiatives for international development programs.</p>
                    </div>
                    
                    <div class="modal-section">
                        <h3>Our Expertise</h3>
                        <p>We utilize cutting-edge data analytics, machine learning, and artificial intelligence capabilities to maximize evidence and insights that inform policy and practice, and strengthen development outcomes. Our team has broad experience conducting impact evaluations, market analysis, and learning assessments for USAID programming in Rwanda.</p>
                    </div>
                    
                    <div class="modal-section">
                        <h3>Technical Capabilities</h3>
                        <ul class="modal-features">
                            <li>End-to-end research and evaluation services</li>
                            <li>Monitoring, evaluation, and learning (MEL) systems</li>
                            <li>Data analytics and machine learning applications</li>
                            <li>Predictive modeling and interactive visualizations</li>
                            <li>Capacity building and knowledge management</li>
                            <li>Program design and impact assessment</li>
                        </ul>
                    </div>
                    
                    <div class="modal-section">
                        <h3>Sector Experience</h3>
                        <p>We have specialized expertise designing surveys, collecting field data, analyzing results, and distilling insights across sectors including health system strengthening, community health, economics and financial inclusion, and education.</p>
                    </div>
                `,
        },
        mission: {
          title: "Our Mission",
          image:
            "https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
          content: `
                    <div class="modal-section">
                        <h3>Core Mission Statement</h3>
                        <p>To strengthen development outcomes through rigorous, robust, evidence-based model of scientific inquiry and collaborative learning partnerships.</p>
                    </div>
                    
                    <div class="modal-section">
                        <h3>Mission in Practice</h3>
                        <p>Our mission drives everything we do. We believe that evidence should be at the heart of development decision-making, and that through collaborative learning, we can achieve more sustainable and impactful outcomes.</p>
                    </div>
                    
                    <div class="modal-section">
                        <h3>How We Live Our Mission</h3>
                        <ul class="modal-features">
                            <li>Conducting rigorous, evidence-based research</li>
                            <li>Building collaborative learning partnerships</li>
                            <li>Applying scientific inquiry to development challenges</li>
                            <li>Strengthening organizational capacity for evidence use</li>
                            <li>Bridging research with practice</li>
                            <li>Promoting data-driven decision making</li>
                        </ul>
                    </div>
                    
                    <div class="modal-section">
                        <h3>Impact of Our Mission</h3>
                        <p>Through our mission-driven work, we help organizations make better decisions, design more effective programs, and achieve greater development impact through evidence-based approaches.</p>
                    </div>
                `,
        },
        vision: {
          title: "Our Vision",
          image:
            "https://images.unsplash.com/photo-1500462918059-b1a0cb512f1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
          content: `
                    <div class="modal-section">
                        <h3>Vision Statement</h3>
                        <p>We envision evidence-informed policies, resilient communities, and locally sustained development outcomes - achieved through collaborative learning partnerships.</p>
                    </div>
                    
                    <div class="modal-section">
                        <h3>Our Vision for Development</h3>
                        <p>We believe in a world where development decisions are informed by robust evidence, communities are empowered with knowledge, and sustainable outcomes are achieved through local ownership and global learning.</p>
                    </div>
                    
                    <div class="modal-section">
                        <h3>Key Vision Elements</h3>
                        <ul class="modal-features">
                            <li>Evidence-informed policies at all levels</li>
                            <li>Resilient communities empowered by data</li>
                            <li>Locally sustained development outcomes</li>
                            <li>Collaborative learning ecosystems</li>
                            <li>Innovative solutions to development challenges</li>
                            <li>Global knowledge sharing and learning</li>
                        </ul>
                    </div>
                    
                    <div class="modal-section">
                        <h3>Working Towards Our Vision</h3>
                        <p>Every project we undertake, every partnership we build, and every evaluation we conduct moves us closer to realizing this vision of evidence-driven development transformation.</p>
                    </div>
                `,
        },
      };

      // Modal Functions
      function openModal(title, imageUrl, content) {
        document.getElementById("modalTitle").textContent = title;
        document.getElementById(
          "modalImage"
        ).style.backgroundImage = `url('${imageUrl}')`;
        document.getElementById("modalContent").innerHTML = content;
        document.getElementById("detailModal").classList.add("active");
        document.body.style.overflow = "hidden";
      }

      function closeModal() {
        document.getElementById("detailModal").classList.remove("active");
        document.body.style.overflow = "auto";
      }

      // Click Handlers
      function showAboutDetail() {
        openModal(
          modalData.about.title,
          modalData.about.image,
          modalData.about.content
        );
      }

      function showMissionDetail() {
        openModal(
          modalData.mission.title,
          modalData.mission.image,
          modalData.mission.content
        );
      }

      function showVisionDetail() {
        openModal(
          modalData.vision.title,
          modalData.vision.image,
          modalData.vision.content
        );
      }

      function showServiceDetail(service) {
        const services = {
          "model-building": {
            title: "Model Building Service",
            image:
              "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
            content: `
                        <div class="modal-section">
                            <h3>Model Building & Framework Development</h3>
                            <p>We support organizations to develop comprehensive monitoring and evaluation frameworks including Theory of Change, Results Frameworks, Logic Models, and Performance Indicator Systems.</p>
                        </div>
                        
                        <div class="modal-section">
                            <h3>Our Approach</h3>
                            <ul class="modal-features">
                                <li>Theory of Change Development: Visualizing pathways to impact and change</li>
                                <li>Results Framework Design: Defining measurable outcomes and indicators</li>
                                <li>Custom Indicator Development: SMART indicators tailored to your context</li>
                                <li>M&E Plan Creation: Comprehensive monitoring and evaluation plans</li>
                                <li>Logic Model Development: Visual representation of program logic</li>
                                <li>Performance Management Systems: Tools for tracking progress and impact</li>
                            </ul>
                        </div>
                        
                        <div class="modal-section">
                            <h3>Benefits</h3>
                            <p>Our model building services help organizations create clear, measurable frameworks that guide program implementation, track progress, and demonstrate impact to stakeholders and funders.</p>
                        </div>
                    `,
          },
          "system-customization": {
            title: "System Customization",
            image:
              "https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
            content: `
                        <div class="modal-section">
                            <h3>Custom Data Systems & Analytics</h3>
                            <p>We support organizations to customize efficient and robust systems for data collection, analytics, and visualization using Machine Learning and Artificial Intelligence.</p>
                        </div>
                        
                        <div class="modal-section">
                            <h3>Our Solutions</h3>
                            <ul class="modal-features">
                                <li>Data Collection Systems: Mobile data collection, web portals, APIs</li>
                                <li>Analytics Dashboards: Real-time data visualization and reporting</li>
                                <li>AI-Powered Insights: Machine learning for predictive analytics</li>
                                <li>Real-time Reporting: Automated report generation and distribution</li>
                                <li>Data Integration: Connecting disparate data sources</li>
                                <li>Cloud-based Solutions: Scalable and secure data systems</li>
                            </ul>
                        </div>
                        
                        <div class="modal-section">
                            <h3>Technical Capabilities</h3>
                            <p>We leverage cutting-edge technologies including Python, R, JavaScript, Power BI, Tableau, and custom web applications to create data systems that meet your specific needs.</p>
                        </div>
                    `,
          },
        };

        const data = services[service];
        if (data) {
          openModal(data.title, data.image, data.content);
        }
      }

      function showExperienceDetail(experience) {
        const experiences = {
          chai: {
            title: "Technical Advisor - CHAI",
            image:
              "https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3&auto=format&fit=crop&w=2080&q=80",
            content: `
                        <div class="modal-section">
                            <h3>Clinton Health Access Initiative (2021-2022)</h3>
                            <p>Served as Technical Advisor for Monitoring and Evaluation of the Health Workforce Program, providing strategic guidance and technical oversight for program monitoring and evaluation activities.</p>
                        </div>
                        
                        <div class="modal-section">
                            <h3>Key Responsibilities</h3>
                            <ul class="modal-features">
                                <li>Designed and implemented comprehensive M&E frameworks</li>
                                <li>Developed data collection tools and systems</li>
                                <li>Conducted data analysis and impact assessments</li>
                                <li>Provided capacity building for M&E staff</li>
                                <li>Prepared donor reports and presentations</li>
                                <li>Supported evidence-based decision making</li>
                            </ul>
                        </div>
                    `,
          },
        };

        const data = experiences[experience];
        if (data) {
          openModal(data.title, data.image, data.content);
        }
      }

      function showAllExperience() {
        openModal(
          "Complete Experience Timeline",
          "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
          `
                    <div class="modal-section">
                        <h3>Professional Experience</h3>
                        <p>The founder of REL4D has 5+ years of leadership experience from different international NGOs, including:</p>
                    </div>
                    
                    <div class="modal-section">
                        <h3>2021-2022: Clinton Health Access Initiative</h3>
                        <p><strong>Technical Advisor for Monitoring and Evaluation of Health Workforce Program</strong></p>
                        <ul class="modal-features">
                            <li>Led M&E system design and implementation</li>
                            <li>Conducted impact evaluations and assessments</li>
                            <li>Built organizational M&E capacity</li>
                        </ul>
                    </div>
                    
                    <div class="modal-section">
                        <h3>2020-2021: Palladium</h3>
                        <p><strong>MEL Manager for USAID Rwanda Integrated Health System Activity (RIHSA)</strong></p>
                        <ul class="modal-features">
                            <li>Managed monitoring, evaluation, and learning activities</li>
                            <li>Oversaw data collection and analysis systems</li>
                            <li>Led reporting and knowledge management</li>
                        </ul>
                    </div>
                    
                    <div class="modal-section">
                        <h3>2018-2020: Global Communities</h3>
                        <p><strong>MERL Manager for USAID Improved Services for Vulnerable Populations (ISVP)</strong></p>
                        <ul class="modal-features">
                            <li>Directed monitoring, evaluation, research, and learning</li>
                            <li>Managed vulnerable populations program evaluation</li>
                            <li>Built community-based monitoring systems</li>
                        </ul>
                    </div>
                `
        );
      }

      function showProjectDetail(project) {
        const projects = {
          ingobyi: {
            title: "USAID Ingobyi Activity Endline Survey",
            image:
              "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
            content: `
                        <div class="modal-section">
                            <h3>Project Overview</h3>
                            <p>Served as Co-Investigator for USAID Ingobyi Activity Endline Survey in Rwanda, conducting comprehensive assessment of health system strengthening program.</p>
                        </div>
                        
                        <div class="modal-section">
                            <h3>Key Activities</h3>
                            <ul class="modal-features">
                                <li>Designed endline survey methodology and tools</li>
                                <li>Led data collection across multiple health facilities</li>
                                <li>Conducted data analysis using advanced statistical methods</li>
                                <li>Prepared comprehensive endline assessment report</li>
                                <li>Presented findings to stakeholders and donors</li>
                                <li>Provided recommendations for program improvement</li>
                            </ul>
                        </div>
                    `,
          },
          "igire-ubaka": {
            title: "Igire Ubaka Ejo Baseline Survey",
            image:
              "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
            content: `
                        <div class="modal-section">
                            <h3>Project Overview</h3>
                            <p>Served as Co-Investigator for USAID Igire Ubaka Ejo Activity Baseline Survey in Gasabo, Kayonza, and Rusizi districts.</p>
                        </div>
                        
                        <div class="modal-section">
                            <h3>Key Activities</h3>
                            <ul class="modal-features">
                                <li>Conducted baseline data collection across three districts</li>
                                <li>Designed survey instruments and sampling methodology</li>
                                <li>Analyzed baseline data for economic empowerment program</li>
                                <li>Developed baseline report with key findings and recommendations</li>
                                <li>Supported program design based on baseline findings</li>
                            </ul>
                        </div>
                    `,
          },
        };

        const data = projects[project];
        if (data) {
          openModal(data.title, data.image, data.content);
        }
      }

      function showCertDetail(cert) {
        const certs = {
          tin: {
            title: "Tax Identification Number",
            image:
              "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
            content: `
                        <div class="modal-section">
                            <h3>Official Business Registration</h3>
                            <p><strong>TIN: 121718400</strong></p>
                            <p>REL4D Hub Ltd is a fully registered consultancy firm with the Rwanda Revenue Authority, authorized to conduct business in Rwanda and internationally.</p>
                        </div>
                        
                        <div class="modal-section">
                            <h3>Legal Status</h3>
                            <ul class="modal-features">
                                <li>Registered Limited Liability Company</li>
                                <li>Valid Tax Identification Number (TIN)</li>
                                <li>Compliant with Rwanda Revenue Authority regulations</li>
                                <li>Authorized to issue tax-compliant invoices</li>
                                <li>Legally recognized for contractual agreements</li>
                            </ul>
                        </div>
                    `,
          },
        };

        const data = certs[cert];
        if (data) {
          openModal(data.title, data.image, data.content);
        }
      }

      function showTeamDetail(member) {
        const teamMembers = {
          jean: {
            title: "Jean Willy ULIHO - Managing Director",
            image:
              "https://workforceafrica.com/wp-content/uploads/2025/02/Jean-Willy-ULIHO-Monitoring-Evaluation-and-Learing-Mgr-Agahozo-Shalom-Youth-Village.webp",
            content: `
                        <div class="modal-section">
                            <h3>Professional Background</h3>
                            <p>5+ years of leadership experience in international NGOs with specialized expertise in USAID programming, monitoring & evaluation, and research design.</p>
                        </div>
                        
                        <div class="modal-section">
                            <h3>Core Competencies</h3>
                            <ul class="modal-features">
                                <li>Monitoring, Evaluation & Learning (MEL) Systems Design</li>
                                <li>Research Methodology & Study Design</li>
                                <li>Data Analysis & Interpretation</li>
                                <li>Program Management & Leadership</li>
                                <li>Capacity Building & Training</li>
                                <li>Stakeholder Engagement & Coordination</li>
                            </ul>
                        </div>
                        
                        <div class="modal-section">
                            <h3>Contact Information</h3>
                            <p><strong>Email:</strong> rel4dltd@gmail.com</p>
                            <p><strong>Phone:</strong> +250 788 286 965</p>
                            <p><strong>Location:</strong> Kigali, Rwanda</p>
                            <p><strong>Availability:</strong> Monday-Friday, 9AM-5PM CAT</p>
                        </div>
                    `,
          },
        };

        const data = teamMembers[member];
        if (data) {
          openModal(data.title, data.image, data.content);
        }
      }

      function showContactDetail() {
        openModal(
          "Contact Managing Director",
          "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=2064&q=80",
          `
                    <div class="modal-section">
                        <h3>Jean Willy ULIHO</h3>
                        <p>Managing Director, REL4D Hub Ltd</p>
                    </div>
                    
                    <div class="modal-section">
                        <h3>Direct Contact</h3>
                        <p><strong>📧 Email:</strong> rel4dltd@gmail.com</p>
                        <p><strong>📱 Phone:</strong> +250 788 286 965</p>
                        <p><strong>📍 Location:</strong> Kigali, Rwanda</p>
                        <p><strong>🕒 Availability:</strong> Monday-Friday, 9AM-5PM CAT</p>
                    </div>
                    
                    <div class="modal-section">
                        <h3>Preferred Contact Methods</h3>
                        <ul class="modal-features">
                            <li>Email for detailed inquiries and proposals</li>
                            <li>Phone calls for urgent matters</li>
                            <li>Video calls for detailed discussions</li>
                            <li>In-person meetings by appointment</li>
                        </ul>
                    </div>
                `
        );
      }

      function showResourceModal(type) {
        const resources = {
          proposal: {
            title: "Request a Proposal",
            content: `
                        <div class="modal-section">
                            <h3>Project Proposal Request</h3>
                            <p>To request a detailed project proposal, please contact us at rel4dltd@gmail.com with the following information:</p>
                        </div>
                        
                        <div class="modal-section">
                            <h3>Required Information</h3>
                            <ul class="modal-features">
                                <li>Project title and description</li>
                                <li>Specific services required</li>
                                <li>Project timeline and budget range</li>
                                <li>Organization details</li>
                                <li>Contact information</li>
                                <li>Any existing project documents</li>
                            </ul>
                        </div>
                    `,
          },
        };

        const data = resources[type];
        if (data) {
          openModal(
            data.title,
            "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
            data.content
          );
        }
      }
function playIntroVideo() {
    openModal(
        "REL4D Introduction",
        "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
        `
        <div class="modal-section">
            <h3>Welcome to REL4D Hub</h3>
            <p>A registered consultancy firm specializing in research, evaluations, and learning initiatives for international development programs.</p>
        </div>
        
        <div style="margin: 30px 0; padding: 20px; background: var(--light-bg); border-radius: var(--radius-md); text-align: center;">
            <div class="video-container">
                <!-- Replace YOUR_VIDEO_URL_HERE with your actual video URL -->
                <video controls style="width: 100%; border-radius: 8px;">
                    <source src="YOUR_VIDEO_URL_HERE" type="video/mp4">
                    Your browser does not support the video tag.
                </video>
            </div>
            <p style="margin-top: 15px; font-size: 0.9rem; color: var(--text-light);">
                Introduction to REL4D Hub - Our services and expertise
            </p>
        </div>
        
        <div class="modal-section">
            <h3>Quick Contact</h3>
            <p>For immediate assistance or to schedule a demo, contact us at rel4dltd@gmail.com or call +250 788 286 965.</p>
        </div>
        `
    );
}

      // Theme Management
      function applyTheme(theme) {
        document.body.classList.remove("dark-mode");
        document.getElementById("themeToggle").innerHTML =
          '<i class="fas fa-moon"></i>';

        document.documentElement.style.setProperty(
          "--primary-color",
          "#002F6C"
        );
        document.documentElement.style.setProperty("--primary-dark", "#001A40");
        document.documentElement.style.setProperty(
          "--secondary-color",
          "#47805F"
        );
        document.documentElement.style.setProperty("--accent-color", "#F49B45");

        switch (theme) {
          case "green":
            document.documentElement.style.setProperty(
              "--primary-color",
              "#47805F"
            );
            document.documentElement.style.setProperty(
              "--primary-dark",
              "#35674D"
            );
            document.documentElement.style.setProperty(
              "--secondary-color",
              "#002F6C"
            );
            break;
          case "orange":
            document.documentElement.style.setProperty(
              "--primary-color",
              "#F49B45"
            );
            document.documentElement.style.setProperty(
              "--primary-dark",
              "#D9822B"
            );
            document.documentElement.style.setProperty(
              "--secondary-color",
              "#002F6C"
            );
            break;
        }

        showNotification(
          `${theme.charAt(0).toUpperCase() + theme.slice(1)} theme applied`
        );
        hideColorPicker();
      }

      function toggleDarkMode() {
        const isDark = document.body.classList.toggle("dark-mode");
        const icon = document.getElementById("themeToggle").querySelector("i");

        if (isDark) {
          icon.className = "fas fa-sun";
          localStorage.setItem("darkMode", "enabled");
          showNotification("Dark mode enabled");
        } else {
          icon.className = "fas fa-moon";
          localStorage.setItem("darkMode", "disabled");
          showNotification("Dark mode disabled");
        }

        hideColorPicker();
      }

      // Color Picker
      const colorPickerToggle = document.getElementById("colorPickerToggle");
      const colorPickerMenu = document.getElementById("colorPickerMenu");

      colorPickerToggle.addEventListener("click", (e) => {
        e.stopPropagation();
        colorPickerMenu.classList.toggle("show");
      });

      function hideColorPicker() {
        colorPickerMenu.classList.remove("show");
      }

      document.addEventListener("click", hideColorPicker);
      colorPickerMenu.addEventListener("click", (e) => e.stopPropagation());

      // Mobile Navigation
      const mobileToggle = document.getElementById("mobileToggle");
      const navMenu = document.getElementById("navMenu");

      mobileToggle.addEventListener("click", () => {
        navMenu.classList.toggle("active");
        mobileToggle.innerHTML = navMenu.classList.contains("active")
          ? '<i class="fas fa-times"></i>'
          : '<i class="fas fa-bars"></i>';
      });

      document.querySelectorAll(".nav-menu a").forEach((link) => {
        link.addEventListener("click", () => {
          navMenu.classList.remove("active");
          mobileToggle.innerHTML = '<i class="fas fa-bars"></i>';
          document
            .querySelectorAll(".nav-menu a")
            .forEach((a) => a.classList.remove("active"));
          link.classList.add("active");
        });
      });

      // Header scroll effect
      window.addEventListener("scroll", () => {
        const header = document.getElementById("header");
        header.classList.toggle("scrolled", window.scrollY > 100);
      });

      // Utility Functions
      function copyToClipboard(text, label) {
        navigator.clipboard.writeText(text).then(() => {
          showNotification(`${label || "Text"} copied to clipboard`);
        });
      }

      function openMaps() {
        window.open("https://maps.google.com?q=Kigali+Rwanda", "_blank");
        showNotification("Opening Google Maps...");
      }

      function shareTwitter() {
        const text = encodeURIComponent(
          "Check out REL4D Hub - Research and Learning for Development | TIN: 121718400 | Kigali, Rwanda"
        );
        const url = encodeURIComponent(window.location.href);
        window.open(
          `https://twitter.com/intent/tweet?text=${text}&url=${url}`,
          "_blank"
        );
      }

      function shareLinkedIn() {
        const url = encodeURIComponent(window.location.href);
        window.open(
          `https://www.linkedin.com/sharing/share-offsite/?url=${url}`,
          "_blank"
        );
      }

      function shareFacebook() {
        const url = encodeURIComponent(window.location.href);
        window.open(
          `https://www.facebook.com/sharer/sharer.php?u=${url}`,
          "_blank"
        );
      }

      // Form Submission
      document
        .getElementById("contactForm")
        .addEventListener("submit", function (e) {
          e.preventDefault();
          const name = document.getElementById("name").value;
          const email = document.getElementById("email").value;
          showNotification(
            `Thank you ${name}! Your proposal request has been sent. We'll contact you at ${email} within 24 hours.`
          );
          this.reset();
        });

      // Notification System
      function showNotification(message) {
        const existing = document.querySelector(".custom-notification");
        if (existing) existing.remove();

        const notification = document.createElement("div");
        notification.className = "custom-notification";
        notification.innerHTML = `
                <div style="
                    position: fixed;
                    top: 100px;
                    right: 20px;
                    background: var(--primary-color);
                    color: white;
                    padding: 15px 25px;
                    border-radius: 8px;
                    box-shadow: var(--shadow-lg);
                    z-index: 10000;
                    animation: slideIn 0.3s ease;
                    font-weight: 500;
                    max-width: 300px;
                ">
                    <i class="fas fa-check-circle" style="margin-right: 10px;"></i>
                    ${message}
                </div>
            `;

        document.body.appendChild(notification);

        setTimeout(() => {
          notification.style.animation = "slideOut 0.3s ease";
          setTimeout(() => notification.remove(), 300);
        }, 3000);
      }

      // Add notification animation styles
      const notificationStyle = document.createElement("style");
      notificationStyle.textContent = `
            @keyframes slideIn {
                from { transform: translateX(100%); opacity: 0; }
                to { transform: translateX(0); opacity: 1; }
            }
            @keyframes slideOut {
                from { transform: translateX(0); opacity: 1; }
                to { transform: translateX(100%); opacity: 0; }
            }
        `;
      document.head.appendChild(notificationStyle);

      // Close modal when clicking outside
      document
        .getElementById("detailModal")
        .addEventListener("click", function (e) {
          if (e.target === this) {
            closeModal();
          }
        });

      // Close modal with Escape key
      document.addEventListener("keydown", function (e) {
        if (e.key === "Escape") {
          closeModal();
        }
      });

      // Initialize dark mode
      if (localStorage.getItem("darkMode") === "enabled") {
        document.body.classList.add("dark-mode");
        document.getElementById("themeToggle").innerHTML =
          '<i class="fas fa-sun"></i>';
      }

      // Smooth scrolling
      document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener("click", function (e) {
          const targetId = this.getAttribute("href");
          if (targetId === "#") return;

          const targetElement = document.querySelector(targetId);
          if (targetElement) {
            e.preventDefault();
            window.scrollTo({
              top: targetElement.offsetTop - 100,
              behavior: "smooth",
            });
          }
        });
      });



