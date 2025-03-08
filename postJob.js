document.addEventListener('DOMContentLoaded', function() {
    // Sample Job Data (Replace with your actual data)
    const jobData = {
        jobTitle: "Software Engineer",
        companyName: "Tech Innovations Inc.",
        jobLocation: "San Francisco, CA (Remote Possible)",
        jobDescription: "Develop and maintain web applications. Collaborate with cross-functional teams to deliver high-quality software.",
        skillsRequired: ["JavaScript", "React", "Node.js", "Git"],
        qualifications: "Bachelor's degree in Computer Science or related field.",
        experience: "3+ years of software development experience.",
        salaryRange: "$80,000 - $120,000 per year",
        employmentType: "Full-time",
        jobBenefits: ["Health insurance", "Paid time off", "401k"],
        applicationDeadline: "December 31, 2023",
        howToApply: "Send your resume and cover letter to careers@techinnovations.com",
        contactInformation: "careers@techinnovations.com",
        jobCategory: "Information Technology",
        jobLevel: "Mid-level"
    };

    // Populate the HTML with job data
    document.getElementById('jobTitle').textContent = jobData.jobTitle;
    document.getElementById('companyName').textContent = jobData.companyName;
    document.getElementById('jobLocation').textContent = jobData.jobLocation;
    document.getElementById('jobDescription').textContent = jobData.jobDescription;
    document.getElementById('qualifications').textContent = jobData.qualifications;
    document.getElementById('experience').textContent = jobData.experience;
    document.getElementById('salaryRange').textContent = jobData.salaryRange;
    document.getElementById('employmentType').textContent = jobData.employmentType;
    document.getElementById('applicationDeadline').textContent = jobData.applicationDeadline;
    document.getElementById('howToApply').textContent = jobData.howToApply;
    document.getElementById('contactInformation').textContent = jobData.contactInformation;
    document.getElementById('jobCategory').textContent = jobData.jobCategory;
    document.getElementById('jobLevel').textContent = jobData.jobLevel;

    // Populate skills required list
    const skillsList = document.getElementById('skillsRequired');
    jobData.skillsRequired.forEach(skill => {
        const li = document.createElement('li');
        li.textContent = skill;
        skillsList.appendChild(li);
    });

    // Populate job benefits list
    const benefitsList = document.getElementById('jobBenefits');
    jobData.jobBenefits.forEach(benefit => {
        const li = document.createElement('li');
        li.textContent = benefit;
        benefitsList.appendChild(li);
    });
});