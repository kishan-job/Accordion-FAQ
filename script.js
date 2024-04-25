let faqObject = {
  html: {
    question: "What is HTML?",
    answer:
      "HTML stands for HyperText Markup Language. It's the foundation for creating web pages.  Think of it as the skeleton or blueprint that defines the structure and content of a webpage.",
  },

  css: {
    question: "What is CSS?",
    answer:
      "CSS stands for Cascading Style Sheets. It's a complimentary language to HTML that controls the presentation of a web page.  Imagine HTML providing the structure and content, and CSS acting as the interior designer that makes it visually appealing.",
  },

  javascrip: {
    question: "What is Javascript",
    answer:
      "JavaScript (often abbreviated as JS) is a programming language that breathes life and interactivity into web pages. It's the third layer in the web development cake, alongside HTML (structure and content) and CSS (styling).",
  },
};



let faqContainer = document.querySelector(".faq-container");

function createElements(obj) {
  let div = document.createElement("div");
  div.classList.add("faqDiv");
  faqContainer.appendChild(div);

  let h3 = document.createElement("h3");
  h3.setAttribute("class", "faqh1");
  h3.textContent = obj.question;
  div.append(h3);

  let span = document.createElement("span");
  span.classList.add("btn");
  span.innerText = "+";
  h3.append(span);

  let p = document.createElement("p");
  p.setAttribute("class", "faqP");
  p.textContent = obj.answer;
  div.append(p);
  p.style.display = "none";

  span.addEventListener("click", () => {
    p.style.display === "none"
      ? ((p.style.display = "block"), (span.innerText = "-"))
      : ((p.style.display = "none"), (span.innerText = "+"));
  });


}

window.addEventListener("load", () => {
  for (const property in faqObject) {
    createElements(faqObject[property]);
  }
});
