document.addEventListener("DOMContentLoaded", () => {
  const donationForm = document.getElementById("donationForm");
  const requestForm = document.getElementById("requestForm");

  if (donationForm) {
    donationForm.addEventListener("submit", (e) => {
      e.preventDefault();
      alert("Thank you for your donation!");
      donationForm.reset();
    });
  }

  if (requestForm) {
    requestForm.addEventListener("submit", (e) => {
      e.preventDefault();
      alert("Your request has been submitted!");
      requestForm.reset();
    });
  }
});