function clearNumbersRegex(str) {
  return str.replace(/\D/g, "");
}

function getLast4Chars(str) {
  return str.slice(-4); // Extract the last 4 characters
}

setTimeout(mainFun, 1500);

function mainFun() {
  const kappaSpans = document.querySelectorAll('span[title="Χιλιόμετρα"]');

	// Loop through all elements:
	kappaSpans.forEach(span => {
		// Do something with each span element here
		const km = Number(clearNumbersRegex(span.textContent))
		//console.log(km); // Log the text content of each span
	  	  
		// Check if the parent has a previous sibling element that is a span
		const previousSpan = span.previousSibling;

		const date = Number(getLast4Chars(clearNumbersRegex(previousSpan.textContent)));
		// You now have the previous span element:
		//console.log(2024-date);

		if (date==2024){}
		else
		if ((2024-date)*15000 < km) {
			span.style.background = "red";
			span.style.color = "white";
		}
		

	});
}

const observer = new MutationObserver((mutations) => {
  // Your code to re-run
  console.log("HTML changed, re-running script");
  setTimeout(mainFun, 1500);
});

const target = document.querySelector("body"); // Or any specific element
observer.observe(target, { childList: true, subtree: true });