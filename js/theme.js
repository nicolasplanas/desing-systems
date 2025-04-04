function setDarkMode() {
    const root = document.documentElement;
    root.style.setProperty('--fundo1', '#171717');
    root.style.setProperty('--fundo2', '#1E1E1E');
    root.style.setProperty('--texto', '#FFFFFF');
    root.style.setProperty('--header','#292929');
    root.style.setProperty('--card','#292929');
    root.style.setProperty('--card2', '#3c3c3c');

    document.getElementById('darkButton').style.display = 'none';
    document.getElementById('lightButton').style.display = 'flex';
    document.getElementById('menuDarkButton').style.display = 'none';
    document.getElementById('menuLightButton').style.display = 'flex';
    document.getElementById('logoDark').style.display = 'flex'
    document.getElementById('logoLight').style.display = 'none'
    document.getElementById('menuDark').style.display = 'flex'
    document.getElementById('menuLight').style.display = 'none'
    document.getElementById('searchDark').style.display = 'flex'
    document.getElementById('searchLight').style.display = 'none'
    document.getElementById('closeDark').style.display = 'none'
    document.getElementById('closeLight').style.display = 'flex'

    localStorage.setItem('theme', 'dark');
    root.classList.add('dark-theme');
}

function setLightMode() {
    const root = document.documentElement;
    root.style.setProperty('--fundo1', '#FFFFFF');
    root.style.setProperty('--fundo2', '#FAFAFA');
    root.style.setProperty('--texto', '#000000');
    root.style.setProperty('--header', '#F8F5FF');
    root.style.setProperty('--card', '#FFFFFF');
    root.style.setProperty('--card2', '#FAFAFA');

    document.getElementById('darkButton').style.display = 'flex';
    document.getElementById('lightButton').style.display = 'none';
    document.getElementById('menuDarkButton').style.display = 'flex';
    document.getElementById('menuLightButton').style.display = 'none';
    document.getElementById('logoDark').style.display = 'none'
    document.getElementById('logoLight').style.display = 'flex'
    document.getElementById('menuDark').style.display = 'none'
    document.getElementById('menuLight').style.display = 'flex'
    document.getElementById('searchDark').style.display = 'none'
    document.getElementById('searchLight').style.display = 'flex'
    document.getElementById('closeDark').style.display = 'flex'
    document.getElementById('closeLight').style.display = 'none'

    localStorage.setItem('theme', 'light');
    root.classList.remove('dark-theme');
}

function loadTheme() {
    const savedTheme = localStorage.getItem('theme');
    
    if (savedTheme === 'dark') {
        setDarkMode();
    } else {
        setLightMode();
    }
}

window.addEventListener('DOMContentLoaded', loadTheme);