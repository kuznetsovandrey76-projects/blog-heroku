document
	.querySelector('.addPost')
	.addEventListener('click', function() {
		document
			.querySelector('.formAdd')
			.classList.toggle("hidden");
});

document
	.querySelector('.container')
	.addEventListener('click', function(event) {
		let action = event.target.getAttribute('class');
		if (action == 'delete') {
			let id = event.target.getAttribute('data-id');
			let url = 'delete/' + id;
			if(confirm('Delete this?')) {
				let httpRequest = new XMLHttpRequest();
				httpRequest.open('DELETE', url);
				httpRequest.send();					
				window.location.href = '/';			
			}	
		}
		if (action == 'edit') {

			let id = event.target.getAttribute('data-id');
			let header = event.target.getAttribute('data-header');
			let description = event.target.getAttribute('data-description');
			let fulltext = event.target.getAttribute('data-fulltext');
			let day = event.target.getAttribute('data-day');
			console.log(day)

			document.querySelector('.formEdit').classList.toggle("hidden");

			document.querySelector('#edit-form-id').value = id;
			document.querySelector('#edit-form-header').value = header;
			document.querySelector('#edit-form-description').value = description;
			document.querySelector('#edit-form-fulltext').value = fulltext;
			document.querySelector('#edit-form-day').value = day;
		}
});

