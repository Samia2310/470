
document.addEventListener('DOMContentLoaded', function() {
    const profileForm = document.getElementById('profileForm');
    const profileDisplay = document.getElementById('profileDisplay');
    const displayProfileDetails = document.getElementById('displayProfileDetails');
    const editProfileButton = document.getElementById('editProfile');
    const displayPassportPicture = document.getElementById('displayPassportPicture');
    const displayCvName = document.getElementById('displayCvName');

    profileForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const formData = new FormData(profileForm);
        const profileData = {};

        for (let pair of formData.entries()) {
            if (pair[0] !== 'passportPicture' && pair[0] !== 'cv') {
                profileData[pair[0]] = pair[1];
            }
        }

        // Store Passport Picture as Data URL
        const passportPicture = document.getElementById('passportPicture').files[0];
        if (passportPicture) {
            const reader = new FileReader();
            reader.onload = function(e) {
                profileData.passportPicture = e.target.result;
                localStorage.setItem('jobApplicantProfile', JSON.stringify(profileData)); // Store profile
                displayProfile(profileData); // Display profile
            };
            reader.readAsDataURL(passportPicture);
        } else {
            localStorage.setItem('jobApplicantProfile', JSON.stringify(profileData)); // Store profile
            displayProfile(profileData); // Display profile
        }

        // Store CV Name
        const cv = document.getElementById('cv').files[0];
        if (cv) {
            profileData.cvName = cv.name;
        }

        // Store Updated Profile Data
        localStorage.setItem('jobApplicantProfile', JSON.stringify(profileData));
        displayProfile(profileData);
    });

    function displayProfile(data) {
        let profileDetails = '';
        for (const key in data) {
            if (key !== 'passportPicture' && key !== 'cvName') {
                profileDetails += `<strong>${key}:</strong> ${data[key]}\n`;
            }
        }
        displayProfileDetails.innerHTML = profileDetails;

        if (data.passportPicture) {
            displayPassportPicture.src = data.passportPicture;
            displayPassportPicture.style.display = 'block';
        } else {
            displayPassportPicture.style.display = 'none';
        }

        if (data.cvName) {
            displayCvName.textContent = data.cvName;
        } else {
            displayCvName.textContent = 'No CV uploaded.';
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