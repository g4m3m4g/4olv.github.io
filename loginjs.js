function validateForm() {
            var username = document.getElementById("username").value;
            var password = document.getElementById("password").value;

            // Check if username and password are correct
            if (username === "test" && password === "test1") {
                return true; // Allow form submission
            } else {
                alert("Invalid username or password");
                return false; // Prevent form submission
            }
        }
