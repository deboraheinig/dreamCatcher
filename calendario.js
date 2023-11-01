document.addEventListener('DOMContentLoaded', function() {
    const container = document.getElementById('calendario');
    const picker = new Pikaday({
        field: container,
        format: 'DD/MM/YYYY'
    });
});
