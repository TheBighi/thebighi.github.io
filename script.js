const cursor = document.querySelector('.cursor-glow');

document.addEventListener('mousemove', (e) => {
cursor.style.transform = `translate(${e.clientX - 20}px, ${e.clientY - 10}px)`;
});
