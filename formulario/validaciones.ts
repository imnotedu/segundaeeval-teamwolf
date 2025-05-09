document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contactForm') as HTMLFormElement;
    const paymentForm = document.getElementById('paymentForm') as HTMLFormElement;

    const validateEmail = (email: string): boolean => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const validateCardNumber = (cardNumber: string): boolean => {
        const cardRegex = /^\d{16}$/;
        return cardRegex.test(cardNumber.replace(/\s+/g, ''));
    };

    const validateCVV = (cvv: string): boolean => {
        const cvvRegex = /^\d{3}$/;
        return cvvRegex.test(cvv);
    };

    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const email = (document.getElementById('email') as HTMLInputElement).value;
        const name = (document.getElementById('name') as HTMLInputElement).value;
        const comment = (document.getElementById('comment') as HTMLTextAreaElement).value;

        if (!validateEmail(email)) {
            alert('Por favor, ingrese un correo electrónico válido.');
            return;
        }

        if (name.trim() === '') {
            alert('El campo de nombres no puede estar vacío.');
            return;
        }

        if (comment.trim() === '') {
            alert('El campo de comentario no puede estar vacío.');
            return;
        }

        alert('Formulario de contacto enviado con éxito.');
        contactForm.reset();
    });

    paymentForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const service = (document.getElementById('service') as HTMLSelectElement).value;
        const paymentEmail = (document.getElementById('payment_email') as HTMLInputElement).value;
        const cardName = (document.getElementById('card_name') as HTMLInputElement).value;
        const cardNumber = (document.getElementById('card_number') as HTMLInputElement).value;
        const expMonth = (document.getElementById('exp_month') as HTMLSelectElement).value;
        const expYear = (document.getElementById('exp_year') as HTMLSelectElement).value;
        const cvv = (document.getElementById('cvv') as HTMLInputElement).value;

        if (service === '') {
            alert('Por favor, seleccione un servicio.');
            return;
        }

        if (!validateEmail(paymentEmail)) {
            alert('Por favor, ingrese un correo electrónico válido.');
            return;
        }

        if (cardName.trim() === '') {
            alert('El nombre en la tarjeta no puede estar vacío.');
            return;
        }

        if (!validateCardNumber(cardNumber)) {
            alert('Por favor, ingrese un número de tarjeta válido (16 dígitos).');
            return;
        }

        if (expMonth === '' || expYear === '') {
            alert('Por favor, seleccione una fecha de expiración válida.');
            return;
        }

        if (!validateCVV(cvv)) {
            alert('Por favor, ingrese un CVV válido (3 dígitos).');
            return;
        }

        alert('Pago realizado con éxito.');
        paymentForm.reset();
    });
});