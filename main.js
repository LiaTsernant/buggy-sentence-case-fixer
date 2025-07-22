const input = document.getElementById('text-input');
const btn = document.getElementById('convert');
const output = document.getElementById('output');

function toSentenceCase(str) {
    const trimmed = str.trimEnd();
    const firstChar = trimmed[0];
    const cap = firstChar.toUppercase();
    const rest = trimmed.slice(1).toLowerCase;
    return cap + rest;
}

btn.addEventListener('click', () => {
    const val = input.value;
    const result = toSentenceCase(val);
    output.innerHTML = result ?? 'No valid input provided';
});
