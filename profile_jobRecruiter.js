// profile_jobRecruiter.js
document.addEventListener('DOMContentLoaded', function() {
    const profileForm = document.getElementById('profileForm');
    const profileDisplay = document.getElementById('profileDisplay');
    const displayProfileDetails = document.getElementById('displayProfileDetails');
    const editProfileButton = document.getElementById('editProfile');
    const displayLogo = document.getElementById('displayLogo');

    profileForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const formData = new FormData(profileForm);
        const profileData = {};

        for (let pair of formData.entries()) {
            if (pair[0] !== 'Company Logo') {
                profileData[pair[0]] = pair[1];
            }
        }

        // Store Company Logo as Data URL
        const logo = document.getElementById('logo').files[0];
        if (logo) {
            const reader = new FileReader();
            reader.onload = function(e) {
                profileData.logo = e.target.result;
                localStorage.setItem('jobApplicantProfile', JSON.stringify(profileData)); // Store profile
                displayProfile(profileData); // Display profile
            };
            reader.readAsDataURL(logo);
        } else {
            localStorage.setItem('jobApplicantProfile', JSON.stringify(profileData)); // Store profile
            displayProfile(profileData); // Display profile
        }

        // Store Updated Profile Data
        localStorage.setItem('jobApplicantProfile', JSON.stringify(profileData));
        displayProfile(profileData);
    });

    function displayProfile(data) {
        let profileDetails = '';
        for (const key in data) {
            if (key !== 'logo') {
                profileDetails += `<strong>${key}:</strong> ${data[key]}\n`;
            }
        }
        displayProfileDetails.innerHTML = profileDetails;

        if (data.logo) {
            displayLogo.src = data.logo;
            displayLogo.style.display = 'block';
        } else {
            displayLogo.style.display = 'none';
        }

        profileDisplay.style.display = 'block';
        profileForm.style.display = 'none';
        editProfileButton.style.display = 'inline-block';
    }

    editProfileButton.addEventListener('click', function() {
        profileDisplay.style.display = 'none';
        profileForm.style.display = 'block';
        editProfileButton.style.display = 'none';
    });
});