
const CoCreateSearch = {
	init: function(container) {
		const mainContainer = container || document;
		
		if (!mainContainer.querySelectorAll) {
			return;
		}

		let search_elements = mainContainer.querySelectorAll('.search-options')
		const self = this;
		search_elements.forEach(element => {
			self.searchEvent(element)
		})
	},
	
	searchEvent: function(element) {
		const self = this;
		element.addEventListener('input', function() {
			self.runSearchOfElement(element, this.value)
		})
	},
	
	runSearchOfElement: function(searchElement, value) {
		const search_id = searchElement.getAttribute('data-search_id')
		const item_selector = searchElement.getAttribute('data-item_selector')
		
		if (!search_id || !item_selector) {
			return;
		}
		
		const items = document.querySelectorAll(`[data-search_id='${search_id}'] ${item_selector}`)

		items.forEach((item) => {
			const textContent = item.innerText
			if (textContent.includes(value)) {
				item.classList.remove('hidden')
			} else {
				item.classList.add('hidden');
			}
		})
	}
}

CoCreateSearch.init();

export default CoCreateSearch;