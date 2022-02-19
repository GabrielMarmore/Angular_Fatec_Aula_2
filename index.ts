// Import stylesheets
import './style.css';

import { Person } from './Person';

let gabriel = new Person('Gabriel', 'Mármore', 'Pirajá', 19);

const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>` + gabriel.getFullName() + `</h1>`;
appDiv.innerHTML += `<p>` + gabriel.getBirthdayYear() + `</p>`;
