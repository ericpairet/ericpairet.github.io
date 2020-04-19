function openModal(modal_id, modal_close_id) {
	// display modal
	var modal = document.getElementById(modal_id)
	modal.style.display = "block";

	// get the <span> element that closes the modal
	var span = document.getElementById(modal_close_id);

	// when the user clicks on <span> (x), close the modal
	span.onclick = function() {
		modal.style.display = "none";
	}

	// when the user clicks anywhere outside of the modal, close it
	window.onclick = function(event) {
		if (event.target == modal) {
			modal.style.display = "none";
		}
	}

  // close modal on ESC
  window.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
      modal.style.display = 'none'
    }
  })
}
