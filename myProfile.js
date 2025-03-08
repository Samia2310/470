// myProfile.js
document.addEventListener('DOMContentLoaded', function() {
    const displayProfileDetails = document.getElementById('displayProfileDetails');
    const displayPassportPicture = document.getElementById('displayPassportPicture');
    const deleteProfileButton = document.getElementById('deleteProfileButton');
    const confirmationDialog = document.getElementById('confirmationDialog');
    const confirmDeleteYes = document.getElementById('confirmDeleteYes');
    const confirmDeleteNo = document.getElementById('confirmDeleteNo');
    const myProfileContainer = document.getElementById('myProfileContainer');
    const displayUserType = document.getElementById('displayUserType');

    // Load profile from localStorage
    const savedProfile = localStorage.getItem('jobApplicantProfile');
    if (savedProfile) {
        const profileData = JSON.parse(savedProfile);
        let profileDetails = '';
        for (const key in profileData) {
            if (key !== 'passportPicture' && key !== 'cvName') {
                profileDetails += `<strong>${key}:</strong> ${profileData[key]}\n`;
            }
        }
        displayProfileDetails.innerHTML = profileDetails;

        // Display Passport Picture
        if (profileData.passportPicture) {
            displayPassportPicture.src = profileData.passportPicture;
            displayPassportPicture.style.display = 'block';
        }

        // Show the Delete button
        deleteProfileButton.style.display = 'block';

        // Determine User Type
        const userType = determineUserType(profileData);
        displayUserType.textContent = userType;

    } else {
        displayProfileDetails.textContent = '';
        displayPassportPicture.style.display = 'none';
        deleteProfileButton.style.display = 'none'; // Hide the delete button
        displayUserType.textContent = ''; // Clear user type if no profile
    }

    // Delete Profile functionality
    deleteProfileButton.addEventListener('click', function() {
        confirmationDialog.style.display = 'block';
    });

    confirmDeleteYes.addEventListener('click', function() {
        localStorage.removeItem('jobApplicantProfile');
        displayProfileDetails.textContent = '';
        displayPassportPicture.style.display = 'none';
        deleteProfileButton.style.display = 'none'; // Hide the delete button
        confirmationDialog.style.display = 'none';
        myProfileContainer.style.display = 'none';
        displayUserType.textContent = ''; // Clear user type after deletion
    });

    confirmDeleteNo.addEventListener('click', function() {
        confirmationDialog.style.display = 'none';
    });
});

function determineUserType(profileData) {
    // Implement your logic to determine user type based on profileData
    // This might involve checking specific fields in the profileData
    // For example, you might have a field called 'userType' in the profileData

    // Example:
    if (profileData.userType === 'recruiter') {
        return 'Job Recruiter';
    } else {
        return 'Job Applicant'; 
    }
}