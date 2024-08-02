window.onload = function() {
    const buttons = document.querySelectorAll('#calcu input[type="button"]');
    const result = document.querySelector('#calcu input[type="text"]');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            if (button.value === 'C') {
                result.value = '';
            } else if (button.value === 'Del') {
                result.value = result.value.slice(0, -1);
            } else if (button.value === '=') {
                try {
                    result.value = eval(result.value);
                } catch (e) {
                    result.value = 'Error';
                }
            } else {
                result.value += button.value;
            }
        });
    });
};
