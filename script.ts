interface ContactForm {
    name: string;
    email: string;
    message: string;
}

function validateContactForm(form: ContactForm): string[] {
    const errors: string[] = [];

    if (!form.name || form.name.trim().length === 0) {
        errors.push("El nombre es obligatorio.");
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!form.email || !emailRegex.test(form.email)) {
        errors.push("El correo electrónico no es válido.");
    }

    if (!form.message || form.message.trim().length < 10) {
        errors.push("El mensaje debe tener al menos 10 caracteres.");
    }

    return errors;
}

const contactForm: ContactForm = {
    name: "Eduardo",
    email: "eduardo@example.com",
    message: "Hola, estoy interesado en sus servicios."
};

const validationErrors = validateContactForm(contactForm);

if (validationErrors.length > 0) {
    console.log("Errores de validación:", validationErrors);
} else {
    console.log("Formulario válido. Enviando datos...");
}