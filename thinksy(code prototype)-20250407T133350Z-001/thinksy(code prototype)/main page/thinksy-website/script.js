// Custom Select Dropdown Logic
document.addEventListener('DOMContentLoaded', function() {
    const selectedSkill = document.getElementById('selected-skill');
    const dropdown = document.getElementById('skill-dropdown');
    const options = document.querySelectorAll('.option');
    
    // Toggle dropdown visibility
    selectedSkill.addEventListener('click', function() {
        dropdown.classList.toggle('hidden');
    });
    
    // Handle option selection
    options.forEach(option => {
        option.addEventListener('click', function() {
            const value = this.getAttribute('data-value');
            selectedSkill.textContent = this.textContent;
            dropdown.classList.add('hidden');
        });
    });
    
    // Close dropdown when clicking outside
    document.addEventListener('click', function(event) {
        if (!event.target.closest('.custom-select')) {
            dropdown.classList.add('hidden');
        }
    });

    // Initialize Radar Chart
    const ctx = document.getElementById('skillRadar').getContext('2d');
    
    const radarChart = new Chart(ctx, {
        type: 'radar',
        data: {
            labels: ['UX', 'Frontend', 'Backend'],
            datasets: [{
                label: 'Skill Proficiency',
                data: [85, 65, 40],
                backgroundColor: 'rgba(108, 92, 231, 0.2)',
                borderColor: 'rgba(108, 92, 231, 1)',
                pointBackgroundColor: 'rgba(108, 92, 231, 1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(108, 92, 231, 1)'
            }]
        },
        options: {
            elements: {
                line: {
                    tension: 0.1
                }
            },
            scales: {
                r: {
                    angleLines: {
                        color: 'rgba(255, 255, 255, 0.1)'
                    },
                    grid: {
                        color: 'rgba(255, 255, 255, 0.1)'
                    },
                    pointLabels: {
                        color: '#b3b3b3',
                        font: {
                            size: 12
                        }
                    },
                    ticks: {
                        backdropColor: 'transparent',
                        color: 'rgba(0, 0, 0, 0)'
                    },
                    suggestedMin: 0,
                    suggestedMax: 100
                }
            },
            plugins: {
                legend: {
                    display: false
                }
            }
        }
    });
});

// Form Submission
document.querySelector('.btn-challenge').addEventListener('click', function() {
    const challengeText = document.querySelector('textarea').value;
    const selectedSkill = document.getElementById('selected-skill').textContent;
    
    if (challengeText.trim() !== '') {
        alert('Challenge posted successfully!');
        // Here you would typically send this data to your backend
        console.log({
            challenge: challengeText,
            skill: selectedSkill
        });
        document.querySelector('textarea').value = '';
    } else {
        alert('Please describe your challenge before posting.');
    }
});

// Sign Up and Login Functionality
document.querySelector('.btn-signup').addEventListener('click', function() {
    // For now, just redirect to a signup page or show a modal
    alert('Sign Up functionality will be implemented here.');
});

document.querySelector('.btn-login').addEventListener('click', function() {
    // For now, just redirect to a login page or show a modal
    alert('Login functionality will be implemented here.');
});

// Get Started Button
document.querySelector('.btn-get-started').addEventListener('click', function() {
    // Scroll to form or redirect to registration page
    document.querySelector('.collab-form').scrollIntoView({ behavior: 'smooth' });
});